# Recon — Aurix Technologies (clean-room structural map)

Source studied: the public marketing site of a B2B fintech vendor for forex
brokers and prop firms (reference site supplied by the client). This map
records **structure only** — page inventory, section order, flows,
components, inferred data model.
No wording, branding, logos, images, or copy from the source are reproduced
here or in the build. All copy in the clone is written fresh.

## Scope
- Target: web marketing site + product pages, desktop + mobile.
- Slice: all 15 public pages (home + 13 product/company pages + 1 article).
- Audience: broker founders, prop-firm operators, operations and compliance teams.

## Sources
- Public marketing pages (home, product pages, integrations, licensing, blog, contact) — structure and section order only.
- Public product descriptions — feature categories only, reworded in full.

## Screen inventory (S01–S15)
| ID | Screen | Route | Purpose | Key components |
|----|--------|-------|---------|----------------|
| S01 | Home | / | Position the suite, route to products | hero+ticker+stats, ecosystem diagram, 8 product cards, mobile apps, plugin overview, platform carousel, security, testimonials, FAQ, CTA |
| S02 | Forex CRM | /forex-crm.html | Sell CRM | hero+chips, 8-tab feature explorer, admin-table mock, wallet mock, mobile preview |
| S03 | CRM Mobile App | /crm-mobile-app.html | Sell white-label client app | hero, phone-frame mocks, feature list, onboarding steps |
| S04 | Web Trading Terminal | /web-trading-terminal.html | Sell browser terminal | hero, quotes-table mock, chart placeholder, order ticket mock |
| S05 | Mobile Trading App | /mobile-trading-app.html | Sell trading app | hero, phone mocks, feature grid, platform badges |
| S06 | Social Trading | /social-trading.html | Sell social feed + following | hero, feed mock, leaderboard, provider cards |
| S07 | Copy Trading | /copy-trading.html | Sell copy engine | hero, copy-engine table mock, risk controls, how-it-works steps |
| S08 | PAMM / MAM | /pamm-mam.html | Sell managed accounts | hero, 3-view switcher (investor / manager / admin), allocation table |
| S09 | Prop Firm Solution | /prop-firm-solution.html | Sell challenge platform | hero, challenge picker, trader-dashboard mock, leaderboard, championship |
| S10 | MT5 Plugins | /mt5-plugins.html | Sell plugin suite | hero, 4 category groups, 14 module cards, accordion deep-dives, portal mock |
| S11 | Integrations | /integrations.html | Show ecosystem breadth | grouped logo grids: platforms, payments, KYC, comms |
| S12 | Company Formation | /company-formation.html | Sell licensing help | hero, 6 jurisdiction tabs, per-jurisdiction stats + bullets, process steps |
| S13 | Blog | /blog.html | Content index | 10 article cards, category filter (visual) |
| S14 | Article | /blog/forex-crm-2026.html | Long-form article | hero, body sections, related cards |
| S15 | Contact | /contact.html | Capture enquiries | 4-step process, contact form (front-end only), contact details |

## User flows
- F01 Visitor learns the suite: S01 hero → ecosystem → product card → product page (S02–S10).
- F02 Broker evaluates CRM: S01 → S02 tabs → wallet mock → S03 mobile app → S15 contact.
- F03 Prop firm evaluates challenges: S01 → S09 picker → dashboard mock → leaderboard → S15.
- F04 Founder checks licensing: S01 → S12 jurisdiction tabs → process → S15.
- F05 Reader discovers content: S01/S13 → S14 article → related card → product page.

## Components
Sticky header with Products dropdown; mobile nav; hero with chips + CTAs;
stat counters; marquee ticker; ecosystem diagram; product card grid;
mock dashboard shells (dark bar + stat tiles + data table); tab groups;
accordion (FAQ, plugin deep-dives); carousels (platforms, testimonials);
leaderboard table with rank-by filter; challenge picker; jurisdiction tabs;
blog card grid; contact form; footer with 3 link columns; CTA band.

## Inferred data model (front-end seed data only — no backend)
- Product { slug, name, tagline, group }
- Testimonial { quote, name, role, firm, rating }
- LeaderboardEntry { provider, gain, followers, winRate }
- Jurisdiction { name, region, timeframe, bullets[] }
- Article { slug, title, category, date, excerpt }
- PluginModule { name, category, summary }

## What cannot / will not be cloned
- Source branding, logo, copy, images, testimonials text, pricing, contact details.
- Real trading execution, live price feeds, MT5 server integration, payments, KYC checks, licensing outcomes — all shown as clearly-labelled demo/sample data.
- Any backend, accounts, or regulated service. The clone is a static marketing site; the contact form is front-end only.

## Size
15 screens, 5 flows, 6 entities. Hard parts: keeping 15 pages consistent
from one stylesheet; interactive mocks that feel real without a backend.
Size: M (static site, no backend).
