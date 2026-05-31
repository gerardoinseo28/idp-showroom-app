import Background from "../components/Background";
import Shield from "../components/Shield";
import { SysIcon } from "../components/SysIcon";
import MediaDemo from "../components/MediaDemo";
import CapabilityPanel from "../components/CapabilityPanel";
import ContactPanel from "../components/ContactPanel";

export default function SystemPage({ system, onBack }) {
  const c = system.color;
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Background />
      <div style={{ position: "relative", zIndex: 4, maxWidth: 1080, margin: "0 auto", padding: "26px clamp(18px,4vw,40px) 80px" }}>

        {/* top bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
          <button onClick={onBack} className="idp-btn" style={{ padding: "9px 18px", fontSize: 12 }}>← VOLVER</button>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span className="mono" style={{ fontSize: 10, letterSpacing: 2, color: c, display: "inline-flex", gap: 6, alignItems: "center" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: c, boxShadow: `0 0 8px ${c}`, animation: "idpPulse 1.5s infinite" }} />
              {system.code} LIVE
            </span>
            <Shield size={36} />
          </div>
        </div>

        {/* encabezado del sistema */}
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 8, animation: "idpUp .5s both" }}>
          <div style={{ width: 64, height: 64, display: "grid", placeItems: "center", border: `1px solid ${c}`, boxShadow: `0 0 20px ${system.glow}, inset 0 0 16px ${system.glow}`,
            clipPath: "polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px)" }}>
            <SysIcon type={system.icon} size={30} color={c} />
          </div>
          <div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: 3, color: "var(--dim)" }}>{system.division}</div>
            <h1 className="cond" style={{ fontSize: 38, fontWeight: 700, color: c, letterSpacing: 1, textShadow: `0 0 26px ${system.glow}`, lineHeight: 1 }}>
              {system.name}
            </h1>
            <div style={{ color: "var(--txt)", opacity: .85, marginTop: 4, fontSize: 15 }}>{system.tagline}</div>
          </div>
        </div>

        {/* pitch corto */}
        <p style={{ color: "var(--dim)", maxWidth: 720, fontSize: 15, lineHeight: 1.6, margin: "18px 0 30px", animation: "idpUp .5s .1s both" }}>
          {system.pitch}
        </p>

        <div style={{ animation: "idpUp .5s .2s both" }}><MediaDemo system={system} /></div>
        <div style={{ animation: "idpUp .5s .3s both" }}><CapabilityPanel system={system} /></div>
        <div style={{ animation: "idpUp .5s .4s both" }}><ContactPanel system={system} /></div>

        <div style={{ textAlign: "center", marginTop: 50 }}>
          <span className="mono" style={{ fontSize: 10, letterSpacing: 2, color: "var(--dim)" }}>
            IDP · VEHICLE INTEGRITY STANDARD · INGENIERÍA POR G. INSEO
          </span>
        </div>
      </div>
    </div>
  );
}
