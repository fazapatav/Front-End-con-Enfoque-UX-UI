/**
 * SHELL — Orquestador de Microfrontends
 *
 * El Shell es el punto de entrada de la aplicación. Sus responsabilidades son:
 *   1. Proveer el estado global compartido (AppProvider)
 *   2. Montar el Layout (navegación, header, sidebar)
 *   3. Orquestar la carga lazy de cada MFE según la ruta activa
 *   4. Resolver conflictos de dependencias compartidas (React, Router)
 *
 * Cada MFE se carga bajo demanda con React.lazy() + Suspense.
 * En una arquitectura Module Federation real, cada lazy import
 * apuntaría a un servidor remoto:
 *   const VendorMFE = lazy(() => import('vendor/VendorMFE'))
 *
 * El Shell NO conoce la implementación interna de cada MFE.
 * Solo conoce:
 *   - Las rutas que le pertenecen a cada dominio
 *   - El contrato de eventos del EventBus (eventBus.js)
 */

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Layout from "./components/Layout/Layout";
import MFELoader from "./components/MFELoader/MFELoader";
import "./styles/global.css";

// ── Carga lazy de cada MFE por dominio ──────────────────────────────────────
// En Module Federation esto sería: lazy(() => import('vendor/VendorMFE'))
const VendorMFE = lazy(() => import("./mfe/vendor/VendorMFE"));
const OrdersMFE = lazy(() => import("./mfe/orders/OrdersMFE"));
const WarehouseMFE = lazy(() => import("./mfe/warehouse/WarehouseMFE"));
const WalletMFE = lazy(() => import("./mfe/wallet/WalletMFE"));

// ── Shell App ────────────────────────────────────────────────────────────────
function App() {
  return (
    <AppProvider>
      {/*
        Layout = Shell UI (sidebar + header).
        Los MFEs se renderizan dentro del <Outlet /> de Layout.
        Cada Suspense boundary = límite de un microfrontend.
      */}
      <Routes>
        <Route element={<Layout />}>
          {/* ── MFE Vendedor: Dashboard, Catálogo, Mi Lista, Marca ── */}
          <Route
            index
            element={
              <Suspense fallback={<MFELoader name="Vendedor" />}>
                <VendorMFE />
              </Suspense>
            }
          />
          <Route
            path="catalogo"
            element={
              <Suspense fallback={<MFELoader name="Vendedor" />}>
                <VendorMFE />
              </Suspense>
            }
          />
          <Route
            path="mi-lista"
            element={
              <Suspense fallback={<MFELoader name="Vendedor" />}>
                <VendorMFE />
              </Suspense>
            }
          />
          <Route
            path="marca"
            element={
              <Suspense fallback={<MFELoader name="Vendedor" />}>
                <VendorMFE />
              </Suspense>
            }
          />

          {/* ── MFE Pedidos: Mis Pedidos, Nuevo Envío ── */}
          <Route
            path="pedidos"
            element={
              <Suspense fallback={<MFELoader name="Pedidos" />}>
                <OrdersMFE />
              </Suspense>
            }
          />
          <Route
            path="envios"
            element={
              <Suspense fallback={<MFELoader name="Pedidos" />}>
                <OrdersMFE />
              </Suspense>
            }
          />

          {/* ── MFE Bodega: Inventario, Picking & Packing ── */}
          <Route
            path="inventario"
            element={
              <Suspense fallback={<MFELoader name="Bodega" />}>
                <WarehouseMFE />
              </Suspense>
            }
          />
          <Route
            path="picking"
            element={
              <Suspense fallback={<MFELoader name="Bodega" />}>
                <WarehouseMFE />
              </Suspense>
            }
          />

          {/* ── MFE Finanzas: Billetera Virtual ── */}
          <Route
            path="billetera"
            element={
              <Suspense fallback={<MFELoader name="Finanzas" />}>
                <WalletMFE />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
