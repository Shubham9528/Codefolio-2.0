import { useState } from "react";
import { Code2, Layers, Database, Wrench, Cloud, Bot, Network } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { skills } from "../../data/portfolioData";

const iconMap = { Code2, Layers, Database, Wrench, Cloud, Bot, Network };

const SKILLICONS = "https://skillicons.dev/icons?i=";

export function Skills() {
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="section-rule">
      <SectionTitle>Skills &amp; tools</SectionTitle>

      <div className="skills-layout">
        {/* ── Left: skill rows ── */}
        <ul className="skills-list">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.iconName];
            return (
              <li
                key={skill.name}
                className={`skill-row${active === i ? " is-active" : ""}`}
                onMouseEnter={() => setActive(i)}
              >
                <span className="skill-index">{String(i + 1).padStart(2, "0")}</span>

                <div className="skill-body">
                  <div className="skill-name-row">
                    {Icon && (
                      <span className="skill-cat-icon">
                        <Icon size={18} strokeWidth={1.6} />
                      </span>
                    )}
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <ul className="skill-tags">
                    {skill.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>

        {/* ── Right: sticky icon panel (desktop) ── */}
        <div className="skills-panel" aria-hidden="true">
          <div className="skills-panels-wrap">
            {skills.map((skill, i) => {
              const Icon = iconMap[skill.iconName];
              return (
                <div
                  key={skill.name}
                  className={`skills-icon-panel${active === i ? " is-visible" : ""}`}
                >
                  {/* Large category icon */}
                  <div className="skills-cat-hero">
                    {Icon && <Icon size={64} strokeWidth={0.9} />}
                  </div>

                  {/* Individual tech icons grid */}
                  <div className="skills-icons-grid">
                    {skill.icons.map((icon) => (
                      <div key={`${icon.id}-${icon.label}`} className="skill-icon-card">
                        <img
                          src={icon.url ?? `${SKILLICONS}${icon.id}&theme=light`}
                          alt={icon.label}
                          width={40}
                          height={40}
                          loading="lazy"
                        />
                        <span>{icon.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom label bar */}
          <div className="skills-panel-label">
            <span className="skills-panel-dot" />
            <span>{skills[active]?.name}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
