/**
 * MFE — Dominio Bodega (Warehouse MFE)
 *
 * Dominio de negocio: Operaciones de Bodega y Fulfillment
 * Responsabilidades:
 *   - Gestión de stock en tiempo real (alertas de reabastecimiento)
 *   - Proceso de Picking & Packing con etiqueta white label
 *
 * Equipo propietario: Squad Bodega / Operaciones
 * Puerto de desarrollo (hipotético): 5176
 *
 * Comunicación vía Event Bus:
 *   ESCUCHA → ORDER_CREATED (nueva orden entrante para iniciar picking)
 */

import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MFELoader from "../../components/MFELoader/MFELoader";

const Inventory = lazy(() => import("../../pages/Inventory/Inventory"));
const Picking = lazy(() => import("../../pages/Inventory/Picking"));

/**
 * WarehouseMFE — Orquestador de rutas del dominio Bodega.
 */
export default function WarehouseMFE() {
  return (
    <Suspense fallback={<MFELoader name="Bodega" />}>
      <Routes>
        <Route path="inventario" element={<Inventory />} />
        <Route path="picking" element={<Picking />} />
      </Routes>
    </Suspense>
  );
}
