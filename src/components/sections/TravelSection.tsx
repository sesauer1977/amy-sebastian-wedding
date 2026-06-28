/**
 * TravelSection — Comprehensive travel directions for international and UK guests
 * Design: Timeless Ivory & Sage
 * Note: NO em dashes anywhere in copy
 */
import { useState } from "react";

const tabs = ["From Overseas", "By Train", "By Car", "By Taxi / Transfer"];

const travelContent = [
  {
    id: "overseas",
    label: "From Overseas",
    icon: "✈️",
    intro: "The closest major international airport is Edinburgh Airport (EDI), which has excellent connections from across Europe, North America, and beyond. From Edinburgh, the venue is approximately 35 to 40 miles east.",
    steps: [
      {
        title: "Fly to Edinburgh Airport (EDI)",
        detail: "Edinburgh Airport has direct flights from most major European cities, as well as connections from North America and the Middle East. Airlines including British Airways, easyJet, Ryanair, KLM, Lufthansa, Emirates and many others serve Edinburgh.",
      },
      {
        title: "Edinburgh Airport to North Berwick",
        detail: "The most convenient option from the airport is a taxi or private hire car directly to your accommodation (approximately 45 to 60 minutes, around £50 to £70). Alternatively, take the Edinburgh Tram from the airport to Edinburgh Waverley station (30 min), then the ScotRail train to North Berwick (33 min, trains run roughly every 30 minutes).",
      },
      {
        title: "From North Berwick to Archerfield",
        detail: "Archerfield is approximately 5 miles from North Berwick. A local taxi takes around 10 to 12 minutes. You can also hire a car at Edinburgh Airport for full flexibility throughout the weekend.",
      },
      {
        title: "Alternative: Glasgow Airport (GLA)",
        detail: "Glasgow Airport is also an option, approximately 80 miles from the venue (1.5 to 2 hours by road). Glasgow has more transatlantic connections. From Glasgow, a hire car or taxi to the venue is recommended.",
      },
    ],
  },
  {
    id: "train",
    label: "By Train",
    icon: "🚂",
    intro: "North Berwick is well-served by ScotRail from Edinburgh Waverley. The journey takes just 33 minutes and trains run approximately every 30 minutes throughout the day.",
    steps: [
      {
        title: "From London",
        detail: "Take the LNER East Coast Main Line from London King's Cross to Edinburgh Waverley (approximately 4.5 hours). Trains run frequently throughout the day. Book in advance for the best fares at lner.co.uk.",
      },
      {
        title: "From Edinburgh Waverley to North Berwick",
        detail: "ScotRail operates regular direct services from Edinburgh Waverley to North Berwick (33 minutes). Trains run approximately every 30 minutes. Check timetables at scotrail.co.uk.",
      },
      {
        title: "From North Berwick to Archerfield",
        detail: "From North Berwick station, take a local taxi to Archerfield (approximately 10 to 12 minutes, around £10 to £15). Local taxi firms include North Berwick Taxis: +44 (0) 1620 893 000.",
      },
      {
        title: "From Other UK Cities",
        detail: "From Manchester, Leeds, Newcastle and other northern cities, take a direct or connecting train to Edinburgh Waverley, then the North Berwick line. Avanti West Coast and CrossCountry serve Edinburgh from the south and west.",
      },
    ],
  },
  {
    id: "car",
    label: "By Car",
    icon: "🚗",
    intro: "Archerfield is located on the A198 between Gullane and North Berwick in East Lothian. The postcode for navigation is EH39 5HU.",
    steps: [
      {
        title: "From Edinburgh (35 miles, approx. 45 min)",
        detail: "Head east on the A1 towards Berwick-upon-Tweed. Exit at the Bankton Junction onto the A198 towards North Berwick. Continue through Aberlady and Gullane. Archerfield is signposted on the left, approximately 2 miles past Gullane.",
      },
      {
        title: "From the North (via A1)",
        detail: "Travelling south on the A1, take the A198 exit towards North Berwick. Follow the A198 through Aberlady and Gullane. Archerfield is on the right, approximately 2 miles past Gullane.",
      },
      {
        title: "From Glasgow (approx. 80 miles, 1.5 hrs)",
        detail: "Take the M8 east towards Edinburgh, then join the A720 Edinburgh City Bypass heading east. Continue onto the A1 eastbound and exit onto the A198 towards North Berwick.",
      },
      {
        title: "Parking at Archerfield",
        detail: "Ample free parking is available on the Archerfield Estate. Please follow signage on arrival.",
      },
    ],
  },
  {
    id: "taxi",
    label: "By Taxi / Transfer",
    icon: "🚕",
    intro: "Taxis and private hire cars are a convenient option, especially for the wedding day itself. We recommend booking in advance for the wedding weekend.",
    steps: [
      {
        title: "From Edinburgh Airport",
        detail: "A taxi from Edinburgh Airport to Archerfield costs approximately £50 to £70 and takes 45 to 60 minutes depending on traffic. Pre-book with a reputable firm such as Central Taxis Edinburgh (+44 131 229 2468) or City Cabs (+44 131 228 1211).",
      },
      {
        title: "From Edinburgh City Centre",
        detail: "A taxi from Edinburgh city centre to Archerfield costs approximately £40 to £55 and takes around 40 to 50 minutes. Uber is also available in Edinburgh.",
      },
      {
        title: "Local North Berwick Taxis",
        detail: "For shorter journeys in the area (e.g. North Berwick station to Archerfield), local taxis are available. North Berwick Taxis: +44 (0) 1620 893 000.",
      },
      {
        title: "Private Transfers",
        detail: "For groups, a minibus or private transfer can be arranged. Several companies operate between Edinburgh and East Lothian. We recommend booking well in advance for the wedding weekend.",
      },
    ],
  },
];

export default function TravelSection() {
  const [activeTab, setActiveTab] = useState(0);
  const content = travelContent[activeTab];

  return (
    <section
      id="travel"
      style={{
        background: "oklch(0.93 0.015 80)",
        padding: "6rem 1.5rem",
        scrollMarginTop: "64px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div className="fade-in-up" style={{ textAlign: "center", marginBottom: "3rem" }}>
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
            Finding Us
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
            Getting Here
          </h2>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.95rem",
              color: "oklch(0.45 0.02 80)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Archerfield is in East Lothian, Scotland. It is easily reachable from Edinburgh and well-connected
            to the rest of the UK and beyond. Select your travel method below.
          </p>
        </div>

        {/* Address card */}
        <div
          className="fade-in-up"
          style={{
            background: "oklch(0.28 0.06 155)",
            borderRadius: "0.5rem",
            padding: "1.25rem 1.5rem",
            marginBottom: "2rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "oklch(0.72 0.06 155)",
                marginBottom: "0.4rem",
              }}
            >
              Reception Venue Address
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.1rem",
                color: "oklch(0.97 0.01 85)",
                lineHeight: 1.5,
              }}
            >
              Archerfield, Golf Green, Dirleton<br />
              East Lothian, EH39 5HU
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=Archerfield+House+Dirleton+East+Lothian+EH39+5HU"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "oklch(0.28 0.06 155)",
              background: "oklch(0.82 0.05 155)",
              padding: "0.6rem 1.25rem",
              borderRadius: "0.4rem",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Open in Maps
          </a>
        </div>

        {/* Tabs */}
        <div className="fade-in-up">
          <div
            style={{
              display: "flex",
              gap: "0.25rem",
              marginBottom: "2rem",
              background: "oklch(0.88 0.02 100)",
              borderRadius: "0.5rem",
              padding: "0.25rem",
              flexWrap: "wrap",
            }}
          >
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                style={{
                  flex: "1 1 auto",
                  padding: "0.6rem 0.75rem",
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  border: "none",
                  borderRadius: "0.35rem",
                  cursor: "pointer",
                  transition: "background 0.2s ease, color 0.2s ease",
                  background: activeTab === i ? "oklch(0.28 0.06 155)" : "transparent",
                  color: activeTab === i ? "oklch(0.97 0.01 85)" : "oklch(0.45 0.02 80)",
                  whiteSpace: "nowrap",
                }}
              >
                {travelContent[i].icon} {tab}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div
            style={{
              background: "oklch(1 0 0)",
              borderRadius: "0.5rem",
              padding: "2rem",
              boxShadow: "0 2px 16px oklch(0.28 0.06 155 / 0.07)",
            }}
          >
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.95rem",
                color: "oklch(0.35 0.01 80)",
                lineHeight: 1.7,
                marginBottom: "1.75rem",
                paddingBottom: "1.5rem",
                borderBottom: "1px solid oklch(0.92 0.01 100)",
              }}
            >
              {content.intro}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {content.steps.map((step, i) => (
                <div key={step.title} style={{ display: "flex", gap: "1rem" }}>
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "oklch(0.93 0.03 155)",
                      border: "1.5px solid oklch(0.62 0.07 155)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "oklch(0.28 0.06 155)",
                      marginTop: "0.1rem",
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.1rem",
                        fontWeight: 500,
                        color: "oklch(0.28 0.06 155)",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {step.title}
                    </h4>
                    <p
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: "0.88rem",
                        color: "oklch(0.45 0.02 80)",
                        lineHeight: 1.7,
                      }}
                    >
                      {step.detail}
                    </p>
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
