import CaseStudyCard from "./CaseStudyCard.jsx";
import "./CaseStudies.css";

export default function CaseStudies({ projects }) {
  return (
    <section className="cs-section" data-framer-name="Projects" id="work" aria-label="Case studies">
      <ul className="cs-grid" role="list">
        {projects.map((p, i) => (
          <CaseStudyCard key={p.id} project={p} index={i} />
        ))}
      </ul>
    </section>
  );
}
