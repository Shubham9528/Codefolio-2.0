import { SectionTitle } from "../ui/SectionTitle";
import { experience, education } from "../../data/portfolioData";

export function Experience() {
  return (
    <section id="experience" className="section-rule">
      <SectionTitle>Experience & Education</SectionTitle>
      
      <div className="resume-grid">
        {/* Experience Column */}
        <div className="resume-column">
          <h3 className="resume-col-title">Experience</h3>
          <div className="resume-list">
            {experience.map((item, index) => (
              <div className="resume-item" key={index}>
                <div className="resume-year">{item.year}</div>
                <div className="resume-content">
                  <h4>{item.role}</h4>
                  <span className="resume-company">{item.company}</span>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="resume-column">
          <h3 className="resume-col-title">Education</h3>
          <div className="resume-list">
            {education.map((item, index) => (
              <div className="resume-item" key={index}>
                <div className="resume-year">{item.year}</div>
                <div className="resume-content">
                  <h4>{item.degree}</h4>
                  <span className="resume-company">{item.institution}</span>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
