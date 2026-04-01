# Magic Portfolio — Implementation Documentation

> A comprehensive technical overview of the Magic Portfolio project architecture, configuration, and implementation details.

## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Configuration System](#configuration-system)
- [Content Management](#content-management)
- [Routing & Pages](#routing--pages)
- [API Routes](#api-routes)
- [Components Architecture](#components-architecture)
- [SEO & Metadata](#seo--metadata)
- [Security & Authentication](#security--authentication)
- [Styling & Theming](#styling--theming)
- [Scripts & Tooling](#scripts--tooling)

---

## Project Overview

**Magic Portfolio** is an MDX-based, SEO-friendly portfolio template built with [Once UI](https://once-ui.com) and [Next.js](https://nextjs.org). It provides a configurable, content-driven architecture for showcasing design and development work, blog posts, and personal information.

**Version:** 2.3.0  
**License:** CC BY-NC 4.0 (Attribution required, no commercial use)  
**Node.js:** v18.17+

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| UI System | @once-ui-system/core |
| Styling | SCSS (Sass) + CSS Modules |
| Content | MDX (gray-matter, next-mdx-remote) |
| Language | TypeScript |
| Linting | ESLint + Biome |
| Fonts | Google Fonts (Geist, Geist Mono) |

### Key Dependencies
- `next` ^16.0.7 — React framework
- `react` ^19.2.0 — UI library
- `@once-ui-system/core` ^1.5.6 — Design system
- `@mdx-js/loader` + `@next/mdx` — MDX support
- `gray-matter` — Frontmatter parsing
- `next-mdx-remote` — MDX serialization
- `cookie` — Auth cookie handling
- `react-icons` — Icon library
- `transliteration` — Text transformations

---

## Project Structure

```
magic-portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about/              # About / CV page
│   │   ├── api/                # API routes
│   │   │   ├── authenticate/   # Password authentication
│   │   │   ├── check-auth/     # Auth state check
│   │   │   ├── og/             # Open Graph (fetch, generate, proxy)
│   │   │   └── rss/            # RSS feed
│   │   ├── blog/               # Blog section
│   │   │   ├── [slug]/         # Dynamic blog post
│   │   │   ├── posts/          # MDX blog posts
│   │   │   └── page.tsx
│   │   ├── gallery/            # Photo gallery
│   │   ├── work/               # Projects section
│   │   │   ├── [slug]/         # Dynamic project page
│   │   │   ├── projects/       # MDX project content
│   │   │   └── page.tsx
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── not-found.tsx
│   │   ├── robots.ts           # robots.txt
│   │   └── sitemap.ts          # sitemap.xml
│   ├── components/             # Reusable components
│   ├── resources/              # Config & content
│   ├── types/                  # TypeScript types
│   └── utils/                  # Utilities
├── public/                     # Static assets
│   ├── images/                 # avatars, gallery, og, projects
│   └── trademarks/
├── next.config.mjs
├── biome.json
├── tsconfig.json
└── .env.example
```

---

## Configuration System

### 1. `src/resources/once-ui.config.ts`

Central configuration for appearance, routes, and behavior.

| Config Block | Purpose |
|--------------|---------|
| `baseURL` | Site URL for SEO, meta tags, schema |
| `routes` | Enable/disable pages (`/`, `/about`, `/work`, `/blog`, `/gallery`) |
| `protectedRoutes` | Password-protected routes |
| `display` | Location, time, theme switcher visibility |
| `fonts` | Geist, Geist Mono — heading, body, label, code |
| `style` | Theme, neutral, brand, accent, border, surface, transition, scaling |
| `dataStyle` | Chart variants, modes, axis/tick styling |
| `effects` | Background mask, gradient, dots, grid, lines |
| `mailchimp` | Newsletter form action + effects |
| `schema` | Organization schema (logo, type, name, description, email) |
| `sameAs` | Social links for schema |
| `socialSharing` | Blog post sharing platforms (X, LinkedIn, email, etc.) |

### 2. `src/resources/content.tsx`

Content-driven configuration for all sections:

- **person** — Name, role, avatar, email, location (IANA timezone), languages
- **newsletter** — Display, title, description
- **social** — Links with icons (GitHub, LinkedIn, etc.), `essential` flag for About page
- **home** — Path, image, title, headline, featured badge, subline
- **about** — Table of contents, avatar, calendar, intro, work experience, studies, technical skills
- **blog** — Path, label, title, description
- **work** — Path, label, title, description
- **gallery** — Path, label, title, description, images array

### 3. Type Definitions

- `src/types/config.types.ts` — `DisplayConfig`, `RoutesConfig`, `StyleConfig`, `EffectsConfig`, etc.
- `src/types/content.types.ts` — `Person`, `Home`, `About`, `Blog`, `Work`, `Gallery`, `Newsletter`, `Social`

---

## Content Management

### MDX Content

**Blog posts:** `src/app/blog/posts/*.mdx`  
**Projects:** `src/app/work/projects/*.mdx`

### Frontmatter Schema

**Blog:**
```yaml
title: string
subtitle?: string
publishedAt: string (ISO date)
summary: string
image?: string
tag?: string
team?: Array<{ name, role, avatar, linkedIn }>
link?: string
```

**Work:**
```yaml
title: string
publishedAt: string
images: string[]
team?: Array<{ name, role, avatar, linkedIn }>
```

### Content Loading

`src/utils/utils.ts`:
- `getPosts(customPath)` — Reads MDX files from a directory
- Uses `gray-matter` for frontmatter
- Returns `{ metadata, slug, content }[]`

---

## Routing & Pages

| Route | Type | Description |
|-------|------|-------------|
| `/` | Static | Home — headline, featured work, projects, blog preview, newsletter |
| `/about` | Static | CV — intro, work, studies, technical skills, table of contents |
| `/blog` | Static | Blog listing |
| `/blog/[slug]` | Dynamic | Single blog post (MDX) |
| `/work` | Static | Projects listing |
| `/work/[slug]` | Dynamic | Single project (MDX) |
| `/gallery` | Static | Photo gallery grid |

### Route Guard (`RouteGuard.tsx`)

- Wraps all page content
- Checks `routes` — disables pages when `false`, shows 404
- Checks `protectedRoutes` — shows password form when protected and not authenticated
- Auth via `/api/check-auth` and `/api/authenticate`

---

## API Routes

| Route | Method | Purpose |
|-------|--------|---------|
| `/api/authenticate` | POST | Validate password, set `authToken` httpOnly cookie |
| `/api/check-auth` | GET | Return `{ authenticated: boolean }` |
| `/api/og/generate` | GET | Generate OG image via `next/og` (title param) |
| `/api/og/fetch` | GET | Fetch URL and extract title, description, og:image (query: `url`) |
| `/api/og/proxy` | GET | Proxy remote image (query: `url`) |
| `/api/rss` | GET | RSS 2.0 feed from blog posts |

### OG Image Generation

- Uses `ImageResponse` from `next/og`
- Loads Geist font from Google Fonts
- Renders title + person avatar + name + role
- 1280×720, dark background

---

## Components Architecture

### Exports (`src/components/index.ts`)

- `Header` — Nav (home, about, work, blog, gallery), theme toggle, time display
- `Footer` — Site links, attribution
- `Mailchimp` — Newsletter subscription
- `ProjectCard` — Work/project cards
- `HeadingLink` — Linked headings
- `RouteGuard` — Route + auth guard
- `Providers` — Theme, icons, layout, toast
- `ScrollToHash` — Scroll to hash on load
- `ThemeToggle` — Light/dark toggle
- `CustomMDX` — MDX renderer with custom components

### Specialized Components

- `about/TableOfContents.tsx` — About page TOC
- `blog/Post.tsx`, `Posts.tsx`, `ShareSection.tsx`
- `gallery/GalleryView.tsx`
- `work/Projects.tsx`

### Providers

`Providers` wraps the app with:
- `LayoutProvider`
- `ThemeProvider` (brand, accent, neutral, etc.)
- `DataThemeProvider` (charts)
- `ToastProvider`
- `IconProvider` (custom icon library)

---

## SEO & Metadata

### Metadata Generation

- `Meta.generate()` from Once UI — used in layouts and pages
- Parameters: `title`, `description`, `baseURL`, `path`, `image`, `author`

### Schema.org

- `Schema` component — `webPage`, `blogPosting`
- Fields: `baseURL`, `path`, `title`, `description`, `image`, `datePublished`, `author`

### Static Files

- `robots.ts` — Returns `rules` and `sitemap` URL
- `sitemap.ts` — Generates sitemap from routes, blog posts, and work projects

### RSS

- `/api/rss` — RSS 2.0 feed
- Includes posts from `blog/posts`, sorted by `publishedAt`

---

## Security & Authentication

### Password Protection

- Env: `PAGE_ACCESS_PASSWORD` (see `.env.example`)
- `protectedRoutes` in `once-ui.config.ts` maps paths to `true`
- Cookie: `authToken` = `"authenticated"`, httpOnly, 1 hour, sameSite strict

### Flow

1. User hits protected route → `RouteGuard` checks `/api/check-auth`
2. If not authenticated → password form shown
3. Submit → `POST /api/authenticate` with `{ password }`
4. Success → set cookie, redirect/refresh
5. Subsequent requests include cookie → access granted

---

## Styling & Theming

### CSS Architecture

- `@once-ui-system/core/css/styles.css` — Core styles
- `@once-ui-system/core/css/tokens.css` — Design tokens
- `@/resources/custom.css` — Custom overrides
- SCSS modules per component (e.g. `Header.module.scss`)

### Theme Initialization

Inline script in `layout.tsx`:
- Reads `localStorage` for `data-theme`, `data-*` overrides
- Supports `system`, `light`, `dark`
- Applies `style` from config to `document.documentElement`

### Data Attributes

Theme controlled via `data-*` attributes (Once UI theming):
- `data-theme`, `data-brand`, `data-accent`, `data-neutral`, etc.

---

## Scripts & Tooling

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `next dev` | Development server |
| `build` | `next build` | Production build |
| `start` | `next start` | Production server |
| `lint` | `next lint` | ESLint |
| `biome-write` | `npx @biomejs/biome format --write .` | Biome format |

### Next.js Config (`next.config.mjs`)

- MDX via `@next/mdx` for `.md` and `.mdx`
- Transpiles `next-mdx-remote`
- Remote image patterns (e.g. google.com)
- Sass with modern compiler, legacy deprecations silenced

### Path Aliases

- `@/*` → `./src/*` (tsconfig)

---

## Environment Variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `PAGE_ACCESS_PASSWORD` | For protected routes | Password for protected pages |

---

## Quick Start Summary

1. **Clone** the repository
2. **Install** dependencies: `npm install`
3. **Configure** `src/resources/once-ui.config.ts` (baseURL, routes, style)
4. **Edit** `src/resources/content.tsx` (person, home, about, etc.)
5. **Add content** — MDX files in `blog/posts` and `work/projects`
6. **Run** `npm run dev`

---

## File Reference

| File | Role |
|------|------|
| `src/app/layout.tsx` | Root layout, theme script, providers, header/footer |
| `src/app/page.tsx` | Home page with Schema, projects, posts |
| `src/utils/utils.ts` | MDX loading utilities |
| `src/utils/formatDate.ts` | Date formatting |
| `src/resources/icons.ts` | Icon registry for social/platform icons |

---

*Documentation generated from project analysis. For user-facing docs, see [docs.once-ui.com](https://docs.once-ui.com/docs/magic-portfolio/quick-start).*
