import { useEffect, useRef } from "react";

// Fondo carbón + partículas ámbar flotando. Se usa en todas las pantallas.
export default function Background() {
  const ref = useRef(null);
  useEffect(() => {
    const cv = ref.current;
    const x = cv.getContext("2d");
    let W, H, raf;
    const ps = [];
    for (let i = 0; i < 70; i++)
      ps.push({ x: Math.random(), y: Math.random(), z: Math.random() * 0.6 + 0.2, s: Math.random() * 1.3 + 0.3 });
    const resize = () => { W = cv.width = window.innerWidth; H = cv.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    const loop = () => {
      x.clearRect(0, 0, W, H);
      x.fillStyle = "#ffcb8a";
      ps.forEach((p) => {
        p.y -= 0.0003 * p.z;
        if (p.y < 0) p.y = 1;
        x.globalAlpha = p.z * 0.45;
        x.beginPath();
        x.arc(p.x * W, p.y * H, p.s, 0, 7);
        x.fill();
      });
      x.globalAlpha = 1;
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <>
      <div className="idp-bg" />
      <div className="idp-fog" />
      <canvas ref={ref} style={{ position: "fixed", inset: 0, zIndex: 2 }} />
      <div className="cn tl" /><div className="cn tr" /><div className="cn bl" /><div className="cn br" />
      <div className="idp-vig" />
    </>
  );
}
