import { useSyncExternalStore } from "react";

// Framer breakpoints for this site: Desktop >= 1400, Tablet 810–1399.98, Phone < 810.
const get = () => {
  const w = window.innerWidth;
  return w >= 1400 ? "desktop" : w >= 810 ? "tablet" : "phone";
};
const subscribe = (cb) => {
  window.addEventListener("resize", cb);
  return () => window.removeEventListener("resize", cb);
};
export default function useBreakpoint() {
  return useSyncExternalStore(subscribe, get, () => "desktop");
}
