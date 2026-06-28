/**
 * CountdownSection — Live countdown to the wedding day
 * Design: Timeless Ivory & Sage
 */
import { useState, useEffect } from "react";

const WEDDING_DATE = new Date("2027-05-08T14:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = WEDDING_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section
      style={{
        background: "oklch(0.28 0.06 155)",
        padding: "4rem 1.5rem",
        textAlign: "center",
      }}
    >
      <p
        className="fade-in-up"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontSize: "1.1rem",
          color: "oklch(0.82 0.05 155)",
          marginBottom: "2rem",
          letterSpacing: "0.05em",
        }}
      >
        Counting down to the big day…
      </p>
      <div
        className="fade-in-up"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "clamp(1rem, 4vw, 3rem)",
          flexWrap: "wrap",
        }}
      >
        {units.map((unit, i) => (
          <div
            key={unit.label}
            style={{
              textAlign: "center",
              minWidth: "80px",
              animationDelay: `${i * 0.08}s`,
            }}
          >
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontWeight: 300,
                color: "oklch(0.97 0.01 85)",
                lineHeight: 1,
                marginBottom: "0.4rem",
                minWidth: "3ch",
                display: "inline-block",
              }}
            >
              {String(unit.value).padStart(2, "0")}
            </div>
            <div
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "oklch(0.72 0.06 155)",
              }}
            >
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
