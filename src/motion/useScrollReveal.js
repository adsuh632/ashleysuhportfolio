import { useLayoutEffect } from "react";
import { css, duration, distance, stagger } from "./tokens.js";

// Site-wide scroll reveal. On mount it finds each "unit" of content in the page
// (the nearest block-level element around a piece of text, or around an image/video),
// hides it before first paint, and fades + slides it up once it enters the viewport.
// Units that already animate themselves (inline opacity/transform), the nav, the hero,
// fixed/sticky layers and anything marked [data-no-reveal] are left alone.

const SKIP = ".snav, .nav-container, .hs-root, [data-no-reveal], style, script, noscript";
const NOT_UNIT = new Set(["inline", "contents", "none"]);
const TRIGGER = "0px 0px -20% 0px"; // reveal when the top passes 80% of the viewport

function unitFor(el, root) {
  while (el && el !== root) {
    // inside an <svg>, treat the whole drawing's HTML container as the unit
    if (el instanceof SVGElement) { el = el.parentElement; continue; }
    if (!NOT_UNIT.has(getComputedStyle(el).display)) return el;
    el = el.parentElement;
  }
  return null;
}

function collectUnits(root) {
  const units = new Set();
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    if (!n.nodeValue.trim()) continue;
    const u = unitFor(n.parentElement, root);
    if (u) units.add(u);
  }
  root.querySelectorAll("img, video, iframe").forEach((m) => {
    const u = getComputedStyle(m).display === "inline" ? unitFor(m.parentElement, root) : m;
    if (u) units.add(u);
  });
  const all = [...units];
  // keep the innermost units so nested blocks don't animate twice
  return all.filter((u) => !all.some((o) => o !== u && u.contains(o)));
}

function eligible(u) {
  if (u.closest(SKIP)) return false;
  if (u.style.opacity || u.style.transform) return false; // already animated by its component
  const cs = getComputedStyle(u);
  if (cs.position === "fixed" || cs.position === "sticky") return false;
  if (parseFloat(cs.opacity) < 1 || cs.visibility === "hidden") return false;
  if (!u.getClientRects().length) return false;
  return true;
}

export default function useScrollReveal(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || typeof IntersectionObserver === "undefined") return;

    const units = collectUnits(root).filter(eligible);
    units.forEach((u) => u.classList.add("rv"));

    const timers = new Set();
    const finish = (u) => {
      u.classList.remove("rv", "rv-in");
      u.style.removeProperty("--rv-delay");
    };

    const pending = new Set(units);
    const reveal = (targets) => {
      const batch = targets
        .filter((u) => pending.has(u))
        .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
      batch.forEach((u, i) => {
        pending.delete(u);
        io.unobserve(u);
        const delay = Math.min(i, stagger.revealMax) * stagger.children;
        u.style.setProperty("--rv-delay", `${delay}s`);
        u.classList.add("rv-in");
        const t = setTimeout(() => { finish(u); timers.delete(t); }, (delay + duration.entrance) * 1000 + 60);
        timers.add(t);
      });
    };
    const io = new IntersectionObserver(
      (entries) => reveal(entries.filter((e) => e.isIntersecting).map((e) => e.target)),
      { rootMargin: TRIGGER },
    );
    units.forEach((u) => io.observe(u));

    const onScreen = () =>
      [...pending].filter((u) => {
        const r = u.getBoundingClientRect();
        return r.height > 0 && r.top < window.innerHeight && r.bottom > 0;
      });
    // Anything already visible when the page loads comes in with the page.
    reveal(onScreen());
    // At the very bottom of the page nothing can cross the trigger line any more,
    // so reveal whatever is still waiting on screen (e.g. the footer's last lines).
    const atBottom = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) reveal(onScreen());
    };
    window.addEventListener("scroll", atBottom, { passive: true });

    return () => {
      window.removeEventListener("scroll", atBottom);
      io.disconnect();
      timers.forEach(clearTimeout);
      units.forEach(finish);
    };
  }, [rootRef]);
}

// Expose the same numbers to CSS (used by .rv / .rv-in in motion.css)
export function applyMotionCssVars() {
  const s = document.documentElement.style;
  s.setProperty("--motion-entrance", `${duration.entrance}s`);
  s.setProperty("--motion-rise", `${distance.md}px`);
  s.setProperty("--motion-ease", css.ease);
}
