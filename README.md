# Muhammad Junaid — Portfolio

A modern, single-page personal portfolio for an AI Engineer / Python Developer. Built with React, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS** — dark AI/tech aesthetic with glassmorphism
- **Framer Motion** — scroll reveals and hover micro-interactions
- **Lucide React** — icons

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Customize Content

Edit `src/data/portfolio.js` for bio, projects, experience, skills, contact info, and live demo URLs.

## Deploy

### Vercel

1. Push to GitHub
2. Import on [vercel.com](https://vercel.com) — preset: **Vite**

### Netlify

Build command: `npm run build` · Publish directory: `dist`

Pre-configured via `vercel.json` and `netlify.toml`.

## Contact Form (Formspree)

1. Create a free form at [formspree.io](https://formspree.io)
2. Copy `.env.example` to `.env`
3. Set `VITE_FORMSPREE_FORM_ID=your_form_id_here`

The form submits inline with success/error states — no email client popup.

## Design

- Background: `#0B0F1A`
- Accent: `#38BDF8` (electric blue)
- Body text: `#CBD5E1` (WCAG AA contrast)
- Responsive: 320px → 2560px (`sm` / `md` / `lg` / `xl` / `2xl`)

## Sections

1. **Hero** — intro, typewriter, particle background
2. **About** — bio + engineering philosophy
3. **What I Build** — 7 icon cards
4. **Projects** — filterable tabs with Live / Code badges
5. **Experience** — vertical timeline
6. **Skills** · **Education** · **Open To** · **Contact** · **Footer**

## License

MIT
