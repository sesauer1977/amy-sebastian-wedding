import { useState } from "react";

const tabs = ["Aus dem Ausland", "Mit dem Zug", "Mit dem Auto", "Taxi / Transfer"];

const travelContent = [
  {
    icon: "✈️",
    intro: "Der nächste internationale Flughafen ist Edinburgh Airport (EDI) mit hervorragenden Verbindungen aus ganz Europa, Nordamerika und darüber hinaus. Von Edinburgh ist das Veranstaltungsgelände ca. 55 bis 65 km östlich.",
    steps: [
      { title: "Flug nach Edinburgh Airport (EDI)", detail: "Edinburgh Airport hat Direktflüge aus den meisten europäischen Großstädten sowie Verbindungen aus Nordamerika und dem Nahen Osten. Airlines wie British Airways, easyJet, Ryanair, KLM, Lufthansa und Emirates bedienen Edinburgh." },
      { title: "Vom Flughafen nach North Berwick", detail: "Die bequemste Option ist ein Taxi oder Mietwagen direkt zu Deiner Unterkunft (ca. 45 bis 60 Minuten, ca. £50 bis £70). Alternativ: Edinburgh Tram zum Bahnhof Edinburgh Waverley (30 Min.), dann ScotRail nach North Berwick (33 Min.)." },
      { title: "Von North Berwick nach Archerfield", detail: "Archerfield ist ca. 8 km von North Berwick entfernt. Ein lokales Taxi dauert ca. 10 bis 12 Minuten. Du kannst auch am Flughafen einen Mietwagen nehmen." },
      { title: "Alternative: Glasgow Airport (GLA)", detail: "Glasgow Airport ist ca. 130 km vom Veranstaltungsort entfernt (1,5 bis 2 Stunden). Von Glasgow empfehlen wir einen Mietwagen oder ein Taxi." },
    ],
  },
  {
    icon: "🚂",
    intro: "North Berwick ist gut mit ScotRail von Edinburgh Waverley aus erreichbar. Die Fahrt dauert nur 33 Minuten, und die Züge fahren ca. alle 30 Minuten.",
    steps: [
      { title: "Von London", detail: "Nimm den LNER East Coast Main Line von London King's Cross nach Edinburgh Waverley (ca. 4,5 Stunden). Züge fahren häufig. Buche im Voraus für die besten Preise auf lner.co.uk." },
      { title: "Von Edinburgh Waverley nach North Berwick", detail: "ScotRail betreibt regelmäßige Direktverbindungen von Edinburgh Waverley nach North Berwick (33 Minuten). Züge fahren ca. alle 30 Minuten. Fahrpläne auf scotrail.co.uk." },
      { title: "Von North Berwick nach Archerfield", detail: "Vom Bahnhof North Berwick nimm ein lokales Taxi nach Archerfield (ca. 10 bis 12 Minuten, ca. £10 bis £15). North Berwick Taxis: +44 (0) 1620 893 000." },
      { title: "Aus anderen britischen Städten", detail: "Aus Manchester, Leeds, Newcastle und anderen Städten im Norden: Zug nach Edinburgh Waverley, dann die North Berwick Linie." },
    ],
  },
  {
    icon: "🚗",
    intro: "Archerfield liegt an der A198 zwischen Gullane und North Berwick in East Lothian. Die Postleitzahl für die Navigation ist EH39 5HU.",
    steps: [
      { title: "Von Edinburgh (55 km, ca. 45 Min.)", detail: "Fahre auf der A1 Richtung Berwick-upon-Tweed. Verlasse die A1 an der Bankton Junction auf die A198 Richtung North Berwick. Weiter durch Aberlady und Gullane. Archerfield ist ca. 3 km nach Gullane ausgeschildert." },
      { title: "Von Norden (über A1)", detail: "Auf der A1 südwärts, nehme die A198-Ausfahrt Richtung North Berwick. Folge der A198 durch Aberlady und Gullane." },
      { title: "Von Glasgow (ca. 130 km, 1,5 Std.)", detail: "Nimm die M8 Richtung Edinburgh, dann die A720 Edinburgh City Bypass östlich. Weiter auf der A1 und Ausfahrt auf die A198 Richtung North Berwick." },
      { title: "Parken bei Archerfield", detail: "Ausreichend kostenlose Parkplätze sind auf dem Archerfield Estate vorhanden. Bitte folge der Beschilderung bei der Ankunft." },
    ],
  },
  {
    icon: "🚕",
    intro: "Taxis und Mietwagen sind eine bequeme Option, besonders für den Hochzeitstag selbst. Wir empfehlen eine Vorabbestellung für das Hochzeitswochenende.",
    steps: [
      { title: "Vom Edinburgh Airport", detail: "Ein Taxi vom Edinburgh Airport nach Archerfield kostet ca. £50 bis £70 und dauert 45 bis 60 Minuten. Vorbuchen bei Central Taxis Edinburgh (+44 131 229 2468) oder City Cabs (+44 131 228 1211)." },
      { title: "Aus dem Stadtzentrum Edinburgh", detail: "Ein Taxi aus dem Stadtzentrum Edinburgh kostet ca. £40 bis £55 und dauert ca. 40 bis 50 Minuten. Uber ist in Edinburgh ebenfalls verfügbar." },
      { title: "Lokale North Berwick Taxis", detail: "Für kürzere Fahrten in der Umgebung: North Berwick Taxis: +44 (0) 1620 893 000." },
      { title: "Private Transfers", detail: "Für Gruppen kann ein Minibus oder privater Transfer arrangiert werden. Mehrere Unternehmen fahren zwischen Edinburgh und East Lothian." },
    ],
  },
];

export default function TravelSectionDe() {
  const [activeTab, setActiveTab] = useState(0);
  const content = travelContent[activeTab];

  return (
    <section id="travel" style={{ background: "oklch(0.93 0.015 80)", padding: "6rem 1.5rem", scrollMarginTop: "64px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div className="fade-in-up" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", marginBottom: "0.75rem" }}>So kommst Du zu uns</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 400, color: "oklch(0.28 0.06 155)", marginBottom: "1rem" }}>Anreise</h2>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "oklch(0.45 0.02 80)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            Archerfield liegt in East Lothian, Schottland. Wähle Deine Reisemethode unten.
          </p>
        </div>

        <div className="fade-in-up" style={{ background: "oklch(0.28 0.06 155)", borderRadius: "0.5rem", padding: "1.25rem 1.5rem", marginBottom: "2rem", display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.72 0.06 155)", marginBottom: "0.4rem" }}>Adresse Empfangsort</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "oklch(0.97 0.01 85)", lineHeight: 1.5 }}>Archerfield, Golf Green, Dirleton<br />East Lothian, EH39 5HU</p>
          </div>
          <a href="https://maps.google.com/?q=Archerfield+House+Dirleton+East+Lothian+EH39+5HU" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.28 0.06 155)", background: "oklch(0.82 0.05 155)", padding: "0.6rem 1.25rem", borderRadius: "0.4rem", textDecoration: "none", whiteSpace: "nowrap" }}>
            In Maps öffnen
          </a>
        </div>

        <div className="fade-in-up">
          <div style={{ display: "flex", gap: "0.25rem", marginBottom: "2rem", background: "oklch(0.88 0.02 100)", borderRadius: "0.5rem", padding: "0.25rem", flexWrap: "wrap" }}>
            {tabs.map((tab, i) => (
              <button key={tab} onClick={() => setActiveTab(i)} style={{ flex: "1 1 auto", padding: "0.6rem 0.75rem", fontFamily: "'Lato', sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", border: "none", borderRadius: "0.35rem", cursor: "pointer", background: activeTab === i ? "oklch(0.28 0.06 155)" : "transparent", color: activeTab === i ? "oklch(0.97 0.01 85)" : "oklch(0.45 0.02 80)", whiteSpace: "nowrap" }}>
                {travelContent[i].icon} {tab}
              </button>
            ))}
          </div>
          <div style={{ background: "oklch(1 0 0)", borderRadius: "0.5rem", padding: "2rem", boxShadow: "0 2px 16px oklch(0.28 0.06 155 / 0.07)" }}>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "oklch(0.35 0.01 80)", lineHeight: 1.7, marginBottom: "1.75rem", paddingBottom: "1.5rem", borderBottom: "1px solid oklch(0.92 0.01 100)" }}>{content.intro}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {content.steps.map((step, i) => (
                <div key={step.title} style={{ display: "flex", gap: "1rem" }}>
                  <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "oklch(0.93 0.03 155)", border: "1.5px solid oklch(0.62 0.07 155)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", fontWeight: 600, color: "oklch(0.28 0.06 155)", marginTop: "0.1rem" }}>{i + 1}</div>
                  <div>
                    <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 500, color: "oklch(0.28 0.06 155)", marginBottom: "0.3rem" }}>{step.title}</h4>
                    <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.88rem", color: "oklch(0.45 0.02 80)", lineHeight: 1.7 }}>{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
