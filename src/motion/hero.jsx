import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { distance, duration, ease, scale, stagger } from "./tokens.js";

// Word-by-word reveal. Words are inline-blocks so they can move; the spaces between
// them stay plain text so wrapping, kerning and line width are unchanged.
export function RevealWords({ text, start = 0, step = stagger.words, rise = distance.lg }) {
  const words = String(text).split(" ");
  return words.map((word, i) => [
    i > 0 ? " " : null,
    <motion.span
      key={i}
      style={{ display: "inline-block", whiteSpace: "pre" }}
      initial={{ opacity: 0, y: rise }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: duration.entrance, ease: ease.out, delay: start + i * step }}
    >
      {word}
    </motion.span>,
  ]);
}

// Timeline for the home hero: intro words, then headline words, then the portrait.
export function heroTimeline(intro, lines) {
  const introWords = String(intro).split(" ").length;
  const headlineStart = stagger.heroDelay + introWords * stagger.introWords;
  let offset = headlineStart;
  const lineStarts = lines.map((line) => {
    const s = offset;
    offset += String(line).split(" ").length * stagger.words;
    return s;
  });
  return { introStart: stagger.heroDelay, lineStarts, photoStart: offset };
}

export const heroPhotoMotion = (delay) => ({
  initial: { opacity: 0, scale: scale.enterFrom, y: distance.md },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: { duration: duration.slowEntrance, ease: ease.out, delay },
});

// Scroll parallax for the hero: text drifts up fastest and fades, the portrait a bit
// slower, the background slowest — so the layers separate as you scroll away.
export function useHeroParallax(ref) {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const p = distance.parallax;
  return {
    text: {
      y: useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -p.text]),
      opacity: useTransform(scrollYProgress, [0, 0.75], [1, reduce ? 1 : 0]),
    },
    photo: { y: useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -p.photo]) },
    bg: { y: useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : p.bg]) },
  };
}
