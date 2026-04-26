/**
 * MFE — Dominio Finanzas (Wallet MFE)
 *
 * Dominio de negocio: Gestión Financiera y Billetera Virtual
 * Responsabilidades:
 *   - Consulta y recarga del saldo de la billetera prepago
 *   - Historial de transacciones (recargas, pagos de órdenes)
 *
 * Equipo propietario: Squad Finanzas
 * Puerto de desarrollo (hipotético): 5177
 *
 * Comunicación vía Event Bus:
 *   EMITE → WALLET_BALANCE_UPDATED (notifica al Shell para actualizar el saldo en el header)
 *
 * NOTA: Este MFE es el único que tiene acceso de escritura al saldo.
 * El Shell solo puede leer el saldo vía el evento del Event Bus.
 * Esto garantiza que la lógica financiera permanece encapsulada
 * en este dominio.
 */

import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MFELoader from "../../components/MFELoader/MFELoader";

const Wallet = lazy(() => import("../../pages/Wallet/Wallet"));

/**
 * WalletMFE — Orquestador de rutas del dominio Finanzas.
 */
export default function WalletMFE() {
  return (
    <Suspense fallback={<MFELoader name="Finanzas" />}>
      <Routes>
        <Route path="billetera" element={<Wallet />} />
      </Routes>
    </Suspense>
  );
}
