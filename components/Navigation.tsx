/**
 * Navigation — sticky top nav with smooth scroll links
 * Design: Timeless Ivory & Sage
 * Mobile: hamburger menu below 768px
 */
import { useState, useEffect } from "react";

const links = [
  { label: "Our Day", href: "#schedule" },
  { label: "Venue", href: "#venue" },
  { label: "Stay", href: "#accommodation" },
  { label: "Getting Here", href: "#travel" },
  { label: "Guest Info", href: "#guest-info" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    handleResize(); // set initial value
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navBg = scrolled || menuOpen
    ? "oklch(0.97 0.012 85 / 0.97)"
    : "transparent";

  const navShadow = scrolled || menuOpen
    ? "0 1px 0 oklch(0.88 0.02 100)"
    : "none";

  const linkColor = scrolled || menuOpen
    ? "oklch(0.35 0.01 80)"
    : "oklch(0.95 0.005 85)";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s ease, box-shadow 0.3s ease",
        background: navBg,
        backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
        boxShadow: navShadow,
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "60px",
        }}
      >
        {/* Logo / Names */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <img
            src="https://raw.githubusercontent.com/sesauer1977/amy-sebastian-wedding/main/public/images/logo-monogram.png"
            alt="A&S monogram"
            style={{ width: "28px", height: "28px" }}
          />
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1rem",
              fontWeight: 500,
              color: scrolled || menuOpen ? "oklch(0.28 0.06 155)" : "oklch(0.97 0.01 85)",
              letterSpacing: "0.02em",
              transition: "color 0.3s ease",
              whiteSpace: "nowrap",
            }}
          >
            Amy &amp; Sebastian
          </span>
        </a>

        {/* Desktop nav — visible above 768px */}
        {!isMobile && (
          <nav style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: linkColor,
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  padding: "0.25rem 0",
                  borderBottom: "1.5px solid transparent",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.color = "oklch(0.62 0.07 155)";
                  (e.target as HTMLAnchorElement).style.borderBottomColor = "oklch(0.62 0.07 155)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.color = linkColor;
                  (e.target as HTMLAnchorElement).style.borderBottomColor = "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {/* Mobile hamburger — visible below 768px */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              color: scrolled || menuOpen ? "oklch(0.28 0.06 155)" : "oklch(0.97 0.01 85)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "color 0.3s ease",
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {menuOpen ? (
                <>
                  <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="4" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        )}
      </div>

      {/* Mobile dropdown menu */}
      {isMobile && menuOpen && (
        <div
          style={{
            background: "oklch(0.97 0.012 85 / 0.98)",
            backdropFilter: "blur(12px)",
            borderTop: "1px solid oklch(0.88 0.02 100)",
            padding: "0.5rem 1.25rem 1.25rem",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                display: "block",
                padding: "0.85rem 0",
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "oklch(0.35 0.01 80)",
                textDecoration: "none",
                borderBottom: "1px solid oklch(0.92 0.01 100)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
