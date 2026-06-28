import { useState, useEffect } from "react";

const WEDDING_DATE = new Date("2027-05-08T14:00:00");

function getTimeLeft() {
  const diff = WEDDING_DATE.getTime() - new Date().getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

export default function CountdownSectionDe() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { value: timeLeft.days, label: "Tage" },
    { value: timeLeft.hours, label: "Stunden" },
    { value: timeLeft.minutes, label: "Minuten" },
    { value: timeLeft.seconds, label: "Sekunden" },
  ];

  return (
    <section style={{ background: "oklch(0.28 0.06 155)", padding: "4rem 1.5rem", textAlign: "center" }}>
      <p className="fade-in-up" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1.1rem", color: "oklch(0.82 0.05 155)", marginBottom: "2rem", letterSpacing: "0.05em" }}>
        Der Countdown läuft…
      </p>
      <div className="fade-in-up" style={{ display: "flex", justifyContent: "center", gap: "clamp(1rem, 4vw, 3rem)", flexWrap: "wrap" }}>
        {units.map((unit) => (
          <div key={unit.label} style={{ textAlign: "center", minWidth: "80px" }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 300, color: "oklch(0.97 0.01 85)", lineHeight: 1, marginBottom: "0.4rem" }}>
              {String(unit.value).padStart(2, "0")}
            </div>
            <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.72 0.06 155)" }}>
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
