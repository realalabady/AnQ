import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/ui/page-not-found";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <a
        href="/"
        className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 hover:opacity-80 transition"
      >
        <img
          src="/Cypher rb.png"
          alt="Cypher"
          className="h-16 sm:h-20 md:h-24 w-auto brightness-150 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        />
      </a>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
