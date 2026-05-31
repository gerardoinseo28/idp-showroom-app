// Escudo IDP recreado en SVG (ámbar metálico). Escalable y nítido.
export default function Shield({ size = 120 }) {
  return (
    <svg width={size} height={size * 1.2} viewBox="0 0 200 240" style={{ filter: "drop-shadow(0 0 26px rgba(255,157,47,.4))" }}>
      <defs>
        <linearGradient id="idpMetal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffe6b0" />
          <stop offset="0.45" stopColor="#ffb24a" />
          <stop offset="0.55" stopColor="#e8902a" />
          <stop offset="1" stopColor="#ffd28a" />
        </linearGradient>
        <filter id="idpGlow"><feGaussianBlur stdDeviation="2" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <path d="M100 8 L185 40 L185 120 Q185 195 100 232 Q15 195 15 120 L15 40 Z" fill="none" stroke="url(#idpMetal)" strokeWidth="5" filter="url(#idpGlow)" />
      <path d="M100 20 L173 48 L173 118 Q173 183 100 216 Q27 183 27 118 L27 48 Z" fill="none" stroke="url(#idpMetal)" strokeWidth="2" opacity="0.7" />
      <path d="M100 38 L108 74 L126 82 L108 90 L100 126 L92 90 L74 82 L92 74 Z" fill="url(#idpMetal)" filter="url(#idpGlow)" />
      <text x="100" y="170" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="58" fill="url(#idpMetal)" textAnchor="middle" letterSpacing="2">IDP</text>
      <text x="156" y="140" fontFamily="Arial" fontSize="12" fill="url(#idpMetal)" textAnchor="middle">TM</text>
      <text x="100" y="190" fontFamily="Arial" fontWeight="600" fontSize="13" fill="url(#idpMetal)" textAnchor="middle">VEHICLE</text>
      <text x="100" y="204" fontFamily="Arial" fontWeight="600" fontSize="13" fill="url(#idpMetal)" textAnchor="middle">INTEGRITY</text>
      <text x="100" y="218" fontFamily="Arial" fontWeight="600" fontSize="13" fill="url(#idpMetal)" textAnchor="middle">STANDARD</text>
    </svg>
  );
}
