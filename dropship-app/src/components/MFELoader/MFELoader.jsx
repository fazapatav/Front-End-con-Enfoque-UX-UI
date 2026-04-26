/**
 * MFELoader — Fallback visual para Suspense boundaries de microfrontends.
 *
 * Se muestra mientras el chunk JS del MFE se descarga (lazy loading).
 * En producción con Module Federation, este sería el estado de carga
 * mientras el bundle remoto se resuelve desde el servidor del MFE.
 */
export default function MFELoader({ name = "módulo" }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 240,
        gap: "var(--space-md)",
        color: "var(--color-text-muted)",
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          border: "3px solid var(--color-border)",
          borderTopColor: "var(--color-primary)",
          borderRadius: "50%",
          animation: "mfe-spin 0.8s linear infinite",
        }}
      />
      <span style={{ fontSize: "var(--font-size-sm)" }}>
        Cargando MFE <strong>{name}</strong>…
      </span>
      <style>{`@keyframes mfe-spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
