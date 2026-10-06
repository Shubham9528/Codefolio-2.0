import {
  PanelsTopLeft,
  LayoutTemplate,
  MousePointer2,
  PenTool,
  CheckCircle2,
} from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { services } from "../../data/portfolioData";

const iconMap = {
  PanelsTopLeft,
  LayoutTemplate,
  MousePointer2,
  PenTool,
};

export function Services() {
  return (
    <section id="services" className="section-rule">
      <SectionTitle>What I bring</SectionTitle>
      <div className="services-list">
        {services.map(({ title, text, iconName, features }) => {
          const Icon = iconMap[iconName];
          return (
            <div className="service-row" key={title}>
              <div className="service-icon-wrapper">
                {Icon && <Icon size={24} strokeWidth={1.4} className="service-icon" />}
              </div>
              <h3>{title}</h3>
              <div className="service-content">
                <p>{text}</p>
                {features && (
                  <div className="service-features-wrapper">
                    <ul className="service-features">
                      {features.map((feature, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={16} strokeWidth={2} className="feature-check" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
