import { Resume as ResumeBody } from "../ported/Resume.jsx";
import useBodyBackground from "../useBodyBackground.js";
import SiteNav from "../components/SiteNav.jsx";
import Footer from "../components/Footer.jsx";
import navProps from "../data/navResume.js";
import resumeProps from "../data/resume.js";

export default function Resume() {
  useBodyBackground("none");
  return (
    <div className="page-root resume-page">
      <SiteNav props={navProps} />
      <div className="resume-wrap">
        <div className="full">
          <ResumeBody {...resumeProps} style={{ width: "100%" }} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
