import { duration, distance, ease, scale, stagger } from "./tokens.js";

// The hero entrance plays on the first visit of a browser session only.
const KEY = "hero-entrance-played";
export function shouldPlayHeroEntrance() {
  try {
    return sessionStorage.getItem(KEY) !== "1";
  } catch {
    return true;
  }
}
export function markHeroEntrancePlayed() {
  try {
    sessionStorage.setItem(KEY, "1");
  } catch {}
}

// Props for the i-th element in the hero sequence (intro, line 1, line 2, …).
export function heroText(i, play) {
  return {
    initial: play ? { opacity: 0, y: distance.md } : false,
    animate: { opacity: 1, y: 0 },
    transition: { duration: duration.entrance, ease: ease.out, delay: i * stagger.children },
  };
}

export function heroPhoto(i, play) {
  return {
    initial: play ? { opacity: 0, scale: scale.enterFrom } : false,
    animate: { opacity: 1, scale: 1 },
    transition: { duration: duration.entrance, ease: ease.out, delay: i * stagger.children },
  };
}
