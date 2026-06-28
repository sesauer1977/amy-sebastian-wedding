/**
 * TransportSection — Wedding day transport information
 * Design: Timeless Ivory & Sage
 * Note: NO em dashes anywhere in copy
 */

const transportCards = [
  {
    icon: "🚌",
    time: "Saturday, 1:15 pm",
    title: "Coach to the Ceremony",
    subtitle: "For guests staying at Archerfield",
    colour: "oklch(0.28 0.06 155)",
    textColour: "oklch(0.97 0.01 85)",
    subtitleColour: "oklch(0.72 0.06 155)",
    bodyColour: "oklch(0.82 0.04 155)",
    body: "Coaches will depart from Archerfield at 1:15 pm on Saturday, arriving at Our Lady Star of the Sea in North Berwick in time for the 2:00 pm ceremony. The drive takes approximately 15 minutes. Please be ready to board by 1:10 pm.",
    note: "For guests staying at Archerfield only",
    noteColour: "oklch(0.62 0.07 155)",
    noteBg: "oklch(0.38 0.06 155)",
  },
  {
    icon: "🚗",
    time: "Saturday, before 2:00 pm",
    title: "Making Your Own Way to the Church",
    subtitle: "For guests not staying at Archerfield",
    colour: "oklch(0.93 0.015 80)",
    textColour: "oklch(0.28 0.06 155)",
    subtitleColour: "oklch(0.62 0.07 155)",
    bodyColour: "oklch(0.45 0.02 80)",
    body: "If you are not staying at Archerfield, please make your own way to Our Lady Star of the Sea, Law Road, North Berwick EH39 4PN. The church is easy to find in the centre of North Berwick. There is street parking nearby. Please aim to arrive by 1:50 pm.",
    note: null,
    noteColour: null,
    noteBg: null,
  },
  {
    icon: "🚌",
    time: "Saturday, after the ceremony",
    title: "Coach to the Reception",
    subtitle: "For all guests",
    colour: "oklch(0.93 0.03 155 / 0.5)",
    textColour: "oklch(0.28 0.06 155)",
    subtitleColour: "oklch(0.52 0.09 155)",
    bodyColour: "oklch(0.45 0.02 80)",
    body: "After the ceremony, coaches will be provided for all guests from the church to The Waterfront at Archerfield. The journey takes approximately 15 minutes. No need to arrange your own transport from the church to the reception.",
    note: "For all guests",
    noteColour: "oklch(0.52 0.09 155)",
    noteBg: "oklch(0.82 0.05 155)",
  },
  {
    icon: "🚐",
    time: "Saturday evening, throughout the night",
    title: "Cars and Minibuses on Standby",
    subtitle: "For all guests",
    colour: "oklch(0.93 0.025 15 / 0.4)",
    textColour: "oklch(0.28 0.06 155)",
    subtitleColour: "oklch(0.62 0.08 15)",
    bodyColour: "oklch(0.45 0.02 80)",
    body: "Cars and minibuses will be on standby throughout the evening to shuttle guests from Archerfield to North Berwick town, the surrounding area, and North Berwick train station. There is no need to pre-book. Simply let a member of the team know when you are ready to leave and a vehicle will be arranged for you.",
    note: "For all guests",
    noteColour: "oklch(0.62 0.08 15)",
    noteBg: "oklch(0.88 0.04 15)",
  },
];

export default function TransportSection() {
  return (
    <section
      id="transport"
      style={{
        background: "oklch(0.97 0.012 85)",
        padding: "6rem 1.5rem",
        scrollMarginTop: "64px",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

        {/* Header */}
        <div className="fade-in-up" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", marginBottom: "0.75rem" }}>
            Getting Around on the Day
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 400, color: "oklch(0.28 0.06 155)", marginBottom: "1rem" }}>
            Transport
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "oklch(0.45 0.02 80)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            We want to make sure everyone can relax and enjoy the day without worrying about driving. Here is everything you need to know about transport on the wedding day.
          </p>
        </div>

        {/* Transport cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {transportCards.map((card, i) => (
            <div
              key={card.title}
              className="fade-in-up"
              style={{
                background: card.colour,
                borderRadius: "0.75rem",
                padding: "2rem 2.5rem",
                display: "flex",
                gap: "1.5rem",
                alignItems: "flex-start",
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "oklch(1 0 0 / 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  flexShrink: 0,
                }}
              >
                {card.icon}
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: card.subtitleColour, marginBottom: "0.2rem" }}>
                  {card.time}
                </p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 500, color: card.textColour, marginBottom: "0.2rem", lineHeight: 1.2 }}>
                  {card.title}
                </h3>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", fontWeight: 700, color: card.subtitleColour, marginBottom: "0.75rem", letterSpacing: "0.04em" }}>
                  {card.subtitle}
                </p>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", color: card.bodyColour, lineHeight: 1.75, marginBottom: card.note ? "0.75rem" : 0 }}>
                  {card.body}
                </p>
                {card.note && (
                  <span style={{
                    display: "inline-block",
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: card.noteColour!,
                    background: card.noteBg!,
                    padding: "0.25rem 0.65rem",
                    borderRadius: "0.3rem",
                  }}>
                    {card.note}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Train times info */}
        <div
          className="fade-in-up"
          style={{
            marginTop: "1.25rem",
            background: "oklch(0.93 0.03 155 / 0.3)",
            border: "1px solid oklch(0.82 0.05 155)",
            borderRadius: "0.5rem",
            padding: "1.5rem 2rem",
            display: "flex",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>🚂</span>
          <div>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", marginBottom: "0.3rem" }}>
              Last Trains from North Berwick to Edinburgh (Saturday)
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.88rem", color: "oklch(0.35 0.01 80)", lineHeight: 1.7, margin: 0 }}>
              The last ScotRail service from North Berwick to Edinburgh Waverley on a Saturday departs at approximately <strong style={{ color: "oklch(0.28 0.06 155)" }}>22:24</strong>, arriving Edinburgh Waverley at around <strong style={{ color: "oklch(0.28 0.06 155)" }}>22:56</strong>. Journey time is approximately 33 minutes. We recommend checking the live timetable at{" "}
              <a href="https://www.scotrail.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: "oklch(0.52 0.09 155)", fontWeight: 700, textDecoration: "none" }}>scotrail.co.uk</a>{" "}
              closer to the date, as times may vary. Our shuttles will ensure you reach the station in good time.
            </p>
          </div>
        </div>

        {/* Summary note */}
        <div
          className="fade-in-up"
          style={{
            marginTop: "2rem",
            background: "oklch(0.28 0.06 155)",
            borderRadius: "0.5rem",
            padding: "1.5rem 2rem",
            display: "flex",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>💡</span>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.88rem", color: "oklch(0.82 0.04 155)", lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: "oklch(0.97 0.01 85)" }}>In short:</strong> If you are staying at Archerfield, just get on the coach at 1:15 pm and we will take care of the rest. If you are staying elsewhere, make your own way to the church and coaches will bring everyone to the reception. Taxis home are sorted for the whole evening.
          </p>
        </div>

      </div>
    </section>
  );
}
