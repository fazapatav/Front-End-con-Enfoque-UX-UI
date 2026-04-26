/**
 * MFE — Dominio Pedidos (Orders MFE)
 *
 * Dominio de negocio: Gestión del Ciclo de Vida de Pedidos
 * Responsabilidades:
 *   - Visualización y seguimiento de pedidos
 *   - Creación de nuevos envíos (wizard multi-paso)
 *   - Programación de despacho
 *
 * Equipo propietario: Squad Pedidos
 * Puerto de desarrollo (hipotético): 5175
 *
 * Comunicación vía Event Bus:
 *   ESCUCHA → CATALOG_PRODUCT_ADDED (para mostrar productos disponibles para envío)
 *   EMITE   → ORDER_CREATED (notifica a Warehouse MFE sobre nueva orden a procesar)
 */

import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MFELoader from "../../components/MFELoader/MFELoader";

const Orders = lazy(() => import("../../pages/Orders/Orders"));
const Shipping = lazy(() => import("../../pages/Shipping/Shipping"));

/**
 * OrdersMFE — Orquestador de rutas del dominio Pedidos.
 */
export default function OrdersMFE() {
  return (
    <Suspense fallback={<MFELoader name="Pedidos" />}>
      <Routes>
        <Route path="pedidos" element={<Orders />} />
        <Route path="envios" element={<Shipping />} />
      </Routes>
    </Suspense>
  );
}
