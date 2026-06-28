/**
 * ContactSection — Private contact form + WhatsApp group link
 * Design: Timeless Ivory & Sage
 * Backend: tRPC → Resend → amycarmichael@hotmail.co.uk + sesauer@gmail.com
 */
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

const WHATSAPP_LINK = "https://chat.whatsapp.com/K95KEI4HPru5XbGhzcPa7H?s=hd&p=i&mlu=0&amv=0";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const sendMutation = trpc.contact.send.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      toast.success("Message sent! We'll be in touch soon.");
    },
    onError: (err) => {
      toast.error(err.message || "Something went wrong. Please try again.");
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    sendMutation.mutate(form);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.7rem 0.9rem",
    fontFamily: "'Lato', sans-serif",
    fontSize: "0.9rem",
    border: "1.5px solid oklch(0.88 0.02 100)",
    borderRadius: "0.4rem",
    background: "oklch(1 0 0)",
    color: "oklch(0.28 0.06 155)",
    outline: "none",
    transition: "border-color 0.2s ease",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "'Lato', sans-serif",
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "oklch(0.62 0.07 155)",
    marginBottom: "0.4rem",
  };

  return (
    <section
      id="contact"
      style={{
        background: "oklch(0.93 0.015 80)",
        padding: "6rem 1.5rem",
        scrollMarginTop: "64px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Section header */}
        <div className="fade-in-up" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", marginBottom: "0.75rem" }}>
            Get in Touch
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 400, color: "oklch(0.28 0.06 155)", marginBottom: "1rem" }}>
            Contact Us
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "oklch(0.45 0.02 80)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            For general wedding questions and updates, please use our WhatsApp group. 
            For a private message to Amy and Sebastian, use the form below.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "2rem" }}>

          {/* WhatsApp card */}
          <div
            className="fade-in-up"
            style={{
              background: "oklch(0.28 0.06 155)",
              borderRadius: "0.5rem",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            <div>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.72 0.06 155)", marginBottom: "0.5rem" }}>
                General Enquiries
              </p>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 500, color: "oklch(0.97 0.01 85)", marginBottom: "0.75rem" }}>
                WhatsApp Group
              </h3>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.88rem", color: "oklch(0.82 0.04 155)", lineHeight: 1.7 }}>
                Join our wedding WhatsApp group for updates, logistics, and to connect with other guests. 
                This is the best place for any general questions about the wedding weekend.
              </p>
            </div>

            {/* QR code */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://raw.githubusercontent.com/sesauer1977/amy-sebastian-wedding/main/public/images/whatsapp-qr.jpg"
                alt="WhatsApp QR code — Amy & Sebastian Wedding 2027"
                style={{ width: "160px", height: "160px", borderRadius: "0.5rem", border: "3px solid oklch(0.62 0.07 155 / 0.4)" }}
              />
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "oklch(0.28 0.06 155)",
                background: "oklch(0.72 0.07 155)",
                padding: "0.7rem 1.5rem",
                borderRadius: "0.4rem",
                textDecoration: "none",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "oklch(0.62 0.07 155)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "oklch(0.72 0.07 155)"; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.522 5.858L.057 23.882l6.177-1.44A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.667.856.872-3.567-.234-.375A9.818 9.818 0 1112 21.818z"/>
              </svg>
              Join WhatsApp Group
            </a>
          </div>

          {/* Contact form */}
          <div
            className="fade-in-up"
            style={{
              background: "oklch(1 0 0)",
              borderRadius: "0.5rem",
              padding: "2rem",
              boxShadow: "0 2px 16px oklch(0.28 0.06 155 / 0.07)",
            }}
          >
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", marginBottom: "0.5rem" }}>
              Private Message
            </p>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 500, color: "oklch(0.28 0.06 155)", marginBottom: "1.5rem" }}>
              Send a Message
            </h3>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>💌</div>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 500, color: "oklch(0.28 0.06 155)", marginBottom: "0.5rem" }}>
                  Message Sent!
                </h4>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.88rem", color: "oklch(0.45 0.02 80)", lineHeight: 1.7 }}>
                  Thank you — we'll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: "1.25rem", fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.62 0.07 155)", background: "none", border: "1.5px solid oklch(0.62 0.07 155)", borderRadius: "0.4rem", padding: "0.5rem 1rem", cursor: "pointer" }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={labelStyle}>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      style={inputStyle}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "oklch(0.62 0.07 155)"; }}
                      onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "oklch(0.88 0.02 100)"; }}
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      style={inputStyle}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "oklch(0.62 0.07 155)"; }}
                      onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "oklch(0.88 0.02 100)"; }}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="e.g. Question about accommodation"
                    style={inputStyle}
                    onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "oklch(0.62 0.07 155)"; }}
                    onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "oklch(0.88 0.02 100)"; }}
                    required
                  />
                </div>

                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your private message to Amy and Sebastian…"
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                    onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "oklch(0.62 0.07 155)"; }}
                    onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "oklch(0.88 0.02 100)"; }}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={sendMutation.isPending}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1.5rem",
                    background: sendMutation.isPending ? "oklch(0.72 0.05 155)" : "oklch(0.62 0.07 155)",
                    color: "oklch(1 0 0)",
                    border: "none",
                    borderRadius: "0.4rem",
                    fontSize: "0.82rem",
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    cursor: sendMutation.isPending ? "not-allowed" : "pointer",
                    transition: "background 0.2s ease, transform 0.1s ease",
                  }}
                  onMouseEnter={(e) => { if (!sendMutation.isPending) (e.currentTarget as HTMLButtonElement).style.background = "oklch(0.52 0.07 155)"; }}
                  onMouseLeave={(e) => { if (!sendMutation.isPending) (e.currentTarget as HTMLButtonElement).style.background = "oklch(0.62 0.07 155)"; }}
                  onMouseDown={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.97)"; }}
                  onMouseUp={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
                >
                  {sendMutation.isPending ? "Sending…" : "Send Message"}
                </button>

                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "oklch(0.65 0.01 80)", textAlign: "center", lineHeight: 1.5 }}>
                  Your message will be sent privately to Amy and Sebastian only.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
