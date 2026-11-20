import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./styles/global.css";
import "./motion/motion.css";
import { AnimatePresence, MotionConfig } from "framer-motion";
import PageTransition from "./motion/PageTransition.jsx";
import { applyMotionCssVars } from "./motion/useScrollReveal.js";
import ScrollManager from "./components/ScrollManager.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";
import FilmReel from "./pages/FilmReel.jsx";
import TinuAI from "./pages/TinuAI.jsx";
import Claws from "./pages/Claws.jsx";

applyMotionCssVars();

// Route changes: the old page fades out, then the new one fades/slides in.
// (initial stays on: initial={false} would also cancel the hero and card entrances inside the page.)
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/filmreelpw" element={<FilmReel />} />
          <Route path="/tinu-ai" element={<TinuAI />} />
          <Route path="/claws" element={<Claws />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageTransition>
    </AnimatePresence>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* reducedMotion="user": with Reduce Motion on, transforms are skipped and only opacity fades remain */}
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollManager />
        <AnimatedRoutes />
      </BrowserRouter>
    </MotionConfig>
  </React.StrictMode>
);
