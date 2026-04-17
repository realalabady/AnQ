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
        className="fixed top-4 left-2 sm:left-12 z-50 hover:opacity-80 transition"
      >
        <picture>
          <source media="(min-width: 640px)" srcSet="/Cypher horizen.png" />
          <img
            src="/Cypher mobile.png"
            alt="Cypher"
            className="h-16 sm:h-2 md:h-36 w-auto"
          />
        </picture>
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
