// Iconos vectoriales finos para cada sistema (sin librerías externas)
export function SysIcon({ type, size = 24, color = "currentColor" }) {
  const s = { width: size, height: size, fill: "none", stroke: color, strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (type) {
    case "gear":
      return (
        <svg viewBox="0 0 24 24" {...s}>
          <circle cx="12" cy="12" r="3.2" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
        </svg>
      );
    case "grid":
      return (
        <svg viewBox="0 0 24 24" {...s}>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" fill={color} stroke="none">
          <path d="M12 2 L13.4 9.2 L21 11 L13.4 12.8 L12 22 L10.6 12.8 L3 11 L10.6 9.2 Z" />
        </svg>
      );
    case "cells":
      return (
        <svg viewBox="0 0 24 24" {...s}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
        </svg>
      );
    default:
      return null;
  }
}
