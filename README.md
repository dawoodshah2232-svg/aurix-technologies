# FxNextTech — clean-room marketing site

A static marketing website for **FxNextTech**, a B2B fintech
software vendor for forex brokers and prop firms. Built clean-room from a
structural map of a reference vendor site: same *kind* of site map and
section structure, with every sentence, name, visual and brand written fresh.
No code, copy, logos, images or branding were taken from the reference.

## Brand
- Name: FxNextTech
- Palette: deep navy `#0A2540`, electric blue `#2563EB`, teal `#0EA5A4`
- Font: system sans stack. Icons: hand-drawn inline SVG. Images: AI-generated brand visuals in assets/images/.

## Pages (15)
Home, Forex CRM, CRM Mobile App, Web Trading Terminal, Mobile Trading App,
Social Trading, Copy Trading, PAMM / MAM, Prop Firm Solution, MT5 Plugins,
Integrations, Company Formation (licensing), Blog, one blog article,
Contact.

## Run locally
```sh
cd .  # from inside the project folder
python3 -m http.server 8000
# open http://localhost:8000/
```
No build step, no backend, no dependencies. The contact form is front-end
only — it shows a success message and sends nothing anywhere.

## Contacts (PLACEHOLDER — replace before any real launch)
- Email: hello@fxnexttech.example
- Phone: +971 50 000 0000
- Address: Office 1401, Al Shatha Tower, Dubai Internet City, Dubai, UAE (placeholder)

## Structure
```
index.html / *.html        pages
blog/forex-crm-2026.html   article
assets/css/style.css       shared styles
assets/css/tokens.css      design tokens
assets/js/main.js          nav, tabs, accordions, carousels, filters, counters
replica/recon.md           structural map (own words only)
replica/architecture.md    stack + routes
replica/features.csv       feature matrix
replica/design/tokens.json design tokens
replica/build-log.md       build + verification log
```

## Clean-room note
Structure and UX patterns were studied from public pages; all implementation
and wording is original. Demo tables, quotes, testimonials and leaderboards
use invented sample data, labelled as such on the pages.
