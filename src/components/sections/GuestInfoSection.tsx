/**
 * GuestInfoSection — Practical guest information
 * Design: Timeless Ivory & Sage
 * Note: NO em dashes anywhere in copy
 */

const WHATSAPP_LINK = "https://chat.whatsapp.com/K95KEI4HPru5XbGhzcPa7H?s=hd&p=i&mlu=0&amv=0";
const WHATSAPP_QR = "https://raw.githubusercontent.com/sesauer1977/amy-sebastian-wedding/main/public/images/whatsapp-qr-v2.jpg";

const infoCards = [
  {
    icon: "👶",
    title: "Children Welcome",
    body: "Your children are warmly welcome to join us for the celebration. The Waterfront venue is fully gated with ample outdoor space, beach access, and high fencing for safety. While all parents remain responsible for their children, we will have supervised children's activities throughout the day including games, face painting, and kids' movies. We want our day to be a joy for the whole family.",
  },
  {
    icon: "🍽",
    title: "Dietary Requirements",
    body: "Please let us know of any dietary requirements or allergies when you RSVP. We want to make sure everyone is well fed and happy.",
  },
  {
    icon: "🎁",
    title: "Gifts",
    body: "We truly do not expect any gifts. Your presence and the effort of travelling to be with us is the greatest gift we could ask for.",
  },
  {
    icon: "💬",
    title: "WhatsApp Group",
    body: "If you are planning to attend, please join our wedding WhatsApp group. This is where we will share updates, logistics, and any last-minute information closer to the day.",
    whatsapp: true,
  },
  {
    icon: "📬",
    title: "Save the Date",
    body: "Save-the-date cards will be sent by post in July 2026. Formal invitations will follow closer to the wedding. If you have not received yours, please get in touch.",
  },
  {
    icon: "📸",
    title: "Photos",
    body: "We will be sharing a gallery on this website after the wedding so that everyone can relive the memories. Check back here after the big day!",
  },
];

export default function GuestInfoSection() {
  return (
    <section
      id="guest-info"
      style={{
        background: "oklch(0.97 0.012 85)",
        padding: "6rem 1.5rem",
        scrollMarginTop: "64px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="fade-in-up" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", marginBottom: "0.75rem" }}>
            Good to Know
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 400, color: "oklch(0.28 0.06 155)", marginBottom: "1rem" }}>
            Guest Information
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "oklch(0.45 0.02 80)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            Everything you need to know before the big day.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
            gap: "1.25rem",
            marginBottom: "4rem",
          }}
        >
          {infoCards.map((card, i) => (
            <div
              key={card.title}
              className="fade-in-up"
              style={{
                background: "oklch(1 0 0)",
                borderRadius: "0.5rem",
                padding: "1.75rem",
                boxShadow: "0 2px 12px oklch(0.28 0.06 155 / 0.06)",
                border: "1px solid oklch(0.92 0.01 100)",
                animationDelay: `${i * 0.07}s`,
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "1rem", lineHeight: 1 }}>
                {card.icon}
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 500, color: "oklch(0.28 0.06 155)", marginBottom: "0.6rem" }}>
                {card.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.88rem",
                  color: "oklch(0.45 0.02 80)",
                  lineHeight: 1.7,
                  marginBottom: (card as any).whatsapp ? "1rem" : 0,
                }}
              >
                {card.body}
              </p>
              {(card as any).whatsapp && (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "flex-start" }}>
                  <img
                    src={WHATSAPP_QR}
                    alt="WhatsApp QR code for Amy and Sebastian Wedding 2027"
                    style={{ width: "140px", height: "140px", borderRadius: "0.4rem", border: "1px solid oklch(0.88 0.02 100)" }}
                  />
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontFamily: "'Lato', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "oklch(1 0 0)",
                      background: "oklch(0.52 0.17 145)",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.4rem",
                      textDecoration: "none",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.522 5.858L.057 23.882l6.177-1.44A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.667.856.872-3.567-.234-.375A9.818 9.818 0 1112 21.818z"/>
                    </svg>
                    Join WhatsApp Group
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Closing message */}
        <div
          className="fade-in-up"
          style={{
            textAlign: "center",
            padding: "3rem 2rem",
            background: "linear-gradient(135deg, oklch(0.93 0.03 155 / 0.4), oklch(0.93 0.025 15 / 0.3))",
            borderRadius: "0.5rem",
            border: "1px solid oklch(0.88 0.02 100)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "0 auto 1.5rem", maxWidth: "300px" }}>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, oklch(0.62 0.07 155))" }} />
            <span style={{ color: "oklch(0.62 0.07 155)", fontSize: "1.2rem" }}>✦</span>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, oklch(0.62 0.07 155))" }} />
          </div>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
              fontWeight: 400,
              color: "oklch(0.28 0.06 155)",
              lineHeight: 1.5,
              maxWidth: "560px",
              margin: "0 auto 1rem",
            }}
          >
            We cannot wait to celebrate with you on the East Lothian coast.
          </p>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", color: "oklch(0.55 0.01 80)", letterSpacing: "0.08em" }}>
            Amy &amp; Sebastian
          </p>
        </div>
      </div>
    </section>
  );
}
