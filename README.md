# DropShip Pro — Plataforma de Dropshipping White Label

---

## 1. Contexto y Problema Empresarial

### 1.1 Contexto del Mercado

El comercio electrónico en Latinoamérica experimentó un crecimiento del 25% anual entre 2020 y 2025, impulsado por la adopción digital post-pandemia. Dentro de este ecosistema, el modelo de **dropshipping** ha emergido como una alternativa de bajo riesgo para emprendedores que desean vender productos sin inversión en inventario físico. Sin embargo, el mercado latinoamericano presenta desafíos estructurales que las plataformas globales (Oberlo, Spocket) no resuelven:

- **Fragmentación logística**: La infraestructura de envíos varía significativamente entre países y ciudades, requiriendo integración con operadores locales.
- **Desconfianza del comprador**: El consumidor latinoamericano valora la identidad de marca; recibir un paquete de una bodega desconocida genera devoluciones y baja recompra.
- **Informalidad financiera**: Muchos vendedores operan sin acceso a pasarelas internacionales, necesitando soluciones de billetera prepago.

### 1.2 Problema Empresarial Identificado

Los micro y pequeños vendedores de dropshipping enfrentan una **ruptura operativa crítica** entre tres procesos que hoy gestionan manualmente o con herramientas desconectadas:

| Proceso | Dolor actual | Consecuencia |
|---------|-------------|--------------|
| **Selección de productos** | Revisión manual de catálogos de proveedores en hojas de cálculo | Errores de precio, productos descontinuados, márgenes mal calculados |
| **Gestión de envíos** | Copiar/pegar datos del comprador entre WhatsApp y formularios del proveedor | Envíos con datos erróneos, paquetes sin identidad de marca, tiempos de respuesta >24h |
| **Sincronización de inventario** | Sin visibilidad en tiempo real del stock del proveedor | Sobreventa (vender productos agotados), cancelaciones, pérdida de reputación |
| **Control financiero** | Transferencias manuales por cada pedido, sin registro centralizado | Descontrol de márgenes, imposibilidad de escalar, riesgo de pérdida |

Esta desconexión genera un **cuello de botella operativo** que limita al vendedor a procesar ~15 pedidos/día manualmente, cuando el potencial de mercado permitiría 50+.

### 1.3 Solución Propuesta

**DropShip Pro** es una plataforma web SPA (Single Page Application) de **marca blanca (White Label)** que integra en un único panel los cuatro procesos críticos del dropshipping:

```
┌─────────────────────────────────────────────────────────────┐
│                     DROPSHIP PRO                            │
│                                                             │
│  ┌──────────┐  ┌──────────────┐  ┌───────────┐  ┌────────┐│
│  │ Catálogo │→│  Personalizar │→│  Gestión  │→│Billetera││
│  │ Sourcing │  │  Marca Blanca│  │  Pedidos  │  │ Virtual ││
│  └──────────┘  └──────────────┘  └───────────┘  └────────┘│
│       ↕              ↕                ↕             ↕      │
│  ┌─────────────────────────────────────────────────────────┐│
│  │         BODEGA — Stock en Tiempo Real                   ││
│  │         Picking & Packing con Etiqueta del Vendedor     ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

**Propuesta de valor diferencial:**
- El comprador final **nunca ve** los datos de la bodega; todo el paquete lleva la identidad visual del vendedor.
- La **calculadora de márgenes** integrada elimina errores de pricing.
- La **billetera prepago** permite despachos automáticos sin intervención manual por cada pedido.
- Las **alertas de stock bajo** previenen la sobreventa antes de que ocurra.

### 1.4 Público Objetivo

| Segmento | Perfil | Necesidad principal |
|----------|--------|---------------------|
| **Vendedores emprendedores** | Personas de 20-40 años que venden por redes sociales (Instagram, TikTok) sin tienda propia | Simplicidad operativa, marca profesional, bajo costo de entrada |
| **Micro-empresas e-commerce** | Negocios con 1-5 empleados que ya tienen tienda online pero buscan ampliar catálogo sin inventario | Integración con su marca existente, márgenes transparentes, escalabilidad |
| **Operadores de bodega** | Proveedores/bodegas que quieren ofrecer servicio de fulfillment white label | Gestión de pedidos entrantes, picking eficiente, sincronización de stock |

### 1.5 Análisis Estratégico

**Modelo de negocio**: La plataforma genera ingresos por comisión (5%) sobre cada transacción + fees de fulfillment, alineando el éxito de la plataforma con el del vendedor.

**Ventaja competitiva (VRIO)**:

| Recurso | Valioso | Raro | Inimitable | Organizado | Resultado |
|---------|---------|------|------------|------------|-----------|
| Marca blanca nativa | ✅ | ✅ | ⬜ | ✅ | Ventaja temporal |
| Billetera prepago integrada | ✅ | ✅ | ✅ | ✅ | **Ventaja sostenible** |
| UX mobile-first en español | ✅ | ✅ | ⬜ | ✅ | Ventaja temporal |
| Stock real-time + alertas | ✅ | ⬜ | ⬜ | ✅ | Paridad competitiva |

**Tipo de aplicación**: SPA (Single Page Application) — justificada porque:
- Los vendedores trabajan en **sesiones prolongadas** (minutos a horas) gestionando múltiples pedidos.
- La **navegación entre módulos es frecuente** (catálogo → lista → envío → pedidos).
- El **estado global** (saldo de billetera, lista de productos, tema) se preserva entre vistas.
- La **carga inicial única** evita tiempos de espera en cada pantalla, crítico para usuarios con conectividad irregular.

---

## 2. Descripción General

Plataforma web SPA para vendedores de dropshipping con marca blanca, desarrollada con **React + Vite**. Permite a los vendedores explorar un catálogo, personalizar su marca, gestionar pedidos, controlar inventario y administrar una billetera virtual.

## 3. Módulos Implementados

### 3.1 Panel del Vendedor
- **Dashboard**: Métricas KPI (ventas, pedidos, margen), pedidos recientes, actividad
- **Catálogo Sourcing**: Explorador de productos con filtros, búsqueda, rating
- **Mi Lista**: Productos seleccionados por el vendedor para su inventario virtual
- **Personalización de Marca**: Logo, nombre comercial, dirección de remitente

### 3.2 Gestión de Pedidos y Envíos
- **Mis Pedidos**: Tabla con estados (Pendiente → Procesando → En Tránsito → Entregado)
- **Nuevo Envío**: Wizard multi-paso (Producto → Datos Comprador → Despacho)
- **Programación de Despacho**: Inmediato o fecha programada
- **Calculadora de Márgenes**: Costo base, precio venta, comisiones, utilidad neta

### 3.3 Inventario y Bodega (Admin)
- **Inventario**: Tabla con SKU, stock, niveles, barras visuales, alertas de reabastecimiento
- **Picking & Packing**: Interfaz para empacar pedidos con etiqueta del vendedor

### 3.4 Pagos y Billetera Virtual
- **Saldo**: Balance en tiempo real con recarga rápida
- **Historial**: Transacciones de recargas y pagos de órdenes

## 4. Justificación del Framework: React

### 4.1 Comparativa Técnica — React vs Angular vs Vue

Se evaluaron los tres frameworks líderes del mercado bajo criterios específicos para una plataforma de dropshipping white label:

| Criterio | React 19 | Angular 17 | Vue 3 | **Relevancia para DropShip Pro** |
|----------|----------|-------------|-------|----------------------------------|
| **Curva de aprendizaje** | Baja-media | Alta (TypeScript obligatorio, decoradores, modules, DI) | Baja | El equipo emprendedor típico de dropshipping no tiene devs senior; React permite onboarding rápido |
| **Arquitectura** | Librería + composición libre | Framework opinionado (monolítico) | Framework progresivo | Necesitamos flexibilidad para crecer módulo a módulo sin overhead inicial |
| **Rendering model** | Virtual DOM + Fiber reconciler | Zone.js + change detection | Proxy-based reactivity | Virtual DOM de React es predecible con muchos componentes dinámicos (catálogo, tablas, formularios) |
| **Bundle size (min+gzip)** | ~44 KB | ~130 KB | ~33 KB | SPA con carga inicial única; importa pero no es bloqueante. React equilibra tamaño y ecosistema |
| **Ecosistema y comunidad** | 1º npm (20M+ descargas/semana) | 3º | 2º | Mayor disponibilidad de librerías para: routing, iconos, formularios, PDF generation, charts |
| **Estado global** | Context API + useReducer nativo | RxJS + Services (complejo) | Pinia (excelente, pero ecosistema menor) | Context + useReducer cubre el caso sin dependencias externas; patrón Redux-like sin Redux |
| **Integración con Vite** | Nativa (plugin oficial) | Parcial (Angular CLI propio) | Nativa | Vite 8 ofrece HMR instantáneo con React; Angular requiere su propio CLI con rebuild más lento |
| **Código reutilizable** | Hooks composables | Services + DI | Composables | Custom hooks permiten extraer lógica de negocio (useWallet, useOrders) sin acoplamiento a UI |
| **Testing** | Vitest + RTL (ligero) | Karma/Jasmine (pesado) o Jest | Vitest + VTU | React Testing Library promueve tests centrados en el usuario, alineado con enfoque UX |
| **Contratación en LATAM** | Alta demanda | Media | Baja-media | 68% de ofertas frontend en LATAM piden React (según encuestas regionales 2025) |

### 4.2 Criterios Técnicos de Selección

**1. Composición basada en componentes funcionales**

React permite construir cada módulo como un árbol de componentes puros con estado local (`useState`) o compartido (`useContext`). En DropShip Pro esto se traduce en:

```
<Layout>                         → Sidebar + Header (estado global: tema, wallet)
  <Catalog>                      → Estado local: filtros, búsqueda
    <ProductCard>                → Presentacional puro
      <MarginCalculator>         → Modal con lógica de cálculo aislada
  <Shipping>                     → Wizard multi-paso con estado local por step
```

Cada componente es **testeable de forma aislada** y **reemplazable** sin afectar otros módulos.

**2. Unidirectional data flow (flujo de datos unidireccional)**

React fuerza un flujo `props ↓ + callbacks ↑` que previene mutaciones accidentales del estado. En una plataforma financiera (billetera, transacciones), esto es crítico:

```
AppContext (wallet.balance)
    ↓ props
  Header (muestra saldo)
  Wallet (permite recargar)
    ↑ dispatch({ type: 'UPDATE_WALLET' })
```

Angular con two-way binding (`[(ngModel)]`) introduce riesgo de side-effects no rastreables en componentes con datos financieros.

**3. Hook pattern para lógica de negocio reutilizable**

Los hooks de React permiten encapsular lógica sin crear clases ni servicios inyectados:

```jsx
// Ejemplo conceptual: lógica de márgenes extraíble como hook
function useMarginCalculator(costPrice) {
  const [salePrice, setSalePrice] = useState(0)
  const commission = Math.round(salePrice * 0.05)
  const netProfit = salePrice - costPrice - commission
  const margin = salePrice > 0 ? Math.round((netProfit / salePrice) * 100) : 0
  return { salePrice, setSalePrice, commission, netProfit, margin }
}
```

Esto fomenta la **separación de concerns** sin el boilerplate de Angular (service + module + provider + inject).

### 4.3 Criterios Arquitectónicos

| Decisión arquitectónica | Implementación en React | Alternativa Angular/Vue |
|------------------------|------------------------|------------------------|
| **Routing declarativo** | `<Route path="catalogo" element={<Catalog />} />` — mapeo 1:1 ruta-componente, lazy-load trivial | Angular: RouterModule con config separada + guards como classes. Vue: similar a React pero menor ecosistema de middleware |
| **Estado global ligero** | `Context + useReducer` — 55 líneas en `AppContext.jsx`, cero dependencias | Angular: RxJS + BehaviorSubject (~200 líneas, curva de aprendizaje de Observables). Vue: Pinia (comparable pero ecosistema menor) |
| **Theming (dark mode)** | CSS custom properties + `data-theme` attribute toggled por React state | Framework-agnóstico, pero React lo integra limpiamente con un `dispatch('TOGGLE_THEME')` |
| **Code splitting** | `React.lazy()` + `Suspense` — split por ruta, nativo | Angular: lazy modules (más verbose). Vue: `defineAsyncComponent` (comparable) |

### 4.4 Criterios de Mantenibilidad

**Estructura predecible por convención:**
```
src/pages/[Módulo]/
  ├── Módulo.jsx     → Componente principal (lógica + render)
  └── Módulo.css     → Estilos co-ubicados (fácil de encontrar, modificar, eliminar)
```

Cada módulo es **auto-contenido**: eliminar la carpeta `pages/Wallet/` elimina 100% del código de billetera sin efectos colaterales en otros módulos.

**Escalabilidad progresiva:**

| Etapa del producto | Complejidad | Solución en React |
|-------------------|-------------|-------------------|
| MVP (actual) | 9 vistas, 1 contexto | Context + useReducer |
| Crecimiento | 20+ vistas, API real | React Query para server state + Context para UI state |
| Empresa | Multi-tenant, i18n, analytics | Zustand/Redux Toolkit + React Router loaders + Suspense boundaries |

React **no impone** arquitectura de enterprise en el día 1, pero **permite escalar** sin reescritura. Angular impone la complejidad de enterprise desde el inicio (módulos, DI, decoradores), innecesaria para un MVP.

### 4.5 Conclusión

React fue seleccionado porque:
1. **Técnicamente** ofrece el mejor equilibrio tamaño/ecosistema para una SPA con múltiples módulos dinámicos.
2. **Arquitectónicamente** su flujo unidireccional y hooks garantizan predictibilidad en módulos financieros (billetera, transacciones).
3. **En mantenibilidad** su estructura modular permite crecer de MVP a plataforma enterprise sin reescritura, con la mayor disponibilidad de talento en LATAM.

---

## 5. Diseño UX/UI y Aplicación de Leyes Cognitivas

### 5.1 Sistema de Diseño — Design Tokens

Todos los valores visuales están centralizados en **CSS Custom Properties** dentro de [`global.css`](dropship-app/src/styles/global.css), funcionando como **design tokens** que garantizan consistencia en las 9 vistas de la aplicación:

| Categoría | Tokens | Ejemplo | Propósito |
|-----------|--------|---------|-----------|
| **Color — Semánticos** | 10 tokens | `--color-primary: #6366f1` · `--color-danger: #ef4444` | Identidad de marca + comunicación de estado |
| **Color — Superficies** | 7 tokens | `--color-surface` · `--color-border` · `--color-text-secondary` | Capas de profundidad visual |
| **Espaciado** | 6 tokens | `--space-xs` (4px) → `--space-2xl` (48px) | Escala consistente de 4px base |
| **Tipografía** | 7 tokens | `--font-size-xs` (12px) → `--font-size-3xl` (30px) | Jerarquía de lectura predecible |
| **Radio de borde** | 4 tokens | `--radius-sm` → `--radius-xl` | Suavidad visual consistente |
| **Sombras** | 3 tokens | `--shadow-sm` → `--shadow-lg` | Profundidad y elevación |
| **Transiciones** | 2 tokens | `--transition-fast` (150ms) · `--transition-base` (250ms) | Animaciones perceptualmente consistentes |

**Modo oscuro** implementado mediante `[data-theme="dark"]` que sobreescribe los tokens de superficie y texto — un solo toggle afecta toda la app porque cada componente referencia los tokens, nunca colores literales.

### 5.2 Jerarquía Visual

La jerarquía se construye en 4 niveles, cada uno con un rol perceptual claro:

```
Nivel 1 — ESCANEO RÁPIDO (KPIs del Dashboard)
┌──────────────────────────────────────────────────┐
│  💰 $2.340.000    📦 23 Pedidos    📊 62% Margen │  ← font-size-2xl + font-weight-700
│  Ventas del mes    Activos hoy      Promedio     │  ← font-size-sm + color-text-secondary
│  +12.5% ↑          +3 hoy ↑        +2.1% ↑      │  ← font-size-xs + color-success/danger
└──────────────────────────────────────────────────┘

Nivel 2 — LECTURA DIRIGIDA (Tablas de pedidos/inventario)
┌──────┬─────────────────┬──────────┬──────────────┐
│ ID   │ Producto         │ Estado   │ Monto        │  ← Columnas con th en UPPERCASE xs
│ 001  │ Lámpara LED      │ 🟢 Entr │ $89.900      │  ← Badges de color semántico
└──────┴─────────────────┴──────────┴──────────────┘

Nivel 3 — EXPLORACIÓN (Catálogo de productos)
┌────────────────┐  Categoría en PRIMARY + UPPERCASE xs
│    💡 (48px)    │  Nombre en font-weight-600
│  Costo → Precio│  Precios con color-secondary (verde)
│  [Agregar] [Calc]│  CTAs con jerarquía primary/secondary
└────────────────┘

Nivel 4 — CONTEXTUAL (Actividad, notificaciones, tooltips)
  → font-size-xs + color-text-muted
```

### 5.3 Accesibilidad (a11y)

| Práctica implementada | Archivo | Ejemplo concreto |
|----------------------|---------|-------------------|
| **Labels semánticos** | `Layout.jsx` | `<nav aria-label="Navegación principal">` |
| **Botones con aria-label** | `Layout.jsx` | `<button aria-label="Toggle sidebar">`, `<button aria-label="Cambiar tema">` |
| **Roles y landmark** | `Layout.jsx` | `<aside>` como sidebar, `<header>` semántico, `<main>` para contenido |
| **Alertas accesibles** | `Inventory.jsx` | `<div role="alert">` en alertas de stock bajo |
| **Labels de formulario** | `Brand.jsx`, `Shipping.jsx` | `<label htmlFor="brandName">` vinculado a `<input id="brandName">` |
| **Contraste de color** | `global.css` | Texto `#0f172a` sobre fondo `#f8fafc` = ratio 15.4:1 (WCAG AAA) |
| **Focus visible** | `Catalog.css` | `input:focus { box-shadow: 0 0 0 3px var(--color-primary-light) }` — anillo de foco visible |
| **Textos alternativos** | Dashboard | Badges de estado con texto legible (`Entregado`, `Pendiente`), no solo color |

### 5.4 Leyes Cognitivas Aplicadas

---

#### LEY 1: Ley de Hick — *El tiempo de decisión aumenta con el número de opciones*

> *"El tiempo que toma tomar una decisión aumenta logarítmicamente con el número y complejidad de las opciones."* — William Edmund Hick, 1952

**Problema UX:** El catálogo tiene 12+ productos que el vendedor debe evaluar. Sin estructura, el usuario se paraliza ante demasiadas opciones simultáneas.

**Aplicación en DropShip Pro:**

| Técnica | Implementación | Archivo |
|---------|---------------|---------|
| **Filtros por categoría** | Chips de categoría (`Todos`, `Hogar`, `Tecnología`...) que reducen la vista a 2-4 productos por categoría | `Catalog.jsx` — `filter-chip` |
| **Búsqueda incremental** | Input de búsqueda que filtra en tiempo real conforme se escribe, reduciendo opciones progresivamente | `Catalog.jsx` — `catalog__search` |
| **Wizard de envío en 3 pasos** | En vez de un formulario largo con 8+ campos, se divide en: (1) Producto → (2) Datos Comprador → (3) Despacho | `Shipping.jsx` — `STEPS[]` |

**Evidencia en código:**
```jsx
// Shipping.jsx — Wizard divide la decisión en 3 micro-decisiones
const STEPS = ['Producto', 'Datos del Comprador', 'Despacho']
// El usuario solo ve los campos de UN paso a la vez
```

```css
/* Shipping.css — Indicador visual del progreso: step--active, step--done */
.step--active { color: var(--color-primary); font-weight: 600; }
.step--done   { color: var(--color-secondary); }
```

**Resultado:** El vendedor nunca enfrenta más de 3-4 decisiones simultáneas en cualquier pantalla.

---

#### LEY 2: Ley de Proximidad de Gestalt — *Los elementos cercanos se perciben como relacionados*

> *"Los objetos que están cerca unos de otros tienden a ser percibidos como un grupo."* — Max Wertheimer, 1923

**Problema UX:** El Dashboard muestra KPIs, pedidos recientes y actividad. Sin agrupación perceptual, el usuario no distingue qué datos van juntos.

**Aplicación en DropShip Pro:**

| Agrupación | Elementos | Separación | Archivo |
|------------|-----------|------------|---------|
| **KPIs como banda horizontal** | 4 tarjetas con icono+valor+cambio | `gap: var(--space-md)` entre tarjetas, `gap: var(--space-xl)` respecto al contenido siguiente | `Dashboard.css` — `.dashboard__kpis` |
| **Sidebar: secciones agrupadas** | Links agrupados por función (`Vendedor`, `Pedidos`, `Bodega`, `Finanzas`) con título de sección y espaciado mayor entre grupos | `.sidebar__section-title` con `padding-top: var(--space-lg)` | `Layout.css` |
| **Product card: info co-ubicada** | Precio + margen + costo dentro del mismo bloque visual con `gap: var(--space-sm)` | `product-card__prices` y `product-card__meta` | `Catalog.css` |
| **Picking card: datos en línea** | ID orden + producto + datos comprador + marca + estado en una fila con gap consistente | `.picking-card { gap: var(--space-lg) }` | `Inventory.css` |

**Evidencia en código:**
```css
/* Layout.css — Espaciado mayor ENTRE secciones vs DENTRO de secciones*/
.sidebar__section-title {
  padding: var(--space-lg) var(--space-xl) var(--space-sm); /* ↑ 24px arriba, ↓ 8px abajo */
}
.sidebar__link {
  padding: var(--space-sm) var(--space-xl);                 /* Solo 8px vertical entre links */
}
/* La diferencia 24px vs 8px crea grupos perceptuales sin líneas divisorias */
```

**Resultado:** El usuario identifica inmediatamente 4 grupos funcionales en el sidebar sin necesidad de etiquetas explícitas (que igualmente se incluyen como refuerzo).

---

#### LEY 3: Ley de Fitts — *El tiempo para alcanzar un objetivo depende de su tamaño y distancia*

> *"El tiempo requerido para moverse rápidamente hacia un área objetivo es función de la distancia al objetivo y el tamaño del objetivo."* — Paul Fitts, 1954

**Problema UX:** Los CTAs principales (Agregar producto, Crear envío, Recargar billetera) deben ser fáciles de alcanzar y clickear, especialmente en mobile.

**Aplicación en DropShip Pro:**

| Elemento | Técnica de Fitts | Implementación |
|----------|-----------------|----------------|
| **Botón "Recargar"** | Full-width en su contenedor — el usuario no puede "fallar" el click | `.btn--full { width: 100% }` en `Wallet.jsx` |
| **Chips de recarga** | Áreas amplias (padding: space-md = 16px) con grid de 3 columnas, fáciles de tocar en móvil | `.recharge-btn { padding: var(--space-md) }` en `Wallet.css` |
| **Sidebar links** | `padding: var(--space-sm) var(--space-xl)` = 8px×32px — área de click que abarca toda la fila, no solo el texto | `Layout.css` — `.sidebar__link` |
| **Product card CTA** | Botones en el footer de la tarjeta (zona inferior) — el patrón F de lectura termina ahí | `.product-card__footer` — botones `Agregar` y `Calcular` |
| **Botón "Nuevo Envío"** | Posicionado como primera acción en la vista de Pedidos, sin scroll necesario | `Orders.jsx` — antes de la tabla |

**Evidencia en código:**
```css
/* Wallet.css — Target áreas grandes para Ley de Fitts */
.recharge-btn {
  padding: var(--space-md);         /* 16px en todas las direcciones */
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  /* Área clickeable grande + feedback visual en hover */
}
.recharge-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}
```

**Resultado:** Las acciones de mayor impacto financiero (recargar, pagar, enviar) tienen las áreas de interacción más grandes de la interfaz.

---

#### LEY 4: Ley de Jakob — *Los usuarios pasan más tiempo en otros sitios y prefieren patrones familiares*

> *"Los usuarios pasan la mayor parte de su tiempo en otros sitios web. Esto significa que prefieren que tu sitio funcione igual que los demás."* — Jakob Nielsen

**Problema UX:** Los vendedores de dropshipping ya usan plataformas como Shopify, MercadoLibre o CJDropshipping. Si la UI rompe convenciones, aumenta la fricción.

**Aplicación en DropShip Pro:**

| Convención familiar | Referencia conocida | Implementación en DropShip Pro |
|--------------------|--------------------|---------------------------------|
| **Sidebar izquierdo fijo** | Shopify Admin, Google Analytics, Notion | `Layout.jsx` — sidebar de 260px con logo + nav + user footer |
| **Header con saldo visible** | MercadoLibre (saldo vendedor), billeteras digitales | `Header` — chip de saldo con icono Wallet siempre visible |
| **Tabla de pedidos con badges** | Shopify Orders, Amazon Seller Central | `Orders.jsx` — badges de colores semánticos (verde=entregado, amarillo=pendiente) |
| **Cards de producto con imagen+precio+CTA** | MercadoLibre, Amazon, AliExpress | `Catalog.jsx` — `product-card` con imagen, precio, rating, botón agregar |
| **Wizard con pasos numerados** | Checkout de cualquier e-commerce | `Shipping.jsx` — 3 pasos con indicador visual (número + color + check) |
| **Toast de confirmación** | Gmail, Slack, Notion | `Brand.jsx`, `Wallet.jsx` — toast verde con animación `slideIn` |

**Resultado:** Un vendedor que ya usa Shopify o MercadoLibre puede operar DropShip Pro en su primera sesión sin tutorial.

---

#### LEY 5: Ley de Miller — *La memoria de trabajo retiene 7 ± 2 elementos*

> *"La capacidad de procesamiento consciente está limitada a aproximadamente 7 (± 2) chunks de información."* — George A. Miller, 1956

**Problema UX:** El catálogo tiene 12 productos, el inventario 10 ítems, el sidebar tiene 9 links. ¿Cómo evitar sobrecarga cognitiva?

**Aplicación en DropShip Pro:**

| Implementación | Cantidad | Estrategia de chunking |
|---------------|----------|----------------------|
| **Sidebar** | 9 links → **4 grupos** (Vendedor, Pedidos, Bodega, Finanzas) | Agrupación semántica: el usuario memoriza 4 categorías, no 9 ítems |
| **KPIs del Dashboard** | Exactamente **4 métricas** | Dentro del rango 7±2, cada una con icono diferenciador de color |
| **Categorías del catálogo** | **7 categorías** incluyendo "Todos" | Exactamente en el límite de Miller — el usuario puede escanearlas todas |
| **Tabla de pedidos** | 5 columnas visibles (ID, Producto, Estado, Guía, Monto) | Información de comprador colapsada en sub-texto, no en columna propia |
| **Steps del wizard** | **3 pasos** | Muy por debajo del límite — el usuario retiene todo el flujo en mente |

**Evidencia en código:**
```jsx
// Layout.jsx — 4 secciones (no 9 links sueltos)
const NAV_SECTIONS = [
  { title: 'Vendedor',  links: [/* 4 links */] },
  { title: 'Pedidos',   links: [/* 2 links */] },
  { title: 'Bodega',    links: [/* 2 links */] },
  { title: 'Finanzas',  links: [/* 1 link  */] },
]
// 4 chunks, no 9 items individuales
```

**Resultado:** Ninguna vista de la aplicación presenta más de 7 elementos de navegación o decisión al mismo tiempo.

---

### 5.5 Resumen de Leyes UX Aplicadas

| # | Ley | Dónde se aplica | Efecto |
|---|-----|-----------------|--------|
| 1 | **Hick** | Filtros catálogo, wizard 3 pasos, búsqueda incremental | Reduce opciones simultáneas a ≤4 |
| 2 | **Gestalt (Proximidad)** | KPIs agrupados, sidebar por secciones, info co-ubicada en cards | Percepción de grupos sin líneas explícitas |
| 3 | **Fitts** | Botón recarga full-width, sidebar full-row click, CTAs en zona inferior | Acciones críticas → targets grandes |
| 4 | **Jakob** | Sidebar fijo, tabla con badges, cards e-commerce, wizard con steps | Familiaridad = cero curva de aprendizaje |
| 5 | **Miller** | 4 KPIs, 4 nav groups, 7 categorías, 3 steps | Nunca >7 elementos cognitivos por vista |

---

## 6. Gestión de Estado y Estructura Arquitectónica

### 6.1 Diagrama de Arquitectura General

```
┌─────────────────────────────────────────────────────────────────────┐
│                        NAVEGADOR (SPA)                              │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │                    React Router DOM                           │   │
│  │   BrowserRouter → Routes → Route (Layout) → Route (Page)     │   │
│  └────────────────────────┬─────────────────────────────────────┘   │
│                           │                                         │
│  ┌────────────────────────▼─────────────────────────────────────┐   │
│  │               AppProvider (Context + useReducer)              │   │
│  │                                                               │   │
│  │   state: { theme, sidebarOpen, user, wallet, notifications } │   │
│  │   dispatch: (action) → appReducer → newState                  │   │
│  │                                                               │   │
│  └──┬──────────┬──────────┬──────────┬──────────┬───────────────┘   │
│     │          │          │          │          │                    │
│  ┌──▼──┐  ┌───▼──┐  ┌───▼───┐  ┌──▼───┐  ┌──▼────┐               │
│  │Layout│  │Dashb.│  │Catalog│  │Orders│  │Wallet │  ...pages      │
│  │      │  │      │  │      │  │      │  │       │               │
│  │global│  │ read │  │local │  │ read │  │read + │               │
│  │state │  │ only │  │state │  │ only │  │write  │               │
│  └──────┘  └──────┘  └──────┘  └──────┘  └───────┘               │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │                    Capa de Datos (Mock)                        │   │
│  │   data/mockData.js — PRODUCTS, ORDERS, WAREHOUSE, TRANSACTIONS│   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │                    Capa de Utilidades                          │   │
│  │   utils/helpers.js — formatCurrency, formatDate, classNames   │   │
│  └──────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
```

### 6.2 Esquema de Gestión de Estado

La aplicación distingue **dos tipos de estado** con estrategias diferentes, evitando un store monolítico innecesario:

#### Estado Global (Context + useReducer)

Estado que **múltiples componentes en diferentes rutas** necesitan leer o modificar:

```
┌─────────────────────── AppContext ───────────────────────┐
│                                                          │
│  initialState = {                                        │
│    theme: 'light'          ← Layout, Header (toggle)    │
│    sidebarOpen: true       ← Layout, Header (toggle)    │
│    user: {                                               │
│      name, email, role     ← Header, Sidebar (display)  │
│      brand: {                                            │
│        name, logo, address ← Brand (write), Picking     │
│      }                        (read etiqueta)            │
│    }                                                     │
│    wallet: {                                             │
│      balance, currency     ← Header (display),          │
│    }                          Wallet (write),            │
│                               Shipping (validar saldo)   │
│    notifications: 3        ← Header badge (read+clear)  │
│  }                                                       │
│                                                          │
│  dispatch(action) ──→ appReducer ──→ nuevo estado        │
└──────────────────────────────────────────────────────────┘
```

**¿Por qué Context + useReducer y no Redux/Zustand?**

| Criterio | Context + useReducer | Redux Toolkit | Zustand |
|----------|---------------------|---------------|---------|
| Dependencias externas | **0** (nativo de React) | 2 paquetes (~12 KB) | 1 paquete (~1 KB) |
| Boilerplate | 55 líneas (`AppContext.jsx`) | ~120 líneas (slice + store + provider) | ~40 líneas |
| Devtools | React DevTools nativo | Redux DevTools (excelente) | Plugin separado |
| Re-renders | Todo el árbol bajo Provider | Selectores granulares | Selectores granulares |
| **Adecuado para este MVP** | **✅ Sí** — 5 propiedades, 5 actions, 9 vistas | Sobredimensionado | Viable pero innecesario |

**Decisión:** Con solo **5 propiedades de estado** y **5 acciones**, Context + useReducer es la solución correcta. El re-render de todo el árbol es insignificante con este volumen de estado.

#### Estado Local (useState por componente)

Estado que **solo un componente y sus hijos** necesitan — efímero, no persistente entre rutas:

```
┌─ Catalog.jsx ─────────────────────────────┐
│  search: ''           ← input de búsqueda │
│  category: 'Todos'    ← filtro activo     │
│  myList: [1, 2, 4]    ← IDs seleccionados │
│  calcProduct: null     ← modal abierto?   │
│  salePrice: ''        ← input calculadora │
└───────────────────────────────────────────┘

┌─ Shipping.jsx ────────────────────────────┐
│  step: 0              ← paso del wizard   │
│  selectedProduct: ''  ← producto elegido  │
│  schedule: 'inmedia.' ← tipo de despacho  │
│  buyerData: { name,   ← formulario        │
│    address, city,                          │
│    phone, notes }                          │
│  submitted: false     ← estado final      │
└───────────────────────────────────────────┘

┌─ Wallet.jsx ──────────────────────────────┐
│  selectedAmount: null ← monto a recargar  │
│  showToast: false     ← feedback visual   │
└───────────────────────────────────────────┘

┌─ Picking.jsx ─────────────────────────────┐
│  completedIds: []     ← pedidos empacados │
└───────────────────────────────────────────┘
```

### 6.3 Flujo de Datos — Diagrama de Acciones

```
     USUARIO                    COMPONENTE                    ESTADO
     ──────                    ──────────                    ──────

  Click "☀️/🌙"  ──→  Header                    
                       dispatch({ type:        ──→  appReducer
                         'TOGGLE_THEME'              theme: 'dark'
                       })                       ──→  [data-theme] cambia
                                                ──→  CSS vars se actualizan
                                                ──→  TODA la app re-renderiza
                                                     con nuevo tema

  Click "Recargar    Wallet.jsx
  $500.000"          1. setSelectedAmount(500k)  ──→  estado LOCAL
                     2. click "Recargar"
                     3. dispatch({               ──→  appReducer
                          type: 'UPDATE_WALLET',      wallet.balance += 500k
                          payload: { balance }   ──→  Header re-renderiza
                        })                            (nuevo saldo visible)
                     4. setShowToast(true)       ──→  estado LOCAL (toast)

  Guardar marca      Brand.jsx
                     1. handleSave(e)
                     2. dispatch({               ──→  appReducer
                          type: 'UPDATE_BRAND',       user.brand.name = X
                          payload: { name, addr }──→  Picking lee nuevo
                        })                            nombre de marca
                     3. setShowToast(true)       ──→  estado LOCAL

  Buscar producto    Catalog.jsx
  "lámpara"          setSearch('lámpara')        ──→  estado LOCAL
                     filtered = PRODUCTS.filter  ──→  re-render solo
                       (match search + category)      este componente
```

### 6.4 Diagrama de Componentes y Dependencias de Estado

```
App.jsx
 │
 ├─ AppProvider ·············· ESTADO GLOBAL (Context)
 │   │
 │   └─ Routes
 │       │
 │       └─ Layout ·········· LEE: theme, sidebarOpen, user, wallet, notifications
 │           │                ESCRIBE: TOGGLE_THEME, TOGGLE_SIDEBAR, CLEAR_NOTIFICATIONS
 │           │
 │           ├─ Dashboard ··· LEE: (solo datos mock) — sin estado propio relevante
 │           │
 │           ├─ Catalog ····· LOCAL: search, category, myList, calcProduct, salePrice
 │           │                GLOBAL: ninguno (autosuficiente con mock data)
 │           │
 │           ├─ MyList ······ LOCAL: listIds[]
 │           │                GLOBAL: ninguno
 │           │
 │           ├─ Brand ······· LOCAL: brandName, brandAddress, showToast
 │           │                GLOBAL ESCRIBE: UPDATE_BRAND
 │           │
 │           ├─ Orders ······ LEE: (solo datos mock) — presentacional
 │           │
 │           ├─ Shipping ···· LOCAL: step, selectedProduct, schedule, buyerData, submitted
 │           │                GLOBAL LEE: user.brand (vista previa etiqueta)
 │           │
 │           ├─ Inventory ··· LEE: (solo datos mock) — presentacional
 │           │
 │           ├─ Picking ····· LOCAL: completedIds[]
 │           │                GLOBAL LEE: user.brand.name (etiqueta)
 │           │
 │           └─ Wallet ······ LOCAL: selectedAmount, showToast
 │                            GLOBAL LEE + ESCRIBE: wallet.balance (UPDATE_WALLET)
```

### 6.5 Patrón Reducer — Acciones y Transiciones

El reducer sigue el patrón **Flux/Redux unidireccional** sin librería externa:

```
┌──────────────────────────────────────────────────────────────────┐
│                        appReducer                                │
│                                                                  │
│  action.type              │  Mutación                            │
│  ─────────────────────────┼──────────────────────────────────    │
│  TOGGLE_THEME             │  theme: 'light' ↔ 'dark'            │
│  TOGGLE_SIDEBAR           │  sidebarOpen: true ↔ false           │
│  UPDATE_BRAND             │  user.brand = { ...brand, ...payload }│
│  UPDATE_WALLET            │  wallet = { ...wallet, ...payload }   │
│  CLEAR_NOTIFICATIONS      │  notifications: 0                    │
│                                                                  │
│  Invariante: SIEMPRE retorna nuevo objeto (inmutabilidad)        │
│  Invariante: default → retorna state sin cambios                 │
└──────────────────────────────────────────────────────────────────┘
```

**Garantías de inmutabilidad:**
```jsx
// Cada case usa spread operator para crear nuevo objeto
case 'UPDATE_BRAND':
  return {
    ...state,                              // copia nivel 1
    user: {
      ...state.user,                       // copia nivel 2
      brand: { ...state.user.brand, ...action.payload }  // copia nivel 3 + merge
    }
  }
// React detecta nueva referencia → re-render → UI actualizada
```

### 6.6 Justificación de la Separación Global vs Local

| Estado | Tipo | Justificación |
|--------|------|---------------|
| `theme` | **Global** | Layout, Header y TODOS los componentes lo consumen vía CSS vars |
| `sidebarOpen` | **Global** | Layout y Header interactúan con él desde diferentes posiciones del DOM |
| `wallet.balance` | **Global** | Header lo muestra, Wallet lo modifica, Shipping lo valida |
| `user.brand` | **Global** | Brand lo edita, Picking/Shipping lo leen para etiquetas |
| `notifications` | **Global** | Header badge lo muestra, varias vistas potencialmente lo incrementan |
| `search` (catálogo) | **Local** | Solo Catalog.jsx lo usa; se reinicia al salir de la vista (correcto) |
| `step` (envío) | **Local** | Solo Shipping.jsx lo usa; el wizard se reinicia al navegar (correcto) |
| `completedIds` (picking) | **Local** | Efímero de sesión; en producción vendría del backend |
| `selectedAmount` (wallet) | **Local** | Selección temporal antes de confirmar; no necesita persistir |

**Principio aplicado:** *"Levantar el estado solo cuando sea necesario"* (React docs — Lifting State Up). Si solo un componente lo usa → `useState`. Si múltiples componentes en diferentes rutas lo necesitan → Context.

### 6.7 Evolución Arquitectónica Planificada

```
                    MVP (actual)              Crecimiento               Enterprise
                    ────────────              ────────────               ──────────
Datos              Mock (mockData.js)    →   API REST + React Query  →  GraphQL + Cache
Estado UI          Context+useReducer    →   Context+useReducer      →  Zustand (selectores)
Estado servidor    N/A                   →   React Query             →  React Query + SSR
Autenticación      Mock user             →   Firebase Auth           →  Auth0 / Keycloak
Routing            React Router          →   + lazy() + Suspense    →  + loader/action pattern
Persistencia       N/A                   →   localStorage + sync    →  IndexedDB + SW
```

La arquitectura actual **no tiene deuda técnica**: cada capa se puede reemplazar independientemente porque no hay acoplamiento entre el estado global y la capa de datos.

---

## 7. Stack Tecnológico
| Herramienta | Uso |
|-------------|-----|
| React 19 | UI Library |
| Vite 8 | Build tool + HMR |
| React Router DOM 7 | Routing SPA |
| Lucide React | Iconografía |
| CSS Custom Properties | Design system |
| Context API + useReducer | Estado global |

## 8. Estructura del Proyecto
```
dropship-app/
├── public/
├── src/
│   ├── components/
│   │   └── Layout/          # Sidebar + Header + Outlet
│   ├── context/
│   │   └── AppContext.jsx    # Estado global (tema, usuario, billetera)
│   ├── data/
│   │   └── mockData.js       # Datos de mock (productos, órdenes, etc.)
│   ├── pages/
│   │   ├── Dashboard/        # KPIs + Pedidos recientes + Actividad
│   │   ├── Catalog/          # Catálogo sourcing + Calculadora
│   │   ├── MyList/           # Productos del vendedor
│   │   ├── Brand/            # Personalización marca blanca
│   │   ├── Orders/           # Gestión de pedidos
│   │   ├── Shipping/         # Wizard nuevo envío
│   │   ├── Inventory/        # Inventario + Picking
│   │   └── Wallet/           # Billetera virtual
│   ├── styles/
│   │   └── global.css        # Tokens + Reset
│   ├── utils/
│   │   └── helpers.js        # Formateo moneda, fecha
│   ├── App.jsx               # Router principal
│   └── main.jsx              # Entry point
└── package.json
```

## 9. Cómo Ejecutar
```bash
cd dropship-app
npm install
npm run dev
```

## 10. Flujo Lógico del Proceso
1. **Selección**: El vendedor elige un producto del catálogo sourcing
2. **Importación**: Lo agrega a "Mi Lista" con precio personalizado
3. **Venta**: Vende externamente y registra la orden en "Nuevo Envío"
4. **Logística**: La bodega recibe la orden, imprime etiqueta con marca del vendedor
5. **Notificación**: El sistema genera guía de seguimiento para el comprador