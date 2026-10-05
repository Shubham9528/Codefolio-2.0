import { Button } from "../ui/Button";
import { personalInfo } from "../../data/portfolioData";
import heroImg from "/hero.png";

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">
        <h1>
          Hello, I'm <span>{personalInfo.name}</span>
        </h1>
        <p>
          Creative developer and designer who
          <br className="desktop-break" />
          enjoys building simple, engaging websites.
        </p>
        <Button href={personalInfo.ctaLink}>{personalInfo.ctaText}</Button>
      </div>
      <img className="hero-memoji" src={heroImg} alt={`${personalInfo.name} waving`} />
    </section>
  );
}
