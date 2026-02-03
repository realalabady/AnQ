import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/ui/page-not-found";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
