import { ArrowRight } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { projects } from "../../data/portfolioData";

export function Projects() {
  return (
    <section id="projects" className="section-rule">
      <SectionTitle>Creative highlights</SectionTitle>
      <div className="projects-grid">
        {projects.map((project) => (
          <a
            href={`#project-${project.slug}`}
            className="project-tile"
            key={project.slug}
          >
            <div className="project-image">
              <img
                src={project.image}
                alt={`${project.title} ${project.category} website preview`}
                loading="lazy"
              />
              <span className="project-hover-arrow">
                <ArrowRight size={22} />
              </span>
            </div>
            <div className="project-caption">
              <span>{project.title}</span>
              <small>{project.category}</small>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
