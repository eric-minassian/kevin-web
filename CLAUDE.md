# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Motion Glyph portfolio website - a single-page Astro site with Tailwind CSS v4 for a motion graphics/video editing agency.

## Commands

```bash
pnpm dev      # Start dev server (localhost:4321)
pnpm build    # Build for production (outputs to ./dist)
pnpm preview  # Preview production build locally
```

## Architecture

**Stack**: Astro 5 + Tailwind CSS v4 (via Vite plugin)

**Key directories**:
- `src/pages/` - Single `index.astro` page with all sections
- `src/components/sections/` - Page sections (Hero, Works, Services, Testimonials, Contact, Highlights)
- `src/components/ui/` - Reusable UI components (Button, VideoPlayer, ServiceCard, etc.)
- `src/components/layout/` - Navigation and Footer
- `src/data/` - Site configuration and content data (services, works, testimonials)
- `src/styles/global.css` - Tailwind theme config with custom colors and animations

**Data flow**: Content is defined in `src/data/*.ts` files and imported by components. Site-wide config (name, contact info, nav links) lives in `src/data/site-config.ts`.

**Styling**: Tailwind v4 uses CSS-first configuration in `global.css` with `@theme` directive for custom properties (colors, animations). Custom component classes use `@layer components`.

**Deployment**: GitHub Pages via Actions. The `base` path is conditional - `/kevin-web` in CI, `/` locally. Pushes to `main` trigger auto-deploy.

## Requirements Reference

See `docs/REQUIREMENTS.md` for brand colors, media assets, and full project requirements.
