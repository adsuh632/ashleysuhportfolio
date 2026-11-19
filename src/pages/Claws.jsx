import { CaseStudy } from "../ported/CaseStudyClaws.jsx";
import useBodyBackground from "../useBodyBackground.js";
import SiteNav from "../components/SiteNav.jsx";
import Footer from "../components/Footer.jsx";
import navProps from "../data/navClaws.js";
import caseProps from "../data/claws.js";

export default function Claws() {
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
