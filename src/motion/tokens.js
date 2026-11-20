// Shared motion tokens — every animation on the site pulls its timing from here
// so the whole thing feels like one system. Durations are in seconds (Framer Motion).

export const duration = {
  micro: 0.18, // presses, small hovers
  hover: 0.25, // card lift, arrow nudge
  page: 0.3, // route transitions (total < 400ms)
  entrance: 0.5, // hero lines, scroll reveals
  zoom: 0.6, // image zoom inside a clipped frame (slow on purpose)
};

export const ease = {
  out: [0.22, 1, 0.36, 1], // default ease-out for everything
};

export const stagger = {
  children: 0.08, // gap between staggered siblings
};

export const distance = {
  nudge: 2, // arrow / icon nudges
  lift: 3, // card lift on hover
  sm: 8, // page transitions
  md: 16, // hero lines, scroll reveals
  lg: 24, // larger blocks (cards) entering
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
};

// CSS equivalents for inline/CSS transitions (same numbers, CSS syntax)
export const css = {
  ease: `cubic-bezier(${ease.out.join(",")})`,
  ms: (s) => `${Math.round(s * 1000)}ms`,
};

// Only real mice/trackpads get hover effects; touch gets press feedback only.
export const isFinePointerEvent = (e) => e.pointerType === "mouse";
