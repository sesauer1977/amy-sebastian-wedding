const SectionDivider = ({ label }: { label: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "1rem 0 2rem" }}>
    <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, oklch(0.62 0.07 155))" }} />
    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "0.85rem", color: "oklch(0.62 0.07 155)", whiteSpace: "nowrap", letterSpacing: "0.05em" }}>{label}</span>
    <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, oklch(0.62 0.07 155))" }} />
  </div>
);

const saturdayEvents = [
  {
    time: "14:00 Uhr",
    title: "Kirchliche Trauung",
    description: "Our Lady Star of the Sea, Law Road, North Berwick EH39 4PN. Eine wunderschöne katholische Kirche im Herzen von North Berwick, gegründet 1879.",
    icon: "⛪",
  },
  {
    time: "15:30 Uhr",
    title: "Sektempfang und Häppchen",
    description: "Im Anschluss an die Trauung fahren wir direkt zum The Waterfront in Archerfield. Stoßt mit uns an und genießt den Nachmittag an der Küste von East Lothian.",
    icon: "🥂",
  },
  {
    time: "19:00 Uhr",
    title: "Hochzeitsessen",
    description: "Das Abendessen wird im The Waterfront, Archerfield Estate, Dirleton, East Lothian EH39 5HU serviert. Ein Abend voller gutem Essen, Tanzen und Feiern.",
    icon: "🍽",
  },
];

const sundayEvents = [
  {
    time: "Morgens",
    title: "Sonntagsfrühstück",
    description: "Ein gemütliches Frühstück im Archerfield Clubhouse für alle, die noch dabei sein möchten. Eine schöne Gelegenheit, den Abend ausklingen zu lassen, bevor alle die Heimreise antreten.",
    icon: "☕",
  },
  {
    time: "Nach dem Frühstück",
    title: "Auf Wiedersehen",
    description: "Gute Heimreise. Wir freuen uns riesig, diesen besonderen Tag mit Euch zu feiern.",
    icon: "✈️",
  },
];

const EventCard = ({ event, delay }: { event: typeof saturdayEvents[0]; delay: number }) => (
  <div className="fade-in-up" style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", animationDelay: `${delay}s` }}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, paddingTop: "0.25rem" }}>
      <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "oklch(0.93 0.03 155)", border: "2px solid oklch(0.62 0.07 155)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>
        {event.icon}
      </div>
    </div>
    <div style={{ paddingBottom: "2rem" }}>
      <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", marginBottom: "0.25rem" }}>{event.time}</div>
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 500, color: "oklch(0.28 0.06 155)", marginBottom: "0.4rem", lineHeight: 1.2 }}>{event.title}</h3>
      <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", color: "oklch(0.45 0.02 80)", lineHeight: 1.7, maxWidth: "520px" }}>{event.description}</p>
    </div>
  </div>
);

export default function ScheduleSectionDe() {
  return (
    <section id="schedule" style={{ padding: "6rem 1.5rem", background: "oklch(0.97 0.012 85)", scrollMarginTop: "64px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div className="fade-in-up" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", marginBottom: "0.75rem" }}>Das Wochenende</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 400, color: "oklch(0.28 0.06 155)", marginBottom: "1rem" }}>Unser Tag</h2>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "oklch(0.45 0.02 80)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            Ein Wochenende voller Freude an der Küste von East Lothian. Hier findet Ihr alles, was Ihr über den Ablauf wissen müsst.
          </p>
        </div>
        <div className="fade-in-up">
          <SectionDivider label="Samstag, 8. Mai 2027" />
          {saturdayEvents.map((e, i) => <EventCard key={e.title} event={e} delay={i * 0.1} />)}
        </div>
        <div className="fade-in-up" style={{ marginTop: "1rem" }}>
          <SectionDivider label="Sonntag, 9. Mai 2027" />
          {sundayEvents.map((e, i) => <EventCard key={e.title} event={e} delay={i * 0.1} />)}
        </div>
      </div>
    </section>
  );
}
