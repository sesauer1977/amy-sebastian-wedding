/**
 * PasswordGate — Timeless Ivory & Sage
 * Elegant full-screen password protection for the wedding website.
 * Password: "atlast"
 */
import { useState, useEffect, type ReactNode } from "react";

const CORRECT_PASSWORD = "atlast";
const STORAGE_KEY = "wedding_auth_amy_sebastian";

interface PasswordGateProps {
  children: ReactNode;
}

export default function PasswordGate({ children }: PasswordGateProps) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored === "true") {
      setAuthenticated(true);
    } else {
      // Fade in the gate
      setTimeout(() => setVisible(true), 50);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase().trim() === CORRECT_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setVisible(false);
      setTimeout(() => setAuthenticated(true), 400);
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      setTimeout(() => setError(false), 2500);
      setPassword("");
    }
  };

  if (authenticated) return <>{children}</>;

  return (
    <div
      className="password-gate"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.4s ease",
        background: "oklch(0.97 0.012 85)",
      }}
    >
      {/* Decorative background texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a8b89a' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "2rem",
          maxWidth: "420px",
          width: "100%",
        }}
      >
        {/* Monogram */}
        <div style={{ marginBottom: "1.5rem" }}>
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663489425504/qVgRIAYKJGvLZFPv.png"
            alt="Amy & Sebastian monogram"
            style={{ width: "80px", height: "80px", margin: "0 auto", display: "block" }}
          />
        </div>

        {/* Names */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "2.5rem",
            fontWeight: 400,
            color: "oklch(0.28 0.06 155)",
            letterSpacing: "0.02em",
            marginBottom: "0.25rem",
            lineHeight: 1.2,
          }}
        >
          Amy &amp; Sebastian
        </h1>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "1.1rem",
            color: "oklch(0.62 0.07 155)",
            marginBottom: "0.5rem",
          }}
        >
          8 May 2027 · Archerfield, East Lothian
        </p>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            margin: "1.5rem 0",
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, oklch(0.62 0.07 155))" }} />
          <span style={{ color: "oklch(0.62 0.07 155)", fontSize: "1rem" }}>✦</span>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, oklch(0.62 0.07 155))" }} />
        </div>

        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "0.9rem",
            color: "oklch(0.45 0.02 80)",
            marginBottom: "1.5rem",
            lineHeight: 1.6,
          }}
        >
          This website is for our guests only.<br />
          Please enter the password from your save-the-date card.
        </p>

        {/* Password form */}
        <form onSubmit={handleSubmit}>
          <div
            style={{
              animation: shaking ? "shake 0.5s ease" : "none",
            }}
          >
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              autoFocus
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                fontSize: "1rem",
                fontFamily: "'Lato', sans-serif",
                border: `1.5px solid ${error ? "oklch(0.577 0.245 27.325)" : "oklch(0.88 0.02 100)"}`,
                borderRadius: "0.4rem",
                background: "oklch(1 0 0)",
                color: "oklch(0.28 0.06 155)",
                outline: "none",
                textAlign: "center",
                letterSpacing: "0.15em",
                transition: "border-color 0.2s ease",
                boxSizing: "border-box",
              }}
            />
            {error && (
              <p
                style={{
                  color: "oklch(0.577 0.245 27.325)",
                  fontSize: "0.8rem",
                  marginTop: "0.5rem",
                  fontFamily: "'Lato', sans-serif",
                }}
              >
                Incorrect password. Please try again.
              </p>
            )}
          </div>

          <button
            type="submit"
            style={{
              marginTop: "1rem",
              width: "100%",
              padding: "0.75rem 1.5rem",
              background: "oklch(0.62 0.07 155)",
              color: "oklch(1 0 0)",
              border: "none",
              borderRadius: "0.4rem",
              fontSize: "0.9rem",
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "background 0.2s ease, transform 0.1s ease",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.background = "oklch(0.52 0.07 155)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.background = "oklch(0.62 0.07 155)";
            }}
            onMouseDown={(e) => {
              (e.target as HTMLButtonElement).style.transform = "scale(0.97)";
            }}
            onMouseUp={(e) => {
              (e.target as HTMLButtonElement).style.transform = "scale(1)";
            }}
          >
            Enter
          </button>
        </form>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-5px); }
          80% { transform: translateX(5px); }
        }
      `}</style>
    </div>
  );
}
