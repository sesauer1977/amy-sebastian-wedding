/**
 * AccommodationSection — On-site Archerfield accommodation + nearby options
 * Design: Timeless Ivory & Sage
 * Note: NO em dashes anywhere in copy
 */
import { useState } from "react";

const GH = "https://raw.githubusercontent.com/sesauer1977/amy-sebastian-wedding/main/public/images";

const archerfieldRooms = [
  {
    type: "Pavilion Suite",
    qty: "10 available",
    sleeps: "Up to 2 guests",
    rooms: "1 double/twin room",
    price: "£395 per night",
    basis: "Bed and Breakfast",
    icon: "🛏",
  },
  {
    type: "Large Pavilion Suite",
    qty: "2 available",
    sleeps: "Up to 2 guests",
    rooms: "1 double/twin room",
    price: "£440 per night",
    basis: "Bed and Breakfast",
    icon: "🛏",
  },
  {
    type: "3-Bedroom Lodge (5 guests)",
    qty: "1 available",
    sleeps: "Up to 5 guests",
    rooms: "2 double/twin + 1 single",
    price: "£900 per night",
    basis: "Room only",
    icon: "🏡",
  },
  {
    type: "3-Bedroom Lodge (6 guests, A)",
    qty: "2 available",
    sleeps: "Up to 6 guests",
    rooms: "2 double/twin + 1 double",
    price: "£900 per night",
    basis: "Room only",
    icon: "🏡",
  },
  {
    type: "3-Bedroom Lodge (6 guests, B)",
    qty: "2 available",
    sleeps: "Up to 6 guests",
    rooms: "3 double/twin rooms",
    price: "£900 per night",
    basis: "Room only",
    icon: "🏡",
  },
  {
    type: "4-Bedroom Lodge (7 guests)",
    qty: "1 available",
    sleeps: "Up to 7 guests",
    rooms: "2 double/twin + 1 twin + 1 single",
    price: "£1,050 per night",
    basis: "Room only",
    icon: "🏰",
  },
  {
    type: "4-Bedroom Lodge (8 guests)",
    qty: "2 available",
    sleeps: "Up to 8 guests",
    rooms: "4 double/twin rooms",
    price: "£1,050 per night",
    basis: "Room only",
    icon: "🏰",
  },
];

const nearbyAccommodation = [
  {
    name: "Open Arms Hotel",
    type: "Hotel",
    location: "Main Street, Dirleton, EH39 5EG",
    distance: "approx. 2 miles from Archerfield",
    description: "Charming hotel opposite the 13th-century Dirleton Castle. Excellent restaurant and warm Scottish hospitality.",
    price: "from approx. £100/night",
    url: "https://openarmshotel.com/",
  },
  {
    name: "Marine North Berwick",
    type: "Boutique Hotel",
    location: "18 Cromwell Road, North Berwick, EH39 4LZ",
    distance: "approx. 5 miles from Archerfield",
    description: "Elegant boutique hotel with enviable views of the Firth of Forth and Bass Rock. Newly renovated rooms and spa.",
    price: "from approx. £150/night",
    url: "https://marineandlawn.com/marinenorthberwick/",
  },
  {
    name: "Greywalls Hotel and Chez Roux",
    type: "Country House Hotel",
    location: "Muirfield, Gullane, EH31 2EG",
    distance: "approx. 2 miles from Archerfield",
    description: "Historic Edwardian country house on the edge of Muirfield golf course. Stunning views over East Lothian.",
    price: "from approx. £350/night",
    url: "https://www.greywalls.co.uk/",
  },
  {
    name: "Old Aberlady Inn",
    type: "Inn / B&B",
    location: "West Mains Street, Aberlady, EH32 0RF",
    distance: "approx. 3.5 miles from Archerfield",
    description: "Cosy village inn with breakfast included. Friendly welcome and excellent quality ingredients.",
    price: "from approx. £120/night",
    url: "https://www.oldaberlady.co.uk/",
  },
  {
    name: "Tantallon Caravan and Camping Park",
    type: "Caravan and Camping",
    location: "Dunbar Road, North Berwick",
    distance: "approx. 5 miles from Archerfield",
    description: "Well-equipped adults-only park with spectacular views over the Firth of Forth. Direct beach access and modern facilities.",
    price: "from approx. £30/night",
    url: "https://www.meadowhead.co.uk/",
  },
  {
    name: "Gilsland Park",
    type: "Holiday Park / Glamping",
    location: "North Berwick",
    distance: "approx. 5 miles from Archerfield",
    description: "Family-run holiday park in the harbour town of North Berwick. Glamping cabins and hot tub lodges available.",
    price: "from approx. £50/night",
    url: "https://www.gilslandpark.co.uk/",
  },
  {
    name: "Airbnb and Self-Catering",
    type: "Self-Catering",
    location: "North Berwick, Gullane and surrounds",
    distance: "Various distances",
    description: "A wide range of self-catering cottages and apartments are available throughout East Lothian via Airbnb and local agencies.",
    price: "from approx. £80/night",
    url: "https://www.airbnb.com/s/North-Berwick--Scotland",
  },
  {
    name: "Edinburgh City Centre Hotels",
    type: "Hotels",
    location: "Edinburgh",
    distance: "approx. 35 miles / 45 min drive",
    description: "Edinburgh offers the widest range of hotels at all price points. The city is well-connected to the venue by train and road.",
    price: "from approx. £80/night",
    url: "https://www.visitscotland.com/destinations-maps/edinburgh/",
  },
];

export default function AccommodationSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedNearby = showAll ? nearbyAccommodation : nearbyAccommodation.slice(0, 4);

  return (
    <section
      id="accommodation"
      style={{
        background: "oklch(0.97 0.012 85)",
        padding: "6rem 1.5rem",
        scrollMarginTop: "64px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="fade-in-up" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", marginBottom: "0.75rem" }}>
            Where to Stay
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 400, color: "oklch(0.28 0.06 155)", marginBottom: "1rem" }}>
            Accommodation
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "oklch(0.45 0.02 80)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            We have a range of accommodation available right on the Archerfield Estate, as well as many
            excellent options nearby. We recommend booking early, as the area is popular.
          </p>
        </div>

        {/* Archerfield estate image banner */}
        <div
          className="fade-in-up"
          style={{
            borderRadius: "0.75rem",
            overflow: "hidden",
            marginBottom: "3rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
            boxShadow: "0 4px 24px oklch(0.28 0.06 155 / 0.1)",
          }}
        >
          <div
            style={{
              minHeight: "260px",
              backgroundImage: `url('${GH}/archerfield-house-v2.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            style={{
              background: "oklch(0.28 0.06 155)",
              padding: "2rem 2.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.72 0.06 155)", marginBottom: "0.5rem" }}>
              The Estate
            </p>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 400, color: "oklch(0.97 0.01 85)", marginBottom: "0.75rem", lineHeight: 1.2 }}>
              Archerfield Estate
            </h3>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.88rem", color: "oklch(0.82 0.04 155)", lineHeight: 1.7 }}>
              Set within 550 acres of stunning East Lothian countryside, Archerfield is one of Scotland's finest private estates. The centrepiece is Archerfield House, a magnificent Georgian mansion. Guests staying on the estate have access to the spa, golf courses, and the beautiful grounds.
            </p>
          </div>
        </div>

        {/* On-site Archerfield */}
        <div className="fade-in-up" style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 500, color: "oklch(0.28 0.06 155)", whiteSpace: "nowrap" }}>
              On-Site at Archerfield
            </h3>
            <div style={{ flex: 1, height: "1px", background: "oklch(0.88 0.02 100)" }} />
          </div>

          {/* Family info */}
          <div
            style={{
              background: "oklch(0.28 0.06 155)",
              borderRadius: "0.5rem",
              padding: "1.25rem 1.5rem",
              marginBottom: "1rem",
              display: "flex",
              gap: "1rem",
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>👨‍👩‍👧‍👦</span>
            <div>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "oklch(0.72 0.06 155)", marginBottom: "0.3rem" }}>
                Great for Families
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.88rem", color: "oklch(0.82 0.04 155)", lineHeight: 1.7, margin: 0 }}>
                All rooms at Archerfield are generously sized and family-friendly. Children under 12 can sleep in their parents' room on z-beds, and multiple z-beds fit easily in each room. Children aged 12 and over count as adults under Archerfield's terms. The 3-bedroom lodges are ideal for 3 families sharing, and the 4-bedroom lodges for 4 families, making them outstanding value when split between friends.
              </p>
            </div>
          </div>

          {/* Estate shuttle */}
          <div
            style={{
              background: "oklch(0.93 0.03 155 / 0.3)",
              border: "1px solid oklch(0.82 0.05 155)",
              borderRadius: "0.5rem",
              padding: "1.25rem 1.5rem",
              marginBottom: "1rem",
              display: "flex",
              gap: "1rem",
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>🚐</span>
            <div>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", marginBottom: "0.3rem" }}>
                Getting Around the Estate
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.88rem", color: "oklch(0.35 0.01 80)", lineHeight: 1.7, margin: 0 }}>
                The pavilion suites and lodges are approximately 1 to 2 miles from The Waterfront reception venue. Archerfield provides a round-the-clock shuttle service across the estate, so you will never need to walk or drive between your accommodation and the wedding venue.
              </p>
            </div>
          </div>

          {/* Booking contact */}
          <div
            style={{
              background: "oklch(0.93 0.03 155 / 0.3)",
              border: "1px solid oklch(0.82 0.05 155)",
              borderRadius: "0.5rem",
              padding: "1.25rem 1.5rem",
              marginBottom: "1.5rem",
              display: "flex",
              gap: "1rem",
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>📧</span>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", color: "oklch(0.35 0.01 80)", lineHeight: 1.7 }}>
              To book accommodation on the Archerfield Estate, please contact Tracy directly:{" "}
              <a href="mailto:Tracy@archerfieldhouse.com" style={{ color: "oklch(0.62 0.07 155)", fontWeight: 700, textDecoration: "none", borderBottom: "1px solid oklch(0.62 0.07 155)" }}>
                Tracy@archerfieldhouse.com
              </a>
              . Please mention you are a guest at the Carmichael and Sauerborn wedding.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", gap: "1rem" }}>
            {archerfieldRooms.map((room) => (
              <div
                key={room.type}
                style={{
                  background: "oklch(1 0 0)",
                  borderRadius: "0.4rem",
                  padding: "1.25rem 1.5rem",
                  boxShadow: "0 2px 12px oklch(0.28 0.06 155 / 0.06)",
                  border: "1px solid oklch(0.92 0.01 100)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                  <div>
                    <span style={{ fontSize: "1.3rem" }}>{room.icon}</span>
                    <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 500, color: "oklch(0.28 0.06 155)", marginTop: "0.25rem", lineHeight: 1.3 }}>
                      {room.type}
                    </h4>
                  </div>
                  <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", background: "oklch(0.93 0.03 155)", padding: "0.2rem 0.5rem", borderRadius: "0.25rem", whiteSpace: "nowrap" }}>
                    {room.qty}
                  </span>
                </div>
                <div style={{ borderTop: "1px solid oklch(0.92 0.01 100)", paddingTop: "0.75rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                    <Row label="Sleeps" value={room.sleeps} />
                    <Row label="Rooms" value={room.rooms} />
                    <Row label="Basis" value={room.basis} />
                  </div>
                  <div style={{ marginTop: "0.75rem", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 500, color: "oklch(0.28 0.06 155)" }}>
                    {room.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby */}
        <div className="fade-in-up">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 500, color: "oklch(0.28 0.06 155)", whiteSpace: "nowrap" }}>
              Nearby Accommodation
            </h3>
            <div style={{ flex: 1, height: "1px", background: "oklch(0.88 0.02 100)" }} />
          </div>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", color: "oklch(0.45 0.02 80)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
            North Berwick is just a 10-minute drive from Archerfield and has a wide range of accommodation to suit every budget and style. From world-class golf resorts and boutique hotels to cosy B&Bs, self-catering cottages, Airbnbs, and caravan parks right on the coast, there is something for everyone. Even Edinburgh, with its huge choice of hotels at all price points, is only around an hour by taxi.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 480px), 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
            {displayedNearby.map((place) => (
              <div
                key={place.name}
                style={{
                  background: "oklch(1 0 0)",
                  borderRadius: "0.4rem",
                  padding: "1.25rem 1.5rem",
                  boxShadow: "0 2px 12px oklch(0.28 0.06 155 / 0.06)",
                  border: "1px solid oklch(0.92 0.01 100)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem" }}>
                  <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", fontWeight: 500, color: "oklch(0.28 0.06 155)", lineHeight: 1.3 }}>
                    {place.name}
                  </h4>
                  <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "oklch(0.78 0.06 15)", background: "oklch(0.93 0.025 15)", padding: "0.2rem 0.5rem", borderRadius: "0.25rem", whiteSpace: "nowrap", flexShrink: 0 }}>
                    {place.type}
                  </span>
                </div>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "oklch(0.62 0.07 155)", fontWeight: 700, letterSpacing: "0.04em" }}>
                  📍 {place.distance}
                </p>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", color: "oklch(0.45 0.02 80)", lineHeight: 1.6 }}>
                  {place.description}
                </p>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "oklch(0.55 0.01 80)" }}>
                  {place.location}
                </p>
                {(place as any).price && (
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "oklch(0.28 0.06 155)",
                    marginTop: "0.25rem",
                  }}>
                    {(place as any).price}
                  </p>
                )}
                <a href={place.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", textDecoration: "none", marginTop: "0.25rem" }}>
                  View
                </a>
              </div>
            ))}
          </div>

          {!showAll && (
            <div style={{ textAlign: "center" }}>
              <button
                onClick={() => setShowAll(true)}
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "oklch(0.62 0.07 155)",
                  background: "none",
                  border: "1.5px solid oklch(0.62 0.07 155)",
                  borderRadius: "0.4rem",
                  padding: "0.6rem 1.5rem",
                  cursor: "pointer",
                  transition: "background 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "oklch(0.62 0.07 155)";
                  (e.currentTarget as HTMLButtonElement).style.color = "oklch(1 0 0)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "none";
                  (e.currentTarget as HTMLButtonElement).style.color = "oklch(0.62 0.07 155)";
                }}
              >
                Show more options
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "baseline" }}>
      <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", minWidth: "52px", flexShrink: 0 }}>
        {label}
      </span>
      <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.82rem", color: "oklch(0.45 0.02 80)" }}>
        {value}
      </span>
    </div>
  );
}
