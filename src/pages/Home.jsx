import { Hero } from "../ported/Home.jsx";
import useBodyBackground from "../useBodyBackground.js";
import SiteNav from "../components/SiteNav.jsx";
import CaseStudies from "../components/case-studies/CaseStudies.jsx";
import Footer from "../components/Footer.jsx";
import navProps from "../data/navMain.js";
import heroProps from "../data/homeHero.js";
import projects from "../data/homeProjects.js";
import "./Home.css";

export default function Home() {
  useBodyBackground("none", "rgb(255, 255, 255)");
  return (
    <div className="page-root home">
      <SiteNav props={navProps} sizes={{ tablet: "tablet", phone: "phone" }} />
      <div className="home-row">
        <div className="home-col">
          <div className="full home-hero">
            <Hero {...heroProps} style={{ width: "100%", height: "100%" }} />
          </div>
          <div className="divider" />
          <CaseStudies projects={projects} />
          <Footer />
        </div>
      </div>
    </div>
  );
}
