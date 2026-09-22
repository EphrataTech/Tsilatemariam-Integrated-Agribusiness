# Tsilatemariam Integrated Agribusiness Enterprise — Website

Next.js (App Router) project. All content is mock data — see `lib/data.js`.

## Run locally
```
npm install
npm run dev
```
Then open http://localhost:3000

## Project structure
- `app/` — pages (Home, Vision, Values, Customers, Contact, /units/[slug] for the 6 business units)
- `components/` — Nav, Footer, UnitCard, TeamCard, UnitIcon
- `lib/data.js` — all mock content (business units, team, CEO, values, customers). Edit this file to replace mock content with real data.
- `app/globals.css` — design system (colors, type, layout)

## Deploy
Push to GitHub and deploy free on Vercel (make by the creators of Next.js) — or Netlify.
