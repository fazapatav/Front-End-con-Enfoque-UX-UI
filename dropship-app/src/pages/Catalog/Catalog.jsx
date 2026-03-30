import { useState } from "react";
import { Search, Plus, Star, Calculator, X, Check, Truck } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "../../data/mockData";
import { formatCurrency } from "../../utils/helpers";
import "./Catalog.css";

export default function Catalog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");
  const [myList, setMyList] = useState([]);
  const [calcProduct, setCalcProduct] = useState(null);
  const [salePrice, setSalePrice] = useState("");

  const filtered = PRODUCTS.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "Todos" || p.category === category;
    return matchSearch && matchCat;
  });

  const toggleMyList = (id) => {
    setMyList((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const openCalc = (product) => {
    setCalcProduct(product);
    setSalePrice(String(product.suggestedPrice));
  };

  const commission = calcProduct ? Math.round(Number(salePrice) * 0.05) : 0;
  const netProfit = calcProduct
    ? Number(salePrice) - calcProduct.costPrice - commission
    : 0;
  const profitMargin =
    calcProduct && Number(salePrice) > 0
      ? Math.round((netProfit / Number(salePrice)) * 100)
      : 0;

  return (
    <div className="catalog">
      {/* Toolbar */}
      <div className="catalog__toolbar">
        <div className="catalog__search">
          <Search size={18} className="catalog__search-icon" />
          <input
            type="text"
            placeholder="Buscar productos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Filters */}
      <div className="catalog__filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`filter-chip ${category === cat ? "filter-chip--active" : ""}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="catalog__grid">
        {filtered.map((product) => {
          const inList = myList.includes(product.id);
          return (
            <div key={product.id} className="product-card">
              <div className="product-card__image">{product.image}</div>
              <div className="product-card__body">
                <div className="product-card__category">{product.category}</div>
                <div className="product-card__name">{product.name}</div>
                <div className="product-card__meta">
                  <span className="product-card__rating">
                    <Star size={12} fill="#f59e0b" /> {product.rating}
                  </span>
                  <span>
                    <Truck size={12} /> {product.shippingDays} días
                  </span>
                  <span>{product.stock} uds</span>
                </div>
                <div className="product-card__prices">
                  <span className="product-card__cost">
                    Costo: {formatCurrency(product.costPrice)}
                  </span>
                  <span className="product-card__margin">
                    {product.margin}% margen
                  </span>
                </div>
                <div className="product-card__prices">
                  <span className="product-card__suggested">
                    {formatCurrency(product.suggestedPrice)}
                  </span>
                </div>
              </div>
              <div className="product-card__footer">
                <button
                  className={`btn btn--sm ${inList ? "btn--added" : "btn--primary"}`}
                  onClick={() => toggleMyList(product.id)}
                >
                  {inList ? (
                    <>
                      <Check size={14} /> En Mi Lista
                    </>
                  ) : (
                    <>
                      <Plus size={14} /> Agregar
                    </>
                  )}
                </button>
                <button
                  className="btn btn--sm btn--secondary"
                  onClick={() => openCalc(product)}
                >
                  <Calculator size={14} /> Calcular
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="empty-state">
          <div className="empty-state__icon">🔍</div>
          <div className="empty-state__title">No se encontraron productos</div>
          <p>Intenta con otros filtros o términos de búsqueda.</p>
        </div>
      )}

      {/* Margin Calculator Modal */}
      {calcProduct && (
        <div className="modal-overlay" onClick={() => setCalcProduct(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal__header">
              <h3 className="modal__title">Calculadora de Márgenes</h3>
              <button
                className="modal__close"
                onClick={() => setCalcProduct(null)}
              >
                <X size={20} />
              </button>
            </div>
            <div className="modal__body">
              <p style={{ marginBottom: "var(--space-md)", fontWeight: 600 }}>
                {calcProduct.image} {calcProduct.name}
              </p>

              <div className="form-group">
                <label>Costo Base</label>
                <input
                  type="text"
                  value={formatCurrency(calcProduct.costPrice)}
                  disabled
                />
              </div>

              <div className="form-group">
                <label htmlFor="salePrice">Precio de Venta</label>
                <input
                  id="salePrice"
                  type="number"
                  value={salePrice}
                  onChange={(e) => setSalePrice(e.target.value)}
                  min={calcProduct.costPrice}
                />
              </div>

              <div className="calc-result">
                <div className="calc-result__row">
                  <span>Precio de Venta</span>
                  <span>{formatCurrency(Number(salePrice) || 0)}</span>
                </div>
                <div className="calc-result__row">
                  <span>Costo Base</span>
                  <span>-{formatCurrency(calcProduct.costPrice)}</span>
                </div>
                <div className="calc-result__row">
                  <span>Comisión (5%)</span>
                  <span>-{formatCurrency(commission)}</span>
                </div>
                <div className="calc-result__row calc-result__row--total">
                  <span>Utilidad Neta ({profitMargin}%)</span>
                  <span>{formatCurrency(netProfit)}</span>
                </div>
              </div>
            </div>
            <div className="modal__footer">
              <button
                className="btn btn--secondary"
                onClick={() => setCalcProduct(null)}
              >
                Cerrar
              </button>
              <button
                className="btn btn--primary"
                onClick={() => {
                  toggleMyList(calcProduct.id);
                  setCalcProduct(null);
                }}
              >
                <Plus size={16} /> Agregar a Mi Lista
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
