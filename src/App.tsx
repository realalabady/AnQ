import { DottedSurface } from "./components/ui/dotted-surface";
import { Footer } from "./components/ui/footer-section";
import { NavBar } from "./components/ui/tubelight-navbar";
import { Briefcase, FileText, Home, User } from "lucide-react";
import "./App.css";

function App() {
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
        <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
          <div className="max-w-4xl">
            <h1 className="font-black text-white text-4xl sm:text-6xl lg:text-7xl leading-tight tracking-tight">
              Design the <span className="text-[#9A9A9A]">Future</span>
              <br />
              Build Today
            </h1>
            <p className="mt-6 text-[#7A7A7A] text-base sm:text-lg leading-relaxed">
              A minimal, cinematic SaaS platform engineered for teams who want
              clarity, velocity, and a premium sci‑fi experience.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
