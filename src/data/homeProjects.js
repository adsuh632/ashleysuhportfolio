// Homepage case studies, in display order.
//
// span        "half" or "full" (full = whole row from 768px up; text left / image right from 1024px)
// company     eyebrow text, shown as "COMPANY · YEAR"
// cta         button label, "Read" unless set
// ctaBelow    puts the button under the tags instead of top right
// accent      hover tint and lit tiles
// tile        pattern shape: "film" | "star" | "note" | "dot"
// image       shown whole, never cropped
// hoverImage  optional second image. Leave null to lift the image instead.
//             crop = the part to zoom into, in image pixels (keep it 16:9)

const projects = [
  {
    id: "nasa-suits",
    title: "NASA SUITS",
    description:
      "AR interfaces for NASA's SUITS Challenge, selected for flight testing by NASA astronaut Anne McClain.",
    link: "/claws/",
    newTab: false,
    tags: "AR/VR, Software, Pressurized Rover",
    year: "2025 - Present",
    company: "CLAWS",
    span: "half",
    accent: "#f2631c",
    tile: "star",
    image: {
      src: "/images/tci0tetPHiIPUGUX7CcDdJiCpHk.avif",
      srcSet:
        "/images/tci0tetPHiIPUGUX7CcDdJiCpHk-512.avif 512w,/images/tci0tetPHiIPUGUX7CcDdJiCpHk-1024.avif 1024w,/images/tci0tetPHiIPUGUX7CcDdJiCpHk.avif 1600w",
      width: 1600,
      height: 900,
    },
    hoverImage: { src: "/images/SQm2e4JLbUMlLRE3wM8KC1qmQlA-2048.avif", width: 2048, height: 1152 },
  },
  {
    id: "tinu-ai",
    title: "Preserving context",
    description:
      "A B2B fintech chatbot that keeps the context behind financial decisions when analysts leave.",
    link: "/tinu-ai/",
    newTab: false,
    tags: "Fintech, Desktop, B2B, Top 3",
    year: "2025",
    company: "TinuAI",
    span: "half",
    accent: "#2d6cdf",
    tile: "note",
    image: {
      src: "/images/qRmVWDJI2Rs1PP11we3TiYpMe4.avif",
      srcSet:
        "/images/qRmVWDJI2Rs1PP11we3TiYpMe4-512.avif 512w,/images/qRmVWDJI2Rs1PP11we3TiYpMe4-1024.webp 1024w,/images/qRmVWDJI2Rs1PP11we3TiYpMe4-2048.avif 2048w,/images/qRmVWDJI2Rs1PP11we3TiYpMe4-4096.avif 4096w,/images/qRmVWDJI2Rs1PP11we3TiYpMe4.avif 4800w",
      width: 4800,
      height: 2700,
    },
    hoverImage: { src: "/images/v85qi9PbJifi6exf1ynwrT4EIAY-2048.avif", width: 1920, height: 1080, crop: { x: 0, y: 160, w: 1376, h: 774 } },
  },
  {
    id: "filmreel",
    title: "COMING SOON - FilmReel",
    description:
      "A curator-led streaming and discovery platform for independent and student films, designed end to end and shipped at 4um.",
    link: "/filmreelpw/",
    newTab: false,
    tags: "Product Design, Digital Media, Shipped 2026",
    year: "2026",
    company: "4um",
    span: "full",
    cta: "Preview",
    ctaBelow: true,
    accent: "#2f8f9d",
    tile: "film",
    image: {
      src: "/images/FxmLrjjA61CbHoJI5ZI15GQcY0.avif",
      srcSet:
        "/images/FxmLrjjA61CbHoJI5ZI15GQcY0-512.avif 512w,/images/FxmLrjjA61CbHoJI5ZI15GQcY0-1024.avif 1024w,/images/FxmLrjjA61CbHoJI5ZI15GQcY0.avif 1920w",
      width: 1920,
      height: 1080,
    },
    hoverImage: null, // TODO(asset): second 16:9 image
  },
];

export default projects;
