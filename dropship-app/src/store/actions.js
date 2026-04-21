/**
 * FLUX — Capa de Actions
 *
 * Esta capa define DOS elementos del patrón Flux:
 *  1. ACTION_TYPES  — constantes que identifican unívocamente cada acción
 *  2. Action Creators — funciones puras que construyen objetos de acción
 *
 * Las vistas (Views) nunca construyen objetos de acción directamente;
 * siempre invocan un Action Creator, desacoplándose del formato interno.
 *
 * Flujo Flux:
 *   View → actionCreator() → dispatch(action) → Reducer → Store → View
 */

// ─────────────────────────────────────────────
// ACTION TYPES — constantes únicas de acción
// ─────────────────────────────────────────────
export const ACTION_TYPES = {
  TOGGLE_THEME: "TOGGLE_THEME",
  TOGGLE_SIDEBAR: "TOGGLE_SIDEBAR",
  UPDATE_BRAND: "UPDATE_BRAND",
  UPDATE_WALLET: "UPDATE_WALLET",
  CLEAR_NOTIFICATIONS: "CLEAR_NOTIFICATIONS",
};

// ─────────────────────────────────────────────
// ACTION CREATORS — funciones puras
// Retornan siempre un objeto { type, payload? }
// ─────────────────────────────────────────────

/**
 * Alterna entre tema claro y oscuro.
 * Sin payload: el reducer calcula el nuevo valor.
 */
export function toggleTheme() {
  return { type: ACTION_TYPES.TOGGLE_THEME };
}

/**
 * Alterna el estado abierto/cerrado del sidebar.
 * Sin payload: el reducer calcula el nuevo valor.
 */
export function toggleSidebar() {
  return { type: ACTION_TYPES.TOGGLE_SIDEBAR };
}

/**
 * Actualiza los datos de marca del vendedor.
 * @param {{ name?: string, logo?: string, address?: string }} brandData
 */
export function updateBrand(brandData) {
  return { type: ACTION_TYPES.UPDATE_BRAND, payload: brandData };
}

/**
 * Actualiza el saldo de la billetera virtual.
 * @param {{ balance: number, currency?: string }} walletData
 */
export function updateWallet(walletData) {
  return { type: ACTION_TYPES.UPDATE_WALLET, payload: walletData };
}

/**
 * Marca todas las notificaciones como leídas (contador → 0).
 * Sin payload.
 */
export function clearNotifications() {
  return { type: ACTION_TYPES.CLEAR_NOTIFICATIONS };
}
