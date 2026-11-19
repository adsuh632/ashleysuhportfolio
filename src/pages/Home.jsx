import { Hero, ProjectGrid } from "../ported/Home.jsx";
import useBodyBackground from "../useBodyBackground.js";
import SiteNav from "../components/SiteNav.jsx";
import Footer from "../components/Footer.jsx";
import useBreakpoint from "../useBreakpoint.js";
import navProps from "../data/navMain.js";
import heroProps from "../data/homeHero.js";
import projectProps from "../data/homeProjects.js";
import "./Home.css";

export default function Home() {
  useBodyBackground("none", "rgb(255, 255, 255)");
  const bp = useBreakpoint();
  return (
    <div className="page-root home">
      <SiteNav props={navProps} sizes={{ tablet: "tablet", phone: "phone" }} />
      <div className="home-row">
        <div className="home-col">
          <div className="full home-hero">
            <Hero {...heroProps} style={{ width: "100%", height: "100%" }} />
          </div>
          <div className="divider" />
          <section className="home-projects" data-framer-name="Projects" id="work">
            <div className="full">
              <ProjectGrid {...projectProps} columns={bp === "desktop" ? projectProps.columns : 1} />
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
}
