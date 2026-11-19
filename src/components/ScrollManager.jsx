import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Framer does a full page load per route: start at the top, or at #hash if present.
export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      let tries = 0;
      const t = setInterval(() => {
        const el = document.getElementById(id) || document.querySelector(`[data-framer-name="${id}" i]`);
        if (el || ++tries > 20) {
          clearInterval(t);
          if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80 });
        }
      }, 50);
      return () => clearInterval(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
