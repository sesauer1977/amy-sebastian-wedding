const GH = "https://raw.githubusercontent.com/sesauer1977/amy-sebastian-wedding/main/public/images";

const highlights = [
  {
    image: `${GH}/el-coast.jpg`,
    emoji: "🏖",
    title: "Die Küste",
    body: "East Lothian hat über 65 km atemberaubende Küstenlinie, von den breiten goldenen Sandstränden von Yellowcraig und Gullane bis zu den dramatischen Klippen bei Tantallon. Der Firth of Forth erstreckt sich vor Euch, mit Bass Rock, Heimat der weltgrößten Basstölpel-Kolonie, direkt vor der Küste. Bei klarem Wetter reicht der Blick bis nach Fife.",
  },
  {
    image: `${GH}/el-castle.jpg`,
    emoji: "🏰",
    title: "Burgen und Geschichte",
    body: "East Lothian ist reich an Geschichte. Tantallon Castle, eine Festung aus dem 14. Jahrhundert auf Klippen über dem Meer, gehört zu den eindrucksvollsten Ruinen Schottlands. Dirleton Castle, direkt neben dem Hochzeitsgelände, stammt aus dem 13. Jahrhundert und ist von wunderschönen Gärten umgeben. Beide sind für Besucher geöffnet.",
  },
  {
    image: `${GH}/el-golf.jpg`,
    emoji: "⛳",
    title: "Weltklasse-Golf",
    body: "East Lothian gilt als Schottlands Golfküste. Die Region zählt 22 Golfplätze innerhalb von 40 km, darunter Muirfield, einer der berühmtesten Golfplätze der Welt und regelmäßiger Austragungsort der Open Championship. Der North Berwick Golf Club, gegründet 1832, ist einer der ältesten der Welt und bietet atemberaubende Küstenblicke.",
  },
  {
    image: `${GH}/el-food.jpg`,
    emoji: "🦞",
    title: "Essen und Trinken",
    body: "East Lothian hat eine florierende Gastronomie mit außergewöhnlichen lokalen Produkten. Frische Meeresfrüchte sind überall: Langustinen, Hummer, Krabben und Austern direkt aus dem Firth of Forth. Dazu kommen hervorragende Hofläden, Feinkostgeschäfte und Restaurants. Die Glenkinchie Destillerie, eine der Lowland Whisky Destillerien Schottlands, ist nur 30 Minuten entfernt.",
  },
];

const practicalInfo = [
  { emoji: "🚂", label: "Von Edinburgh", detail: "33 Minuten mit dem Zug von Edinburgh Waverley nach North Berwick. Züge fahren alle 30 Minuten." },
  { emoji: "🌤", label: "Beste Reisezeit", detail: "Mai bis September bietet das beste Wetter mit langen Abenden und Temperaturen von 15 bis 20°C." },
  { emoji: "🚗", label: "Fortbewegung", detail: "Ein Mietwagen bietet die meiste Flexibilität. Die Gegend lässt sich auch gut zu Fuß und mit dem Fahrrad entlang der Küste erkunden." },
  { emoji: "📍", label: "Basisort", detail: "North Berwick ist der ideale Ausgangspunkt: eine charmante Hafenstadt mit ausgezeichneten Restaurants, Geschäften und direkten Zugverbindungen nach Edinburgh." },
];

export default function EastLothianSectionDe() {
  return (
    <section id="east-lothian" style={{ background: "oklch(0.93 0.015 80)", padding: "6rem 1.5rem", scrollMarginTop: "64px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="fade-in-up" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", marginBottom: "0.75rem" }}>Bleibt ein bisschen länger</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 400, color: "oklch(0.28 0.06 155)", marginBottom: "1rem" }}>East Lothian entdecken</h2>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", color: "oklch(0.45 0.02 80)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
            Wer von weit her anreist oder die Reise einfach auskosten möchte, wird in East Lothian eine der schönsten und unterschätztesten Regionen Schottlands entdecken. Hier ist ein Vorgeschmack auf das, was Euch erwartet.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 480px), 1fr))", gap: "1.5rem", marginBottom: "4rem" }}>
          {highlights.map((item, i) => (
            <div key={item.title} className="fade-in-up" style={{ background: "oklch(1 0 0)", borderRadius: "0.75rem", overflow: "hidden", boxShadow: "0 4px 24px oklch(0.28 0.06 155 / 0.08)", animationDelay: `${i * 0.1}s` }}>
              <div style={{ height: "220px", backgroundImage: `url('${item.image}')`, backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, background: "oklch(0.15 0.04 155 / 0.15)" }} />
                <div style={{ position: "absolute", top: "1rem", left: "1rem", background: "oklch(1 0 0 / 0.92)", borderRadius: "50%", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>{item.emoji}</div>
              </div>
              <div style={{ padding: "1.5rem" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 500, color: "oklch(0.28 0.06 155)", marginBottom: "0.6rem" }}>{item.title}</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.88rem", color: "oklch(0.45 0.02 80)", lineHeight: 1.75 }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-in-up">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 500, color: "oklch(0.28 0.06 155)", whiteSpace: "nowrap" }}>Praktische Informationen</h3>
            <div style={{ flex: 1, height: "1px", background: "oklch(0.88 0.02 100)" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 240px), 1fr))", gap: "1rem" }}>
            {practicalInfo.map((item) => (
              <div key={item.label} style={{ background: "oklch(0.28 0.06 155)", borderRadius: "0.5rem", padding: "1.25rem 1.5rem" }}>
                <span style={{ fontSize: "1.5rem", display: "block", marginBottom: "0.5rem" }}>{item.emoji}</span>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "oklch(0.72 0.06 155)", marginBottom: "0.4rem" }}>{item.label}</p>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", color: "oklch(0.88 0.02 85)", lineHeight: 1.6 }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-in-up" style={{ marginTop: "2.5rem", background: "oklch(0.93 0.03 155 / 0.4)", border: "1px solid oklch(0.82 0.05 155)", borderRadius: "0.5rem", padding: "1.5rem 2rem", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 500, color: "oklch(0.28 0.06 155)", marginBottom: "0.25rem" }}>Euren Aufenthalt planen</p>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", color: "oklch(0.45 0.02 80)" }}>Visit East Lothian bietet umfassende Reiseführer für die gesamte Region.</p>
          </div>
          <a href="https://visiteastlothian.org" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(1 0 0)", background: "oklch(0.62 0.07 155)", padding: "0.65rem 1.5rem", borderRadius: "0.4rem", textDecoration: "none", whiteSpace: "nowrap" }}>
            Visit East Lothian
          </a>
        </div>
      </div>
    </section>
  );
}
