import { createContext, useContext, useReducer } from "react";

const AppContext = createContext(null);

const initialState = {
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

function appReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "TOGGLE_SIDEBAR":
      return { ...state, sidebarOpen: !state.sidebarOpen };
    case "UPDATE_BRAND":
      return {
        ...state,
        user: {
          ...state.user,
          brand: { ...state.user.brand, ...action.payload },
        },
      };
    case "UPDATE_WALLET":
      return { ...state, wallet: { ...state.wallet, ...action.payload } };
    case "CLEAR_NOTIFICATIONS":
      return { ...state, notifications: 0 };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
}
