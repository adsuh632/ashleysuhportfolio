// Shared motion tokens — every animation on the site pulls its timing from here
// so the whole thing feels like one system. Durations are in seconds (Framer Motion).

export const duration = {
  micro: 0.18, // presses, small hovers
  hover: 0.25, // card lift, arrow nudge
  page: 0.3, // route transitions (total < 400ms)
  entrance: 0.5, // hero words, scroll reveals
  slowEntrance: 0.6, // hero portrait
  zoom: 0.6, // image zoom inside a clipped frame (slow on purpose)
};

export const ease = {
  out: [0.22, 1, 0.36, 1], // default ease-out for everything
};

export const stagger = {
  children: 0.08, // gap between staggered siblings (cards, reveal batches)
  words: 0.06, // hero headline, per word
  introWords: 0.035, // hero intro line, per word
  heroDelay: 0.1, // pause before the hero starts
  revealMax: 6, // cap on how many items in one scroll batch get extra delay
};

export const distance = {
  nudge: 2, // arrow / icon nudges
  lift: 3, // card lift on hover
  sm: 8, // page transitions
  md: 16, // hero lines, scroll reveals
  lg: 24, // hero words, cards entering
  parallax: { text: 120, photo: 60, bg: 70 }, // hero scroll parallax travel (px)
};

export const scale = {
  hover: 1.02,
  press: 0.97,
  enterFrom: 0.96, // hero portrait entrance
  imageZoom: 1.03,
};

export const viewport = { once: true, amount: 0.2 };

// Ready-made transitions
export const transition = {
  micro: { duration: duration.micro, ease: ease.out },
  hover: { duration: duration.hover, ease: ease.out },
  entrance: { duration: duration.entrance, ease: ease.out },
  page: { duration: duration.page / 2, ease: ease.out }, // each half (exit, enter)
};

// CSS equivalents for inline/CSS transitions (same numbers, CSS syntax)
export const css = {
  ease: `cubic-bezier(${ease.out.join(",")})`,
  ms: (s) => `${Math.round(s * 1000)}ms`,
};

// Only real mice/trackpads get hover effects; touch gets press feedback only.
export const isFinePointerEvent = (e) => e.pointerType === "mouse";
