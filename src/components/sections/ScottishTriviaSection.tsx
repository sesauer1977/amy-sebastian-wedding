/**
 * ScottishTriviaSection — Fun Scottish wedding trivia page
 * Design: Timeless Ivory & Sage (with more colour and playfulness)
 * Note: NO em dashes anywhere in copy
 */

const MANUS = (key: string) => `/manus-storage/${key}`;

const triviaCards = [
  {
    emoji: "🥃",
    title: "The Quaich",
    subtitle: "Scotland's Loving Cup",
    image: MANUS("trivia-quaich_6d5ff90d.jpg"),
    body: "One of the most beautiful Scottish wedding traditions is the Quaich (pronounced 'kwach'), a shallow two-handled silver bowl. After the ceremony, the bride fills it with whisky and passes it to the groom. They drink together, then pass it to their parents and closest guests as a symbol of welcome and shared love. The word comes from the Gaelic 'cuach', meaning cup.",
    colour: "oklch(0.93 0.03 75)",
    accent: "oklch(0.62 0.09 75)",
  },
  {
    emoji: "💃",
    title: "The Ceilidh",
    subtitle: "Scotland's Greatest Party Tradition",
    image: MANUS("trivia-ceilidh_8ad6b56b.jpg"),
    body: "A ceilidh (pronounced 'kay-lee') is a traditional Scottish social gathering with folk music and dancing. At a wedding ceilidh, a caller shouts the steps so everyone can join in, even if you have never danced before. Expect the Dashing White Sergeant, Strip the Willow, and the Gay Gordons. No experience required, just enthusiasm and comfortable shoes.",
    colour: "oklch(0.93 0.03 155)",
    accent: "oklch(0.52 0.09 155)",
  },
  {
    emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    title: "Wearing a Kilt",
    subtitle: "Highland Dress for Guests",
    image: MANUS("trivia-kilt_7f694565.jpg"),
    body: "Gentlemen are warmly encouraged to wear Highland dress if they wish. A full kilt outfit includes the kilt in your clan tartan, a Prince Charlie or Argyll jacket, sporran, sgian dubh (a small knife tucked into the sock), ghillie brogues, and kilt hose. If you do not have your own tartan, a universal tartan such as Black Watch or Hunting Stewart is perfectly appropriate. Ladies can wear a tartan sash over their dress.",
    colour: "oklch(0.93 0.025 15)",
    accent: "oklch(0.62 0.08 15)",
  },
  {
    emoji: "🎵",
    title: "The Bagpipes",
    subtitle: "Scotland's National Instrument",
    image: MANUS("trivia-scotland_743adf67.jpg"),
    body: "The Great Highland Bagpipe is one of the most iconic sounds in the world. At Scottish weddings, a piper traditionally leads the bridal party into the ceremony and plays guests out afterwards. The sound carries for miles across the East Lothian coast. If you have never heard bagpipes live before, prepare to be moved. They are loud, proud, and utterly magnificent.",
    colour: "oklch(0.93 0.03 255)",
    accent: "oklch(0.52 0.08 255)",
  },
];

const kiltHire = [
  {
    name: "Bowdens Kiltmakers",
    location: "42 Keppel Road, North Berwick, EH39 4QG",
    note: "Right here in North Berwick",
    tel: "07519 072265",
    highlight: true,
  },
  {
    name: "Jean O'Rourke Kiltmaker",
    location: "East Lothian",
    note: "Local East Lothian kiltmaker",
    tel: "01875 852881",
    url: "https://jeanorourkekiltmaker.co.uk/",
    highlight: false,
  },
  {
    name: "Gordon Nicolson Kiltmakers",
    location: "Edinburgh",
    note: "Premium Edinburgh kilt hire, from approx. £150 for 4-day hire",
    url: "https://nicolsonkiltmakers.com/pages/edinburgh-kilt-hire",
    highlight: false,
  },
  {
    name: "McCalls Highlandwear",
    location: "21-22 Haddington Place, Edinburgh, EH7 4AF",
    note: "Over 30 tartans, from approx. £99",
    url: "https://www.mccalls.co.uk/collections/kilt-hire-edinburgh",
    highlight: false,
  },
  {
    name: "Kinloch Anderson",
    location: "Edinburgh",
    note: "Historic Edinburgh kiltmakers since 1868, approx. £165 for 4-day hire",
    url: "https://www.kinlochanderson.com/shop/men/kilt-services/highland-dress-kilt-hire",
    highlight: false,
  },
];

const funFacts = [
  { emoji: "🌿", fact: "The thistle is Scotland's national flower, chosen because Viking invaders stepped on them barefoot and cried out, alerting sleeping Scottish soldiers." },
  { emoji: "💍", fact: "Scottish wedding rings are traditionally plain gold bands, worn on the left hand. The Claddagh ring, showing two hands holding a crowned heart, is also popular." },
  { emoji: "🎀", fact: "Handfasting is an ancient Celtic tradition where the couple's hands are bound together with ribbon or cord, the origin of the phrase 'tying the knot'." },
  { emoji: "🌾", fact: "Oatcakes and cheese are a traditional Scottish wedding favour, symbolising prosperity and a full larder for the couple's new home." },
  { emoji: "🪨", fact: "The Scots Gaelic word for wedding is 'banais', and the word for honeymoon is 'mios na meala', meaning 'month of honey'." },
  { emoji: "🦅", fact: "The Scottish national animal is the unicorn, a symbol of purity, power, and independence. You will see it on the Royal Coat of Arms of Scotland." },
];

export default function ScottishTriviaSection() {
  return (
    <section
      id="scotland"
      style={{
        background: "oklch(0.97 0.012 85)",
        padding: "6rem 1.5rem",
        scrollMarginTop: "64px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <div className="fade-in-up" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", marginBottom: "0.75rem" }}>
            Yer aff yer heid if ye dinnae read this
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 400, color: "oklch(0.28 0.06 155)", marginBottom: "1rem" }}>
            A Wee Guide to Scottish Weddings
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", color: "oklch(0.45 0.02 80)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            Whether you are a seasoned Scot or visiting for the first time, here is everything you need to know to enjoy a proper Scottish wedding celebration. Slainthe!
          </p>
        </div>

        {/* Trivia cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem", marginBottom: "5rem" }}>
          {triviaCards.map((card, i) => (
            <div
              key={card.title}
              className="fade-in-up"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
                gap: "0",
                borderRadius: "0.75rem",
                overflow: "hidden",
                boxShadow: "0 4px 32px oklch(0.28 0.06 155 / 0.1)",
              }}
            >
              {/* Image */}
              <div
                style={{
                  order: i % 2 === 0 ? 0 : 1,
                  minHeight: "280px",
                  backgroundImage: `url('${card.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                <div style={{ position: "absolute", inset: 0, background: "oklch(0.15 0.04 155 / 0.2)" }} />
                <div style={{ position: "absolute", top: "1.25rem", left: "1.25rem", background: "oklch(1 0 0 / 0.9)", borderRadius: "50%", width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>
                  {card.emoji}
                </div>
              </div>

              {/* Content */}
              <div
                style={{
                  background: card.colour,
                  padding: "2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  order: i % 2 === 0 ? 1 : 0,
                }}
              >
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: card.accent, marginBottom: "0.4rem" }}>
                  {card.subtitle}
                </p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 500, color: "oklch(0.28 0.06 155)", marginBottom: "1rem", lineHeight: 1.2 }}>
                  {card.title}
                </h3>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.92rem", color: "oklch(0.35 0.01 80)", lineHeight: 1.8 }}>
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Kilt hire section */}
        <div className="fade-in-up" style={{ marginBottom: "5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 400, color: "oklch(0.28 0.06 155)", marginBottom: "0.75rem" }}>
              Where to Hire a Kilt
            </h3>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", color: "oklch(0.45 0.02 80)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
              We recommend booking kilt hire at least 6 to 8 weeks before the wedding to ensure your tartan and size are available. Here are some excellent options near the venue and in Edinburgh.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", gap: "1rem" }}>
            {kiltHire.map((shop) => (
              <div
                key={shop.name}
                style={{
                  background: shop.highlight ? "oklch(0.28 0.06 155)" : "oklch(1 0 0)",
                  borderRadius: "0.5rem",
                  padding: "1.5rem",
                  border: shop.highlight ? "none" : "1px solid oklch(0.92 0.01 100)",
                  boxShadow: "0 2px 12px oklch(0.28 0.06 155 / 0.07)",
                }}
              >
                {shop.highlight && (
                  <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", background: "oklch(0.72 0.07 155)", color: "oklch(0.28 0.06 155)", padding: "0.2rem 0.6rem", borderRadius: "0.25rem", display: "inline-block", marginBottom: "0.75rem" }}>
                    Closest to venue
                  </span>
                )}
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 500, color: shop.highlight ? "oklch(0.97 0.01 85)" : "oklch(0.28 0.06 155)", marginBottom: "0.4rem" }}>
                  {shop.name}
                </h4>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: shop.highlight ? "oklch(0.82 0.05 155)" : "oklch(0.55 0.01 80)", marginBottom: "0.3rem" }}>
                  📍 {shop.location}
                </p>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.82rem", color: shop.highlight ? "oklch(0.88 0.03 85)" : "oklch(0.45 0.02 80)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                  {shop.note}
                </p>
                {shop.tel && (
                  <a href={`tel:${shop.tel}`} style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", fontWeight: 700, color: shop.highlight ? "oklch(0.82 0.05 155)" : "oklch(0.62 0.07 155)", textDecoration: "none", display: "block", marginBottom: "0.25rem" }}>
                    📞 {shop.tel}
                  </a>
                )}
                {shop.url && (
                  <a href={shop.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: shop.highlight ? "oklch(0.82 0.05 155)" : "oklch(0.62 0.07 155)", textDecoration: "none" }}>
                    Visit Website
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Fun facts */}
        <div className="fade-in-up">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 400, color: "oklch(0.28 0.06 155)", marginBottom: "0.5rem" }}>
              Did You Know?
            </h3>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", color: "oklch(0.45 0.02 80)" }}>
              A few fun facts about Scotland to impress your fellow guests.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", gap: "1rem" }}>
            {funFacts.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "oklch(1 0 0)",
                  borderRadius: "0.5rem",
                  padding: "1.5rem",
                  border: "1px solid oklch(0.92 0.01 100)",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontSize: "1.75rem", flexShrink: 0, lineHeight: 1 }}>{item.emoji}</span>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.88rem", color: "oklch(0.35 0.01 80)", lineHeight: 1.7, margin: 0 }}>
                  {item.fact}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing toast */}
        <div
          className="fade-in-up"
          style={{
            marginTop: "4rem",
            textAlign: "center",
            background: "oklch(0.28 0.06 155)",
            borderRadius: "0.75rem",
            padding: "3rem 2rem",
          }}
        >
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 400, color: "oklch(0.97 0.01 85)", marginBottom: "0.75rem" }}>
            "Slainthe Mhath!"
          </p>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", color: "oklch(0.72 0.06 155)", letterSpacing: "0.08em" }}>
            The traditional Scottish toast, pronounced 'slan-ja-va', meaning 'Good Health!'
          </p>
        </div>

      </div>
    </section>
  );
}
