// Ficha de capacidad: métricas en vivo + módulos encendidos (estilo configurador de auto de gama alta)
export default function CapabilityPanel({ system }) {
  const c = system.color;
  return (
    <div style={{ marginTop: 30 }}>
      {/* MÉTRICAS */}
      <div className="mono" style={{ fontSize: 11, letterSpacing: 3, color: "var(--dim)", marginBottom: 12 }}>
        FICHA DE CAPACIDAD · TELEMETRÍA
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 12 }}>
        {system.metrics.map((m, i) => (
          <div key={i} style={{ border: `1px solid ${c}33`, background: "var(--panel)", padding: "14px 16px",
            clipPath: "polygon(0 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%)" }}>
            <div className="mono" style={{ fontSize: 9, letterSpacing: 2, color: "var(--dim)" }}>{m.k}</div>
            <div className="cond" style={{ fontSize: 26, fontWeight: 700, color: m.ok ? c : "var(--txt)", marginTop: 4, textShadow: m.ok ? `0 0 16px ${system.glow}` : "none" }}>
              {m.v}
            </div>
          </div>
        ))}
      </div>

      {/* MÓDULOS ENCENDIDOS */}
      <div className="mono" style={{ fontSize: 11, letterSpacing: 3, color: "var(--dim)", margin: "26px 0 12px" }}>
        MÓDULOS ACTIVOS · {system.modules.filter((m) => m.on).length}/{system.modules.length}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 10 }}>
        {system.modules.map((m, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 14px",
            border: `1px solid ${m.on ? c + "33" : "rgba(255,255,255,.06)"}`, background: m.on ? "rgba(255,157,47,.04)" : "transparent" }}>
            {/* interruptor */}
            <div style={{ width: 34, height: 18, borderRadius: 10, background: m.on ? c : "rgba(255,255,255,.1)", position: "relative", flexShrink: 0, boxShadow: m.on ? `0 0 12px ${system.glow}` : "none", transition: ".3s" }}>
              <div style={{ position: "absolute", top: 2, left: m.on ? 18 : 2, width: 14, height: 14, borderRadius: "50%", background: "#0a0807", transition: ".3s" }} />
            </div>
            <span style={{ fontSize: 14, color: m.on ? "var(--txt)" : "var(--dim)" }}>{m.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
