import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { testimonials } from "../../data/portfolioData";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const prev = () => setIndex((n) => (n - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((n) => (n + 1) % testimonials.length);

  return (
    <section className="section-rule">
      <SectionTitle>Kind words</SectionTitle>
      <div className="testimonial">
        <div className="rating">
          <span className="stars">★★★★★</span>
          <strong>4.1+</strong>
          <span>Overall ratings</span>
        </div>
        <div className="quote-controls">
          <button onClick={prev} aria-label="Previous testimonial">
            <ArrowLeft size={18} />
          </button>
          <div className="quote">
            <blockquote>"{current.quote}"</blockquote>
            <div className="quote-author">
              <img src={current.avatar} alt={current.author} />
              <div>
                {current.author}
                <small>{current.role}</small>
              </div>
            </div>
          </div>
          <button onClick={next} aria-label="Next testimonial">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
