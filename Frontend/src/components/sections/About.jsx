import { personalInfo, stats } from "../../data/portfolioData";

export function About() {
  return (
    <section id="about" className="section-rule">
      <div className="about-intro">
        <h2>{personalInfo.aboutIntroHeading}</h2>
        <p>{personalInfo.aboutBio}</p>
      </div>
      <div className="stats-grid">
        {stats.map(({ value, label }) => (
          <div className="stat" key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
