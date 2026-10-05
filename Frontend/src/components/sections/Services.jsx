import {
  PanelsTopLeft,
  LayoutTemplate,
  MousePointer2,
  PenTool,
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
        {services.map(({ title, text, iconName }) => {
          const Icon = iconMap[iconName];
          return (
            <div className="service-row" key={title}>
              {Icon && <Icon size={19} strokeWidth={1.4} />}
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
