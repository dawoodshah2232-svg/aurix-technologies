# Build log — Aurix Technologies

## 2026-10-25 — initial build (static site, clean-room)
- Tokens: navy #0A2540 / blue #2563EB / teal #0EA5A4; system font stack; radii, shadows, spacing scale. `replica/design/tokens.json` + `assets/css/tokens.css`.
- Shell: shared sticky header (Products dropdown, mobile nav), footer (Products / Solutions / Contact), CTA band, `assets/css/style.css`, `assets/js/main.js`.
- S01 Home: hero + ticker + counters, ecosystem (8 products), 8 product cards, mobile apps, plugin overview, platform carousel, security (6), testimonials (5, auto-advance), FAQ (7), CTA.
- S02 Forex CRM: hero + chips, 8 tabs, admin table mock, wallet mock.
- S03 CRM Mobile App: phone-frame mocks, feature grid, onboarding steps.
- S04 Web Trading Terminal: quotes table mock, chart placeholder, order ticket mock.
- S05 Mobile Trading App: phone mocks, feature grid.
- S06 Social Trading: feed mock, leaderboard with rank-by filter, provider cards.
- S07 Copy Trading: engine table (3 sample providers), risk controls, steps.
- S08 PAMM / MAM: 3-view tab switcher, allocation table.
- S09 Prop Firm: challenge picker, trader dashboard mock, leaderboard, championship.
- S10 MT5 Plugins: 14 modules in 4 categories, accordion deep-dives, portal mock.
- S11 Integrations: 4 groups (platforms / payments / KYC / comms).
- S12 Company Formation: 6 jurisdiction tabs with stats + bullets, process steps.
- S13 Blog: 10 article cards. S14 Article: full body + related cards.
- S15 Contact: 4-step process, front-end-only form, placeholder contacts.
- Verification: local http server + curl 200s, brand-leftover grep, header/footer presence, JS smoke check — see final verification notes in parent report; results recorded at build time in this log's verification section below.

## Verification (2026-10-25, local only)
- Served with `python3 -m http.server` (ports 8123/8124): all 15 HTML pages + 3 assets returned HTTP 200 (18/18).
- Brand-leftover grep (`fiboniq|orange`, all html/css/js/md/json/csv): 0 hits after removing the source domain from recon.md.
- Header + footer present on all 15 pages (15/15 each).
- `node --check assets/js/main.js`: OK. Internal-link audit (every .html href resolves to a file): NONE missing.
- Re-served and spot-checked: home 200, article page contains brand name, contact page contains the form.
- Known gaps: demo data is labelled sample data; no live feeds, no payments, no login (by design).
