import { useState } from "react";
import { Trash2, ExternalLink } from "lucide-react";
import { PRODUCTS } from "../../data/mockData";
import { formatCurrency } from "../../utils/helpers";
import { Link } from "react-router-dom";
import "./MyList.css";

export default function MyList() {
  const [listIds, setListIds] = useState([1, 2, 4, 7, 10]);

  const myProducts = PRODUCTS.filter((p) => listIds.includes(p.id));

  const removeItem = (id) => {
    setListIds((prev) => prev.filter((x) => x !== id));
  };

  return (
    <div className="mylist">
      <p
        style={{
          color: "var(--color-text-secondary)",
          fontSize: "var(--font-size-sm)",
        }}
      >
        {myProducts.length} producto{myProducts.length !== 1 ? "s" : ""} en tu
        lista — estos son los productos que vendes bajo tu marca.
      </p>

      {myProducts.length > 0 ? (
        <div className="mylist__grid">
          {myProducts.map((p) => (
            <div key={p.id} className="mylist-card">
              <div className="mylist-card__icon">{p.image}</div>
              <div className="mylist-card__body">
                <div className="mylist-card__name">{p.name}</div>
                <div
                  style={{
                    fontSize: "var(--font-size-xs)",
                    color: "var(--color-text-muted)",
                  }}
                >
                  Costo: {formatCurrency(p.costPrice)} · Margen: {p.margin}%
                </div>
                <div className="mylist-card__price">
                  {formatCurrency(p.suggestedPrice)}
                </div>
                <div className="mylist-card__actions">
                  <Link to="/envios" className="btn btn--sm btn--primary">
                    <ExternalLink size={14} /> Crear Envío
                  </Link>
                  <button
                    className="btn btn--sm btn--danger"
                    onClick={() => removeItem(p.id)}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-state__icon">📋</div>
          <div className="empty-state__title">Tu lista está vacía</div>
          <p>
            Explora el <Link to="/catalogo">catálogo</Link> y agrega productos a
            tu lista.
          </p>
        </div>
      )}
    </div>
  );
}
