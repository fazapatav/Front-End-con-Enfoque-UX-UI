import { useState } from "react";
import { Upload, Save, Eye } from "lucide-react";
import { useApp } from "../../context/AppContext";
import "./Brand.css";

export default function Brand() {
  const { state, dispatch } = useApp();
  const [brandName, setBrandName] = useState(state.user.brand.name);
  const [brandAddress, setBrandAddress] = useState(state.user.brand.address);
  const [showToast, setShowToast] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    dispatch({
      type: "UPDATE_BRAND",
      payload: { name: brandName, address: brandAddress },
    });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="brand">
      <p
        style={{
          color: "var(--color-text-secondary)",
          fontSize: "var(--font-size-sm)",
        }}
      >
        Configura tu etiqueta de envío. Los compradores verán estos datos como
        remitente.
      </p>

      {/* Preview */}
      <div className="brand__preview">
        <div
          className="card__header"
          style={{ padding: "0 0 var(--space-md)", borderBottom: "none" }}
        >
          <h2 className="card__title">
            <Eye
              size={18}
              style={{ verticalAlign: "middle", marginRight: 8 }}
            />
            Vista Previa — Etiqueta de Envío
          </h2>
        </div>
        <div className="brand__label-preview">
          <div className="brand__label-logo">
            {brandName ? brandName.charAt(0).toUpperCase() : "M"}
          </div>
          <div className="brand__label-name">
            {brandName || "Nombre de tu Marca"}
          </div>
          <div className="brand__label-address">
            {brandAddress || "Dirección de remitente"}
          </div>
        </div>
      </div>

      {/* Form */}
      <form className="brand__form" onSubmit={handleSave}>
        <h2 className="card__title" style={{ marginBottom: "var(--space-lg)" }}>
          Configuración de Marca
        </h2>

        <div className="form-group">
          <label htmlFor="logo">Logo de Marca</label>
          <div className="brand__upload">
            <Upload size={32} className="brand__upload-icon" />
            <p
              style={{
                fontSize: "var(--font-size-sm)",
                color: "var(--color-text-secondary)",
              }}
            >
              Arrastra tu logo aquí o haz clic para seleccionar
            </p>
            <p
              style={{
                fontSize: "var(--font-size-xs)",
                color: "var(--color-text-muted)",
              }}
            >
              PNG, JPG o SVG. Máximo 2MB.
            </p>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="brandName">Nombre Comercial</label>
          <input
            id="brandName"
            type="text"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            placeholder="Ej: Mi Tienda Online"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="brandAddress">Dirección de Remitente</label>
          <input
            id="brandAddress"
            type="text"
            value={brandAddress}
            onChange={(e) => setBrandAddress(e.target.value)}
            placeholder="Ej: Calle 123 #45-67, Bogotá"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="brandPhone">Teléfono de Contacto</label>
          <input id="brandPhone" type="tel" placeholder="Ej: 300-123-4567" />
        </div>

        <div className="form-group">
          <label htmlFor="brandEmail">Email de Contacto</label>
          <input
            id="brandEmail"
            type="email"
            placeholder="Ej: ventas@mimarca.com"
          />
        </div>

        <button
          type="submit"
          className="btn btn--primary btn--full"
          style={{ marginTop: "var(--space-md)" }}
        >
          <Save size={16} /> Guardar Configuración
        </button>
      </form>

      {showToast && (
        <div className="toast">✅ Marca actualizada correctamente</div>
      )}
    </div>
  );
}
