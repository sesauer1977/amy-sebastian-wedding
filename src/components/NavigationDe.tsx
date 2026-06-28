/**
 * NavigationDe — German navigation with language toggle
 * Design: Timeless Ivory & Sage
 */
import { useState, useEffect } from "react";

const GH = "https://raw.githubusercontent.com/sesauer1977/amy-sebastian-wedding/main/public/images";

const links = [
  { label: "Unser Tag", href: "#schedule" },
  { label: "Locations", href: "#venue" },
  { label: "Unterkunft", href: "#accommodation" },
  { label: "Anreise", href: "#travel" },
  { label: "Gästeinfo", href: "#guest-info" },
  { label: "Transport", href: "#transport" },
  { label: "Traditionen", href: "#traditions" },
  { label: "East Lothian", href: "#east-lothian" },
  { label: "Kontakt", href: "#contact" },
];

export default function NavigationDe() {
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
  const onHero = "oklch(0.97 0.01 85)";
  const onBg = "oklch(0.28 0.06 155)";

  return (
    <>
      <style>{`
        .nav-desktop-de { display: none; }
        .nav-hamburger-de { display: flex; }
        @media (min-width: 768px) {
          .nav-desktop-de { display: flex; }
          .nav-hamburger-de { display: none; }
        }
      `}</style>

      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, transition: "background 0.3s ease, box-shadow 0.3s ease", background: hasBg ? "oklch(0.97 0.012 85 / 0.97)" : "transparent", backdropFilter: hasBg ? "blur(12px)" : "none", boxShadow: hasBg ? "0 1px 0 oklch(0.88 0.02 100)" : "none" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "60px" }}>

          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }} style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", flexShrink: 0 }}>
            <img src={`${GH}/logo-monogram-v2.png`} alt="A&S" style={{ width: "28px", height: "28px" }} />
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", fontWeight: 500, color: hasBg ? onBg : onHero, letterSpacing: "0.02em", transition: "color 0.3s ease", whiteSpace: "nowrap" }}>
              Amy &amp; Sebastian
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="nav-desktop-de" style={{ gap: "1.25rem", alignItems: "center" }}>
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: hasBg ? "oklch(0.35 0.01 80)" : onHero, textDecoration: "none", transition: "color 0.2s ease", whiteSpace: "nowrap" }}
                onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = "oklch(0.62 0.07 155)"; }}
                onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = hasBg ? "oklch(0.35 0.01 80)" : onHero; }}>
                {link.label}
              </a>
            ))}
            {/* Language toggle */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", marginLeft: "0.5rem", borderLeft: `1px solid ${hasBg ? "oklch(0.88 0.02 100)" : "oklch(0.75 0.01 85 / 0.5)"}`, paddingLeft: "0.75rem" }}>
              <a href="/" style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.68rem", fontWeight: 700, color: hasBg ? "oklch(0.55 0.01 80)" : "oklch(0.75 0.01 85)", textDecoration: "none" }}>EN</a>
              <span style={{ color: hasBg ? "oklch(0.75 0.01 80)" : "oklch(0.65 0.01 85)", fontSize: "0.65rem" }}>|</span>
              <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.68rem", fontWeight: 700, color: "oklch(0.62 0.07 155)", borderBottom: "1.5px solid oklch(0.62 0.07 155)" }}>DE</span>
            </div>
          </nav>

          {/* Mobile: language toggle + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div className="nav-hamburger-de" style={{ alignItems: "center", gap: "0.35rem" }}>
              <a href="/" style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.68rem", fontWeight: 700, color: hasBg ? "oklch(0.55 0.01 80)" : "oklch(0.75 0.01 85)", textDecoration: "none" }}>EN</a>
              <span style={{ color: hasBg ? "oklch(0.75 0.01 80)" : "oklch(0.65 0.01 85)", fontSize: "0.65rem" }}>|</span>
              <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.68rem", fontWeight: 700, color: "oklch(0.62 0.07 155)" }}>DE</span>
            </div>
            <button className="nav-hamburger-de" onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem", color: hasBg ? onBg : onHero, alignItems: "center", justifyContent: "center", transition: "color 0.3s ease" }}
              aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                {menuOpen ? (
                  <><line x1="5" y1="5" x2="21" y2="21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /><line x1="21" y1="5" x2="5" y2="21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></>
                ) : (
                  <><line x1="4" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /><line x1="4" y1="13" x2="22" y2="13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /><line x1="4" y1="18" x2="22" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div style={{ background: "oklch(0.97 0.012 85 / 0.98)", backdropFilter: "blur(12px)", borderTop: "1px solid oklch(0.88 0.02 100)", padding: "0.5rem 1.25rem 1.25rem" }}>
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                style={{ display: "block", padding: "0.85rem 0", fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.28 0.06 155)", textDecoration: "none", borderBottom: "1px solid oklch(0.92 0.01 100)" }}>
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
