import { personalInfo } from "../../data/portfolioData";

export function Footer() {
  return (
    <footer className="site-footer">
      <span>@{new Date().getFullYear()}. All rights reserved.</span>
      <span>
        Crafted by <strong>{personalInfo.name}</strong>
      </span>
    </footer>
  );
}
