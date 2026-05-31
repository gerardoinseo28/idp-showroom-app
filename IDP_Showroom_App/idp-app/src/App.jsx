import { useState } from "react";
import Home from "./pages/Home";
import SystemPage from "./pages/SystemPage";
import Pitch from "./pages/Pitch";
import { SYSTEMS } from "./data/systems";
import "./styles.css";

export default function App() {
  const [view, setView] = useState({ name: "home" });

  if (view.name === "pitch") return <Pitch onExit={() => setView({ name: "home" })} />;

  if (view.name === "system") {
    const system = SYSTEMS.find((s) => s.id === view.id);
    return <SystemPage system={system} onBack={() => setView({ name: "home" })} />;
  }

  return (
    <Home
      onSelect={(id) => { window.scrollTo(0, 0); setView({ name: "system", id }); }}
      onPitch={() => setView({ name: "pitch" })}
    />
  );
}
