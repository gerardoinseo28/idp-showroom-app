import { useState } from "react";
import { CONTACT } from "../data/systems";

// Panel de contacto con todos los canales: WhatsApp, email, reunión, chat en vivo.
export default function ContactPanel({ system }) {
  const [chatOpen, setChatOpen] = useState(false);
  const [msgs, setMsgs] = useState([
    { from: "idp", text: `Hola, estás hablando con IDP sobre ${system.name}. ¿En qué te puedo ayudar?` },
  ]);
  const [input, setInput] = useState("");

  const waLink = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(system.waText)}`;
  const mailLink = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Consulta " + system.name)}&body=${encodeURIComponent(system.waText)}`;

  const send = () => {
    if (!input.trim()) return;
    // El chat en vivo redirige a WhatsApp con el texto escrito (vos lo respondés ahí)
    const link = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(input)}`;
    setMsgs((m) => [...m, { from: "me", text: input }, { from: "idp", text: "Te redirijo a WhatsApp para seguir la conversación directa…" }]);
    setInput("");
    setTimeout(() => window.open(link, "_blank"), 600);
  };

  const c = system.color;

  return (
    <div style={{ marginTop: 30 }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: 3, color: "var(--dim)", marginBottom: 14 }}>
        SALA DE CONVERSACIÓN DIRECTA
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 12 }}>
        <a className="idp-btn" href={waLink} target="_blank" rel="noreferrer">
          ◉ WHATSAPP
        </a>
        <button className="idp-btn" onClick={() => setChatOpen((v) => !v)}>
          ◉ CHAT EN VIVO
        </button>
        <a className="idp-btn" href={mailLink}>
          ◉ EMAIL
        </a>
        <a className="idp-btn solid" href={waLink} target="_blank" rel="noreferrer">
          ◉ SOLICITAR REUNIÓN
        </a>
      </div>

      {/* Descarga del PDF técnico */}
      <div style={{ marginTop: 14 }}>
        <a className="idp-btn" href={`/IDP_${system.id.toUpperCase()}_ficha.pdf`} download
          style={{ width: "100%", borderStyle: "dashed" }}>
          ⬇ DESCARGAR FICHA TÉCNICA (PDF)
        </a>
      </div>

      {chatOpen && (
        <div style={{ marginTop: 16, border: `1px solid ${c}55`, background: "var(--panel)", padding: 16, animation: "idpUp .3s" }}>
          <div style={{ maxHeight: 220, overflowY: "auto", display: "flex", flexDirection: "column", gap: 10, marginBottom: 12 }}>
            {msgs.map((m, i) => (
              <div key={i} style={{
                alignSelf: m.from === "me" ? "flex-end" : "flex-start",
                maxWidth: "80%", padding: "9px 13px", fontSize: 14,
                background: m.from === "me" ? `${c}22` : "rgba(255,255,255,.04)",
                border: `1px solid ${m.from === "me" ? c + "55" : "rgba(255,255,255,.08)"}`,
                borderRadius: 10, color: "var(--txt)",
              }}>{m.text}</div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Escribí tu mensaje…"
              style={{ flex: 1, padding: "11px 14px", background: "rgba(0,0,0,.4)", border: `1px solid ${c}44`, color: "var(--txt)", outline: "none", fontFamily: "Saira" }}
            />
            <button className="idp-btn solid" onClick={send} style={{ padding: "0 20px" }}>➤</button>
          </div>
        </div>
      )}
    </div>
  );
}
