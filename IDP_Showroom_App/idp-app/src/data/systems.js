// ============================================================
//  IDP · CONFIGURACIÓN CENTRAL
//  Editá SOLO este archivo para cambiar textos, datos, contacto,
//  y los links de tus videos/fotos. Todo lo demás se actualiza solo.
// ============================================================

export const CONTACT = {
  whatsapp: "5493415041807",            // sin + ni espacios
  whatsappLabel: "+54 341 504 1807",
  email: "contacto@idp.com",            // cambialo por tu email real
  founder: "Gerardo Inseo · Fundador & CEO",
};

// Mensaje pre-cargado de WhatsApp por sistema
const wa = (sys) =>
  `Hola IDP, quiero más información sobre el sistema ${sys}. Me gustaría coordinar una reunión.`;

export const SYSTEMS = [
  {
    id: "smart",
    code: "SYS-01",
    name: "IDP SMART",
    tagline: "S.I.T. · Integridad técnica · OBD2 en vivo",
    division: "DIVISIÓN INTELIGENTE",
    color: "#ffb347",
    glow: "rgba(255,179,71,.32)",
    icon: "gear",
    live: "OBD2 EN VIVO",
    // ====== TUS MEDIOS (pegá los links acá) ======
    // Subí tus videos a YouTube (no listado) o Drive y pegá el link de embed.
    // Ejemplo YouTube: https://www.youtube.com/embed/XXXXXXXX
    videos: [
      { title: "Tablero S.I.T. en vivo", url: "" },     // XRecorder_20260420_02
      { title: "Mantenimiento preventivo", url: "" },   // XRecorder_20260521_01
      { title: "Carga y picos de tensión", url: "" },   // XRecorder_20260429_02
    ],
    photos: ["", "", "", "", ""], // pegá hasta 5 URLs de imágenes
    // ====== PANEL DE CAPACIDADES (módulos encendidos) ======
    metrics: [
      { k: "KILOMETRAJE TOTAL", v: "203.373" },
      { k: "S.I.T. INTEGRIDAD", v: "85%", ok: true },
      { k: "AUTONOMÍA", v: "850 km" },
      { k: "MOTOR TEMP", v: "90°C" },
    ],
    modules: [
      { name: "OBD2 en tiempo real", on: true },
      { name: "S.I.T. System Integrity", on: true },
      { name: "Optimizador de combustible", on: true },
      { name: "Sistema Auto-PSI (OEM)", on: true },
      { name: "TPMS · Presión de neumáticos", on: true },
      { name: "IDP Engine Advisor", on: true },
      { name: "Predicción de frenos", on: true },
      { name: "Mapa satelital (Leaflet)", on: true },
      { name: "P.I.M. · Pasaporte de Integridad", on: true },
      { name: "AI Virtual Engineering", on: true },
    ],
    pitch: "El único sistema con algoritmo de decisión certificado. Convierte cualquier vehículo en una unidad de integridad monitoreada, blindando la garantía de fábrica y maximizando el valor de reventa.",
    waText: wa("IDP SMART"),
  },
  {
    id: "global",
    code: "SYS-02",
    name: "IDP GLOBAL",
    tagline: "Mi flota privada · gestión soberana",
    division: "DIVISIÓN GLOBAL",
    color: "#ff8a1e",
    glow: "rgba(255,138,30,.32)",
    icon: "grid",
    live: "7 ACTIVOS",
    videos: [
      { title: "Dashboard de flota", url: "" },         // XRecorder_20260508_01
      { title: "Telemetría IA en vivo", url: "" },      // XRecorder_20260501_01
      { title: "Vigía protector de motor", url: "" },   // XRecorder_20260422_01
    ],
    photos: ["", "", "", "", ""],
    metrics: [
      { k: "CAPITAL PROTEGIDO", v: "USD 12.450", ok: true },
      { k: "VEHÍCULOS ACTIVOS", v: "7" },
      { k: "SALUD DE FLOTA", v: "98%", ok: true },
      { k: "ROI PROYECTADO", v: "+24% anual", ok: true },
    ],
    modules: [
      { name: "Telemetría IA en vivo", on: true },
      { name: "Mecánico Virtual (chat IA)", on: true },
      { name: "Bóveda digital", on: true },
      { name: "Billetera de flota $250/km", on: true },
      { name: "Score de conducción", on: true },
      { name: "Auditoría fiscal IA", on: true },
      { name: "Certificado IDP", on: true },
      { name: "Bitácora del dominio (inalterable)", on: true },
      { name: "Generar documento de venta", on: true },
      { name: "Multi-idioma (ES/EN/PT/AR/IT)", on: true },
    ],
    pitch: "Tu flota como un activo soberano. Capital protegido, historial inalterable por dominio y auditoría fiscal automática. Cada vehículo se vuelve un certificado de confianza.",
    waText: wa("IDP GLOBAL"),
  },
  {
    id: "stark",
    code: "SYS-03",
    name: "IDP STARK",
    tagline: "EV de alta gama · rendimiento de reactor",
    division: "DIVISIÓN STARK",
    color: "#ffc24a",
    glow: "rgba(255,194,74,.36)",
    icon: "star",
    live: "SOH 99%",
    videos: [
      { title: "HUD reactor en vivo", url: "" },        // XRecorder_20260501_02
    ],
    photos: ["", "", "", "", ""],
    metrics: [
      { k: "SALUD (SOH)", v: "99%", ok: true },
      { k: "RANGO MÁX", v: "585 km" },
      { k: "SALIDA REACTOR", v: "A+", ok: true },
      { k: "TEMP NÚCLEO", v: "32°C", ok: true },
    ],
    modules: [
      { name: "HUD de empuje en tiempo real", on: true },
      { name: "Salida de reactor (Regen)", on: true },
      { name: "Protocolo P.I.M.", on: true },
      { name: "Optimizador ARC", on: true },
      { name: "Re-mapeo motor", on: true },
      { name: "Diagnóstico S.I.T.", on: true },
      { name: "Reservas de energía", on: true },
    ],
    pitch: "Performance de vehículo eléctrico de alta gama llevada a precisión de reactor. Salud, rango y empuje monitoreados al instante, con optimización en tiempo real.",
    waText: wa("IDP STARK"),
  },
  {
    id: "fleet",
    code: "SYS-04",
    name: "IDP FLEET EV",
    tagline: "Panel de flota 100% eléctrica",
    division: "DIVISIÓN EV · FLEET OPS",
    color: "#ff7a1a",
    glow: "rgba(255,122,26,.32)",
    icon: "cells",
    live: "8/12 ONLINE",
    videos: [{ title: "Panel de flota EV", url: "" }],
    photos: ["", "", "", "", ""],
    metrics: [
      { k: "FLOTA ACTIVA", v: "8 / 12" },
      { k: "UPTIME FLOTA", v: "94.2%", ok: true },
      { k: "SOH PROMEDIO", v: "91.4%", ok: true },
      { k: "ALERTAS ACTIVAS", v: "3" },
    ],
    modules: [
      { name: "Estado individual por vehículo", on: true },
      { name: "Monitoreo de batería (SOC/SOH)", on: true },
      { name: "Análisis de conducción", on: true },
      { name: "Inteligencia artificial", on: true },
      { name: "NOC · Centro de operaciones", on: true },
      { name: "TCO · Costo total de propiedad", on: true },
      { name: "Digital Twin", on: true },
    ],
    pitch: "Control total de tu flota eléctrica desde un solo panel. Cada unidad con su salud de batería, conductor y estado en vivo, más gemelo digital para anticipar todo.",
    waText: wa("IDP FLEET EV"),
  },
];

// Video de intro cinematográfico (pegá tu link de Gemini/YouTube/Drive)
export const INTRO_VIDEO = ""; // si lo dejás vacío, arranca directo en la entrada
