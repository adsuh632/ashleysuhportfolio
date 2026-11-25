import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { distance, stagger, transition, viewport } from "../../motion/tokens.js";
import TilePattern from "./TilePattern.jsx";

const SIZES = {
  half: "(min-width: 1380px) 610px, (min-width: 768px) 46vw, 100vw",
  full: "(min-width: 1380px) 760px, (min-width: 1024px) 54vw, 100vw",
};

function Arrow() {
  return (
    <svg className="cs-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Preview({ image, sizes, hover = false }) {
  const { crop, width, height } = image;
  const zoom = crop && {
    inset: "auto",
    width: `${(width / crop.w) * 100}%`,
    height: "auto",
    maxWidth: "none",
    left: `${(-crop.x / crop.w) * 100}%`,
    top: `${(-crop.y / crop.h) * 100}%`,
  };
  return (
    <img
      style={zoom}
      className={hover ? "cs-img cs-img--hover" : "cs-img"}
      src={image.src}
      srcSet={image.srcSet}
      sizes={image.srcSet ? sizes : undefined}
      width={image.width}
      height={image.height}
      alt=""
      loading="lazy"
      decoding="async"
    />
  );
}

export default function CaseStudyCard({ project, index = 0 }) {
  const { title, description, company, year, link, newTab, accent, tile, tags, image, hoverImage, cta = "Read", ctaBelow = false } = project;
  const span = project.span === "full" ? "full" : "half";
  const tagList = (Array.isArray(tags) ? tags : (tags || "").split(",")).map((t) => t.trim()).filter(Boolean);
  // a cue only: the whole card is the link
  const button = <span className={`cs-cta${ctaBelow ? " cs-cta--below" : ""}`}><span className="cs-cta-label" data-label={cta}>{cta}</span><Arrow /></span>;
  return (
    <motion.li
      className={`cs-cell cs-cell--${span}`}
      data-no-reveal=""
      initial={{ opacity: 0, y: distance.lg }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ ...viewport, amount: 0.1 }}
      transition={{ ...transition.entrance, delay: (index % 2) * stagger.children }}
    >
      <Link
        to={link}
        {...(newTab ? { target: "_blank", rel: "noopener" } : {})}
        className={`cs-card cs-card--${span}${hoverImage ? "" : " cs-card--lift"}`}
        style={{ "--accent": accent }}
      >
        <div className="cs-text">
          <div className="cs-head">
            <p className="cs-eyebrow">{[company, year].filter(Boolean).join(" · ")}</p>
            {ctaBelow ? null : button}
          </div>
          <h2 className="cs-title">{title}</h2>
          <p className="cs-desc">{description}</p>
          <ul className="cs-tags">
            {tagList.map((t) => <li key={t} className="cs-tag">{t}</li>)}
          </ul>
          {ctaBelow ? button : null}
        </div>
        <div className="cs-visual">
          <TilePattern shape={tile} seed={index * 97 + 7} />
          <div className="cs-frame" style={{ aspectRatio: `${image.width} / ${image.height}` }}>
            <Preview image={image} sizes={SIZES[span]} />
            {hoverImage ? <Preview image={hoverImage} sizes={SIZES[span]} hover /> : null}
          </div>
        </div>
      </Link>
    </motion.li>
  );
}
