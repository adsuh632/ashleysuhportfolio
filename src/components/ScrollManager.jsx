import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll to #hash targets once the new page has mounted.
// (Plain route changes reset to the top inside PageTransition, after the old page fades out.)
export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    let tries = 0;
    const t = setInterval(() => {
      const el = document.getElementById(id) || document.querySelector(`[data-framer-name="${id}" i]`);
      if (el || ++tries > 30) {
        clearInterval(t);
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80 });
      }
    }, 50);
    return () => clearInterval(t);
  }, [pathname, hash]);
  return null;
}
