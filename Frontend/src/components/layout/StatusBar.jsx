import { useEffect, useState } from "react";
import { personalInfo } from "../../data/portfolioData";

export function StatusBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: personalInfo.timezone,
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).format(new Date())
      );
    };
    update();
    const timer = window.setInterval(update, 30000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <header className="status-bar">
      <span className="availability">
        <span className="availability-dot" />
        Available for work
      </span>
      <span>
        {time}
        <span className="status-dash">-</span>
        {personalInfo.location}
      </span>
    </header>
  );
}
