import { ShoppingBag, TrendingUp, Package, DollarSign } from "lucide-react";
import { ORDERS, ORDER_STATUSES } from "../../data/mockData";
import { formatCurrency, formatDate } from "../../utils/helpers";
import { useApp } from "../../context/AppContext";
import "./Dashboard.css";

const KPI_DATA = [
  {
    label: "Ventas del Mes",
    value: "$2.340.000",
    change: "+12.5%",
    up: true,
    icon: DollarSign,
    variant: "primary",
  },
  {
    label: "Pedidos Activos",
    value: "23",
    change: "+3 hoy",
    up: true,
    icon: ShoppingBag,
    variant: "success",
  },
  {
    label: "Productos en Lista",
    value: "48",
    change: "+5 esta semana",
    up: true,
    icon: Package,
    variant: "info",
  },
  {
    label: "Margen Promedio",
    value: "62%",
    change: "+2.1%",
    up: true,
    icon: TrendingUp,
    variant: "warning",
  },
];

const ACTIVITIES = [
  {
    icon: "📦",
    text: "Pedido ORD-004 creado por Andrés Ruiz",
    time: "Hace 10 min",
    bg: "#e0e7ff",
  },
  {
    icon: "🚚",
    text: "ORD-002 en tránsito — Guía COL-321654",
    time: "Hace 2 horas",
    bg: "#dbeafe",
  },
  {
    icon: "✅",
    text: "ORD-001 entregado exitosamente",
    time: "Hace 1 día",
    bg: "#d1fae5",
  },
  {
    icon: "💰",
    text: "Recarga de $1.000.000 a tu billetera",
    time: "Hace 1 día",
    bg: "#fef3c7",
  },
  {
    icon: "⚠️",
    text: "Stock bajo: Reloj Inteligente Sport (12 uds)",
    time: "Hace 2 días",
    bg: "#fee2e2",
  },
];

export default function Dashboard() {
  const { state } = useApp();

  return (
    <div className="dashboard">
      {/* KPIs */}
      <section className="dashboard__kpis" aria-label="Indicadores clave">
        {KPI_DATA.map((kpi) => (
          <div key={kpi.label} className="kpi-card">
            <div className={`kpi-card__icon kpi-card__icon--${kpi.variant}`}>
              <kpi.icon size={22} />
            </div>
            <div className="kpi-card__content">
              <div className="kpi-card__label">{kpi.label}</div>
              <div className="kpi-card__value">{kpi.value}</div>
              <div
                className={`kpi-card__change ${kpi.up ? "kpi-card__change--up" : "kpi-card__change--down"}`}
              >
                {kpi.change}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Grid: Orders + Activity */}
      <div className="dashboard__grid">
        {/* Recent Orders */}
        <div className="card">
          <div className="card__header">
            <h2 className="card__title">Pedidos Recientes</h2>
          </div>
          <div className="card__body" style={{ padding: 0 }}>
            <table className="recent-orders">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Producto</th>
                  <th>Comprador</th>
                  <th>Estado</th>
                  <th>Monto</th>
                </tr>
              </thead>
              <tbody>
                {ORDERS.map((order) => {
                  const status = ORDER_STATUSES[order.status];
                  return (
                    <tr key={order.id}>
                      <td style={{ fontWeight: 600 }}>{order.id}</td>
                      <td>{order.product}</td>
                      <td>{order.buyer}</td>
                      <td>
                        <span
                          className="status-badge"
                          style={{
                            background: status.color + "18",
                            color: status.color,
                          }}
                        >
                          <span
                            className="status-badge__dot"
                            style={{ background: status.color }}
                          />
                          {status.label}
                        </span>
                      </td>
                      <td>{formatCurrency(order.amount)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity */}
        <div className="card">
          <div className="card__header">
            <h2 className="card__title">Actividad Reciente</h2>
          </div>
          <div className="card__body">
            {ACTIVITIES.map((act, i) => (
              <div key={i} className="activity-item">
                <div
                  className="activity-item__icon"
                  style={{ background: act.bg }}
                >
                  {act.icon}
                </div>
                <div>
                  <div className="activity-item__text">{act.text}</div>
                  <div className="activity-item__time">{act.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
