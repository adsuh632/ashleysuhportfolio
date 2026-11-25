import { useMemo } from "react";

const PITCH = 15;

// Each shape is a small SVG path drawn from the cell's top-left corner (about 8 x 8).
const SHAPES = {
  dot: "m0 4a4 4 0 1 0 8 0a4 4 0 1 0-8 0z",
  film: "m1 0h7q1 0 1 1v6q0 1-1 1h-7q-1 0-1-1v-6q0-1 1-1zm2.5 2.2v3.6l3-1.8z",
  star: "m4 0l1.1 2.9 2.9 1.1-2.9 1.1-1.1 2.9-1.1-2.9-2.9-1.1 2.9-1.1z",
  note: "m1 0h4l3 3v4q0 1-1 1h-6q-1 0-1-1v-6q0-1 1-1zm1 4v1h4v-1z",
};

// Same seed, same pattern: nothing shifts between renders.
function random(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

// The matrix is one <path>, so a card adds a single DOM node however many tiles it has.
// Tiles get denser toward the bottom right (next to the image); a CSS mask fades the rest toward the text.
export default function TilePattern({ shape = "dot", cols = 24, rows = 12, seed = 7 }) {
  const d = useMemo(() => {
    const rand = random(seed);
    let out = "";
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const density = 0.15 + 0.5 * (r / rows) + 0.35 * (c / cols);
        if (rand() < density) out += `M${c * PITCH + 3} ${r * PITCH + 3}${SHAPES[shape] ?? SHAPES.dot}`;
      }
    }
    return out;
  }, [shape, cols, rows, seed]);
  const w = cols * PITCH;
  const h = rows * PITCH;
  return (
    <svg className="cs-tiles" aria-hidden="true" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMaxYMax slice">
      <path d={d} fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}
