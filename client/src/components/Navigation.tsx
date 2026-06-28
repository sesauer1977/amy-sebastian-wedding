/**
 * Navigation — sticky top nav with smooth scroll links
 * Design: Timeless Ivory & Sage
 */
import { useState, useEffect } from "react";

const links = [
  { label: "Our Day", href: "#schedule" },
  { label: "Venue", href: "#venue" },
  { label: "Stay", href: "#accommodation" },
  { label: "Getting Here", href: "#travel" },
  { label: "Guest Info", href: "#guest-info" },
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
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s ease, box-shadow 0.3s ease",
        background: scrolled ? "oklch(0.97 0.012 85 / 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 0 oklch(0.88 0.02 100)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* Logo / Names */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            textDecoration: "none",
          }}
        >
          <img
            src="/manus-storage/logo-monogram_85323894.png"
            alt="A&C monogram"
            style={{ width: "32px", height: "32px" }}
          />
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.15rem",
              fontWeight: 500,
              color: "oklch(0.28 0.06 155)",
              letterSpacing: "0.03em",
            }}
          >
            Amy &amp; Sebastian
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
          className="hidden md:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "oklch(0.35 0.01 80)",
                textDecoration: "none",
                transition: "color 0.2s ease",
                padding: "0.25rem 0",
                borderBottom: "1.5px solid transparent",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = "oklch(0.62 0.07 155)";
                (e.target as HTMLAnchorElement).style.borderBottomColor = "oklch(0.62 0.07 155)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = "oklch(0.35 0.01 80)";
                (e.target as HTMLAnchorElement).style.borderBottomColor = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            color: "oklch(0.28 0.06 155)",
          }}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <>
                <line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "oklch(0.97 0.012 85 / 0.98)",
            backdropFilter: "blur(12px)",
            borderTop: "1px solid oklch(0.88 0.02 100)",
            padding: "1rem 1.5rem 1.5rem",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                display: "block",
                padding: "0.75rem 0",
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
