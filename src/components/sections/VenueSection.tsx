/**
 * VenueSection — Ceremony & Reception venue details
 * Design: Timeless Ivory & Sage
 * Note: NO em dashes anywhere in copy
 */

const GITHUB_IMAGES = "https://raw.githubusercontent.com/sesauer1977/amy-sebastian-wedding/main/public/images";

export default function VenueSection() {
  return (
    <section
      id="venue"
      style={{
        background: "oklch(0.93 0.015 80)",
        padding: "6rem 1.5rem",
        scrollMarginTop: "64px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="fade-in-up" style={{ textAlign: "center", marginBottom: "4rem" }}>
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
            Where We Celebrate
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 400,
              color: "oklch(0.28 0.06 155)",
            }}
          >
            The Venues
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
            gap: "2rem",
          }}
        >
          {/* Ceremony */}
          <div
            className="fade-in-up"
            style={{
              background: "oklch(1 0 0)",
              borderRadius: "0.5rem",
              overflow: "hidden",
              boxShadow: "0 4px 24px oklch(0.28 0.06 155 / 0.08)",
            }}
          >
            <div
              style={{
                height: "240px",
                backgroundImage: `url('${GITHUB_IMAGES}/hero-church-v2.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, oklch(0.28 0.06 155 / 0.7), transparent)",
                  padding: "1.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "oklch(0.82 0.05 155)",
                  }}
                >
                  Ceremony · 2:00 pm
                </span>
              </div>
            </div>
            <div style={{ padding: "1.75rem" }}>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "oklch(0.28 0.06 155)",
                  marginBottom: "0.25rem",
                }}
              >
                Our Lady Star of the Sea
              </h3>
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.8rem",
                  color: "oklch(0.62 0.07 155)",
                  marginBottom: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                North Berwick
              </p>
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.9rem",
                  color: "oklch(0.45 0.02 80)",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
              >
                Our wedding ceremony will take place at this beautiful Catholic church, founded in 1879.
                Nestled in the heart of North Berwick, just a short distance from the sea.
              </p>
              <div
                style={{
                  background: "oklch(0.93 0.03 155)",
                  borderRadius: "0.4rem",
                  padding: "0.75rem 1rem",
                  marginBottom: "1rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.82rem",
                    color: "oklch(0.35 0.01 80)",
                    lineHeight: 1.6,
                  }}
                >
                  <strong style={{ color: "oklch(0.28 0.06 155)" }}>Address:</strong> Law Road, North Berwick, EH39 4PN
                </p>
              </div>
              <a
                href="https://www.stellamaris1879.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "oklch(0.62 0.07 155)",
                  textDecoration: "none",
                  borderBottom: "1.5px solid oklch(0.62 0.07 155)",
                  paddingBottom: "1px",
                }}
              >
                Visit Website
              </a>
            </div>
          </div>

          {/* Reception */}
          <div
            className="fade-in-up"
            style={{
              background: "oklch(1 0 0)",
              borderRadius: "0.5rem",
              overflow: "hidden",
              boxShadow: "0 4px 24px oklch(0.28 0.06 155 / 0.08)",
            }}
          >
            <div
              style={{
                height: "240px",
                backgroundImage: `url('${GITHUB_IMAGES}/hero-venue-v2.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, oklch(0.28 0.06 155 / 0.7), transparent)",
                  padding: "1.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "oklch(0.82 0.05 155)",
                  }}
                >
                  Reception · Evening
                </span>
              </div>
            </div>
            <div style={{ padding: "1.75rem" }}>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "oklch(0.28 0.06 155)",
                  marginBottom: "0.25rem",
                }}
              >
                The Waterfront, Archerfield
              </h3>
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.8rem",
                  color: "oklch(0.62 0.07 155)",
                  marginBottom: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                East Lothian
              </p>
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.9rem",
                  color: "oklch(0.45 0.02 80)",
                  lineHeight: 1.7,
                  marginBottom: "1rem",
                }}
              >
                Our reception will be held at The Waterfront, a dedicated coastal wedding venue set within
                the 550-acre Archerfield Estate, just a few miles from North Berwick. An evening of dinner,
                dancing, and celebration with the people we love most.
              </p>
              <div
                style={{
                  background: "oklch(0.93 0.03 155)",
                  borderRadius: "0.4rem",
                  padding: "0.75rem 1rem",
                  marginBottom: "1.25rem",
                  display: "flex",
                  gap: "0.6rem",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: "0.1rem" }}>👶</span>
                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.82rem",
                    color: "oklch(0.35 0.01 80)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  <strong style={{ color: "oklch(0.28 0.06 155)" }}>Great for families:</strong> The Waterfront area is fully gated and separate from the rest of the estate. There is ample outdoor space for children to run around, and beach access is available. The beach itself is enclosed by high fencing, making it completely safe for little ones.
                </p>
              </div>
              <div
                style={{
                  background: "oklch(0.93 0.03 155)",
                  borderRadius: "0.4rem",
                  padding: "0.75rem 1rem",
                  marginBottom: "1rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.82rem",
                    color: "oklch(0.35 0.01 80)",
                    lineHeight: 1.6,
                  }}
                >
                  <strong style={{ color: "oklch(0.28 0.06 155)" }}>Address:</strong> Archerfield, Golf Green, Dirleton, East Lothian, EH39 5HU
                  <br />
                  <strong style={{ color: "oklch(0.28 0.06 155)" }}>Tel:</strong> +44 (0) 1620 897050
                </p>
              </div>
              <a
                href="https://www.archerfieldhouse.com/weddings"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "oklch(0.62 0.07 155)",
                  textDecoration: "none",
                  borderBottom: "1.5px solid oklch(0.62 0.07 155)",
                  paddingBottom: "1px",
                }}
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>

        {/* Sunday breakfast note */}
        <div
          className="fade-in-up"
          style={{
            marginTop: "2rem",
            background: "oklch(0.28 0.06 155)",
            borderRadius: "0.5rem",
            padding: "1.75rem 2rem",
            display: "flex",
            gap: "1.25rem",
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>☕</span>
          <div>
            <h4
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.2rem",
                fontWeight: 500,
                color: "oklch(0.97 0.01 85)",
                marginBottom: "0.4rem",
              }}
            >
              Sunday Morning Breakfast
            </h4>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.88rem",
                color: "oklch(0.82 0.04 155)",
                lineHeight: 1.7,
              }}
            >
              On Sunday morning, those who wish are warmly invited to join us for a relaxed breakfast at the{" "}
              <strong style={{ color: "oklch(0.92 0.03 155)" }}>Archerfield Clubhouse</strong>.
              A lovely way to round off the weekend before everyone heads home. No formalities, just good food and good company.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
