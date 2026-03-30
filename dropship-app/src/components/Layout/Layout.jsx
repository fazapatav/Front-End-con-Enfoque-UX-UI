import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBag,
  ListOrdered,
  Package,
  Wallet,
  Tag,
  Truck,
  BarChart3,
  Bell,
  Moon,
  Sun,
  Menu,
  Settings,
} from "lucide-react";
import { useApp } from "../../context/AppContext";
import { formatCurrency } from "../../utils/helpers";
import "./Layout.css";

const NAV_SECTIONS = [
  {
    title: "Vendedor",
    links: [
      { to: "/", icon: LayoutDashboard, label: "Dashboard" },
      { to: "/catalogo", icon: ShoppingBag, label: "Catálogo Sourcing" },
      { to: "/mi-lista", icon: Tag, label: "Mi Lista" },
      { to: "/marca", icon: Settings, label: "Mi Marca" },
    ],
  },
  {
    title: "Pedidos",
    links: [
      { to: "/pedidos", icon: ListOrdered, label: "Mis Pedidos" },
      { to: "/envios", icon: Truck, label: "Nuevo Envío" },
    ],
  },
  {
    title: "Bodega",
    links: [
      { to: "/inventario", icon: Package, label: "Inventario" },
      { to: "/picking", icon: BarChart3, label: "Picking & Packing" },
    ],
  },
  {
    title: "Finanzas",
    links: [{ to: "/billetera", icon: Wallet, label: "Billetera" }],
  },
];

const PAGE_TITLES = {
  "/": "Dashboard",
  "/catalogo": "Catálogo Sourcing",
  "/mi-lista": "Mi Lista de Productos",
  "/marca": "Personalización de Marca",
  "/pedidos": "Gestión de Pedidos",
  "/envios": "Nuevo Envío",
  "/inventario": "Inventario & Bodega",
  "/picking": "Picking & Packing",
  "/billetera": "Billetera Virtual",
};

export default function Layout() {
  const { state, dispatch } = useApp();
  const location = useLocation();
  const isDark = state.theme === "dark";

  const pageTitle = PAGE_TITLES[location.pathname] || "DropShip Pro";

  return (
    <div className="layout" data-theme={state.theme}>
      {/* Sidebar */}
      <aside
        className={`layout__sidebar ${!state.sidebarOpen ? "layout__sidebar--collapsed" : ""}`}
      >
        <div className="sidebar__header">
          <div className="sidebar__logo">D</div>
          <span className="sidebar__brand">DropShip Pro</span>
        </div>

        <nav className="sidebar__nav" aria-label="Navegación principal">
          {NAV_SECTIONS.map((section) => (
            <div key={section.title}>
              <div className="sidebar__section-title">{section.title}</div>
              {section.links.map(({ to, icon: Icon, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `sidebar__link ${isActive ? "sidebar__link--active" : ""}`
                  }
                >
                  <Icon className="sidebar__link-icon" size={20} />
                  {label}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>

        <div className="sidebar__footer">
          <div className="sidebar__user">
            <div className="sidebar__user-avatar">
              {state.user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="sidebar__user-info">
              <div className="sidebar__user-name">{state.user.name}</div>
              <div className="sidebar__user-role">Vendedor</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main
        className={`layout__main ${!state.sidebarOpen ? "layout__main--expanded" : ""}`}
      >
        <header className="header">
          <div className="header__left">
            <button
              className="header__toggle"
              onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
              aria-label="Toggle sidebar"
            >
              <Menu size={22} />
            </button>
            <h1 className="header__title">{pageTitle}</h1>
          </div>
          <div className="header__right">
            <div className="header__wallet">
              <Wallet size={16} />
              {formatCurrency(state.wallet.balance)}
            </div>
            <button
              className="header__icon-btn"
              onClick={() => dispatch({ type: "CLEAR_NOTIFICATIONS" })}
              aria-label="Notificaciones"
            >
              <Bell size={20} />
              {state.notifications > 0 && (
                <span className="header__badge">{state.notifications}</span>
              )}
            </button>
            <button
              className="header__icon-btn"
              onClick={() => dispatch({ type: "TOGGLE_THEME" })}
              aria-label="Cambiar tema"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </header>

        <div className="content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
