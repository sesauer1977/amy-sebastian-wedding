/**
 * Navigation — sticky top nav with smooth scroll links
 * Design: Timeless Ivory & Sage
 * Mobile: pure CSS media queries — hamburger below 768px, desktop nav above
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const hasBg = scrolled || menuOpen;

  return (
    <>
      <style>{`
        .nav-desktop { display: none; }
        .nav-hamburger { display: flex; }
        @media (min-width: 768px) {
          .nav-desktop { display: flex; }
          .nav-hamburger { display: none; }
        }
      `}</style>

      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.3s ease, box-shadow 0.3s ease",
          background: hasBg ? "oklch(0.97 0.012 85 / 0.97)" : "transparent",
          backdropFilter: hasBg ? "blur(12px)" : "none",
          boxShadow: hasBg ? "0 1px 0 oklch(0.88 0.02 100)" : "none",
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
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", flexShrink: 0 }}
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
                color: hasBg ? "oklch(0.28 0.06 155)" : "oklch(0.97 0.01 85)",
                letterSpacing: "0.02em",
                transition: "color 0.3s ease",
                whiteSpace: "nowrap",
              }}
            >
              Amy &amp; Sebastian
            </span>
          </a>

          {/* Desktop nav — CSS shows/hides */}
          <nav className="nav-desktop" style={{ gap: "1.5rem", alignItems: "center" }}>
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
                  color: hasBg ? "oklch(0.35 0.01 80)" : "oklch(0.95 0.005 85)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = "oklch(0.62 0.07 155)"; }}
                onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = hasBg ? "oklch(0.35 0.01 80)" : "oklch(0.95 0.005 85)"; }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Hamburger button — CSS shows/hides */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              color: hasBg ? "oklch(0.28 0.06 155)" : "oklch(0.97 0.01 85)",
              alignItems: "center",
              justifyContent: "center",
              transition: "color 0.3s ease",
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              {menuOpen ? (
                <>
                  <line x1="5" y1="5" x2="21" y2="21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="21" y1="5" x2="5" y2="21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="4" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="4" y1="13" x2="22" y2="13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="4" y1="18" x2="22" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
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
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "oklch(0.28 0.06 155)",
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
    </>
  );
}
