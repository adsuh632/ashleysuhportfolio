import { CaseStudy } from "../ported/CaseStudyTinu.jsx";
import useBodyBackground from "../useBodyBackground.js";
import SiteNav from "../components/SiteNav.jsx";
import Footer from "../components/Footer.jsx";
import navProps from "../data/navTinu.js";
import caseProps from "../data/tinu.js";

export default function TinuAI() {
  useBodyBackground("rgb(255, 255, 255)");
  return (
    <div className="page-root case-page">
      <SiteNav props={navProps} sizes={{ phone: "phone" }} />
      <div className="full">
        <CaseStudy {...caseProps} style={{ width: "100%" }} />
      </div>
      <Footer />
    </div>
  );
}
