import { useEffect, useRef, useState } from "react";
import { SectionTitle } from "../ui/SectionTitle";
import { processSteps } from "../../data/portfolioData";
import processImg from "/process.png";

export function Process() {
  const [step, setStep] = useState(0);
  const processRef = useRef(null);

  useEffect(() => {
    const el = processRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, -rect.top / Math.max(1, rect.height - window.innerHeight))
      );
      setStep(Math.min(3, Math.floor(progress * 4)));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="process" className="section-rule">
      <SectionTitle>Behind every project</SectionTitle>
      <div className="process-area" ref={processRef}>
        <div className="process-memoji">
          <img
            src={processImg}
            alt="Creative process illustration"
            loading="lazy"
          />
        </div>
        <div className="process-steps">
          {processSteps.map(({ number, title, text }, i) => (
            <div
              className={`process-step${step >= i ? " revealed" : ""}`}
              key={title}
            >
              <span className="step-number">{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
