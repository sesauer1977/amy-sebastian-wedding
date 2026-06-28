const GH = "https://raw.githubusercontent.com/sesauer1977/amy-sebastian-wedding/main/public/images";

export default function VenueSectionDe() {
  return (
    <section id="venue" style={{ background: "oklch(0.93 0.015 80)", padding: "6rem 1.5rem", scrollMarginTop: "64px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="fade-in-up" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", marginBottom: "0.75rem" }}>Wo wir feiern</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 400, color: "oklch(0.28 0.06 155)" }}>Die Locations</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))", gap: "2rem" }}>
          {/* Ceremony */}
          <div className="fade-in-up" style={{ background: "oklch(1 0 0)", borderRadius: "0.5rem", overflow: "hidden", boxShadow: "0 4px 24px oklch(0.28 0.06 155 / 0.08)" }}>
            <div style={{ height: "240px", backgroundImage: `url('${GH}/hero-church-v2.jpg')`, backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, oklch(0.28 0.06 155 / 0.7), transparent)", padding: "1.5rem" }}>
                <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.82 0.05 155)" }}>Zeremonie · 14:00 Uhr</span>
              </div>
            </div>
            <div style={{ padding: "1.75rem" }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 500, color: "oklch(0.28 0.06 155)", marginBottom: "0.25rem" }}>Our Lady Star of the Sea</h3>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: "oklch(0.62 0.07 155)", marginBottom: "1rem", fontWeight: 700 }}>North Berwick</p>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", color: "oklch(0.45 0.02 80)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                Unsere Trauungszeremonie findet in dieser wunderschönen katholischen Kirche statt, die 1879 gegründet wurde. Sie liegt im Herzen von North Berwick, nur wenige Schritte vom Meer entfernt.
              </p>
              <div style={{ background: "oklch(0.93 0.03 155)", borderRadius: "0.4rem", padding: "0.75rem 1rem", marginBottom: "1rem" }}>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.82rem", color: "oklch(0.35 0.01 80)", lineHeight: 1.6 }}>
                  <strong style={{ color: "oklch(0.28 0.06 155)" }}>Adresse:</strong> Law Road, North Berwick, EH39 4PN
                </p>
              </div>
              <a href="https://www.stellamaris1879.com/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", textDecoration: "none", borderBottom: "1.5px solid oklch(0.62 0.07 155)", paddingBottom: "1px" }}>
                Website besuchen
              </a>
            </div>
          </div>

          {/* Reception */}
          <div className="fade-in-up" style={{ background: "oklch(1 0 0)", borderRadius: "0.5rem", overflow: "hidden", boxShadow: "0 4px 24px oklch(0.28 0.06 155 / 0.08)" }}>
            <div style={{ height: "240px", backgroundImage: `url('${GH}/hero-venue-v2.jpg')`, backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, oklch(0.28 0.06 155 / 0.7), transparent)", padding: "1.5rem" }}>
                <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.82 0.05 155)" }}>Empfang · Ab 15:30 Uhr</span>
              </div>
            </div>
            <div style={{ padding: "1.75rem" }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 500, color: "oklch(0.28 0.06 155)", marginBottom: "0.25rem" }}>The Waterfront, Archerfield</h3>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: "oklch(0.62 0.07 155)", marginBottom: "1rem", fontWeight: 700 }}>East Lothian</p>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", color: "oklch(0.45 0.02 80)", lineHeight: 1.7, marginBottom: "1rem" }}>
                Unser Empfang findet im The Waterfront statt, einem exklusiven Küsten-Hochzeitslokal auf dem 550 Hektar großen Archerfield Estate, nur wenige Kilometer von North Berwick entfernt.
              </p>
              <div style={{ background: "oklch(0.93 0.03 155)", borderRadius: "0.4rem", padding: "0.75rem 1rem", marginBottom: "1rem" }}>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.82rem", color: "oklch(0.35 0.01 80)", lineHeight: 1.6 }}>
                  <strong style={{ color: "oklch(0.28 0.06 155)" }}>Adresse:</strong> Archerfield, Golf Green, Dirleton, East Lothian, EH39 5HU<br />
                  <strong style={{ color: "oklch(0.28 0.06 155)" }}>Tel:</strong> +44 (0) 1620 897050
                </p>
              </div>
              <div style={{ background: "oklch(0.93 0.03 155)", borderRadius: "0.4rem", padding: "0.75rem 1rem", marginBottom: "1rem", display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1rem", flexShrink: 0 }}>👶</span>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.82rem", color: "oklch(0.35 0.01 80)", lineHeight: 1.6, margin: 0 }}>
                  <strong style={{ color: "oklch(0.28 0.06 155)" }}>Ideal für Familien:</strong> Das Gelände ist vollständig eingezäunt mit viel Platz im Freien und Strandzugang. Der Strand ist durch hohe Zäune gesichert, sodass Kinder sicher spielen können.
                </p>
              </div>
              <a href="https://www.archerfieldhouse.com/weddings" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", textDecoration: "none", borderBottom: "1.5px solid oklch(0.62 0.07 155)", paddingBottom: "1px" }}>
                Website besuchen
              </a>
            </div>
          </div>
        </div>

        {/* Sunday breakfast */}
        <div className="fade-in-up" style={{ marginTop: "2rem", background: "oklch(0.28 0.06 155)", borderRadius: "0.5rem", padding: "1.75rem 2rem", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
          <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>☕</span>
          <div>
            <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 500, color: "oklch(0.97 0.01 85)", marginBottom: "0.4rem" }}>Sonntagsfrühstück</h4>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.88rem", color: "oklch(0.82 0.04 155)", lineHeight: 1.7 }}>
              Am Sonntagmorgen laden wir alle, die möchten, zu einem entspannten Frühstück im <strong style={{ color: "oklch(0.92 0.03 155)" }}>Archerfield Clubhouse</strong> ein. Eine schöne Gelegenheit, die Feierlichkeiten ausklingen zu lassen, bevor alle nach Hause fahren.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
