import { A_ve as AboutMe } from "../ported/About.jsx";
import useBodyBackground from "../useBodyBackground.js";
import SiteNav from "../components/SiteNav.jsx";
import Footer from "../components/Footer.jsx";
import navProps from "../data/navAbout.js";
import aboutProps from "../data/about.js";

export default function About() {
  useBodyBackground("rgb(245, 251, 255)", "rgb(255, 255, 255)");
  return (
    <div className="page-root about-page">
      <SiteNav props={navProps} sizes={{ tablet: "tablet", phone: "phone" }} />
      <div className="home-row">
        <div className="home-col">
          <div className="full">
            <AboutMe {...aboutProps} style={{ width: "100%" }} />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
