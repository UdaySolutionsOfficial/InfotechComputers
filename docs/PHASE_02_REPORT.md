# Infotech Computers Website — Phase 02 Engineering & Design Report
**Project:** infotech-computers-website  
**Location:** Nidadavolu, Andhra Pradesh, India  
**Phase:** Phase 02 — Complete Website Development (Home, Courses & Digital Services)  
**Date of Completion:** November 10, 2026  
**Status:** COMPLETE & PRODUCTION-READY (Static Build & Automated Browser Validation Passed)

---

## 1. Executive Summary

Phase 02 transitions the architectural foundation established in Phase 01 into a fully functional, multi-page, responsive, and visually sophisticated web application for **Infotech Computers**, Nidadavolu.

The website delivers on three primary objectives:
1. **Institutional Credibility & Trust:** Communicating 16+ years of educational experience (Est. 2010) through clean typography, balanced whitespace (75–80% white/light neutral canvas, 15–20% blue accents), structured facts, and verified leadership representation for **N. Srinivas Sir**.
2. **Comprehensive Course Catalog & Interactive Discovery:** Presenting all 10 core computer and programming courses alongside 2 upcoming emerging technology courses (*AI Fundamentals* and *Web Technologies*), backed by an accessible, zero-dependency client-side category filter with live counts and course-specific WhatsApp enquiry actions.
3. **Professional Digital Services Showcase:** Displaying all 9 digital software solutions engineered in technical collaboration with **USolve**, maintaining strict and explicit organizational separation between educational operations (Infotech Computers) and software engineering services (USolve).

---

## 2. Information Architecture & Route Structure

The web application is statically pre-rendered via Astro 7 and is organized into three primary routes:

```
src/pages/
├── index.astro              # Primary Route: Complete Homepage (8 Modular Sections)
├── courses/
│   └── index.astro          # Courses Directory with Interactive Category Filtering
└── services/
    └── index.astro          # Digital Solutions & Software Systems Catalog
```

---

## 3. Modular Architecture Breakdown

### 3.1 Page One: Homepage (`/`)

The homepage is composed of 8 modular Astro components located in `src/components/home/`:

| Section | Component File | Key Highlights & Architectural Features |
| :--- | :--- | :--- |
| **Hero** | `HeroSection.astro` | Split layout with eyebrow `ESTABLISHED 2010 • 16+ YEARS OF EXPERIENCE`, heading `"Empowering Skills. Shaping Futures."`, dual CTAs (*Explore Our Courses*, *Enquire on WhatsApp*), trust indicator pills, and 3D laptop illustration (`hero-education-tech-3d.jpg`). |
| **Trust Strip** | `TrustStrip.astro` | 4 verified institutional facts in high-contrast card metrics: `2010` (Founded), `16+ Years` (Continuous Experience), `Nidadavolu` (Andhra Pradesh Campus), `10+` (Core Tech Courses). |
| **About Section** | `AboutSection.astro` | Heading `"Building Computer Skills. Creating Opportunities."`, 3 institutional pillars (*Practical Computer Knowledge*, *Structured Programming Foundations*, *Digital Collaboration with USolve*), and leadership attribution to **N. Srinivas Sir** (*"Associated with the institute's journey since its establishment"*) featuring a reserved photo slot (`data-representative-photo-slot="true"`). |
| **Course Categories** | `CategoryPreview.astro` | 3 core tracks (*Office & Business*, *Graphic Design & Publishing*, *Programming & Database*) with syllabus tags, direct WhatsApp enquiry pre-filled triggers, and quick routing to `/courses/`. |
| **Why Choose Us** | `WhyChooseUs.astro` | 4 key value cards: *Established Experience* (16+ years), *Multiple Learning Paths*, *Skill-Focused Learning*, and *Modern Innovations* (AI & Web upcoming). |
| **Upcoming Courses** | `UpcomingCourses.astro` | Dedicated cards for *AI Fundamentals* and *Web Technologies* with animated `COMING SOON` badges, 3D artwork (`ai-fundamentals-3d.jpg`, `web-technologies-3d.jpg`), curriculum bullet points, and "Express Interest" WhatsApp buttons. |
| **Digital Solutions** | `DigitalSolutionsPreview.astro` | Dual-brand banner `INFOTECH COMPUTERS × USOLVE`, outlining local accessibility in Nidadavolu joined with USolve's engineering capabilities, displaying 6 service pills, and routing to `/services/`. |
| **Contact & Location** | `ContactLocationSection.astro` | 4 contact channels: Phone (`+91 91544 81735`), WhatsApp (`+91 99898 48608`), Email (`infotechcomputers4@gmail.com`), Working Hours (`8:30 AM – 8:00 PM`, Sunday holiday), and a lazy-loaded responsive Google Maps embed of Nidadavolu (`loading="lazy"`). |

---

### 3.2 Page Two: Courses Directory (`/courses/`)

The courses directory is built with modular components in `src/components/courses/`:

- **`CoursesHero.astro`**: Breadcrumb navigation (`Home • Courses`), badge `Curriculum • Nidadavolu Center`, headline `"Discover the Right Skills for Your Future"`, and 3D visual canvas (`programming-learning-3d.jpg`).
- **`CourseInteractiveGrid.astro`**: Accessible, instantaneous client-side category filter with live tab switching and counter badges:
  - **All Courses** (12 courses)
  - **Office & Business** (2 courses: *MS Office*, *Tally*)
  - **Design & Publishing** (3 courses: *Photoshop*, *PageMaker*, *CorelDRAW*)
  - **Programming & Database** (5 courses: *C Programming*, *C++*, *Java*, *Oracle*, *Python*)
  - **Upcoming** (2 tracks: *AI Fundamentals*, *Web Technologies*)
- **`CourseCard.astro`**: Renders category badges, course title, verified description, practical syllabus highlights, duration notice (`Flexible Lab Batches`), and a direct WhatsApp enquiry button configured with course-specific query strings.
- **Learning Roadmap Banner**: Outlines individual lab practice, personalized instructor guidance, and step-by-step progress tracking.

---

### 3.3 Page Three: Digital Services (`/services/`)

The digital services page is built with modular components in `src/components/services/`:

- **`ServicesHero.astro`**: Eyebrow badge `INFOTECH COMPUTERS × USOLVE`, headline `"Turning Ideas Into Digital Solutions."`, narrative explaining customized software delivery, primary CTA (*Discuss Your Project* via mailto to `usolveofficial@gmail.com`), and secondary CTA (*Visit USolve Website* pointing to `https://usolve.in`).
- **`ServiceCatalogue.astro`**: Asymmetric grid displaying all 9 production-grade digital services:
  1. *Website Design & Development*
  2. *Customized Software Development*
  3. *E-commerce Development*
  4. *Billing & Management Systems*
  5. *Tracking Systems*
  6. *Web & Mobile Applications*
  7. *Landing Pages & UI/UX*
  8. *Database & API Integration*
  9. *Maintenance & Tech Support*
  Each card includes an index counter (`01`–`09`), category badge, full descriptive scope, a 3-point deliverables checklist, and a *"Discuss Solution"* consultation trigger.
- **`HowWeWork.astro`**: 4-stage delivery methodology:
  - `01 Understand` (requirements, workflows, bottlenecks)
  - `02 Plan` (architecture, UX, milestone roadmap)
  - `03 Develop` (clean code, responsive UI, thorough test suites)
  - `04 Deliver` (deployment, documentation handover, maintenance)
- **`CollaborationBranding.astro`**: Dedicated organizational boundary statement detailing Infotech Computers' 16+ year local presence in Nidadavolu for education and training alongside USolve's engineering capabilities in delivering custom software systems, with direct links to `https://usolve.in` and `usolveofficial@gmail.com`.
- **`ContactCTA.astro`**: Reusable closing consultation call to action.

---

## 4. Visual & 3D Asset Management

All 7 visual assets are stored in `public/images/generated/` and rendered with explicit responsive dimensions and `loading="lazy"` / `loading="eager"` attributes:

| File Name | Context & Visual Concept | Page Placement |
| :--- | :--- | :--- |
| `hero-education-tech-3d.jpg` | Modern laptop, floating data chips, and soft blue gradients | Homepage Hero |
| `office-productivity-3d.jpg` | Spreadsheet grids, financial ledgers, and productivity tools | Course Category Preview |
| `graphic-design-3d.jpg` | Creative canvas, vector nodes, color swatches, and brushes | Course Category Preview |
| `programming-learning-3d.jpg` | Code editor brackets, terminal screens, and floating syntax | Courses Hero & Categories |
| `ai-fundamentals-3d.jpg` | 3D neural network nodes and machine intelligence chips | Upcoming Courses |
| `web-technologies-3d.jpg` | Responsive browser frames, DOM nodes, and modern layout | Upcoming Courses |
| `digital-innovation-3d.jpg` | Cloud nodes, microservice blocks, and digital gears | Services Hero & Home Showcase |

---

## 5. Technical Validation & Build Results

### 5.1 Static Compilation & Type Safety
The project was tested using Astro's static build pipeline and TypeScript compiler:

```bash
> npm run check
16:11:14 [types] Generated 235ms
16:11:14 [check] Getting diagnostics for Astro files in .../infotech-computers-website
Result (37 files): 
- 0 errors
- 0 warnings
- 0 hints
```

```bash
> npm run build
16:11:34 [build] output: "static"
16:11:34 [build] mode: "static"
16:11:37 ✓ generating static routes 
16:11:37   ├─ /courses/index.html (+61ms) 
16:11:37   ├─ /services/index.html (+18ms) 
16:11:37   ├─ /index.html (+19ms) 
16:11:37 ✓ Completed in 204ms.
16:11:37 [build] 3 page(s) built in 2.51s
16:11:37 [build] Complete!
```

### 5.2 Automated Browser Subagent Quality Audit
An automated browser subagent performed a complete audit against the active development server (`http://127.0.0.1:4321`):

1. **Homepage (`/`)**:
   - Title and header logo verified.
   - Hero headline `"Empowering Skills. Shaping Futures."` and dual CTAs verified.
   - Trust strip (4 metrics) verified.
   - N. Srinivas Sir attribution and reserved photo slot verified.
   - 3 categories, 4 value cards, upcoming tracks, and USolve preview verified.
   - Contact cards and Google Maps iframe verified.
2. **Courses Page (`/courses/`)**:
   - Interactive category filter tested:
     - `All Courses`: 12 cards visible.
     - `Office & Business`: 2 cards visible (*MS Office*, *Tally*).
     - `Design & Publishing`: 3 cards visible (*Photoshop*, *PageMaker*, *CorelDRAW*).
     - `Programming & DB`: 5 cards visible (*C*, *C++*, *Java*, *Oracle*, *Python*).
     - `Upcoming`: 2 cards visible (*AI Fundamentals*, *Web Technologies*).
   - WhatsApp pre-filled enquiry links confirmed on every course card.
3. **Services Page (`/services/`)**:
   - Header `"INFOTECH COMPUTERS × USOLVE"` and headline `"Turning Ideas Into Digital Solutions."` verified.
   - All 9 service cards verified with descriptions, scope checklists, and action buttons.
   - 4 delivery steps verified.
   - Collaboration brand separation and USolve URLs (`https://usolve.in/`, `usolveofficial@gmail.com`) verified.
4. **Mobile Viewport (375 × 812)**:
   - Layout tested: zero horizontal scrolling or clipping (`body.scrollWidth` <= 375px).
   - Mobile navigation drawer tested: hamburger trigger expands accessible `<dialog>` navigation overlay, links render clearly, and close button dismisses cleanly.

---

## 6. Strict Institutional Integrity & Compliance Checklist

In accordance with official instructions:
- [x] **No Fake Logo:** Maintained professional typography wordmark `IT INFOTECH · COMPUTERS` in `Header.astro`.
- [x] **No AI Human Portrait:** N. Srinivas Sir's card features an academic icon and a dedicated photo reservation container (`data-representative-photo-slot="true"`).
- [x] **Strict Representative Attribution:** Text states strictly: *"Associated with the institute's journey since its establishment."*
- [x] **Exact Contact Numbers:** Phone `+91 91544 81735`, WhatsApp `+91 99898 48608` (`https://wa.me/919989848608`), Email `infotechcomputers4@gmail.com`.
- [x] **Verified Location & Hours:** Nidadavolu, Andhra Pradesh, India; `8:30 AM – 8:00 PM (Sun Holiday)`.
- [x] **Clear Entity Separation:** Student course enquiries route to Infotech Computers; software development enquiries route to USolve (`usolveofficial@gmail.com`, `https://usolve.in`).
- [x] **No Hallucinated Data:** No fabricated student counts, ratings, certificates, or unverified fee schedules.

---

## 7. Readiness for Phase 03

Phase 02 leaves the application in an exceptionally strong state for Phase 03:
- Full page routes exist and compile cleanly.
- Design tokens and component architecture are completely modular.
- Interactive JavaScript is zero-dependency, ultra-lightweight, and accessible.
- Phase 03 can now focus on dedicated About and Contact routes, comprehensive interactive enquiry forms with validation, and fine-tuned SEO meta/OpenGraph enhancements.
