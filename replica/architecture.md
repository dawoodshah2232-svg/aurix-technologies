# Architecture — Aurix Technologies

## Stack
Static HTML/CSS/JS only — no build step, no framework, no backend.
- Pages: one HTML file per screen (15 total), shared header/footer markup.
- Styling: `assets/css/tokens.css` (design tokens) + `assets/css/style.css`.
- Behaviour: `assets/js/main.js` (vanilla JS: nav, dropdown, tabs, accordions, carousels, filters, counters, reveal, demo form).
- Fonts: system sans stack only. Icons: hand-drawn inline SVG (Lucide-style). Images: none external — CSS gradients only.
- Serve locally: `python3 -m http.server 8000` from the project root.

Why static: the deliverable is a marketing site with demo mocks; a backend
would add risk and cost with no benefit at this stage. A real product later
would add a server, auth, and integrations — deliberately out of scope here.

## Routes (all static files)
| Route | File |
|---|---|
| / | index.html |
| /forex-crm | forex-crm.html |
| /crm-mobile-app | crm-mobile-app.html |
| /web-trading-terminal | web-trading-terminal.html |
| /mobile-trading-app | mobile-trading-app.html |
| /social-trading | social-trading.html |
| /copy-trading | copy-trading.html |
| /pamm-mam | pamm-mam.html |
| /prop-firm-solution | prop-firm-solution.html |
| /mt5-plugins | mt5-plugins.html |
| /integrations | integrations.html |
| /company-formation | company-formation.html |
| /blog | blog.html |
| /blog/forex-crm-2026 | blog/forex-crm-2026.html |
| /contact | contact.html |

## Data (front-end seed only)
No database. Demo content lives inline in each page: 5 testimonials,
3 sample copy providers, 6 jurisdictions, 14 plugin modules, 10 articles.
Leaderboard sorting and tab switching run entirely in `main.js`.
Contact form: `preventDefault()` + success message; nothing is sent anywhere.

## Build order
1. Tokens + shell (header/footer/CTA) — done first, reused everywhere.
2. Home (S01) vertical slice — all home sections working.
3. Product pages S02–S10 with their mocks.
4. S11–S15 (integrations, licensing, blog, article, contact).
5. Verify: serve + curl every page, grep for source-brand leftovers, header/footer check, JS smoke check.

## Risks
- Drift between 15 hand-written pages (mitigated: one shared CSS/JS, one header/footer pattern).
- Demo tables overflowing on 390px (mitigated: horizontal scroll inside `.mock-body`).
- Copy accidentally echoing the source (mitigated: all sentences written fresh; grep check for source name).
