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
        className="fixed top-0 left-2 sm:left-12 z-50 hover:opacity-80 transition"
      >
        <img
          src="/Cypher white-rb.png"
          alt="Cypher"
          className="h-24 sm:h-28 md:h-36 w-auto"
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
