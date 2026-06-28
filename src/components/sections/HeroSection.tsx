/**
 * HeroSection — Full-bleed hero with coastal background image
 * Design: Timeless Ivory & Sage
 */
export default function HeroSection() {
  const handleScrollDown = () => {
    const el = document.querySelector("#schedule");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://raw.githubusercontent.com/sesauer1977/amy-sebastian-wedding/main/public/images/hero-coast.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Overlay gradient — ensures text legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, oklch(0.15 0.04 155 / 0.55) 0%, oklch(0.15 0.04 155 / 0.35) 50%, oklch(0.15 0.04 155 / 0.65) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "2rem 1.5rem",
          maxWidth: "700px",
        }}
      >
        {/* Pre-title */}
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "oklch(0.85 0.05 155)",
            marginBottom: "1.5rem",
            opacity: 0,
            animation: "fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.2s forwards",
          }}
        >
          You are warmly invited to celebrate
        </p>

        {/* Main names */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(3.5rem, 8vw, 6rem)",
            fontWeight: 300,
            color: "oklch(0.97 0.01 85)",
            letterSpacing: "0.02em",
            lineHeight: 1.1,
            marginBottom: "0.5rem",
            opacity: 0,
            animation: "fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.4s forwards",
          }}
        >
          Amy &amp; Sebastian
        </h1>

        {/* Decorative rule */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            margin: "1.5rem auto",
            maxWidth: "300px",
            opacity: 0,
            animation: "fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.6s forwards",
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "oklch(0.85 0.05 155 / 0.6)" }} />
          <span style={{ color: "oklch(0.85 0.05 155)", fontSize: "1.2rem" }}>✦</span>
          <div style={{ flex: 1, height: "1px", background: "oklch(0.85 0.05 155 / 0.6)" }} />
        </div>

        {/* Date & location */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
            color: "oklch(0.92 0.02 85)",
            marginBottom: "0.5rem",
            opacity: 0,
            animation: "fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.7s forwards",
          }}
        >
          Saturday, 8 May 2027
        </p>
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "0.9rem",
            fontWeight: 300,
            letterSpacing: "0.1em",
            color: "oklch(0.88 0.02 85)",
            marginBottom: "3rem",
            opacity: 0,
            animation: "fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.85s forwards",
          }}
        >
          Archerfield, East Lothian, Scotland
        </p>

        {/* Scroll cue */}
        <button
          onClick={handleScrollDown}
          style={{
            background: "none",
            border: "1.5px solid oklch(0.85 0.05 155 / 0.7)",
            borderRadius: "50%",
            width: "44px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
            cursor: "pointer",
            color: "oklch(0.92 0.02 85)",
            transition: "border-color 0.2s ease, transform 0.2s ease",
            opacity: 0,
            animation: "fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) 1.1s forwards",
          }}
          aria-label="Scroll down"
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "oklch(0.85 0.05 155)";
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(4px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "oklch(0.85 0.05 155 / 0.7)";
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
