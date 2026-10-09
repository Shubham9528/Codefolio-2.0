import { useState } from "react";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import { services, socialLinks, personalInfo } from "../../data/portfolioData";
import contactImg from "/contact.png";

function SocialIcon({ name }) {
  const key = name?.toLowerCase();
  switch (key) {
    case "github":
      return (
        <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg width="23" height="23" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    case "leetcode":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
      );
    case "email":
    case "mail":
      return (
        <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    default:
      return null;
  }
}

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(
      `Project inquiry from ${data.get("name")}`,
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nService: ${data.get("service")}\nBudget: ${data.get("budget")}\n\n${data.get("message")}`,
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
              <input
                name="email"
                type="email"
                placeholder="jane@example.com"
                required
              />
            </label>
            <label>
              Service
              <select name="service" required defaultValue="">
                <option value="" disabled>
                  Select...
                </option>
                {services.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
              </select>
            </label>
            <label>
              Budget
              <select name="budget" required defaultValue="">
                <option value="" disabled>
                  Select...
                </option>
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
              placeholder="Hey Shubham, could you help me with..."
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
        {socialLinks.map((s) => {
          const isMail = s.url?.startsWith("mailto:");
          return (
            <a
              href={s.url}
              target={isMail ? undefined : "_blank"}
              rel={isMail ? undefined : "noreferrer"}
              key={s.label}
            >
              <span>{s.label}</span>
              <span className="social-icon">
                <SocialIcon name={s.iconName || s.label} />
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
