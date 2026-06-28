# Amy & Sebastian Wedding Website — Project Memory Doc

> **Purpose:** This document is the single source of truth for the Manus AI agent working on this project. It must be read at the start of every session and updated after every significant change. It contains all decisions, credentials, content, and technical details needed to continue work without the user repeating themselves.

---

## 1. The Wedding — Core Facts

| Detail | Value |
|---|---|
| **Couple** | Amy Carmichael & Sebastian Sauerborn |
| **Wedding Date** | Saturday, 8 May 2027 |
| **Ceremony Time** | 2:00 pm |
| **Ceremony Venue** | Our Lady Star of the Sea (Catholic church), Law Road, North Berwick, EH39 4PN |
| **Ceremony Website** | https://www.stellamaris1879.com/ |
| **Reception Venue** | The Waterfront, Archerfield Estate, Dirleton, East Lothian, EH39 5HU |
| **Reception Website** | https://www.archerfieldhouse.com/weddings |
| **Archerfield Tel** | +44 (0) 1620 897050 |
| **Sunday Breakfast** | Archerfield Clubhouse — optional, relaxed, for those who wish to join |
| **Save the Date** | Sent by post in July 2026 |
| **Formal Invites** | Sent closer to the wedding |

---

## 2. Website

| Detail | Value |
|---|---|
| **Live URL** | https://amy-sebastian-wedding.vercel.app |
| **Password** | `atlast` |
| **GitHub Repo** | https://github.com/sesauer1977/amy-sebastian-wedding |
| **GitHub Username** | sesauer1977 |
| **GitHub Token** | `[stored in Manus session — do not commit]` |
| **Vercel Token** | `[stored in Manus session — do not commit]` |
| **Vercel Project ID** | prj_dU6VX6VIHrqp9gECVMldEU9ZNB5H |
| **Vercel Team/Org ID** | team_AfGoIVhxv9TmJv0Mz7GimwoY |
| **Vercel Scope** | sesauer1977s-projects |
| **Manus Project Path** | /home/ubuntu/amy-sebastian-wedding |
| **GitHub deploy mirror** | /tmp/wedding-deploy |

### Deployment Workflow
- All code lives in `/home/ubuntu/amy-sebastian-wedding` (Manus webdev project)
- To deploy: sync files to `/tmp/wedding-deploy`, commit, push to `main` on GitHub
- Vercel auto-deploys from GitHub `main` branch
- Build command: `pnpm run build`
- Output directory: `dist/public`
- **IMPORTANT:** CLI deployments from Manus sandbox are BLOCKED by Vercel (wrong account). Always use GitHub push to trigger Vercel auto-deploy.
- After pushing to GitHub, wait ~30s and check deployment status via Vercel API (use token from Manus session)

---

## 3. Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 19 + TypeScript + Tailwind CSS 4 + shadcn/ui |
| **Backend** | Express + tRPC 11 |
| **Build** | Vite 7 + pnpm |
| **Email** | Resend (API key stored in Vercel env — do not commit) |
| **Fonts** | Cormorant Garamond (display) + Lato (body) via Google Fonts |
| **Design** | "Timeless Ivory & Sage" — warm ivory bg, forest green text, sage green accent |

### Key Files
```
client/src/
  App.tsx                          — Routes + PasswordGate wrapper
  components/
    PasswordGate.tsx               — Password: "atlast", stored in sessionStorage
    Navigation.tsx                 — Sticky top nav, 6 links incl. Contact
    sections/
      HeroSection.tsx              — Full-bleed coastal hero image
      CountdownSection.tsx         — Live countdown to 8 May 2027 14:00
      ScheduleSection.tsx          — Saturday ceremony + reception, Sunday breakfast
      VenueSection.tsx             — Two venue cards (church + Archerfield)
      AccommodationSection.tsx     — On-site Archerfield rooms + nearby hotels
      TravelSection.tsx            — Tabbed travel guide (overseas/train/car/taxi)
      GuestInfoSection.tsx         — Children, dietary, gifts, WhatsApp QR, photos
      ContactSection.tsx           — WhatsApp card + private Resend contact form
      FooterSection.tsx            — Names, date, monogram
server/
  routers.ts                       — tRPC router incl. contact.send (Resend)
shared/
  const.ts                         — COOKIE_NAME, UNAUTHED_ERR_MSG, etc.
```

---

## 4. Images

All images are stored in the GitHub repo under `public/images/` and referenced via raw.githubusercontent.com URLs.

| Image | GitHub Path | Description |
|---|---|---|
| Hero coast | `public/images/hero-coast.jpg` | East Lothian coastline, 1920×1080, ~358KB |
| Hero venue | `public/images/hero-venue.jpg` | Scottish estate at dusk, 1920×1080, ~450KB |
| Hero church | `public/images/hero-church.jpg` | Coastal Catholic church, 1620×1080, ~289KB |
| Monogram | `public/images/logo-monogram.png` | A&S botanical monogram, 300×300, ~52KB |
| WhatsApp QR | `public/images/whatsapp-qr.jpg` | QR code for WhatsApp group, 600×550, ~42KB |

**Raw URL pattern:** `https://raw.githubusercontent.com/sesauer1977/amy-sebastian-wedding/main/public/images/<filename>`

---

## 5. Contact & Communication

| Detail | Value |
|---|---|
| **Amy's email** | amycarmichael@hotmail.co.uk |
| **Sebastian's email** | sesauer@gmail.com |
| **Contact form sends to** | Both of the above |
| **Resend from name** | Amy & Seb Wedding Website |
| **Resend from email** | onboarding@resend.dev (Resend default sender) |
| **WhatsApp group** | https://chat.whatsapp.com/K95KEI4HPru5XbGhzcPa7H?s=hd&p=i&mlu=0&amv=0 |
| **WhatsApp group name** | Amy & Sebastian Wedding 2027 |

---

## 6. Accommodation — On-Site at Archerfield

**Booking contact:** Tracy@archerfieldhouse.com — guests should mention "Carmichael–Sauerborn wedding"

| Type | Qty | Sleeps | Rooms | Price | Basis |
|---|---|---|---|---|---|
| Pavilion Suite | 10 | Up to 2 | 1 double/twin | £395/night | B&B |
| Large Pavilion Suite | 2 | Up to 2 | 1 double/twin | £440/night | B&B |
| 3-bed Lodge (5 guests) | 1 | Up to 5 | 2 double/twin + 1 single | £900/night | Room only |
| 3-bed Lodge (6 guests, A) | 2 | Up to 6 | 2 double/twin + 1 double | £900/night | Room only |
| 3-bed Lodge (6 guests, B) | 2 | Up to 6 | 3 double/twin | £900/night | Room only |
| 4-bed Lodge (7 guests) | 1 | Up to 7 | 2 double/twin + 1 twin + 1 single | £1,050/night | Room only |
| 4-bed Lodge (8 guests) | 2 | Up to 8 | 4 double/twin | £1,050/night | Room only |

---

## 7. Nearby Accommodation

| Name | Type | Distance | Address |
|---|---|---|---|
| Open Arms Hotel | Hotel | ~2 miles | Main Street, Dirleton, EH39 5EG |
| Greywalls Hotel & Chez Roux | Country House Hotel | ~2 miles | Muirfield, Gullane, EH31 2EG |
| Old Aberlady Inn | Inn/B&B | ~3.5 miles | West Mains Street, Aberlady, EH32 0RF |
| Marine North Berwick | Boutique Hotel | ~5 miles | 18 Cromwell Road, North Berwick, EH39 4LZ |
| Tantallon Caravan & Camping Park | Caravan/Camping | ~5 miles | Dunbar Road, North Berwick |
| Gilsland Park | Holiday Park/Glamping | ~5 miles | North Berwick |
| Airbnb / Self-Catering | Various | Various | North Berwick, Gullane & surrounds |
| Edinburgh City Hotels | Hotels | ~35 miles | Edinburgh city centre |

---

## 8. Guest Information (Policy)

- **Children:** Welcome
- **Dietary requirements:** Guests should inform via contact form or WhatsApp
- **Gifts:** Not expected — "Your presence is the gift"
- **WhatsApp group:** Guests attending should join for updates
- **Save the date:** Posted July 2026
- **Formal invites:** Sent closer to the wedding
- **Photo gallery:** Will be added to the website after the wedding

---

## 9. Design System — "Timeless Ivory & Sage"

| Token | Value | Use |
|---|---|---|
| Ivory | `oklch(0.97 0.012 85)` | Primary background |
| Forest | `oklch(0.28 0.06 155)` | Headings, dark sections |
| Sage | `oklch(0.62 0.07 155)` | Accent, buttons, links |
| Sage pale | `oklch(0.93 0.03 155)` | Subtle backgrounds |
| Rose | `oklch(0.78 0.06 15)` | Secondary accent |
| Charcoal | `oklch(0.35 0.01 80)` | Body text |
| Display font | Cormorant Garamond | All headings/h1-h6 |
| Body font | Lato | All body/UI text |

---

## 10. Known Issues & History

| Date | Issue | Resolution |
|---|---|---|
| 2026-06-28 | Monogram showed A&C instead of A&S | Regenerated as A&S monogram |
| 2026-06-28 | Vercel CLI deployments blocked (wrong account) | Use GitHub push only |
| 2026-06-28 | Build failed: UNAUTHED_ERR_MSG not in shared/const | Synced full shared/ directory to GitHub |
| 2026-06-28 | Hero images not loading on Vercel | Moved from /manus-storage/ to GitHub raw URLs |
| 2026-06-28 | Images too large (5-6MB each) | Optimised to 300-450KB at 1920px wide |

---

## 11. Planned / Future Features

- [ ] Photo gallery section (after the wedding, May 2027)
- [ ] RSVP form (to be added when invitations go out)
- [ ] Custom domain (to be set up by Sebastian via Vercel settings)
- [ ] Update monogram to confirmed A&S design once finalised

---

## 12. Important Constraints

- **NEVER use initials "SS"** — historical connotations in German context. Always "A&S" or "Amy & Sebastian"
- This is a **private, password-protected** website — password is `atlast`
- The website is for **guests only** — not public-facing
- Vercel deployment is under **sesauer1977's projects** team account
- Always push to GitHub `main` branch to trigger Vercel auto-deploy
- Image assets must be hosted on **GitHub** (not manus-storage, not external CDNs)

---

*Last updated: 28 June 2026 — Images being moved to GitHub, monogram corrected to A&S*
