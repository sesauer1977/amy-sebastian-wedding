/**
 * FooterSection — Elegant footer
 * Design: Timeless Ivory & Sage
 */
export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "oklch(0.28 0.06 155)",
        padding: "3rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <img
          src="/manus-storage/logo-monogram_85323894.png"
          alt="Amy & Sebastian monogram"
          style={{ width: "48px", height: "48px", margin: "0 auto 1rem", display: "block", opacity: 0.85 }}
        />
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.2rem",
            fontWeight: 400,
            color: "oklch(0.92 0.02 85)",
            marginBottom: "0.25rem",
          }}
        >
          Amy Carmichael &amp; Sebastian Sauerborn
        </p>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "0.95rem",
            color: "oklch(0.72 0.06 155)",
            marginBottom: "1.5rem",
          }}
        >
          8 May 2027 · Archerfield, East Lothian
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            margin: "0 auto 1.5rem",
            maxWidth: "200px",
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "oklch(0.62 0.07 155 / 0.5)" }} />
          <span style={{ color: "oklch(0.62 0.07 155)", fontSize: "0.8rem" }}>✦</span>
          <div style={{ flex: 1, height: "1px", background: "oklch(0.62 0.07 155 / 0.5)" }} />
        </div>

        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "0.75rem",
            color: "oklch(0.55 0.04 155)",
            letterSpacing: "0.08em",
          }}
        >
          Made with love · {year}
        </p>
      </div>
    </footer>
  );
}
