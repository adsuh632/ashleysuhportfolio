import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./styles/global.css";
import ScrollManager from "./components/ScrollManager.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";
import FilmReel from "./pages/FilmReel.jsx";
import TinuAI from "./pages/TinuAI.jsx";
import Claws from "./pages/Claws.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/filmreelpw" element={<FilmReel />} />
        <Route path="/tinu-ai" element={<TinuAI />} />
        <Route path="/claws" element={<Claws />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
