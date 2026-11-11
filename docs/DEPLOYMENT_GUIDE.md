# Production Deployment & Hosting Guide
**Project**: Infotech Computers Website  
**Phase**: Phase 03 — Production Hosting Blueprint  
**Architecture**: Statically Generated Website (Astro 7 + Tailwind CSS 4)  
**Output Directory**: `dist/`  

---

## 1. Hosting Architecture Overview

The Infotech Computers website is pre-rendered at build time into pure static HTML, CSS, client-side images, and minimal JavaScript. This provides exceptional speed, zero server maintenance, high security against vulnerabilities, and 100% cost-effective hosting.

The site can be deployed instantly to any modern Edge/CDN provider, including:
1. **Cloudflare Pages** (*Recommended for global edge speed & free DDoS protection*)
2. **Vercel**
3. **Netlify**
4. **Traditional Linux Host (Nginx / Apache)**

---

## 2. Environment Variables Specification

Before triggering a production build, configure the following environment variables in your hosting provider's dashboard:

| Variable Name | Staging / Preview Value | Production Value | Description |
| :--- | :--- | :--- | :--- |
| `PUBLIC_SITE_URL` | *leave empty* | `https://infotechcomputers.in` | Canonical HTTPS URL of the live website without a trailing slash. |
| `PUBLIC_INDEXING_ENABLED` | `false` | `true` | When `true`, enables search engine crawling (`index, follow`), outputs XML sitemap, and includes Schema.org URLs. |

> **Important**: Never enable `PUBLIC_INDEXING_ENABLED=true` on staging environments, preview branches, or localhost.

---

## 3. Platform Deployment Guides

### Option A: Cloudflare Pages (Recommended)

1. **Connect Git Repository**:
   * In Cloudflare Dashboard, navigate to **Compute (Workers & Pages)** > **Pages** > **Connect to Git**.
   * Select your GitHub / GitLab repository.
2. **Configure Build Settings**:
   * **Framework Preset**: `Astro`
   * **Build command**: `npm run build`
   * **Build output directory**: `dist`
   * **Node.js Version**: `20.x` or higher
3. **Set Environment Variables**:
   * Add `PUBLIC_SITE_URL = https://infotechcomputers.in`
   * Add `PUBLIC_INDEXING_ENABLED = true`
4. **Deploy**:
   * Click **Save and Deploy**. Cloudflare builds the site in ~45 seconds and deploys to 300+ edge locations worldwide.

---

### Option B: Vercel

1. **Import Project**:
   * Go to [vercel.com/new](https://vercel.com/new) and select the project repository.
2. **Build Settings**:
   * Framework Preset: `Astro`
   * Build Command: `npm run build`
   * Output Directory: `dist`
3. **Environment Variables**:
   * Under the **Production** environment tab:
     - `PUBLIC_SITE_URL`: `https://infotechcomputers.in`
     - `PUBLIC_INDEXING_ENABLED`: `true`
4. **Deploy**:
   * Click **Deploy**.

---

### Option C: Netlify

1. **Import Project**:
   * Go to [app.netlify.com](https://app.netlify.com) > **Add new site** > **Import an existing project**.
2. **Build Settings**:
   * Base directory: `/`
   * Build command: `npm run build`
   * Publish directory: `dist`
3. **Environment Variables**:
   * Under **Site configuration** > **Environment variables**:
     - `PUBLIC_SITE_URL`: `https://infotechcomputers.in`
     - `PUBLIC_INDEXING_ENABLED`: `true`
4. **Deploy**:
   * Click **Deploy site**.

---

## 4. Custom Domain & DNS Setup

To link your official domain (e.g., `infotechcomputers.in`):

### Standard DNS Record Table:
| Type | Name / Host | Target / Value | Proxy / TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** or **ALIAS** | `@` (Apex) | `[your-project].pages.dev` (or platform equivalent) | DNS Only or Proxied |
| **CNAME** | `www` | `infotechcomputers.in` (or platform equivalent) | DNS Only or Proxied |

### SSL / HTTPS Encryption:
* Modern providers (Cloudflare, Vercel, Netlify) automatically provision free, auto-renewing Let's Encrypt or Google Trust Services SSL certificates.
* Ensure **Always Use HTTPS** / **Force SSL** is turned on in your dashboard.

---

## 5. Post-Deployment Verification Checklist

Once the production domain is active and online:
- [ ] **HTTP to HTTPS Redirect**: Visit `http://infotechcomputers.in` and confirm it redirects automatically to `https://infotechcomputers.in`.
- [ ] **Trailing Slash Redirect**: Check that `/courses` cleanly resolves to `/courses/`.
- [ ] **Robots.txt Output**: Visit `https://infotechcomputers.in/robots.txt` and confirm:
  ```text
  User-agent: *
  Allow: /

  Sitemap: https://infotechcomputers.in/sitemap.xml
  ```
- [ ] **Sitemap.xml**: Visit `https://infotechcomputers.in/sitemap.xml` and confirm XML formatting with all 3 primary routes.
- [ ] **404 Handling**: Navigate to a non-existent URL (e.g. `https://infotechcomputers.in/xyz`) and confirm the custom branded 404 page loads with a 404 status.
- [ ] **Lead Routing**:
  - Click the floating WhatsApp button and confirm it opens `wa.me/919989848608` with pre-filled student greeting.
  - Visit `/services/` and click "Enquire for Digital Project", confirming it opens an email to `usolveofficial@gmail.com`.
