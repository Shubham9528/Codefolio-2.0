import { useState } from "react";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import { services, socialLinks, personalInfo } from "../../data/portfolioData";
import contactImg from "/process.png";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Project inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nService: ${data.get("service")}\nBudget: ${data.get("budget")}\n\n${data.get("message")}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section-rule">
      <SectionTitle>Let's create together</SectionTitle>

      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>
              Name
              <input name="name" placeholder="Jane Smith" required />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="jane@example.com" required />
            </label>
            <label>
              Service
              <select name="service" required defaultValue="">
                <option value="" disabled>Select...</option>
                {services.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
              </select>
            </label>
            <label>
              Budget
              <select name="budget" required defaultValue="">
                <option value="" disabled>Select...</option>
                <option>Upto $2000</option>
                <option>$2000 - $5000</option>
                <option>$5000+</option>
              </select>
            </label>
          </div>

          <label>
            Message
            <textarea
              name="message"
              placeholder="Hey Logan, Could you help me with..."
              required
            />
          </label>

          <Button type="submit">Submit</Button>
          {sent && (
            <p className="form-note">
              Your email app should open with your message ready to send.
            </p>
          )}
        </form>

        <img src={contactImg} alt="Contact illustration" loading="lazy" />
      </div>

      <div className="social-grid">
        {socialLinks.map((s) => (
          <a href={s.url} target="_blank" rel="noreferrer" key={s.label}>
            <span>{s.label}</span>
            <span className="social-icon">{s.symbol}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
