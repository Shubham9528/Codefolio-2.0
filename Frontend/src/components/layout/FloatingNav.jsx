import { useEffect, useState } from "react";
import {
  Home,
  UserRound,
  GraduationCap,
  BriefcaseBusiness,
  Sparkles,
  GitBranch,
  Send,
} from "lucide-react";
import { navMenu } from "../../data/portfolioData";

const iconMap = {
  Home,
  UserRound,
  GraduationCap,
  BriefcaseBusiness,
  Sparkles,
  GitBranch,
  Send,
};

export function FloatingNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    const sections = document.querySelectorAll("main section[id]");
    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, to) => {
    e.preventDefault();
    const target = document.getElementById(to);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="floating-nav" aria-label="Main navigation">
      {navMenu.map(({ label, to, iconName }) => {
        const Icon = iconMap[iconName];
        return (
          <a
            key={to}
            href={`#${to}`}
            title={label}
            aria-label={label}
            className={`nav-item ${active === to ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, to)}
          >
            {Icon && <Icon size={19} strokeWidth={1.8} />}
          </a>
        );
      })}
    </nav>
  );
}
