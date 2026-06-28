/**
 * EastLothianSection — Introduction to East Lothian for guests who want to stay longer
 * Design: Timeless Ivory & Sage
 * Note: NO em dashes anywhere in copy
 */

const GH = "https://raw.githubusercontent.com/sesauer1977/amy-sebastian-wedding/main/public/images";

const highlights = [
  {
    image: `${GH}/el-coast.jpg`,
    emoji: "🏖",
    title: "The Coast",
    body: "East Lothian has over 40 miles of stunning coastline, from the wide golden sands of Yellowcraig and Gullane to the dramatic cliffs near Tantallon. The Firth of Forth stretches out before you with Bass Rock, home to the world's largest northern gannet colony, sitting just offshore. On a clear day you can see across to Fife.",
  },
  {
    image: `${GH}/el-castle.jpg`,
    emoji: "🏰",
    title: "Castles and History",
    body: "East Lothian is rich with history. Tantallon Castle, a 14th-century red sandstone fortress perched on clifftops above the sea, is one of Scotland's most dramatic ruins. Dirleton Castle, right next to the wedding venue, dates from the 13th century and is surrounded by beautiful gardens. Both are open to visitors and well worth an hour or two.",
  },
  {
    image: `${GH}/el-golf.jpg`,
    emoji: "⛳",
    title: "World-Class Golf",
    body: "East Lothian is known as Scotland's Golf Coast. The area has 22 golf courses within 25 miles, including Muirfield, one of the world's most famous links courses and regular host of The Open Championship. North Berwick Golf Club, founded in 1832, is one of the oldest in the world and offers spectacular coastal views. Tee times should be booked well in advance.",
  },
  {
    image: `${GH}/el-food.jpg`,
    emoji: "🦞",
    title: "Food and Drink",
    body: "East Lothian has a thriving food scene built on exceptional local produce. Fresh seafood is everywhere: langoustines, lobster, crab, and oysters straight from the Firth of Forth. The area has excellent farm shops, delis, and restaurants. Glenkinchie Distillery, one of Scotland's Lowland whisky distilleries, is just 20 minutes away and offers tours and tastings.",
  },
];

const practicalInfo = [
  { emoji: "🚂", label: "From Edinburgh", detail: "33 minutes by train from Edinburgh Waverley to North Berwick. Trains run every 30 minutes." },
  { emoji: "🌤", label: "Best time to visit", detail: "May to September offers the best weather, with long evenings and temperatures of 15 to 20°C." },
  { emoji: "🚗", label: "Getting around", detail: "A hire car gives the most flexibility. The area is also walkable and cyclable along the coast." },
  { emoji: "📍", label: "Base yourself in", detail: "North Berwick is the ideal base: a charming harbour town with excellent restaurants, shops, and direct trains to Edinburgh." },
];

export default function EastLothianSection() {
  return (
    <section
      id="east-lothian"
      style={{
        background: "oklch(0.93 0.015 80)",
        padding: "6rem 1.5rem",
        scrollMarginTop: "64px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <div className="fade-in-up" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", marginBottom: "0.75rem" }}>
            Stay a Little Longer
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 400, color: "oklch(0.28 0.06 155)", marginBottom: "1rem" }}>
            Discover East Lothian
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", color: "oklch(0.45 0.02 80)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
            If you are travelling from overseas or simply want to make the most of the trip, East Lothian is one of Scotland's most beautiful and underrated regions. Here is a taste of what awaits you.
          </p>
        </div>

        {/* Highlights grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 480px), 1fr))",
            gap: "1.5rem",
            marginBottom: "4rem",
          }}
        >
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className="fade-in-up"
              style={{
                background: "oklch(1 0 0)",
                borderRadius: "0.75rem",
                overflow: "hidden",
                boxShadow: "0 4px 24px oklch(0.28 0.06 155 / 0.08)",
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div
                style={{
                  height: "220px",
                  backgroundImage: `url('${item.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                <div style={{ position: "absolute", inset: 0, background: "oklch(0.15 0.04 155 / 0.15)" }} />
                <div style={{ position: "absolute", top: "1rem", left: "1rem", background: "oklch(1 0 0 / 0.92)", borderRadius: "50%", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>
                  {item.emoji}
                </div>
              </div>
              <div style={{ padding: "1.5rem" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 500, color: "oklch(0.28 0.06 155)", marginBottom: "0.6rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.88rem", color: "oklch(0.45 0.02 80)", lineHeight: 1.75 }}>
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Practical info */}
        <div className="fade-in-up">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 500, color: "oklch(0.28 0.06 155)", whiteSpace: "nowrap" }}>
              Practical Information
            </h3>
            <div style={{ flex: 1, height: "1px", background: "oklch(0.88 0.02 100)" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 240px), 1fr))", gap: "1rem" }}>
            {practicalInfo.map((item) => (
              <div
                key={item.label}
                style={{
                  background: "oklch(0.28 0.06 155)",
                  borderRadius: "0.5rem",
                  padding: "1.25rem 1.5rem",
                }}
              >
                <span style={{ fontSize: "1.5rem", display: "block", marginBottom: "0.5rem" }}>{item.emoji}</span>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "oklch(0.72 0.06 155)", marginBottom: "0.4rem" }}>
                  {item.label}
                </p>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", color: "oklch(0.88 0.02 85)", lineHeight: 1.6 }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Visit East Lothian CTA */}
        <div
          className="fade-in-up"
          style={{
            marginTop: "2.5rem",
            background: "oklch(0.93 0.03 155 / 0.4)",
            border: "1px solid oklch(0.82 0.05 155)",
            borderRadius: "0.5rem",
            padding: "1.5rem 2rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 500, color: "oklch(0.28 0.06 155)", marginBottom: "0.25rem" }}>
              Plan your extended stay
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", color: "oklch(0.45 0.02 80)" }}>
              Visit East Lothian has comprehensive guides to everything the region has to offer.
            </p>
          </div>
          <a
            href="https://visiteastlothian.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "oklch(1 0 0)",
              background: "oklch(0.62 0.07 155)",
              padding: "0.65rem 1.5rem",
              borderRadius: "0.4rem",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Visit East Lothian
          </a>
        </div>

      </div>
    </section>
  );
}
