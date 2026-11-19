import { useEffect } from "react";
import useBreakpoint from "./useBreakpoint.js";

// Each Framer page sets its own `html body { background }` (with a phone override on some pages).
export default function useBodyBackground(desktop, phone = desktop) {
  const bp = useBreakpoint();
  const value = bp === "phone" ? phone : desktop;
  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = value;
    return () => { document.body.style.background = prev; };
  }, [value]);
}
