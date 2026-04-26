/**
 * MICROFRONTEND — Event Bus (Comunicación Cross-MFE)
 *
 * En una arquitectura de microfrontends, cada MFE es un dominio
 * independiente que NO debe importar código de otro MFE directamente.
 * La comunicación entre dominios se realiza a través de un canal
 * compartido y agnóstico: el Event Bus.
 *
 * Esta implementación usa la API nativa del navegador (CustomEvent sobre
 * window), lo que garantiza:
 *  - Framework-agnostic: funciona sin importar si el MFE usa React, Vue o Angular
 *  - Cero dependencias: disponible en todos los navegadores modernos
 *  - Desacoplamiento total: el emisor no conoce al receptor
 *
 * Eventos definidos en EVENTS (contrato entre MFEs):
 *
 *  wallet:balance-updated  → Wallet MFE → Shell (actualiza saldo en header)
 *  catalog:product-added   → Vendor MFE → Orders MFE (producto disponible para envío)
 *  order:created           → Orders MFE → Warehouse MFE (nueva orden para picking)
 *  brand:updated           → Vendor MFE → Shell (actualiza nombre de marca)
 *
 * Uso en un MFE emisor:
 *   import { eventBus, EVENTS } from '../../utils/eventBus';
 *   eventBus.emit(EVENTS.WALLET_BALANCE_UPDATED, { balance: 2950000 });
 *
 * Uso en un MFE receptor (dentro de useEffect):
 *   useEffect(() => {
 *     const unsub = eventBus.on(EVENTS.WALLET_BALANCE_UPDATED, ({ detail }) => {
 *       console.log('Nuevo saldo:', detail.balance);
 *     });
 *     return unsub; // cleanup al desmontar
 *   }, []);
 */

// ─────────────────────────────────────────────
// CONTRATO DE EVENTOS — nombres canónicos
// Los MFEs deben usar estas constantes, nunca strings literales
// ─────────────────────────────────────────────
export const EVENTS = {
  /** Wallet MFE → Shell: saldo actualizado después de una recarga */
  WALLET_BALANCE_UPDATED: "mfe:wallet:balance-updated",

  /** Vendor MFE → Orders MFE: producto agregado a Mi Lista */
  CATALOG_PRODUCT_ADDED: "mfe:catalog:product-added",

  /** Orders MFE → Warehouse MFE: nueva orden creada, lista para picking */
  ORDER_CREATED: "mfe:order:created",

  /** Vendor MFE → Shell: nombre de marca blanca actualizado */
  BRAND_UPDATED: "mfe:brand:updated",
};

// ─────────────────────────────────────────────
// EVENT BUS — interfaz de comunicación
// ─────────────────────────────────────────────
export const eventBus = {
  /**
   * Emite un evento a todos los MFEs que lo escuchen.
   * @param {string} eventName - Usar constantes de EVENTS
   * @param {*} data - Payload del evento (serializable)
   */
  emit(eventName, data) {
    window.dispatchEvent(new CustomEvent(eventName, { detail: data }));
  },

  /**
   * Suscribe un handler a un evento.
   * @param {string} eventName - Usar constantes de EVENTS
   * @param {Function} handler - Recibe el CustomEvent; usar event.detail para el payload
   * @returns {Function} Función de cleanup para useEffect return
   */
  on(eventName, handler) {
    window.addEventListener(eventName, handler);
    return () => window.removeEventListener(eventName, handler); // cleanup
  },

  /**
   * Elimina la suscripción a un evento.
   * @param {string} eventName
   * @param {Function} handler
   */
  off(eventName, handler) {
    window.removeEventListener(eventName, handler);
  },
};
