// src/App.tsx
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { Portfolio } from "./pages/Portfolio";
import { Tutoring } from "./pages/Tutoring";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/tutoring" element={<Tutoring />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
