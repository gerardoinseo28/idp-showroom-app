import { useState, useEffect } from "react";
import Background from "../components/Background";
import Shield from "../components/Shield";
import { SYSTEMS } from "../data/systems";

// Modo Pitch: presentación interactiva. Flechas ← → o tap para avanzar.
export default function Pitch({ onExit }) {
  const slides = [
    { type: "cover" },
    ...SYSTEMS.map((s) => ({ type: "system", s })),
    { type: "close" },
  ];
  const [i, setI] = useState(0);
  const next = () => setI((v) => Math.min(v + 1, slides.length - 1));
  const prev = () => setI((v) => Math.max(v - 1, 0));

  useEffect(() => {
    const k = (e) => { if (e.key === "ArrowRight") next(); if (e.key === "ArrowLeft") prev(); if (e.key === "Escape") onExit(); };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  const sl = slides[i];

  return (
    <div style={{ position: "relative", minHeight: "100vh", cursor: "pointer" }} onClick={next}>
      <Background />
      <button onClick={(e) => { e.stopPropagation(); onExit(); }} className="idp-btn"
        style={{ position: "fixed", top: 24, right: 24, zIndex: 40, padding: "8px 16px", fontSize: 12 }}>✕ SALIR</button>

      <div style={{ position: "relative", zIndex: 4, minHeight: "100vh", display: "grid", placeItems: "center", padding: 40, textAlign: "center" }}>
        {sl.type === "cover" && (
          <div style={{ animation: "idpFade .6s both" }}>
            <Shield size={150} />
            <div className="mono" style={{ marginTop: 24, fontSize: 12, letterSpacing: 6, color: "var(--amber)" }}>VEHICLE INTEGRITY STANDARD</div>
            <h1 className="cond" style={{ fontSize: "clamp(40px,7vw,84px)", fontWeight: 700, marginTop: 16, lineHeight: 1 }}>
              El ecosistema<br /><span style={{ color: "var(--amber)", textShadow: "0 0 50px rgba(255,157,47,.6)" }}>de alta precisión</span>
            </h1>
            <div style={{ marginTop: 30, color: "var(--dim)" }} className="mono">TAP O → PARA AVANZAR</div>
          </div>
        )}

        {sl.type === "system" && (
          <div style={{ animation: "idpFade .5s both", maxWidth: 900 }}>
            <div className="mono" style={{ fontSize: 12, letterSpacing: 4, color: sl.s.color }}>{sl.s.code} · {sl.s.division}</div>
            <h1 className="cond" style={{ fontSize: "clamp(44px,8vw,96px)", fontWeight: 700, color: sl.s.color, lineHeight: 1, textShadow: `0 0 50px ${sl.s.glow}` }}>
              {sl.s.name}
            </h1>
            <p style={{ fontSize: "clamp(17px,2.4vw,24px)", color: "var(--txt)", marginTop: 20, fontWeight: 300, lineHeight: 1.5 }}>{sl.s.pitch}</p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: 30 }}>
              {sl.s.metrics.map((m, k) => (
                <div key={k} style={{ minWidth: 130, border: `1px solid ${sl.s.color}44`, padding: "14px 20px", background: "var(--panel)" }}>
                  <div className="mono" style={{ fontSize: 9, letterSpacing: 2, color: "var(--dim)" }}>{m.k}</div>
                  <div className="cond" style={{ fontSize: 30, fontWeight: 700, color: sl.s.color }}>{m.v}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {sl.type === "close" && (
          <div style={{ animation: "idpFade .6s both" }}>
            <Shield size={120} />
            <h1 className="cond" style={{ fontSize: "clamp(36px,6vw,72px)", fontWeight: 700, marginTop: 20 }}>Hablemos.</h1>
            <p style={{ color: "var(--dim)", fontSize: 18, marginTop: 12 }}>Gerardo Inseo · Fundador & CEO</p>
            <button onClick={(e) => { e.stopPropagation(); onExit(); }} className="idp-btn solid" style={{ marginTop: 30 }}>VOLVER AL ECOSISTEMA</button>
          </div>
        )}
      </div>

      {/* progreso */}
      <div style={{ position: "fixed", bottom: 28, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 8, zIndex: 40 }}>
        {slides.map((_, k) => (
          <span key={k} style={{ width: k === i ? 26 : 8, height: 8, borderRadius: 4, background: k === i ? "var(--amber)" : "rgba(255,255,255,.25)", transition: ".3s" }} />
        ))}
      </div>
    </div>
  );
}
