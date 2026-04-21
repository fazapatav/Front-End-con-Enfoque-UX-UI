/**
 * FLUX — Capa de Dispatcher + Puente con el Store
 *
 * AppContext cumple el rol de DISPATCHER en el patrón Flux:
 *  - Recibe acciones despachadas por las Views
 *  - Las enruta al Store (appReducer) a través de useReducer
 *  - Expone el estado resultante y el dispatch a toda la app
 *
 * Las Views consumen el estado y el dispatcher a través del
 * hook useApp(), sin conocer la implementación interna del Store.
 */

import { createContext, useContext, useReducer } from "react";
import { appReducer, initialState } from "../store/reducer";

// ─────────────────────────────────────────────
// CONTEXTO — canal de comunicación Store → View
// ─────────────────────────────────────────────
const AppContext = createContext(null);

// ─────────────────────────────────────────────
// AppProvider — monta el Store y expone el Dispatcher
// ─────────────────────────────────────────────
export function AppProvider({ children }) {
  // useReducer conecta el Dispatcher (dispatch) con el Store (appReducer + initialState)
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

// ─────────────────────────────────────────────
// useApp — hook de acceso para las Views
// Retorna { state, dispatch } del Store
// ─────────────────────────────────────────────
export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
}
