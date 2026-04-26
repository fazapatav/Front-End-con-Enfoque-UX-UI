/**
 * MFE — Dominio Vendedor (Vendor MFE)
 *
 * Dominio de negocio: Gestión de Oferta del Vendedor
 * Responsabilidades:
 *   - Exploración del catálogo de productos (sourcing)
 *   - Gestión de la lista propia del vendedor
 *   - Personalización de marca blanca
 *   - Vista general del dashboard de métricas
 *
 * Equipo propietario: Squad Vendedor
 * Puerto de desarrollo (hipotético): 5174
 *
 * Este archivo es el ENTRY POINT del MFE.
 * En una arquitectura Module Federation real, este sería el punto
 * expuesto en el vite.config.js del sub-proyecto:
 *   exposes: { './VendorMFE': './src/mfe/vendor/VendorMFE.jsx' }
 *
 * Comunicación hacia otros MFEs (vía Event Bus):
 *   EMITE → CATALOG_PRODUCT_ADDED (cuando se agrega producto a Mi Lista)
 *   EMITE → BRAND_UPDATED (cuando se guarda la configuración de marca)
 */

import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MFELoader from "../../components/MFELoader/MFELoader";

// Lazy loading: cada página del dominio se carga bajo demanda
// En Module Federation esto equivale a un import remoto:
//   const Dashboard = lazy(() => import('vendor/Dashboard'));
const Dashboard = lazy(() => import("../../pages/Dashboard/Dashboard"));
const Catalog = lazy(() => import("../../pages/Catalog/Catalog"));
const MyList = lazy(() => import("../../pages/MyList/MyList"));
const Brand = lazy(() => import("../../pages/Brand/Brand"));

/**
 * VendorMFE — Orquestador de rutas del dominio Vendedor.
 * El Shell monta este componente para el conjunto de rutas /catalogo, /mi-lista, /marca, /.
 */
export default function VendorMFE() {
  return (
    <Suspense fallback={<MFELoader name="Vendedor" />}>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="catalogo" element={<Catalog />} />
        <Route path="mi-lista" element={<MyList />} />
        <Route path="marca" element={<Brand />} />
      </Routes>
    </Suspense>
  );
}
