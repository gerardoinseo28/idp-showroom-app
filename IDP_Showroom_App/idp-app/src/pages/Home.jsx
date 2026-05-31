import { useState } from "react";
import Background from "../components/Background";
import Shield from "../components/Shield";
import { SysIcon } from "../components/SysIcon";
import { SYSTEMS, INTRO_VIDEO, CONTACT } from "../data/systems";

function toEmbed(url) {
  if (!url) return "";
  if (url.includes("/embed/")) return url + (url.includes("?") ? "&" : "?") + "autoplay=1&mute=1&controls=0";
  const yt = url.match(/(?:youtu\.be\/|v=)([\w-]{11})/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}?autoplay=1&mute=1&controls=0`;
  return url;
}

export default function Home({ onSelect, onPitch }) {
  const [intro, setIntro] = useState(!!INTRO_VIDEO);

  if (intro) {
    return (
      <div style={{ position: "fixed", inset: 0, background: "#000", zIndex: 100 }}>
        <iframe src={toEmbed(INTRO_VIDEO)} title="intro" allow="autoplay; encrypted-media"
          style={{ width: "100%", height: "100%", border: 0, pointerEvents: "none" }} />
        <button onClick={() => setIntro(false)} className="idp-btn"
          style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", zIndex: 101 }}>
          ENTRAR AL ECOSISTEMA →
        </button>
      </div>
    );
  }

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Background />
      <div style={{ position: "relative", zIndex: 4, minHeight: "100vh", display: "flex", flexDirection: "column", padding: "28px clamp(20px,5vw,44px)" }}>
        {/* HUD top */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", animation: "idpFade 1s .2s both" }}>
          <div className="mono" style={{ fontSize: 10, letterSpacing: 3, color: "var(--dim)" }}>
            <span style={{ color: "var(--amber)" }}>● ENLACE ESTABLECIDO</span> · 04/04 SISTEMAS
          </div>
          <div className="mono" style={{ fontSize: 10, letterSpacing: 3, color: "var(--dim)" }}>MK-1 · 2026</div>
        </div>

        {/* centro */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "30px 0" }}>
          <div style={{ animation: "idpPop 1.1s .3s both" }}><Shield size={130} /></div>
          <div className="mono" style={{ marginTop: 22, fontSize: 11, letterSpacing: 6, color: "var(--amber)", animation: "idpFade .8s .9s both" }}>
            VEHICLE INTEGRITY STANDARD
          </div>
          <h2 className="cond" style={{ fontWeight: 300, fontSize: "clamp(30px,4.6vw,52px)", lineHeight: 1.05, marginTop: 12, animation: "idpFade .9s 1.1s both" }}>
            Cuatro sistemas.<br />
            <b style={{ fontWeight: 700, color: "var(--amber)", textShadow: "0 0 44px rgba(255,157,47,.55)" }}>Un ecosistema</b> de precisión.
          </h2>
          <p style={{ marginTop: 14, color: "var(--dim)", maxWidth: 480, fontSize: 14, fontWeight: 300, animation: "idpFade .9s 1.3s both" }}>
            Elegí la división por la que querés entrar. Cada sistema corre con su propia identidad y su propio panel en tiempo real.
          </p>

          {/* orbes */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: 14, marginTop: 42, width: "min(92vw,880px)", animation: "idpFade 1s 1.5s both" }}>
            {SYSTEMS.map((s) => (
              <button key={s.id} onClick={() => onSelect(s.id)} className="node-card"
                style={{ position: "relative", textAlign: "center", padding: "22px 12px 20px",
                  border: `1px solid ${s.color}28`, background: "linear-gradient(160deg,rgba(26,20,16,.7),rgba(8,6,5,.7))",
                  clipPath: "polygon(0 0,100% 0,100% calc(100% - 14px),calc(100% - 14px) 100%,0 100%)",
                  transition: ".3s", "--c": s.color, "--cg": s.glow }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.borderColor = s.color; e.currentTarget.style.boxShadow = `0 0 26px ${s.glow}`; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.borderColor = `${s.color}28`; e.currentTarget.style.boxShadow = ""; }}>
                <Orb color={s.color} glow={s.glow} icon={s.icon} />
                <div className="mono" style={{ fontSize: 9, letterSpacing: 2, color: s.color, opacity: .85 }}>{s.code}</div>
                <div className="cond" style={{ fontWeight: 700, fontSize: 18, letterSpacing: 1, marginTop: 3 }}>{s.name.replace("IDP ", "")}</div>
                <div style={{ fontSize: 11, color: "var(--dim)", marginTop: 4, minHeight: 28 }}>{s.tagline.split("·")[0]}</div>
                <div className="mono" style={{ marginTop: 9, fontSize: 8, letterSpacing: 1, color: s.color, display: "inline-flex", gap: 5, alignItems: "center" }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: s.color, boxShadow: `0 0 7px ${s.color}`, animation: "idpPulse 1.5s infinite" }} />
                  {s.live}
                </div>
              </button>
            ))}
          </div>

          <button onClick={onPitch} className="idp-btn" style={{ marginTop: 30, animation: "idpFade 1s 1.7s both" }}>
            ▶ MODO PITCH
          </button>
        </div>

        {/* footer */}
        <div style={{ display: "flex", justifyContent: "space-between", animation: "idpFade 1s 1.9s both" }}>
          <span className="mono" style={{ fontSize: 10, letterSpacing: 2, color: "var(--dim)" }}>INGENIERÍA POR G. INSEO</span>
          <span className="mono" style={{ fontSize: 10, letterSpacing: 2, color: "var(--dim)" }}>BUILD 0xA7</span>
        </div>
      </div>
    </div>
  );
}

function Orb({ color, glow, icon }) {
  return (
    <div style={{ width: 62, height: 62, margin: "0 auto 14px", borderRadius: "50%", position: "relative", display: "grid", placeItems: "center",
      border: `1px solid ${color}`, boxShadow: `0 0 22px ${glow}, inset 0 0 18px ${glow}`,
      background: "radial-gradient(circle at 40% 35%,rgba(255,255,255,.14),transparent 55%)" }}>
      <div style={{ position: "absolute", inset: -7, border: `1px solid ${color}`, borderRadius: "50%", opacity: .3, animation: "idpSpin 7s linear infinite" }} />
      <div style={{ position: "absolute", inset: -7, borderTop: `1px solid ${color}`, borderRadius: "50%", animation: "idpSpin 3.5s linear infinite reverse" }} />
      <SysIcon type={icon} size={24} color={color} />
    </div>
  );
}
