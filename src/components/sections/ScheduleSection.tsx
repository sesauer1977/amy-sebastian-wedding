/**
 * ScheduleSection — Weekend schedule for the wedding
 * Design: Timeless Ivory & Sage
 * Note: NO em dashes anywhere in copy
 */

const SectionDivider = ({ label }: { label: string }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      margin: "1rem 0 2rem",
    }}
  >
    <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, oklch(0.62 0.07 155))" }} />
    <span
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontStyle: "italic",
        fontSize: "0.85rem",
        color: "oklch(0.62 0.07 155)",
        whiteSpace: "nowrap",
        letterSpacing: "0.05em",
      }}
    >
      {label}
    </span>
    <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, oklch(0.62 0.07 155))" }} />
  </div>
);

interface EventItem {
  time: string;
  title: string;
  description: string;
  icon: string;
}

const saturdayEvents: EventItem[] = [
  {
    time: "2:00 pm",
    title: "Wedding Ceremony",
    description: "Our Lady Star of the Sea, Law Road, North Berwick EH39 4PN. A beautiful Catholic church overlooking the town, founded in 1879.",
    icon: "⛪",
  },
  {
    time: "3:30 pm",
    title: "Drinks and Canapes",
    description: "After the ceremony we head straight to The Waterfront in Archerfield. Join us for drinks and canapes as we celebrate on the East Lothian coast.",
    icon: "🥂",
  },
  {
    time: "6:00 pm",
    title: "Wedding Dinner",
    description: "Dinner is served in the same venue. An evening of food, dancing, and celebration with the people we love most.",
    icon: "🍽",
  },
];

const sundayEvents: EventItem[] = [
  {
    time: "Morning",
    title: "Sunday Breakfast",
    description: "A relaxed morning breakfast at the Archerfield Clubhouse for those who wish to join us. A lovely chance to continue the celebrations before heading home.",
    icon: "☕",
  },
  {
    time: "After breakfast",
    title: "Farewell",
    description: "Safe travels home. Thank you for being part of our day.",
    icon: "✈️",
  },
];

const EventCard = ({ event, delay }: { event: EventItem; delay: number }) => (
  <div
    className="fade-in-up"
    style={{
      display: "flex",
      gap: "1.5rem",
      alignItems: "flex-start",
      animationDelay: `${delay}s`,
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexShrink: 0,
        paddingTop: "0.25rem",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "oklch(0.93 0.03 155)",
          border: "2px solid oklch(0.62 0.07 155)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.1rem",
          flexShrink: 0,
        }}
      >
        {event.icon}
      </div>
    </div>

    <div style={{ paddingBottom: "2rem" }}>
      <div
        style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "oklch(0.62 0.07 155)",
          marginBottom: "0.25rem",
        }}
      >
        {event.time}
      </div>
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.4rem",
          fontWeight: 500,
          color: "oklch(0.28 0.06 155)",
          marginBottom: "0.4rem",
          lineHeight: 1.2,
        }}
      >
        {event.title}
      </h3>
      <p
        style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: "0.9rem",
          color: "oklch(0.45 0.02 80)",
          lineHeight: 1.7,
          maxWidth: "520px",
        }}
      >
        {event.description}
      </p>
    </div>
  </div>
);

export default function ScheduleSection() {
  return (
    <section
      id="schedule"
      style={{
        padding: "6rem 1.5rem",
        background: "oklch(0.97 0.012 85)",
        scrollMarginTop: "64px",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div className="fade-in-up" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "oklch(0.62 0.07 155)",
              marginBottom: "0.75rem",
            }}
          >
            The Weekend
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 400,
              color: "oklch(0.28 0.06 155)",
              marginBottom: "1rem",
            }}
          >
            Our Day
          </h2>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.95rem",
              color: "oklch(0.45 0.02 80)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            A weekend of celebration on the East Lothian coast. Here is everything you need to know about the schedule.
          </p>
        </div>

        <div className="fade-in-up">
          <SectionDivider label="Saturday, 8 May 2027" />
          <div>
            {saturdayEvents.map((event, i) => (
              <EventCard key={event.title} event={event} delay={i * 0.1} />
            ))}
          </div>
        </div>

        <div className="fade-in-up" style={{ marginTop: "1rem" }}>
          <SectionDivider label="Sunday, 9 May 2027" />
          <div>
            {sundayEvents.map((event, i) => (
              <EventCard key={event.title} event={event} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
