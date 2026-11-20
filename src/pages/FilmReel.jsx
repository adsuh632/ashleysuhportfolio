import { FilmReel as FilmReelBody } from "../ported/FilmReel.jsx";
import useBodyBackground from "../useBodyBackground.js";
import SiteNav from "../components/SiteNav.jsx";
import Footer from "../components/Footer.jsx";
import ExploreMore from "../components/ExploreMore.jsx";
import useBreakpoint from "../useBreakpoint.js";
import navProps from "../data/navFilm.js";
import filmProps from "../data/film.js";

// Same two "Explore more" projects the case studies link to (FilmReel's siblings).
const EXPLORE = [
  { title: "NASA SUITS — AR Interfaces", subtitle: "Rover dashboard for lunar missions", to: "/claws/", image: "/images/lYWZkhvg5z2sAa59HJViDy8Ci8-2048.avif" },
  { title: "TinuAI", subtitle: "B2B fintech AI assistant", to: "/tinu-ai/", image: "/images/explore-tinuai.webp" },
];

const TABLET_LAYOUT = { align: "center", contentWidth: 760, imageMaxWidth: 1100, padDesktop: 64, padPhone: 20, padTablet: 50, topSpace: 127 };

export default function FilmReel() {
  useBodyBackground("none", "rgb(255, 255, 255)");
  const bp = useBreakpoint();
  const overrides = bp === "tablet" ? { imageHeight: 560, layout: TABLET_LAYOUT } : bp === "phone" ? { imageHeight: 450 } : {};
  return (
    <div className="page-root film-page">
      <SiteNav props={navProps} sizes={{ tablet: "tablet", phone: "phone" }} />
      <div className="divider" />
      <div className="divider" />
      <div className="full">
        <FilmReelBody {...filmProps} {...overrides} style={{ width: "100%" }} />
      </div>
      <ExploreMore projects={EXPLORE} />
      <Footer />
    </div>
  );
}
