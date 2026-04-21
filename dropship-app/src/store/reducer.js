/**
 * FLUX — Capa de Store (Reducer + Estado Inicial)
 *
 * El Store en Flux es el responsable de:
 *  1. Definir la forma del estado (initialState)
 *  2. Aplicar transformaciones inmutables al estado ante cada acción (reducer)
 *
 * INVARIANTES del reducer:
 *  - Siempre retorna un NUEVO objeto (inmutabilidad → React detecta cambios)
 *  - El case default retorna el state sin modificar
 *  - Ningún case produce side-effects (el reducer es una función pura)
 */

import { ACTION_TYPES } from "./actions";

// ─────────────────────────────────────────────
// ESTADO INICIAL — shape completa del store
// ─────────────────────────────────────────────
export const initialState = {
  theme: "light",
  sidebarOpen: true,
  user: {
    name: "Carlos Mendoza",
    email: "carlos@dropshippro.com",
    role: "seller",
    avatar: null,
    brand: {
      name: "Mi Marca",
      logo: null,
      address: "Calle 123 #45-67, Bogotá",
    },
  },
  wallet: {
    balance: 2450000,
    currency: "COP",
  },
  notifications: 3,
};

// ─────────────────────────────────────────────
// REDUCER — función pura: (state, action) → newState
// ─────────────────────────────────────────────
export function appReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };

    case ACTION_TYPES.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
      };

    case ACTION_TYPES.UPDATE_BRAND:
      return {
        ...state,
        user: {
          ...state.user,
          brand: { ...state.user.brand, ...action.payload },
        },
      };

    case ACTION_TYPES.UPDATE_WALLET:
      return {
        ...state,
        wallet: { ...state.wallet, ...action.payload },
      };

    case ACTION_TYPES.CLEAR_NOTIFICATIONS:
      return {
        ...state,
        notifications: 0,
      };

    default:
      // Acción desconocida: retorna el estado sin cambios
      return state;
  }
}
