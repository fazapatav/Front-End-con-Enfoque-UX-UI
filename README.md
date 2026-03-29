# DropShip Pro — Plataforma de Dropshipping White Label

## Descripción
Plataforma web SPA para vendedores de dropshipping con marca blanca, desarrollada con **React + Vite**. Permite a los vendedores explorar un catálogo, personalizar su marca, gestionar pedidos, controlar inventario y administrar una billetera virtual.

## Problema Empresarial
Los vendedores de dropshipping necesitan una plataforma que sincronice el inventario del proveedor con la gestión de ventas, permitiendo envíos con etiqueta personalizada (marca blanca) donde el comprador final nunca ve los datos de la bodega original.

## Módulos Implementados

### 1. Panel del Vendedor
- **Dashboard**: Métricas KPI (ventas, pedidos, margen), pedidos recientes, actividad
- **Catálogo Sourcing**: Explorador de productos con filtros, búsqueda, rating
- **Mi Lista**: Productos seleccionados por el vendedor para su inventario virtual
- **Personalización de Marca**: Logo, nombre comercial, dirección de remitente

### 2. Gestión de Pedidos y Envíos
- **Mis Pedidos**: Tabla con estados (Pendiente → Procesando → En Tránsito → Entregado)
- **Nuevo Envío**: Wizard multi-paso (Producto → Datos Comprador → Despacho)
- **Programación de Despacho**: Inmediato o fecha programada
- **Calculadora de Márgenes**: Costo base, precio venta, comisiones, utilidad neta

### 3. Inventario y Bodega (Admin)
- **Inventario**: Tabla con SKU, stock, niveles, barras visuales, alertas de reabastecimiento
- **Picking & Packing**: Interfaz para empacar pedidos con etiqueta del vendedor

### 4. Pagos y Billetera Virtual
- **Saldo**: Balance en tiempo real con recarga rápida
- **Historial**: Transacciones de recargas y pagos de órdenes

## Principios UX/UI Aplicados
- **Design Tokens**: Variables CSS centralizadas para colores, espaciado, tipografía
- **Responsive Design**: Mobile-first con breakpoints para tablet y desktop
- **Modo Oscuro**: Toggle de tema con CSS custom properties
- **Jerarquía Visual**: Tarjetas KPI, badges de estado, barras de stock
- **Feedback al Usuario**: Toasts, estados vacíos, steps de formulario
- **Accesibilidad**: Labels, aria-labels, roles semánticos, contraste adecuado
- **Navegación**: Sidebar con secciones agrupadas y highlight de ruta activa

## Stack Tecnológico
| Herramienta | Uso |
|-------------|-----|
| React 19 | UI Library |
| Vite 8 | Build tool + HMR |
| React Router DOM 7 | Routing SPA |
| Lucide React | Iconografía |
| CSS Custom Properties | Design system |
| Context API + useReducer | Estado global |

## Estructura del Proyecto
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

## Cómo Ejecutar
```bash
cd dropship-app
npm install
npm run dev
```

## Flujo Lógico del Proceso
1. **Selección**: El vendedor elige un producto del catálogo sourcing
2. **Importación**: Lo agrega a "Mi Lista" con precio personalizado
3. **Venta**: Vende externamente y registra la orden en "Nuevo Envío"
4. **Logística**: La bodega recibe la orden, imprime etiqueta con marca del vendedor
5. **Notificación**: El sistema genera guía de seguimiento para el comprador