import { useState } from "react";
import { Printer, CheckCircle, Tag } from "lucide-react";
import { ORDERS, ORDER_STATUSES } from "../../data/mockData";
import "./Inventory.css";

const PICKING_ORDERS = ORDERS.filter((o) =>
  ["pending", "processing"].includes(o.status),
);

export default function Picking() {
  const [completedIds, setCompletedIds] = useState([]);

  const markPacked = (id) => {
    setCompletedIds((prev) => [...prev, id]);
  };

  return (
    <div className="picking">
      <p
        style={{
          color: "var(--color-text-secondary)",
          fontSize: "var(--font-size-sm)",
        }}
      >
        Pedidos pagados pendientes de preparación en bodega. Imprima la etiqueta
        del vendedor y prepare el paquete.
      </p>

      {PICKING_ORDERS.length === 0 && (
        <div className="empty-state">
          <div className="empty-state__icon">📦</div>
          <div className="empty-state__title">No hay pedidos pendientes</div>
          <p>Todos los pedidos han sido despachados.</p>
        </div>
      )}

      {PICKING_ORDERS.map((order) => {
        const status = ORDER_STATUSES[order.status];
        const done = completedIds.includes(order.id);
        return (
          <div
            key={order.id}
            className="picking-card"
            style={done ? { opacity: 0.5 } : {}}
          >
            <div className="picking-card__order">{order.id}</div>
            <div className="picking-card__details">
              <div className="picking-card__product">{order.product}</div>
              <div className="picking-card__meta">
                {order.buyer} · {order.address} · {order.phone}
              </div>
            </div>
            <div className="picking-card__brand">
              <Tag size={14} /> Mi Marca
            </div>
            <span
              className="status-badge"
              style={{ background: status.color + "18", color: status.color }}
            >
              <span
                className="status-badge__dot"
                style={{ background: status.color }}
              />
              {status.label}
            </span>
            <div className="picking-card__actions">
              <button
                className="btn btn--sm btn--secondary"
                title="Imprimir etiqueta"
              >
                <Printer size={14} /> Etiqueta
              </button>
              {!done ? (
                <button
                  className="btn btn--sm btn--success"
                  onClick={() => markPacked(order.id)}
                >
                  <CheckCircle size={14} /> Empacar
                </button>
              ) : (
                <span
                  style={{
                    color: "var(--color-secondary)",
                    fontWeight: 600,
                    fontSize: "var(--font-size-sm)",
                  }}
                >
                  ✓ Listo
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
