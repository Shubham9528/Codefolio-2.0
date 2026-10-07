import { SectionTitle } from "../ui/SectionTitle";
import { processSteps } from "../../data/portfolioData";
import processImg from "/process.png";

export function Process() {
  return (
    <section id="process" className="section-rule">
      <SectionTitle>Behind every project</SectionTitle>
      <div className="process-area">
        <div className="process-memoji">
          <img
            src={processImg}
            alt="Creative process illustration"
            loading="lazy"
          />
        </div>
        <div className="process-steps">
          {processSteps.map(({ number, title, text }) => (
            <div className="process-step" key={title}>
              <div className="process-step-num">
                <span className="step-number">{number}</span>
              </div>
              <div className="process-step-body">
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
