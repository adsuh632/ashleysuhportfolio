import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { distance, transition } from "./tokens.js";
import useScrollReveal from "./useScrollReveal.js";

// Wraps one route. Fades/slides in after the previous page has faded out
// (AnimatePresence mode="wait"), ~300ms total. The fixed nav is portaled out of
// this wrapper (see SiteNav) so it doesn't fade or move with the page.
export default function PageTransition({ children }) {
  const ref = useRef(null);
  const { hash } = useLocation();

  // New page starts at the top (hash links are scrolled by ScrollManager).
  useLayoutEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useScrollReveal(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: distance.sm }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -distance.sm }}
      transition={transition.page}
    >
      {children}
    </motion.div>
  );
}
