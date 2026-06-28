import { useState } from "react";

const GH = "https://raw.githubusercontent.com/sesauer1977/amy-sebastian-wedding/main/public/images";

const archerfieldRooms = [
  { type: "Pavilion Suite", qty: "10 verfügbar", sleeps: "Bis zu 2 Gäste", rooms: "1 Doppel-/Zweibettzimmer", price: "£395 pro Nacht", basis: "Übernachtung mit Frühstück", icon: "🛏" },
  { type: "Große Pavilion Suite", qty: "2 verfügbar", sleeps: "Bis zu 2 Gäste", rooms: "1 Doppel-/Zweibettzimmer", price: "£440 pro Nacht", basis: "Übernachtung mit Frühstück", icon: "🛏" },
  { type: "3-Zimmer-Lodge (5 Gäste)", qty: "1 verfügbar", sleeps: "Bis zu 5 Gäste", rooms: "2 Doppel-/Zweibett + 1 Einzelzimmer", price: "£900 pro Nacht", basis: "Nur Zimmer", icon: "🏡" },
  { type: "3-Zimmer-Lodge (6 Gäste, A)", qty: "2 verfügbar", sleeps: "Bis zu 6 Gäste", rooms: "2 Doppel-/Zweibett + 1 Doppelzimmer", price: "£900 pro Nacht", basis: "Nur Zimmer", icon: "🏡" },
  { type: "3-Zimmer-Lodge (6 Gäste, B)", qty: "2 verfügbar", sleeps: "Bis zu 6 Gäste", rooms: "3 Doppel-/Zweibettzimmer", price: "£900 pro Nacht", basis: "Nur Zimmer", icon: "🏡" },
  { type: "4-Zimmer-Lodge (7 Gäste)", qty: "1 verfügbar", sleeps: "Bis zu 7 Gäste", rooms: "2 Doppel-/Zweibett + 1 Zweibett + 1 Einzelzimmer", price: "£1.050 pro Nacht", basis: "Nur Zimmer", icon: "🏰" },
  { type: "4-Zimmer-Lodge (8 Gäste)", qty: "2 verfügbar", sleeps: "Bis zu 8 Gäste", rooms: "4 Doppel-/Zweibettzimmer", price: "£1.050 pro Nacht", basis: "Nur Zimmer", icon: "🏰" },
];

const nearbyAccommodation = [
  { name: "Open Arms Hotel", type: "Hotel", location: "Main Street, Dirleton, EH39 5EG", distance: "ca. 3 km von Archerfield", description: "Charmantes Hotel gegenüber dem Dirleton Castle aus dem 13. Jahrhundert.", price: "ab ca. £100/Nacht", url: "https://openarmshotel.com/" },
  { name: "Marine North Berwick", type: "Boutique-Hotel", location: "18 Cromwell Road, North Berwick, EH39 4LZ", distance: "ca. 8 km von Archerfield", description: "Elegantes Boutique-Hotel mit herrlichem Blick auf den Firth of Forth und Bass Rock.", price: "ab ca. £150/Nacht", url: "https://marineandlawn.com/marinenorthberwick/" },
  { name: "Greywalls Hotel und Chez Roux", type: "Landhaus-Hotel", location: "Muirfield, Gullane, EH31 2EG", distance: "ca. 3 km von Archerfield", description: "Historisches edwardianisches Landhaus am Rande des Muirfield Golfplatzes.", price: "ab ca. £350/Nacht", url: "https://www.greywalls.co.uk/" },
  { name: "Old Aberlady Inn", type: "Gasthof / B&B", location: "West Mains Street, Aberlady, EH32 0RF", distance: "ca. 5 km von Archerfield", description: "Gemütlicher Dorfgasthof mit Frühstück inklusive.", price: "ab ca. £120/Nacht", url: "https://www.oldaberlady.co.uk/" },
  { name: "Tantallon Caravan und Camping Park", type: "Camping", location: "Dunbar Road, North Berwick", distance: "ca. 8 km von Archerfield", description: "Gut ausgestatteter Campingplatz mit spektakulärem Blick auf den Firth of Forth.", price: "ab ca. £30/Nacht", url: "https://www.meadowhead.co.uk/" },
  { name: "Gilsland Park", type: "Ferienpark / Glamping", location: "North Berwick", distance: "ca. 8 km von Archerfield", description: "Familiengeführter Ferienpark in North Berwick mit Glamping-Hütten.", price: "ab ca. £50/Nacht", url: "https://www.gilslandpark.co.uk/" },
  { name: "Airbnb und Ferienwohnungen", type: "Ferienwohnung", location: "North Berwick, Gullane und Umgebung", distance: "Verschiedene Entfernungen", description: "Eine große Auswahl an Ferienwohnungen und Cottages in ganz East Lothian.", price: "ab ca. £80/Nacht", url: "https://www.airbnb.com/s/North-Berwick--Scotland" },
  { name: "Hotels in Edinburgh", type: "Hotels", location: "Edinburgh", distance: "ca. 55 km / 1 Std. Taxi", description: "Edinburgh bietet eine riesige Auswahl an Hotels in allen Preisklassen.", price: "ab ca. £80/Nacht", url: "https://www.visitscotland.com/destinations-maps/edinburgh/" },
];

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "baseline" }}>
      <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", minWidth: "52px", flexShrink: 0 }}>{label}</span>
      <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.82rem", color: "oklch(0.45 0.02 80)" }}>{value}</span>
    </div>
  );
}

export default function AccommodationSectionDe() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? nearbyAccommodation : nearbyAccommodation.slice(0, 4);

  return (
    <section id="accommodation" style={{ background: "oklch(0.97 0.012 85)", padding: "6rem 1.5rem", scrollMarginTop: "64px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="fade-in-up" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", marginBottom: "0.75rem" }}>Wo Du übernachten kannst</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 400, color: "oklch(0.28 0.06 155)", marginBottom: "1rem" }}>Unterkunft</h2>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "oklch(0.45 0.02 80)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            Direkt auf dem Archerfield Estate stehen verschiedene Unterkünfte zur Verfügung, ebenso wie viele hervorragende Optionen in der Nähe. Wir empfehlen eine frühzeitige Buchung.
          </p>
        </div>

        {/* Archerfield estate banner */}
        <div className="fade-in-up" style={{ borderRadius: "0.75rem", overflow: "hidden", marginBottom: "3rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", boxShadow: "0 4px 24px oklch(0.28 0.06 155 / 0.1)" }}>
          <div style={{ minHeight: "260px", backgroundImage: `url('${GH}/archerfield-house-v2.jpg')`, backgroundSize: "cover", backgroundPosition: "center" }} />
          <div style={{ background: "oklch(0.28 0.06 155)", padding: "2rem 2.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.72 0.06 155)", marginBottom: "0.5rem" }}>Das Estate</p>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 400, color: "oklch(0.97 0.01 85)", marginBottom: "0.75rem", lineHeight: 1.2 }}>Archerfield Estate</h3>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.88rem", color: "oklch(0.82 0.04 155)", lineHeight: 1.7 }}>
              Auf 550 Hektar wunderschöner Landschaft in East Lothian gelegen, ist Archerfield eines der schönsten Privatgüter Schottlands. Das Herzstück ist Archerfield House, ein prächtiges georgianisches Herrenhaus. Gäste, die auf dem Estate übernachten, haben Zugang zum Spa, zu den Golfplätzen und dem wunderschönen Gelände.
            </p>
          </div>
        </div>

        {/* On-site */}
        <div className="fade-in-up" style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 500, color: "oklch(0.28 0.06 155)", whiteSpace: "nowrap" }}>Direkt auf dem Estate</h3>
            <div style={{ flex: 1, height: "1px", background: "oklch(0.88 0.02 100)" }} />
          </div>

          <div style={{ background: "oklch(0.28 0.06 155)", borderRadius: "0.5rem", padding: "1.25rem 1.5rem", marginBottom: "1rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
            <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>👨‍👩‍👧‍👦</span>
            <div>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "oklch(0.72 0.06 155)", marginBottom: "0.3rem" }}>Ideal für Familien</p>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.88rem", color: "oklch(0.82 0.04 155)", lineHeight: 1.7, margin: 0 }}>
                Alle Zimmer sind großzügig und familienfreundlich. Kinder unter 12 Jahren können im Zimmer der Eltern auf Klappbetten schlafen. Kinder ab 12 Jahren zählen als Erwachsene. Die 3-Zimmer-Lodges sind ideal für 3 Familien, die 4-Zimmer-Lodges für 4 Familien.
              </p>
            </div>
          </div>

          <div style={{ background: "oklch(0.93 0.03 155 / 0.3)", border: "1px solid oklch(0.82 0.05 155)", borderRadius: "0.5rem", padding: "1.25rem 1.5rem", marginBottom: "1rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
            <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>🚐</span>
            <div>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", marginBottom: "0.3rem" }}>Shuttle-Service auf dem Estate</p>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.88rem", color: "oklch(0.35 0.01 80)", lineHeight: 1.7, margin: 0 }}>
                Die Suiten und Lodges sind ca. 1 bis 2 Meilen vom The Waterfront entfernt. Archerfield bietet einen Rund-um-die-Uhr-Shuttle-Service auf dem Estate an.
              </p>
            </div>
          </div>

          <div style={{ background: "oklch(0.93 0.03 155 / 0.3)", border: "1px solid oklch(0.82 0.05 155)", borderRadius: "0.5rem", padding: "1.25rem 1.5rem", marginBottom: "1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
            <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>📧</span>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", color: "oklch(0.35 0.01 80)", lineHeight: 1.7 }}>
              Zur Buchung von Unterkünften auf dem Archerfield Estate wende Dich bitte direkt an Tracy:{" "}
              <a href="mailto:Tracy@archerfieldhouse.com" style={{ color: "oklch(0.62 0.07 155)", fontWeight: 700, textDecoration: "none", borderBottom: "1px solid oklch(0.62 0.07 155)" }}>Tracy@archerfieldhouse.com</a>
              . Bitte erwähne, dass Du Gast bei der Hochzeit Carmichael und Sauerborn bist.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", gap: "1rem" }}>
            {archerfieldRooms.map((room) => (
              <div key={room.type} style={{ background: "oklch(1 0 0)", borderRadius: "0.4rem", padding: "1.25rem 1.5rem", boxShadow: "0 2px 12px oklch(0.28 0.06 155 / 0.06)", border: "1px solid oklch(0.92 0.01 100)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                  <div>
                    <span style={{ fontSize: "1.3rem" }}>{room.icon}</span>
                    <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 500, color: "oklch(0.28 0.06 155)", marginTop: "0.25rem", lineHeight: 1.3 }}>{room.type}</h4>
                  </div>
                  <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", background: "oklch(0.93 0.03 155)", padding: "0.2rem 0.5rem", borderRadius: "0.25rem", whiteSpace: "nowrap" }}>{room.qty}</span>
                </div>
                <div style={{ borderTop: "1px solid oklch(0.92 0.01 100)", paddingTop: "0.75rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                    <Row label="Schläft" value={room.sleeps} />
                    <Row label="Zimmer" value={room.rooms} />
                    <Row label="Basis" value={room.basis} />
                  </div>
                  <div style={{ marginTop: "0.75rem", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 500, color: "oklch(0.28 0.06 155)" }}>{room.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby */}
        <div className="fade-in-up">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 500, color: "oklch(0.28 0.06 155)", whiteSpace: "nowrap" }}>Unterkunft in der Nähe</h3>
            <div style={{ flex: 1, height: "1px", background: "oklch(0.88 0.02 100)" }} />
          </div>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", color: "oklch(0.45 0.02 80)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
            North Berwick ist nur 10 Minuten mit dem Auto von Archerfield entfernt und bietet eine große Auswahl an Unterkünften. Von erstklassigen Golfresorts und Boutique-Hotels bis hin zu gemütlichen B&Bs, Ferienwohnungen, Airbnbs und Campingplätzen direkt an der Küste. Sogar Edinburgh mit seiner riesigen Hotelauswahl ist nur etwa eine Stunde mit dem Taxi entfernt.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 480px), 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
            {displayed.map((place) => (
              <div key={place.name} style={{ background: "oklch(1 0 0)", borderRadius: "0.4rem", padding: "1.25rem 1.5rem", boxShadow: "0 2px 12px oklch(0.28 0.06 155 / 0.06)", border: "1px solid oklch(0.92 0.01 100)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem" }}>
                  <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", fontWeight: 500, color: "oklch(0.28 0.06 155)", lineHeight: 1.3 }}>{place.name}</h4>
                  <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", color: "oklch(0.78 0.06 15)", background: "oklch(0.93 0.025 15)", padding: "0.2rem 0.5rem", borderRadius: "0.25rem", whiteSpace: "nowrap", flexShrink: 0 }}>{place.type}</span>
                </div>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "oklch(0.62 0.07 155)", fontWeight: 700 }}>📍 {place.distance}</p>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", color: "oklch(0.45 0.02 80)", lineHeight: 1.6 }}>{place.description}</p>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "oklch(0.55 0.01 80)" }}>{place.location}</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", fontWeight: 500, color: "oklch(0.28 0.06 155)" }}>{place.price}</p>
                <a href={place.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", textDecoration: "none" }}>Ansehen</a>
              </div>
            ))}
          </div>
          {!showAll && (
            <div style={{ textAlign: "center" }}>
              <button onClick={() => setShowAll(true)} style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", background: "none", border: "1.5px solid oklch(0.62 0.07 155)", borderRadius: "0.4rem", padding: "0.6rem 1.5rem", cursor: "pointer" }}>
                Mehr Optionen anzeigen
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
