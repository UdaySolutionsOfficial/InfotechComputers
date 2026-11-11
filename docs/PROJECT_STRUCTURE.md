# Infotech Computers Website — Project Architecture & Structure

## 1. Executive Overview
This document defines the production codebase architecture for the **Infotech Computers** website (`infotech-computers-website`), situated in Nidadavolu, Andhra Pradesh, India.

The project is built on **Astro 7** static site generation (SSG) with **TypeScript**, **Tailwind CSS v4** (via `@tailwindcss/vite`), **React 19** integration for selective client interactivity, and **self-hosted variable fonts** (`@fontsource-variable/inter` and `@fontsource-variable/manrope`).

---

## 2. Directory Hierarchy

```text
infotech-computers-website/
├── docs/
│   ├── DESIGN_SYSTEM.md          # Comprehensive design language, tokens, and rules
│   ├── PHASE_01_REPORT.md        # Detailed Phase 1 signoff and validation report
│   └── PROJECT_STRUCTURE.md      # Architecture documentation (this file)
├── public/
│   ├── favicon.svg               # SVG brand monogram favicon
│   └── images/
│       ├── branding/             # Reserved for Phase 4 official logo assets
│       ├── courses/              # Reserved for Phase 2 individual course icons/assets
│       ├── favicon/              # Multi-resolution favicon assets
│       ├── generated/            # AI-generated high-fidelity 3D brand assets
│       │   ├── digital-innovation-3d.jpg
│       │   ├── hero-education-tech-3d.jpg
│       │   └── programming-learning-3d.jpg
│       ├── icons/                # Reusable SVG and UI vector symbols
│       ├── institute/            # Reserved for Phase 4 official institute photography
│       └── services/             # Reserved for Phase 2 service architecture assets
├── src/
│   ├── assets/
│   │   └── images/               # Internal processed assets
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.astro      # Reusable multi-column footer with USolve collaboration
│   │   │   ├── Header.astro      # Sticky navigation bar with scroll state and logo slot
│   │   │   ├── MobileMenu.astro  # Accessible slide-out mobile drawer with keyboard trap
│   │   │   └── Navigation.astro  # Desktop navigation links with active state indicator
│   │   ├── shared/
│   │   │   ├── ContactCTA.astro  # Reusable conversion banner for admissions & solutions
│   │   │   └── FloatingWhatsApp.astro # Fixed bottom-right quick WhatsApp launcher
│   │   └── ui/
│   │       ├── Badge.astro       # Status, upcoming, and category pill badges
│   │       ├── Button.astro      # Polymorphic button (anchor / button) with 5 variants
│   │       ├── Container.astro   # Fluid, responsive container with max-width limits
│   │       ├── IconWrapper.astro # Consistent styled squircle / circle icon backgrounds
│   │       ├── SectionHeading.astro # Standardized eyebrow + h2 title + subtitle group
│   │       └── Tooltip.astro     # Accessible hover & focus tooltip wrapper
│   ├── data/
│   │   ├── institute.ts          # Single source of truth for factual institute data
│   │   └── navigation.ts         # Navigation items, routes, and link definitions
│   ├── layouts/
│   │   └── BaseLayout.astro      # Master layout with OpenGraph, Twitter, SEO & Fonts
│   ├── pages/
│   │   ├── courses/
│   │   │   └── index.astro       # Course catalogue foundation route
│   │   ├── services/
│   │   │   └── index.astro       # Digital services foundation route
│   │   └── index.astro           # Homepage foundation route with hero 3D preview
│   ├── styles/
│   │   ├── animations.css        # Performance-focused keyframes and scroll reveal classes
│   │   ├── global.css            # Tailwind v4 import, font imports, base element resets
│   │   └── tokens.css            # CSS custom properties for palette, fluid typography, spacing
│   └── utils/
│       ├── seo.ts                # Dynamic metadata and title formatting utility
│       └── whatsapp.ts           # Type-safe pre-filled WhatsApp click-to-chat generator
├── astro.config.mjs              # Astro build and plugin configuration
├── package.json                  # Dependencies and npm scripts
├── README.md                     # Quickstart documentation
└── tsconfig.json                 # Strict TypeScript configuration
```

---

## 3. Technology Stack & Package Versions

| Package / Tool | Version | Purpose / Architecture Rationale |
| :--- | :--- | :--- |
| **Astro** | `^7.4.8` | Next-generation SSG framework delivering zero JS by default, high performance, and exceptional SEO. |
| **TypeScript** | `^6.0.3` | Strict type safety across components, props, data configurations, and utility functions. |
| **@astrojs/check** | `^0.9.12` | Static analyzer ensuring zero type errors across `.astro` templates. |
| **Tailwind CSS** | `^4.3.5` | Modern utility-first CSS engine with native `@theme` integration and zero-configuration builds. |
| **@tailwindcss/vite** | `^4.3.5` | Lightning-fast Vite plugin for compilation and CSS processing. |
| **React** & **react-dom** | `^19.3.1` | Selective client island hydration when complex client state is needed. |
| **@astrojs/react** | `^7.1.5` | Astro integration enabling seamless `<Component client:idle />` hydration. |
| **Lucide React** | `^1.71.0` | Accessible, consistent interface icon library. |
| **@fontsource-variable/inter** | `^5.3.0` | Self-hosted variable font for crisp, legible UI typography with zero external network requests. |
| **@fontsource-variable/manrope** | `^5.3.0` | Self-hosted geometric heading font for modern, premium EdTech aesthetic. |

---

## 4. Key Architectural Decisions

### 4.1 Zero Premature Bloat & Performance Priority
- Client JavaScript is minimized. Navigation, mobile drawer, scroll reveals, and WhatsApp triggers are implemented with lightweight semantic scripts and native Web APIs (`IntersectionObserver`, `classList`, `addEventListener`).
- No heavy runtime libraries, no client routers, and no external tracking dependencies.

### 4.2 Centralized Data Configuration (`src/data/institute.ts`)
- All factual data (contact numbers, WhatsApp, timings, representative attribution, course listings, USolve collaboration details, Google Maps URLs) is centralized in a strictly typed TypeScript file.
- Components never hardcode contact details or institute facts; they import from `src/data/institute.ts`.
- Strict anti-fabrication boundary: No fabricated fees, fake student counts, or imaginary awards are included.

### 4.3 Future-Proof Official Logo Insertion (Phase 4)
- A dedicated `<div class="logo-slot" data-logo-slot="true">` is built into both the `Header.astro` and `Footer.astro`.
- A tasteful temporary wordmark (`INFOTECH COMPUTERS`) is displayed. In Phase 4, the official logo will drop directly into this container without altering navigation structure or responsive CSS.

### 4.4 Multi-Phase Preparedness
- **Phase 2 Ready**: Routes `/courses/` and `/services/` exist, resolve with HTTP 200, and present card foundations ready for detailed syllabi, modules, and project case studies.
- **Phase 3 Ready**: `seo.ts` and `BaseLayout.astro` contain canonical URLs, OpenGraph properties, Twitter Cards, robots directives, and preloads ready for full structured schema markup (`EducationalOrganization`).
- **Phase 4 Ready**: Asset directories (`public/images/branding/`, `public/images/institute/`) are reserved for verified photos of N. Srinivas Sir, classrooms, and official logos.
