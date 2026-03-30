import { AlertTriangle, AlertCircle } from "lucide-react";
import { WAREHOUSE_ITEMS } from "../../data/mockData";
import "./Inventory.css";

export default function Inventory() {
  const lowStockItems = WAREHOUSE_ITEMS.filter((i) => i.stock <= i.minStock);
  const maxStock = Math.max(...WAREHOUSE_ITEMS.map((i) => i.stock));

  return (
    <div className="inventory">
      {/* Low stock alerts */}
      {lowStockItems.length > 0 && (
        <div className="inventory__alerts" role="alert">
          {lowStockItems.map((item) => (
            <div
              key={item.id}
              className={`alert ${item.stock < item.minStock * 0.5 ? "alert--danger" : "alert--warning"}`}
            >
              <div className="alert__icon">
                {item.stock < item.minStock * 0.5 ? (
                  <AlertCircle size={18} />
                ) : (
                  <AlertTriangle size={18} />
                )}
              </div>
              <span>
                <strong>{item.name}</strong> — Stock: {item.stock} uds (mínimo:{" "}
                {item.minStock}).
                {item.stock < item.minStock * 0.5
                  ? " ¡Crítico! Reabastecer urgente."
                  : " Considerar reabastecimiento."}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Inventory Table */}
      <div className="inventory__table-wrap">
        <table className="inventory__table">
          <thead>
            <tr>
              <th>SKU</th>
              <th>Producto</th>
              <th>Ubicación</th>
              <th>Stock</th>
              <th>Nivel</th>
              <th>Stock Mínimo</th>
              <th>Pedidos Pendientes</th>
            </tr>
          </thead>
          <tbody>
            {WAREHOUSE_ITEMS.map((item) => {
              const pct = (item.stock / maxStock) * 100;
              const isLow = item.stock <= item.minStock;
              const barColor = isLow
                ? "#ef4444"
                : item.stock <= item.minStock * 1.5
                  ? "#f59e0b"
                  : "#10b981";

              return (
                <tr key={item.id}>
                  <td style={{ fontWeight: 600, fontFamily: "monospace" }}>
                    {item.sku}
                  </td>
                  <td>{item.name}</td>
                  <td>
                    <span
                      style={{
                        background: "var(--color-surface-hover)",
                        padding: "2px 8px",
                        borderRadius: "var(--radius-sm)",
                        fontSize: "var(--font-size-xs)",
                        fontWeight: 600,
                      }}
                    >
                      {item.location}
                    </span>
                  </td>
                  <td className={isLow ? "stock-low" : ""}>{item.stock} uds</td>
                  <td style={{ minWidth: 120 }}>
                    <div className="stock-bar">
                      <div
                        className="stock-bar__fill"
                        style={{ width: `${pct}%`, background: barColor }}
                      />
                    </div>
                  </td>
                  <td>{item.minStock} uds</td>
                  <td>
                    {item.pendingOrders > 0 && (
                      <span
                        style={{
                          background: "#e0e7ff",
                          color: "#4f46e5",
                          padding: "2px 8px",
                          borderRadius: "9999px",
                          fontSize: "var(--font-size-xs)",
                          fontWeight: 600,
                        }}
                      >
                        {item.pendingOrders}
                      </span>
                    )}
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
