<div align="center">

# Muhammad Junaid — Portfolio Website

**AI Engineer | Python Developer | AI Agents | LLMs | RAG | FastAPI**

*Building intelligent AI systems that solve real-world problems.*

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**[Live Demo](https://muhammad-junaid-portfolio-gray.vercel.app/)** · **[GitHub](https://github.com/muhammadjunaidai)** · **[LinkedIn](https://www.linkedin.com/in/muhammadjunaidai/)**

</div>

---

## About

I'm Muhammad Junaid, an AI Engineer and Python Developer focused on building production-ready intelligent systems. I design **AI agents**, **RAG pipelines**, **LangGraph multi-agent platforms**, and **FastAPI backends** that connect LLM reasoning with real-world workflows — from document Q&A and SQL generation to automation and tool integration via MCP and n8n.

This repository contains the source code for my personal portfolio: a fast, static, recruiter-friendly site that showcases my projects, experience, and technical skills.

---

## Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide_React-Icons-F56565)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)

### AI / ML *(featured in projects)*
![LangGraph](https://img.shields.io/badge/LangGraph-Multi--Agent-38BDF8)
![LangChain](https://img.shields.io/badge/LangChain-RAG-1C3C3C)
![Chroma](https://img.shields.io/badge/Chroma-Vector_DB-FF6F00)
![Python](https://img.shields.io/badge/Python-LLMs-3776AB)

### Backend *(project stack)*
![Python](https://img.shields.io/badge/Python-3.11+-3776AB?logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-APIs-009688?logo=fastapi&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-Web-000000?logo=flask&logoColor=white)
![Django](https://img.shields.io/badge/Django-Apps-092E20?logo=django&logoColor=white)

### Tools & DevOps
![Git](https://img.shields.io/badge/Git-GitHub-F05032?logo=git&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Containers-2496ED?logo=docker&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?logo=vercel&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-Deploy-00C7B7?logo=netlify&logoColor=white)
![Formspree](https://img.shields.io/badge/Formspree-Contact_Form-FF5733)

---

## Features

- **Single-page layout** — About, Build, Projects, Experience, Skills, and Contact in one smooth scroll
- **Fully responsive** — optimized from 320px mobile to large desktop screens
- **Dark AI/tech theme** — professional navy background with electric blue accent (`#38BDF8`)
- **Framer Motion animations** — scroll reveals, hover micro-interactions, and hero typewriter effect
- **Featured projects grid** — filterable All / AI-Agentic / Full-Stack tabs with Live and Code badges
- **Working contact form** — Formspree integration with inline success/error states (no mailto popup)
- **Static & fast** — no backend required; Lighthouse-friendly bundle for free Vercel/Netlify hosting
- **Accessible contrast** — WCAG AA-friendly body text on dark backgrounds
- **SEO-ready** — Open Graph and meta tags for link previews

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (included with Node.js)

### Installation

```bash
git clone https://github.com/muhammadjunaidai/muhammad-junaid-portfolio.git
cd portfolio
npm install
```

### Environment variables



### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
npm run preview
```

---

## Folder Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── ParticleBackground.jsx
│   │   │   └── SectionHeading.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── OpenTo.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── WhatIBuild.jsx
│   ├── data/
│   │   └── portfolio.js        # Site content (projects, experience, contact)
│   ├── hooks/
│   │   └── useTypewriter.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── index.html
├── netlify.toml
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

---

## Deployment

This is a **static React site** (no server-side code) optimized for free hosting.

### Vercel *(recommended)*

1. Push the repo to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Framework preset: **Vite**
4. Add `VITE_FORMSPREE_FORM_ID` in Environment Variables
5. Deploy

### Netlify

1. Connect the GitHub repo on [netlify.com](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add `VITE_FORMSPREE_FORM_ID` in site settings

Both platforms are pre-configured via `vercel.json` and `netlify.toml`.

---

## Customize Content

Edit `src/data/portfolio.js` to update:

- Bio, skills, and experience
- Project cards, tags, and links (Live / GitHub)
- Contact info and social URLs
- Education and open-to roles

---

## Contact

| | |
|---|---|
| **Email** | [junaidfazal08@gmail.com](mailto:junaidfazal08@gmail.com) |
| **GitHub** | [github.com/muhammadjunaidai](https://github.com/muhammadjunaidai) |
| **LinkedIn** | [linkedin.com/in/muhammadjunaidai](https://www.linkedin.com/in/muhammadjunaidai/) |
| **Live Site** | [Live Demo](https://muhammad-junaid-portfolio-gray.vercel.app/) |

Open to **AI Engineer**, **LLM Engineer**, **AI Automation Engineer**, and **Python/FastAPI Developer** roles.

---

<div align="center">

Built with React, Tailwind CSS, and Framer Motion by **Muhammad Junaid**

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

</div>
