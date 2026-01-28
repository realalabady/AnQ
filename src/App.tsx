import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { DottedSurface } from "./components/ui/dotted-surface";
import { Footer } from "./components/ui/footer-section";
import { NavBar } from "./components/ui/tubelight-navbar";
import { Briefcase, FileText, Home, User } from "lucide-react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const navItems = [
    { name: "Home", url: "#", icon: Home },
    { name: "About", url: "#", icon: User },
    { name: "Projects", url: "#", icon: Briefcase },
    { name: "Resume", url: "#", icon: FileText },
  ];

  return (
    <>
      <DottedSurface />
      <NavBar items={navItems} />
      <div className="app-content relative flex min-h-svh flex-col">
        <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center"></main>
        <Footer />
      </div>
    </>
  );
}

export default App;
