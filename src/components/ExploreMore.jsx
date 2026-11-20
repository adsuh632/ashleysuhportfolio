import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { css, duration, scale } from "../motion/tokens.js";
import "./ExploreMore.css";

// "Explore more" block, matching the one at the bottom of the case studies
// (same divider, heading, 16:10 cards, title/subtitle styles and hover).
// Used on FilmReel, so it follows FilmReel's theme rule: the site toggle if set,
// otherwise the system light/dark setting.

const LIGHT = { bg: "rgb(255, 255, 255)", divider: "rgb(234, 234, 234)", heading: "rgb(17, 17, 17)", title: "rgb(17, 17, 17)", titleRest: 0.49, sub: "rgb(107, 107, 107)", surface: "rgb(243, 243, 243)" };
const DARK = { bg: "rgb(21, 21, 21)", divider: "rgb(44, 44, 46)", heading: "rgb(245, 245, 247)", title: "rgb(245, 245, 247)", titleRest: 0.54, sub: "rgb(161, 161, 170)", surface: "rgb(31, 31, 31)" };

function useFilmTheme() {
  const get = () => {
    const t = document.documentElement.dataset.theme;
    if (t === "light" || t === "dark") return t;
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };
  const [theme, setTheme] = useState(get);
  useEffect(() => {
    const update = () => setTheme(get());
    const mo = new MutationObserver(update);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
    mq?.addEventListener?.("change", update);
    return () => { mo.disconnect(); mq?.removeEventListener?.("change", update); };
  }, []);
  return theme;
}

export default function ExploreMore({ heading = "Explore more", projects }) {
  const c = useFilmTheme() === "dark" ? DARK : LIGHT;
  return (
    <section
      className="explore"
      style={{
        background: c.bg,
        "--ex-divider": c.divider,
        "--ex-heading": c.heading,
        "--ex-title": c.title,
        "--ex-title-rest": c.titleRest,
        "--ex-sub": c.sub,
        "--ex-surface": c.surface,
        "--ex-dur": css.ms(duration.hover),
        "--ex-zoom-dur": css.ms(duration.entrance),
        "--ex-ease": css.ease,
        "--ex-zoom": scale.imageZoom,
      }}
    >
      <div className="explore-inner">
        <div className="explore-divider" />
        <h2 className="explore-heading">{heading}</h2>
        <div className="explore-grid" style={{ "--ex-cols": Math.min(projects.length, 3) }}>
          {projects.map((p) => (
            <Link key={p.to} to={p.to} className="explore-card">
              <div className="explore-media">
                <img src={p.image} alt="" loading="lazy" decoding="async" />
              </div>
              <div className="explore-title">
                <span className="explore-bar" aria-hidden="true" />
                <span className="explore-title-text">{p.title}</span>
              </div>
              {p.subtitle ? <div className="explore-sub">{p.subtitle}</div> : null}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
