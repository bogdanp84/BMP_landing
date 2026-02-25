# BMP: Build. Manage. Perform. — Romania Hub Launchpad

Single-page marketing site for BMP's B2B offerings (Managing Director as a Service + Build-Operate-Transfer), built with [Astro](https://astro.build) and Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

- **Dev:** [http://localhost:4321](http://localhost:4321)

## Contact form (email to you)

Submissions are sent via [Formspree](https://formspree.io). Your email is set only in Formspree's dashboard (never in the repo or visible to visitors).

1. Create an account at [formspree.io](https://formspree.io) and add a new form.
2. In the form settings, set the notification email to the address where you want to receive messages.
3. Copy the form ID from the form endpoint (e.g. `https://formspree.io/f/abc123` → form ID is `abc123`).
4. Create a `.env` file in the project root (see `.env.example`) and set:
   ```bash
   PUBLIC_FORMSPREE_FORM_ID=your_form_id_here
   ```
5. Restart the dev server.

## Build

```bash
npm run build
npm run preview
```

Static site. Contact form posts to Formspree when `PUBLIC_FORMSPREE_FORM_ID` is set.

## Deploy with Dokploy (Nixpacks)

The repo is set up for [Dokploy](https://dokploy.com) using **Nixpacks**:

- **nixpacks.toml** — start command: `npx serve dist -s` (serves the Astro static build with SPA fallback).
- **package.json** — `serve` dependency and `start` script for production.
- **.nvmrc** — Node 18.

In Dokploy, create a new app, connect this repo, and choose **Nixpacks** as the buildpack. Set `PUBLIC_FORMSPREE_FORM_ID` in the app environment variables if you use the contact form.

## Structure

- **Nav:** Fixed bar, blurred on scroll; mobile hamburger; links scroll to tabbed area and switch tab
- **Hero:** Eyebrow, headline, bullets, two outline CTAs, trust strip
- **Tabs:** Services, How it works, About, Contact (tab bar + panels, hash sync)
- **Contact:** Form submits to Formspree; toast on success

Design tokens (HSL) and spacing in `src/styles/global.css` and `tailwind.config.mjs`.
