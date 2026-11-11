# Developer Handover & Operations Guide
**Project**: Infotech Computers Official Website  
**Institute**: Infotech Computers, Nidadavolu, Andhra Pradesh, India  
**Collaborative Partner**: USolve (`https://usolve.in`)  
**Architecture**: Astro 7, Tailwind CSS 4, TypeScript 6, React 19  
**Target Audience**: Institute Webmaster, Future Software Engineers, Technical Maintainers  

---

## 1. Quick Start Guide (Local Development)

### Pre-requisites:
* Node.js version `20.x` or higher (verified with Node.js `>=22.23.4`)
* npm (bundled with Node.js)

### Available NPM Commands:
Inside `C:\Users\DELL\.gemini\antigravity\scratch\infotech-computers-website`:

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (starts at http://127.0.0.1:4321)
npm run dev

# 3. Perform TypeScript & Astro diagnostics check
npm run check

# 4. Compile production static build into dist/
npm run build

# 5. Preview production static build locally (starts at http://127.0.0.1:4322)
npm run preview
```

---

## 2. Brand Asset Management & Integrated Media

Official client assets provided from `images/` have been processed, web-optimized, and permanently integrated into the project:

### 2.1 Official Logo Integration
* **Source Asset**: `images/InfotechComputer logo.jpeg`
* **Production Asset Location**: `public/images/branding/infotech-logo.jpg`
* **Display Locations**:
  - Desktop Navigation Header (`src/components/layout/Header.astro`)
  - Mobile Menu Drawer (`src/components/layout/MobileMenu.astro`)
  - Site Footer (`src/components/layout/Footer.astro`)
  - Favicon & Open Graph branding metadata
* **Rendering**: Renders with clean border-radius, dark background container, and paired with high-contrast `INFOTECH COMPUTERS` typography.

### 2.2 N. Srinivas Sir Photograph Integration
* **Source Asset**: `images/Srinivas Sir.png` (high-resolution original)
* **Production Asset Location**: `public/images/institute/srinivas-sir.jpg` (bicubic web-optimized at 259KB for ultra-fast loading) & `public/images/institute/srinivas-sir.png`
* **Display Location**: Executive showcase card in `src/components/home/AboutSection.astro`
* **Features**:
  - Executive 4:3 framed layout with modern gradient glass overlay
  - Authentic nameplate attribution: "N. Srinivas Sir — Founder & Director • Institute Representative • Est. 2010"
  - Interactive smooth hover zoom (`group-hover:scale-105`) with subtle border highlight
  - Direct WhatsApp CTA: "Enquire Directly on WhatsApp" (`wa.me/919989848608`)

### 2.3 USolve Collaboration Emblem & Interactive 3D Tooltip
* **Source Asset**: `images/Usolve Logo Tooltip.png`
* **Production Asset Location**: `public/images/branding/usolve-logo.jpg` & `public/images/branding/usolve-logo.png`
* **Component**: `src/components/ui/USolveTooltip.astro`
* **Display Locations**:
  - About Section (Pillar 3: "Digital Services Division")
  - Digital Solutions Preview section
  - Global site footer
* **Behavior**: Hovering over the "USolve" interactive badge reveals a floating glassmorphism card featuring the 3D neon USolve emblem, "Technology Partner" badge, collaborative overview, and direct link to `https://usolve.in`.

### 2.4 Official Animated Floating WhatsApp Button
* **Component**: `src/components/shared/FloatingWhatsApp.astro` & `src/components/ui/WhatsAppIcon.astro`
* **Features**:
  - Official WhatsApp green `#25D366` and authentic SVG handset speech bubble icon
  - Dual pulse ripple ring animations (`animate-pulse-ring` and `animate-ping`)
  - Green active online indicator badge
  - Desktop hover tooltip: "Chat with Srinivas Sir on WhatsApp"
  - Generates pre-filled message: `"Hello Srinivas Sir, I visited the Infotech Computers website and would like to enquire about courses and admissions."`

### 2.5 Interactive Course Admission Form
* **Component**: `src/components/home/AdmissionContactForm.astro`
* **Integrated in**: `src/components/home/ContactLocationSection.astro`
* **Features**:
  - Student Name, 10-digit Mobile Number, Preferred Timing, Course Selection dropdown (all 10 active courses + 2 upcoming), and optional questions/queries.
  - Client-side validation for phone number and required fields.
  - On submit: Automatically formats an organized WhatsApp admission enquiry and launches WhatsApp directly targeting N. Srinivas Sir (`9989848608`).

### 2.6 Dynamic Number Counting Animation
* **Component**: `src/components/home/TrustStrip.astro`
* **Features**:
  - IntersectionObserver detects when the metrics strip enters viewport.
  - Smooth 1600ms cubic ease-out counting animation for `2010` (Founding Year), `16+` (Years Experience), and `10+` (Active Practical Courses).

---

## 3. Managing Website Content

All institutional facts, courses, digital services, and contact parameters are centralized in a single configuration file:
👉 [src/data/institute.ts](file:///C:/Users/DELL/.gemini/antigravity/scratch/infotech-computers-website/src/data/institute.ts)

### 3.1 Updating Contact Details & Timings
Open `src/data/institute.ts` and modify lines 99–110:
```typescript
contact: {
  phone: '9154481735',             // Raw 10-digit phone for tel: links
  phoneFormatted: '+91 91544 81735', // Display format
  whatsapp: '9989848608',          // WhatsApp enquiry number
  whatsappFormatted: '+91 99898 48608',
  email: 'infotechcomputers4@gmail.com',
},
timings: {
  operatingHours: '8:30 AM – 8:00 PM',
  weeklyHoliday: 'Sunday',
},
```

### 3.2 Updating Course Offerings
In `src/data/institute.ts`, look for the `courses` array. Each course is represented as an object:
```typescript
{
  id: 'tally',
  name: 'Tally',
  category: 'office-accounting', // 'office-accounting' | 'design-publishing' | 'programming-db'
  categoryLabel: 'Office & Accounting',
  status: 'active',              // 'active' | 'upcoming'
  badge: 'Popular',              // Optional badge
  shortDescription: 'Comprehensive TallyPrime with GST, vouchers, invoicing...',
  iconName: 'FileSpreadsheet',
  featured: true,
}
```

#### How to Transition an Upcoming Course to Active:
When **AI Fundamentals** or **Web Technologies** launches:
1. Change `status: 'upcoming'` to `status: 'active'`.
2. Update the `badge` to `'Course Offered'`.
3. The interactive filter and counter on `/courses/` will automatically recalculate.

---

### 3.3 Updating Digital Services (USolve Collaboration)
In `src/data/institute.ts`, look for `digitalServices`.
* Inquiries for all digital services route exclusively to USolve:
  - Email: `usolveofficial@gmail.com`
  - Partner Website: `https://usolve.in`
* To update email templates or parameters, inspect [src/utils/whatsapp.ts](file:///C:/Users/DELL/.gemini/antigravity/scratch/infotech-computers-website/src/utils/whatsapp.ts).

---

## 4. Production Domain & Search Indexing Configuration

By default, the website runs in **Safe Staging Mode** (`noindex, nofollow`, canonicals omitted).

### Step 1: Create Environment File
Create a `.env` file in the project root:
```bash
# Production Canonical Domain (No trailing slash)
PUBLIC_SITE_URL=https://infotechcomputers.in

# Explicitly enable search engine crawling & sitemaps
PUBLIC_INDEXING_ENABLED=true
```

### Step 2: What Happens When Configured:
* **Robots Meta Tag**: Automatically switches from `noindex, nofollow` to `<meta name="robots" content="index, follow">`.
* **Canonical Link Tags**: Injects clean, trailing-slash canonical URLs (e.g. `<link rel="canonical" href="https://infotechcomputers.in/courses/">`).
* **XML Sitemap**: `https://infotechcomputers.in/sitemap.xml` generates with all live URLs and timestamps.
* **Robots.txt**: `https://infotechcomputers.in/robots.txt` points crawlers to the sitemap.

---

## 5. Deployment Guide (Cloudflare Pages / Vercel / Netlify)

The website is 100% static and compatible with all modern web hosting platforms.

### Recommended: Cloudflare Pages
1. Push this repository to GitHub or GitLab.
2. In Cloudflare Dashboard, go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Set Build Settings:
   * **Framework preset**: `Astro`
   * **Build command**: `npm run build`
   * **Build output directory**: `dist`
4. Set Environment Variables:
   * `PUBLIC_SITE_URL` = `https://infotechcomputers.in`
   * `PUBLIC_INDEXING_ENABLED` = `true`
5. Click **Save and Deploy**. Cloudflare edge network distributes the site across 300+ cities in < 1 minute.
6. Under **Custom domains**, add `infotechcomputers.in` and `www.infotechcomputers.in`.

---

## 6. Post-Launch Webmaster Checklist

After deployment to the live domain:
- [ ] **Google Search Console**:
  1. Add domain property `infotechcomputers.in`.
  2. Verify ownership using the provided DNS TXT record.
  3. Submit `sitemap.xml` in the Sitemaps tab.
  4. Inspect URL `https://infotechcomputers.in/` and click "Request Indexing".
- [ ] **Google Business Profile**:
  1. Confirm business name is exactly `Infotech Computers`.
  2. Add the live website link to the GBP listing.
  3. Verify hours: Monday–Saturday 8:30 AM – 8:00 PM (Sunday closed).
  4. Upload authentic on-site photos of the sign board and computer lab.
- [ ] **Contact Form / CTA Verification**:
  1. Test the WhatsApp button on a smartphone to verify direct chat opening with `9989848608`.
  2. Test the Call button to verify dialer launching with `9154481735`.
  3. Test the "Enquire for Digital Project" button on `/services/` to verify it opens an email to `usolveofficial@gmail.com`.

---

## 7. Project Architecture & File Structure

```text
infotech-computers-website/
├── docs/                             # Full architectural & QA documentation
│   ├── CONTENT_ACCURACY_AUDIT.md     # Institutional truth comparison matrix
│   ├── DEPLOYMENT_GUIDE.md           # Production deployment blueprint
│   ├── DESIGN_SYSTEM.md              # Tokens, colors, typography, layout rules
│   ├── FINAL_HANDOVER_GUIDE.md       # This developer operations manual
│   ├── GOOGLE_SEARCH_CONSOLE_SETUP.md# GSC verification & sitemap guide
│   ├── LOCAL_SEO_CHECKLIST.md        # Google Business Profile action plan
│   ├── PHASE_01_REPORT.md            # Foundation phase milestone report
│   ├── PHASE_02_REPORT.md            # Page development phase report
│   ├── PHASE_03_REPORT.md            # Technical SEO & accuracy report
│   ├── PHASE_04_FINAL_REPORT.md      # Final production release report
│   ├── PROJECT_STRUCTURE.md          # Technical directory architecture
│   └── SEO_KEYWORD_STRATEGY.md       # Keyword groupings for B2C & B2B
├── public/                           # Static assets served at root
│   ├── favicon.svg                   # Vector site icon
│   └── images/
│       ├── branding/                 # [DROP-IN] Place official logo files here
│       ├── favicon/
│       ├── generated/                # 3D education & technology illustrations
│       ├── institute/                # [DROP-IN] Place Srinivas Sir's photo here
│       └── og-image.jpg              # 1200x630 social share card
├── src/
│   ├── components/
│   │   ├── courses/                  # Course cards & interactive filters
│   │   ├── home/                     # Hero, About, WhyChooseUs, Stats, Contact
│   │   ├── layout/                   # Header, Footer, Navigation, MobileMenu
│   │   ├── services/                 # Digital solutions in collaboration with USolve
│   │   ├── shared/                   # CTAs, WhatsApp quick contact
│   │   └── ui/                       # Buttons, Badges, Cards, Containers
│   ├── data/
│   │   ├── institute.ts              # CENTRAL SOURCE OF TRUTH (Edit content here)
│   │   └── navigation.ts             # Navigation menu link structures
│   ├── layouts/
│   │   └── BaseLayout.astro          # Root HTML layout with SEO & Schema injection
│   ├── pages/
│   │   ├── 404.astro                 # Custom branded 404 error page
│   │   ├── index.astro               # Homepage route (/)
│   │   ├── courses/index.astro       # Courses route (/courses/)
│   │   ├── services/index.astro      # Services route (/services/)
│   │   ├── robots.txt.ts             # Dynamic robots crawler directive endpoint
│   │   └── sitemap.xml.ts            # Dynamic XML sitemap endpoint
│   ├── styles/
│   │   ├── animations.css            # Floating, shimmer, elevation animations
│   │   ├── global.css                # Global Tailwind CSS 4 directives
│   │   └── tokens.css                # Design tokens & color variables
│   └── utils/
│       ├── assets.ts                 # Automated logo & photo discovery engine
│       ├── seo.ts                    # Canonical, meta robots & Schema.org engine
│       └── whatsapp.ts               # WhatsApp & USolve mailto URL generators
├── astro.config.mjs                  # Astro configuration
├── package.json                      # Dependencies and scripts
└── tsconfig.json                     # TypeScript compiler configuration
```
