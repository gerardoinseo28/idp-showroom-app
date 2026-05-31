import { useState } from "react";

// Convierte un link de YouTube normal en embed; deja pasar embeds y drive.
function toEmbed(url) {
  if (!url) return "";
  if (url.includes("/embed/")) return url;
  const yt = url.match(/(?:youtu\.be\/|v=)([\w-]{11})/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`;
  if (url.includes("drive.google.com")) {
    const id = url.match(/[-\w]{25,}/);
    if (id) return `https://drive.google.com/file/d/${id[0]}/preview`;
  }
  return url;
}

export default function MediaDemo({ system }) {
  const c = system.color;
  const videos = (system.videos || []).filter((v) => v.url);
  const photos = (system.photos || []).filter(Boolean);
  const [vi, setVi] = useState(0);
  const [pi, setPi] = useState(0);

  return (
    <div>
      {/* VIDEO PRINCIPAL */}
      <div className="mono" style={{ fontSize: 11, letterSpacing: 3, color: "var(--dim)", marginBottom: 12 }}>
        MODO DEMO · VIDEO EN VIVO
      </div>

      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "#000", border: `1px solid ${c}44`, overflow: "hidden", boxShadow: `0 0 30px ${system.glow}` }}>
        {videos.length ? (
          <iframe
            key={vi}
            src={toEmbed(videos[vi].url)}
            title={videos[vi].title}
            style={{ width: "100%", height: "100%", border: 0 }}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", color: "var(--dim)", textAlign: "center", padding: 20 }}>
            <div>
              <div style={{ fontSize: 38, opacity: .4 }}>▶</div>
              <div className="mono" style={{ fontSize: 11, marginTop: 8, letterSpacing: 2 }}>
                ESPACIO PARA VIDEO · pegá el link en systems.js
              </div>
            </div>
          </div>
        )}
      </div>

      {/* selector de videos */}
      {videos.length > 1 && (
        <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
          {videos.map((v, i) => (
            <button key={i} onClick={() => setVi(i)} className="mono"
              style={{ fontSize: 10, letterSpacing: 1, padding: "7px 12px", border: `1px solid ${i === vi ? c : c + "33"}`, color: i === vi ? c : "var(--dim)", background: i === vi ? c + "18" : "transparent" }}>
              {v.title}
            </button>
          ))}
        </div>
      )}

      {/* CARRUSEL DE FOTOS */}
      {photos.length > 0 && (
        <div style={{ marginTop: 26 }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: 3, color: "var(--dim)", marginBottom: 12 }}>
            GALERÍA · {photos.length} CAPTURAS
          </div>
          <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "#000", border: `1px solid ${c}44`, overflow: "hidden" }}>
            <img src={photos[pi]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <button onClick={() => setPi((pi - 1 + photos.length) % photos.length)} style={navBtn(c, "left")}>‹</button>
            <button onClick={() => setPi((pi + 1) % photos.length)} style={navBtn(c, "right")}>›</button>
            <div style={{ position: "absolute", bottom: 10, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 6 }}>
              {photos.map((_, i) => (
                <span key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: i === pi ? c : "rgba(255,255,255,.3)" }} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const navBtn = (c, side) => ({
  position: "absolute", top: "50%", [side]: 10, transform: "translateY(-50%)",
  width: 40, height: 40, borderRadius: "50%", background: "rgba(0,0,0,.5)",
  border: `1px solid ${c}66`, color: c, fontSize: 22, lineHeight: 1,
});
