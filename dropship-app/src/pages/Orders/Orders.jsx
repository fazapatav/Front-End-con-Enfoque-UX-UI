import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { ORDERS, ORDER_STATUSES } from "../../data/mockData";
import { formatCurrency, formatDate } from "../../utils/helpers";
import "./Orders.css";

const statCounts = Object.entries(ORDER_STATUSES).map(([key, val]) => ({
  key,
  label: val.label,
  color: val.color,
  count: ORDERS.filter((o) => o.status === key).length,
}));

export default function Orders() {
  return (
    <div className="orders">
      {/* Stats */}
      <div className="orders__stats">
        {statCounts.map((s) => (
          <div key={s.key} className="order-stat">
            <div className="order-stat__count" style={{ color: s.color }}>
              {s.count}
            </div>
            <div className="order-stat__label">{s.label}</div>
          </div>
        ))}
        <div className="order-stat">
          <div
            className="order-stat__count"
            style={{ color: "var(--color-text)" }}
          >
            {ORDERS.length}
          </div>
          <div className="order-stat__label">Total</div>
        </div>
      </div>

      {/* Actions */}
      <div>
        <Link to="/envios" className="btn btn--primary">
          + Nuevo Envío
        </Link>
      </div>

      {/* Orders Table */}
      <div className="orders__table-wrap">
        <table className="orders__table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Producto</th>
              <th>Comprador</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Guía</th>
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
                  <td>
                    <div>{order.buyer}</div>
                    <div
                      style={{
                        fontSize: "var(--font-size-xs)",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {order.phone}
                    </div>
                  </td>
                  <td>{formatDate(order.date)}</td>
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
                  <td>
                    {order.trackingCode ? (
                      <span className="tracking-link">
                        {order.trackingCode} <ExternalLink size={12} />
                      </span>
                    ) : (
                      <span
                        style={{
                          color: "var(--color-text-muted)",
                          fontSize: "var(--font-size-xs)",
                        }}
                      >
                        Pendiente
                      </span>
                    )}
                  </td>
                  <td style={{ fontWeight: 600 }}>
                    {formatCurrency(order.amount)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
