import { useState } from "react";
import { Check, Send, Calendar } from "lucide-react";
import { PRODUCTS } from "../../data/mockData";
import { formatCurrency } from "../../utils/helpers";
import { useApp } from "../../context/AppContext";
import "./Shipping.css";

const STEPS = ["Producto", "Datos del Comprador", "Despacho"];

export default function Shipping() {
  const { state } = useApp();
  const [step, setStep] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [schedule, setSchedule] = useState("immediate");
  const [scheduleDate, setScheduleDate] = useState("");
  const [buyerData, setBuyerData] = useState({
    name: "",
    address: "",
    city: "",
    phone: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const product = PRODUCTS.find((p) => String(p.id) === selectedProduct);

  const handleBuyerChange = (field) => (e) =>
    setBuyerData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="shipping">
        <div
          className="shipping__form"
          style={{ textAlign: "center", padding: "var(--space-2xl)" }}
        >
          <div style={{ fontSize: 48, marginBottom: "var(--space-md)" }}>
            🎉
          </div>
          <h2>¡Envío Registrado!</h2>
          <p
            style={{
              color: "var(--color-text-secondary)",
              margin: "var(--space-md) 0",
            }}
          >
            La bodega recibirá la orden y preparará el paquete con tu etiqueta
            de marca.
            <br />
            Recibirás el número de guía una vez despachado.
          </p>
          <div
            style={{
              background: "var(--color-surface-hover)",
              borderRadius: "var(--radius-md)",
              padding: "var(--space-md)",
              margin: "var(--space-lg) auto",
              maxWidth: 300,
            }}
          >
            <div
              style={{
                fontSize: "var(--font-size-xs)",
                color: "var(--color-text-muted)",
              }}
            >
              Orden asignada
            </div>
            <div style={{ fontSize: "var(--font-size-xl)", fontWeight: 700 }}>
              ORD-{String(Date.now()).slice(-3)}
            </div>
          </div>
          <button
            className="btn btn--primary"
            onClick={() => {
              setSubmitted(false);
              setStep(0);
              setSelectedProduct("");
              setBuyerData({
                name: "",
                address: "",
                city: "",
                phone: "",
                notes: "",
              });
            }}
          >
            Crear Otro Envío
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="shipping">
      {/* Steps */}
      <div className="shipping__steps">
        {STEPS.map((s, i) => (
          <div
            key={s}
            className={`step ${i === step ? "step--active" : ""} ${i < step ? "step--done" : ""}`}
          >
            <div className="step__number">
              {i < step ? <Check size={14} /> : i + 1}
            </div>
            {s}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 0: Product */}
        {step === 0 && (
          <div className="shipping__form">
            <h2>Selecciona el Producto</h2>
            <div className="form-group">
              <label htmlFor="product">Producto de tu lista</label>
              <select
                id="product"
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                required
              >
                <option value="">-- Seleccionar --</option>
                {PRODUCTS.filter((p) => [1, 2, 4, 7, 10].includes(p.id)).map(
                  (p) => (
                    <option key={p.id} value={p.id}>
                      {p.image} {p.name} — {formatCurrency(p.costPrice)}
                    </option>
                  ),
                )}
              </select>
            </div>
            {product && (
              <div
                style={{
                  background: "var(--color-surface-hover)",
                  borderRadius: "var(--radius-md)",
                  padding: "var(--space-md)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-md)",
                  }}
                >
                  <span style={{ fontSize: 36 }}>{product.image}</span>
                  <div>
                    <div style={{ fontWeight: 600 }}>{product.name}</div>
                    <div
                      style={{
                        fontSize: "var(--font-size-sm)",
                        color: "var(--color-text-secondary)",
                      }}
                    >
                      Costo: {formatCurrency(product.costPrice)} · Stock:{" "}
                      {product.stock} uds
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div
              className="shipping__actions"
              style={{ marginTop: "var(--space-lg)" }}
            >
              <button
                type="button"
                className="btn btn--primary"
                disabled={!selectedProduct}
                onClick={() => setStep(1)}
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {/* Step 1: Buyer Data */}
        {step === 1 && (
          <div className="shipping__form">
            <h2>Datos del Comprador Final</h2>
            <div className="form-group">
              <label htmlFor="buyerName">Nombre Completo</label>
              <input
                id="buyerName"
                type="text"
                value={buyerData.name}
                onChange={handleBuyerChange("name")}
                placeholder="Ej: María García López"
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="buyerAddress">Dirección de Entrega</label>
                <input
                  id="buyerAddress"
                  type="text"
                  value={buyerData.address}
                  onChange={handleBuyerChange("address")}
                  placeholder="Cra 15 #82-30, Apto 301"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="buyerCity">Ciudad</label>
                <input
                  id="buyerCity"
                  type="text"
                  value={buyerData.city}
                  onChange={handleBuyerChange("city")}
                  placeholder="Bogotá"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="buyerPhone">Teléfono</label>
              <input
                id="buyerPhone"
                type="tel"
                value={buyerData.phone}
                onChange={handleBuyerChange("phone")}
                placeholder="300-123-4567"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="buyerNotes">Notas de Entrega (opcional)</label>
              <textarea
                id="buyerNotes"
                rows={3}
                value={buyerData.notes}
                onChange={handleBuyerChange("notes")}
                placeholder="Instrucciones especiales..."
              />
            </div>
            <div className="shipping__actions">
              <button
                type="button"
                className="btn btn--secondary"
                onClick={() => setStep(0)}
              >
                Atrás
              </button>
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => setStep(2)}
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Dispatch */}
        {step === 2 && (
          <>
            <div className="shipping__form">
              <h2>Programación de Despacho</h2>
              <div className="shipping__schedule">
                <Calendar size={20} />
                <div className="shipping__schedule-toggle">
                  <button
                    type="button"
                    className={`schedule-option ${schedule === "immediate" ? "schedule-option--active" : ""}`}
                    onClick={() => setSchedule("immediate")}
                  >
                    Envío Inmediato
                  </button>
                  <button
                    type="button"
                    className={`schedule-option ${schedule === "scheduled" ? "schedule-option--active" : ""}`}
                    onClick={() => setSchedule("scheduled")}
                  >
                    Programar Fecha
                  </button>
                </div>
              </div>
              {schedule === "scheduled" && (
                <div
                  className="form-group"
                  style={{ marginTop: "var(--space-md)" }}
                >
                  <label htmlFor="schedDate">Fecha de Salida</label>
                  <input
                    id="schedDate"
                    type="date"
                    value={scheduleDate}
                    onChange={(e) => setScheduleDate(e.target.value)}
                    required
                  />
                </div>
              )}
            </div>

            {/* Summary */}
            <div className="shipping__summary">
              <h2
                className="card__title"
                style={{ marginBottom: "var(--space-md)" }}
              >
                Resumen del Envío
              </h2>
              <div className="summary-row">
                <span>Producto</span>
                <span>{product?.name}</span>
              </div>
              <div className="summary-row">
                <span>Destinatario</span>
                <span>{buyerData.name}</span>
              </div>
              <div className="summary-row">
                <span>Dirección</span>
                <span>
                  {buyerData.address}, {buyerData.city}
                </span>
              </div>
              <div className="summary-row">
                <span>Despacho</span>
                <span>
                  {schedule === "immediate" ? "Inmediato" : scheduleDate}
                </span>
              </div>
              <div className="summary-row">
                <span>Etiqueta</span>
                <span>{state.user.brand.name}</span>
              </div>
              <div className="summary-row summary-row--total">
                <span>Total a Pagar</span>
                <span>{formatCurrency(product?.costPrice || 0)}</span>
              </div>
            </div>

            <div className="shipping__actions">
              <button
                type="button"
                className="btn btn--secondary"
                onClick={() => setStep(1)}
              >
                Atrás
              </button>
              <button type="submit" className="btn btn--success">
                <Send size={16} /> Confirmar y Pagar
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
