const GH = "https://raw.githubusercontent.com/sesauer1977/amy-sebastian-wedding/main/public/images";

const triviaCards = [
  { emoji: "🥃", title: "Der Quaich", subtitle: "Schottlands Liebesbecher", image: `${GH}/trad-quaich.jpg`, body: "Eine der schönsten schottischen Hochzeitstraditionen ist der Quaich (ausgesprochen 'kwach'), eine flache Silberschale mit zwei Griffen. Nach der Zeremonie füllt die Braut ihn mit Whisky und reicht ihn dem Bräutigam. Sie trinken gemeinsam und reichen ihn dann an ihre Eltern und engsten Gäste weiter als Symbol der Gastfreundschaft und geteilten Liebe.", colour: "oklch(0.93 0.03 75)", accent: "oklch(0.62 0.09 75)" },
  { emoji: "💃", title: "Der Ceilidh", subtitle: "Schottlands größte Partytradition", image: `${GH}/trad-ceilidh-v2.jpg`, body: "Ein Ceilidh (ausgesprochen 'kay-lee') ist ein traditionelles schottisches Tanzfest mit Volksmusik. Bei einem Hochzeits-Ceilidh ruft ein Ansager die Schritte, sodass alle mitmachen können, auch ohne Vorkenntnisse. Erwarte den Dashing White Sergeant, Strip the Willow und die Gay Gordons. Keine Erfahrung nötig, nur Begeisterung und bequeme Schuhe.", colour: "oklch(0.93 0.03 155)", accent: "oklch(0.52 0.09 155)" },
  { emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", title: "Den Kilt tragen", subtitle: "Hochlandkleidung für Gäste", image: `${GH}/trad-kilt.jpg`, body: "Herren sind herzlich eingeladen, Highland Dress zu tragen. Ein vollständiges Kilt-Outfit umfasst den Kilt im Clan-Tartan, eine Prince Charlie oder Argyll Jacke, Sporran, Sgian Dubh (ein kleines Messer in der Socke), Ghillie Brogues und Kilt-Strümpfe. Damen können eine Tartanschärpe über dem Kleid tragen.", colour: "oklch(0.93 0.025 15)", accent: "oklch(0.62 0.08 15)" },
  { emoji: "🎵", title: "Der Dudelsack", subtitle: "Schottlands Nationalinstrument", image: `${GH}/trad-bagpipes.jpg`, body: "Der Great Highland Bagpipe ist einer der ikonischsten Klänge der Welt. Bei schottischen Hochzeiten führt ein Pfeifer traditionell die Brautgesellschaft in die Zeremonie und spielt die Gäste danach hinaus. Der Klang trägt meilenweit über die Küste von East Lothian. Wenn Du noch nie live Dudelsäcke gehört hast, bereite Dich darauf vor, bewegt zu werden.", colour: "oklch(0.93 0.03 255)", accent: "oklch(0.52 0.08 255)" },
];

const kiltHire = [
  { name: "Bowdens Kiltmakers", location: "42 Keppel Road, North Berwick, EH39 4QG", note: "Direkt in North Berwick", tel: "07519 072265", highlight: true },
  { name: "Jean O'Rourke Kiltmaker", location: "East Lothian", note: "Lokaler Kiltmacher in East Lothian", tel: "01875 852881", url: "https://jeanorourkekiltmaker.co.uk/", highlight: false },
  { name: "Gordon Nicolson Kiltmakers", location: "Edinburgh", note: "Premium Kilt-Verleih in Edinburgh, ab ca. £150 für 4 Tage", url: "https://nicolsonkiltmakers.com/pages/edinburgh-kilt-hire", highlight: false },
  { name: "McCalls Highlandwear", location: "21-22 Haddington Place, Edinburgh, EH7 4AF", note: "Über 30 Tartans, ab ca. £99", url: "https://www.mccalls.co.uk/collections/kilt-hire-edinburgh", highlight: false },
  { name: "Kinloch Anderson", location: "Edinburgh", note: "Historischer Kiltmacher seit 1868, ca. £165 für 4 Tage", url: "https://www.kinlochanderson.com/shop/men/kilt-services/highland-dress-kilt-hire", highlight: false },
];

const funFacts = [
  { emoji: "🌿", fact: "Die Distel ist Schottlands Nationalblume. Sie wurde gewählt, weil Wikinger-Eindringlinge auf sie barfuss traten und aufschrien, wodurch schlafende schottische Soldaten geweckt wurden." },
  { emoji: "💍", fact: "Schottische Eheringe sind traditionell schlichte Goldbänder, getragen an der linken Hand. Der Claddagh-Ring mit zwei Händen, die ein gekröntes Herz halten, ist ebenfalls beliebt." },
  { emoji: "🎀", fact: "Das Handfasting ist eine alte keltische Tradition, bei der die Hände des Paares mit einem Band zusammengebunden werden. Daher kommt der Ausdruck 'den Knoten knüpfen'." },
  { emoji: "🌾", fact: "Haferkuchen und Käse sind ein traditionelles schottisches Hochzeitsgeschenk als Symbol für Wohlstand und einen vollen Vorratskeller." },
  { emoji: "🪨", fact: "Das schottisch-gälische Wort für Hochzeit ist 'banais', und das Wort für Flitterwochen ist 'mios na meala', was 'Monat des Honigs' bedeutet." },
  { emoji: "🦅", fact: "Das schottische Wappentier ist das Einhorn, ein Symbol für Reinheit, Kraft und Unabhängigkeit. Du findest es im königlichen Wappen Schottlands." },
];

export default function ScottishTriviaSectionDe() {
  return (
    <section id="traditions" style={{ background: "oklch(0.97 0.012 85)", padding: "6rem 1.5rem", scrollMarginTop: "64px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="fade-in-up" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", marginBottom: "0.75rem" }}>Unbedingt lesen</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 400, color: "oklch(0.28 0.06 155)", marginBottom: "1rem" }}>Ein kleiner Leitfaden zur schottischen Hochzeit</h2>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", color: "oklch(0.45 0.02 80)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            Ob erfahrener Schotte oder Erstbesucher, hier ist alles, was Du wissen musst, um eine richtige schottische Hochzeitsfeier zu genießen. Slainthe!
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "3rem", marginBottom: "5rem" }}>
          {triviaCards.map((card, i) => (
            <div key={card.title} className="fade-in-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: "0", borderRadius: "0.75rem", overflow: "hidden", boxShadow: "0 4px 32px oklch(0.28 0.06 155 / 0.1)" }}>
              <div style={{ order: i % 2 === 0 ? 0 : 1, minHeight: "320px", backgroundImage: `url('${card.image}')`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundColor: "oklch(0.97 0.012 85)", position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, background: "oklch(0.15 0.04 155 / 0.05)" }} />
                <div style={{ position: "absolute", top: "1.25rem", left: "1.25rem", background: "oklch(1 0 0 / 0.9)", borderRadius: "50%", width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>{card.emoji}</div>
              </div>
              <div style={{ background: card.colour, padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "center", order: i % 2 === 0 ? 1 : 0 }}>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: card.accent, marginBottom: "0.4rem" }}>{card.subtitle}</p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 500, color: "oklch(0.28 0.06 155)", marginBottom: "1rem", lineHeight: 1.2 }}>{card.title}</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.92rem", color: "oklch(0.35 0.01 80)", lineHeight: 1.8 }}>{card.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Kilt hire */}
        <div className="fade-in-up" style={{ marginBottom: "5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 400, color: "oklch(0.28 0.06 155)", marginBottom: "0.75rem" }}>Wo man einen Kilt leihen kann</h3>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", color: "oklch(0.45 0.02 80)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
              Wir empfehlen, den Kilt mindestens 6 bis 8 Wochen vor der Hochzeit zu buchen. Hier sind einige hervorragende Optionen in der Nähe des Veranstaltungsortes und in Edinburgh.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", gap: "1rem" }}>
            {kiltHire.map((shop) => (
              <div key={shop.name} style={{ background: shop.highlight ? "oklch(0.28 0.06 155)" : "oklch(1 0 0)", borderRadius: "0.5rem", padding: "1.5rem", border: shop.highlight ? "none" : "1px solid oklch(0.92 0.01 100)", boxShadow: "0 2px 12px oklch(0.28 0.06 155 / 0.07)" }}>
                {shop.highlight && <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", background: "oklch(0.72 0.07 155)", color: "oklch(0.28 0.06 155)", padding: "0.2rem 0.6rem", borderRadius: "0.25rem", display: "inline-block", marginBottom: "0.75rem" }}>Am nächsten zum Veranstaltungsort</span>}
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 500, color: shop.highlight ? "oklch(0.97 0.01 85)" : "oklch(0.28 0.06 155)", marginBottom: "0.4rem" }}>{shop.name}</h4>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: shop.highlight ? "oklch(0.82 0.05 155)" : "oklch(0.55 0.01 80)", marginBottom: "0.3rem" }}>📍 {shop.location}</p>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.82rem", color: shop.highlight ? "oklch(0.88 0.03 85)" : "oklch(0.45 0.02 80)", lineHeight: 1.6, marginBottom: "0.75rem" }}>{shop.note}</p>
                {shop.tel && <a href={`tel:${shop.tel}`} style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", fontWeight: 700, color: shop.highlight ? "oklch(0.82 0.05 155)" : "oklch(0.62 0.07 155)", textDecoration: "none", display: "block", marginBottom: "0.25rem" }}>📞 {shop.tel}</a>}
                {shop.url && <a href={shop.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: shop.highlight ? "oklch(0.82 0.05 155)" : "oklch(0.62 0.07 155)", textDecoration: "none" }}>Website besuchen</a>}
              </div>
            ))}
          </div>
        </div>

        {/* Fun facts */}
        <div className="fade-in-up">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 400, color: "oklch(0.28 0.06 155)", marginBottom: "0.5rem" }}>Wusstest Du schon?</h3>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", color: "oklch(0.45 0.02 80)" }}>Ein paar interessante Fakten über Schottland.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", gap: "1rem" }}>
            {funFacts.map((item, i) => (
              <div key={i} style={{ background: "oklch(1 0 0)", borderRadius: "0.5rem", padding: "1.5rem", border: "1px solid oklch(0.92 0.01 100)", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.75rem", flexShrink: 0, lineHeight: 1 }}>{item.emoji}</span>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.88rem", color: "oklch(0.35 0.01 80)", lineHeight: 1.7, margin: 0 }}>{item.fact}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-in-up" style={{ marginTop: "4rem", textAlign: "center", background: "oklch(0.28 0.06 155)", borderRadius: "0.75rem", padding: "3rem 2rem" }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 400, color: "oklch(0.97 0.01 85)", marginBottom: "0.75rem" }}>"Slainthe Mhath!"</p>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", color: "oklch(0.72 0.06 155)", letterSpacing: "0.08em" }}>Der traditionelle schottische Toast, ausgesprochen 'slan-ja-va', bedeutet 'Gute Gesundheit!'</p>
        </div>
      </div>
    </section>
  );
}
