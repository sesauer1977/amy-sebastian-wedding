const transportCards = [
  { icon: "🚌", time: "Samstag, 13:15 Uhr", title: "Kostenloser Bus zur Zeremonie", subtitle: "Nur für Gäste, die in Archerfield übernachten", colour: "oklch(0.28 0.06 155)", textColour: "oklch(0.97 0.01 85)", subtitleColour: "oklch(0.72 0.06 155)", bodyColour: "oklch(0.82 0.04 155)", body: "Kostenlose Busse fahren um 13:15 Uhr von Archerfield ab und kommen rechtzeitig zur Zeremonie um 14:00 Uhr in Our Lady Star of the Sea in North Berwick an. Die Fahrt dauert ca. 15 Minuten. Bitte sei um 13:10 Uhr bereit.", note: "Nur für Gäste in Archerfield", noteColour: "oklch(0.62 0.07 155)", noteBg: "oklch(0.38 0.06 155)" },
  { icon: "🚗", time: "Samstag, vor 14:00 Uhr", title: "Eigene Anreise zur Kirche", subtitle: "Für Gäste, die nicht in Archerfield übernachten", colour: "oklch(0.93 0.015 80)", textColour: "oklch(0.28 0.06 155)", subtitleColour: "oklch(0.62 0.07 155)", bodyColour: "oklch(0.45 0.02 80)", body: "Wenn Du nicht in Archerfield übernachtest, reise bitte selbst zur Our Lady Star of the Sea, Law Road, North Berwick EH39 4PN an. Bitte plane, um 13:50 Uhr dort zu sein.", note: null, noteColour: null, noteBg: null },
  { icon: "🚌", time: "Samstag, nach der Zeremonie", title: "Kostenloser Bus zum Empfang", subtitle: "Für alle Gäste", colour: "oklch(0.93 0.03 155 / 0.5)", textColour: "oklch(0.28 0.06 155)", subtitleColour: "oklch(0.52 0.09 155)", bodyColour: "oklch(0.45 0.02 80)", body: "Nach der Zeremonie stehen kostenlose Busse für alle Gäste von der Kirche zum The Waterfront in Archerfield bereit. Die Fahrt dauert ca. 15 Minuten.", note: "Für alle Gäste", noteColour: "oklch(0.52 0.09 155)", noteBg: "oklch(0.82 0.05 155)" },
  { icon: "🚐", time: "Samstagabend, die ganze Nacht", title: "Kostenlose Autos und Minibusse", subtitle: "Für alle Gäste", colour: "oklch(0.93 0.025 15 / 0.4)", textColour: "oklch(0.28 0.06 155)", subtitleColour: "oklch(0.62 0.08 15)", bodyColour: "oklch(0.45 0.02 80)", body: "Kostenlose Autos und Minibusse stehen den ganzen Abend bereit, um Gäste von Archerfield nach North Berwick, in die Umgebung und zum Bahnhof North Berwick zu bringen. Keine Voranmeldung erforderlich. Sprich einfach ein Teammitglied an, wenn Du bereit bist zu gehen.", note: "Für alle Gäste", noteColour: "oklch(0.62 0.08 15)", noteBg: "oklch(0.88 0.04 15)" },
];

export default function TransportSectionDe() {
  return (
    <section id="transport" style={{ background: "oklch(0.97 0.012 85)", padding: "6rem 1.5rem", scrollMarginTop: "64px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div className="fade-in-up" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", marginBottom: "0.75rem" }}>Am Hochzeitstag</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 400, color: "oklch(0.28 0.06 155)", marginBottom: "1rem" }}>Transport</h2>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "oklch(0.45 0.02 80)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            Wir möchten sicherstellen, dass alle entspannt feiern können, ohne sich um das Fahren kümmern zu müssen.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {transportCards.map((card, i) => (
            <div key={card.title} className="fade-in-up" style={{ background: card.colour, borderRadius: "0.75rem", padding: "2rem 2.5rem", display: "flex", gap: "1.5rem", alignItems: "flex-start", animationDelay: `${i * 0.1}s` }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "oklch(1 0 0 / 0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0 }}>{card.icon}</div>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: card.subtitleColour, marginBottom: "0.2rem" }}>{card.time}</p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 500, color: card.textColour, marginBottom: "0.2rem", lineHeight: 1.2 }}>{card.title}</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", fontWeight: 700, color: card.subtitleColour, marginBottom: "0.75rem" }}>{card.subtitle}</p>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", color: card.bodyColour, lineHeight: 1.75, marginBottom: card.note ? "0.75rem" : 0 }}>{card.body}</p>
                {card.note && <span style={{ display: "inline-block", fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: card.noteColour!, background: card.noteBg!, padding: "0.25rem 0.65rem", borderRadius: "0.3rem" }}>{card.note}</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="fade-in-up" style={{ marginTop: "1.25rem", background: "oklch(0.93 0.03 155 / 0.3)", border: "1px solid oklch(0.82 0.05 155)", borderRadius: "0.5rem", padding: "1.5rem 2rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>🚂</span>
          <div>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", marginBottom: "0.3rem" }}>Letzte Züge von North Berwick nach Edinburgh (Samstag)</p>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.88rem", color: "oklch(0.35 0.01 80)", lineHeight: 1.7, margin: 0 }}>
              Der letzte ScotRail-Zug von North Berwick nach Edinburgh Waverley an einem Samstag fährt um ca. <strong style={{ color: "oklch(0.28 0.06 155)" }}>22:24 Uhr</strong> ab und kommt um ca. <strong style={{ color: "oklch(0.28 0.06 155)" }}>22:56 Uhr</strong> in Edinburgh Waverley an. Fahrtzeit ca. 33 Minuten. Bitte überprüfe den aktuellen Fahrplan auf{" "}<a href="https://www.scotrail.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: "oklch(0.52 0.09 155)", fontWeight: 700, textDecoration: "none" }}>scotrail.co.uk</a>. Unsere Shuttles bringen Dich rechtzeitig zum Bahnhof.
            </p>
          </div>
        </div>

        <div className="fade-in-up" style={{ marginTop: "2rem", background: "oklch(0.28 0.06 155)", borderRadius: "0.5rem", padding: "1.5rem 2rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>💡</span>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.88rem", color: "oklch(0.82 0.04 155)", lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: "oklch(0.97 0.01 85)" }}>Kurz zusammengefasst:</strong> Wenn Du in Archerfield übernachtest, steig einfach um 13:15 Uhr in den Bus. Wenn Du woanders übernachtest, fahre selbst zur Kirche und Busse bringen alle zum Empfang. Heimfahrten sind für den ganzen Abend organisiert.
          </p>
        </div>
      </div>
    </section>
  );
}
