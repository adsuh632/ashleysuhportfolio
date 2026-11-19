import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowUpRight from "./ArrowUpRight.jsx";
import useBreakpoint from "../useBreakpoint.js";
import "./Footer.css";

const PORTRAIT = "/images/4kGtKswWVxeUn5jZqbY1ioQrUSA.webp";
const PORTRAIT_SET =
  "/images/4kGtKswWVxeUn5jZqbY1ioQrUSA-512.avif 512w,/images/4kGtKswWVxeUn5jZqbY1ioQrUSA.webp 800w";
const EMAIL = "mailto:ashdsuh@gmail.com";
const LINKEDIN = "https://linkedin.com/in/ashleydsuh";
const TEXT = "var(--token-8303387e-d4c2-4989-af33-54d2c870c7ac, rgb(47, 47, 47))";

// Hover on the portrait link: spring scale to 0.9 (Framer whileHover)
const hoverScale = { scale: 0.9, transition: { type: "spring", bounce: 0.2, duration: 0.4 } };

function TextLink({ href, internal, children, newTab }) {
  if (internal) return <Link className="ft-link" to={href}>{children}</Link>;
  return (
    <a className="ft-link" href={href} {...(newTab ? { target: "_blank", rel: "noopener" } : {})}>
      {children}
    </a>
  );
}

export default function Footer() {
  const bp = useBreakpoint();

  if (bp === "phone") {
    return (
      <footer className="ft ft--phone">
        <div className="ft-phone-nav">
          <p className="ft-title-phone">So many ideas, so little time…</p>
          <div className="ft-phone-links">
            <div className="ft-row5">
              <p className="ft-linktext ft-14"><TextLink href={EMAIL} newTab>Get in touch</TextLink></p>
              <ArrowUpRight color={TEXT} />
            </div>
            <a className="ft-row5" href={LINKEDIN} target="_blank" rel="noopener">
              <p className="ft-linktext ft-14"><span className="ft-link">Connect on LinkedIn</span></p>
              <ArrowUpRight color={TEXT} />
            </a>
            <img className="ft-portrait" src={PORTRAIT} srcSet={PORTRAIT_SET} sizes="137px" alt="" style={{ width: 137, height: 100 }} />
            <a className="ft-row5" href={LINKEDIN} target="_blank" rel="noopener">
              <p className="ft-linktext ft-14"><span className="ft-link">More about me</span></p>
              <ArrowUpRight color={TEXT} />
            </a>
          </div>
        </div>
        <p className="ft-copy ft-copy--phone">Copyright © 2026 Ashley Suh</p>
      </footer>
    );
  }

  const tablet = bp === "tablet";
  const linkSize = tablet ? "ft-15" : "ft-16";
  return (
    <footer className="ft">
      <div className="ft-top">
        <div className="ft-nav">
          <div className="ft-col">
            <div className="ft-row10">
              <div className="ft-left">
                <p className="ft-title">So many ideas, so little time…</p>
                <div className="ft-links">
                  <div className="ft-row5">
                    <p className={`ft-linktext ${linkSize}`}><TextLink href={EMAIL} newTab>Get in touch</TextLink></p>
                    <ArrowUpRight color={TEXT} />
                  </div>
                  <div className="ft-row10 ft-center">
                    <p className={`ft-linktext ${linkSize}`}><TextLink href={LINKEDIN} newTab>Connect on LinkedIn</TextLink></p>
                    <ArrowUpRight color={TEXT} />
                  </div>
                </div>
              </div>
              <Link to="/resume/" className="ft-portrait-link">
                <motion.div className="ft-portrait-wrap" whileHover={hoverScale}>
                  <img
                    className="ft-portrait"
                    src={PORTRAIT}
                    srcSet={PORTRAIT_SET}
                    sizes={tablet ? "174px" : "213px"}
                    alt=""
                    style={tablet ? { width: 174, height: 119 } : { width: 213, height: 140 }}
                  />
                  <div className="ft-row5 ft-stretch">
                    <p className="ft-linktext ft-16"><span className="ft-link">More about me</span></p>
                    <ArrowUpRight color={TEXT} />
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="ft-copy">Copyright © 2026 Ashley Suh</p>
    </footer>
  );
}
