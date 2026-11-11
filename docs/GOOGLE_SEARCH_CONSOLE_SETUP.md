# Google Search Console (GSC) Setup & Indexation Guide
**Project**: Infotech Computers Website  
**Phase**: Phase 03 — Search Console Setup & Verification  
**Audience**: Institute Owner, Technical Administrator, Webmaster  

---

## 1. Overview & Purpose

Google Search Console (GSC) is Google's official portal for monitoring website indexing, technical health, search keyword performance, mobile usability, and Core Web Vitals.

This guide provides step-by-step instructions for verifying domain ownership, submitting the XML sitemap, managing crawler directives, and safely enabling production search indexing for the Infotech Computers website.

---

## 2. Pre-Requisites & Safe Staging Safeguards

In `src/utils/seo.ts` and `astro.config.mjs`, the website implements strict staging protection:
* **Default State**:
  ```env
  PUBLIC_SITE_URL=
  PUBLIC_INDEXING_ENABLED=false
  ```
* **Behavior during staging / preview**:
  - `robots.txt` outputs `User-agent: * \n Disallow: /`
  - All HTML pages output `<meta name="robots" content="noindex, nofollow">`
  - Canonical link tags are safely omitted to prevent preview URLs (e.g. `vercel.app`, `localhost`) from being indexed.
* **Production Activation**:
  Only once a custom domain is purchased and connected (e.g., `https://infotechcomputers.in`), set:
  ```env
  PUBLIC_SITE_URL=https://infotechcomputers.in
  PUBLIC_INDEXING_ENABLED=true
  ```
  This immediately unlocks:
  - `<meta name="robots" content="index, follow">`
  - Valid canonical URLs (`https://infotechcomputers.in/`, etc.)
  - Complete Schema.org JSON-LD structured data with valid URLs
  - Production `sitemap.xml` listing all pages with `<lastmod>` timestamps

---

## 3. Step-by-Step GSC Onboarding

### Step 1: Access Google Search Console
1. Navigate to [Google Search Console](https://search.google.com/search-console).
2. Sign in using the official institute Google account (`infotechcomputers4@gmail.com`).

### Step 2: Choose Property Type
Google offers two property types:
1. **Domain Property** (*Recommended*):
   * Example: `infotechcomputers.in`
   * Covers all subdomains (`www`, non-www, `m.`) and both HTTP/HTTPS protocols.
   * Requires DNS verification.
2. **URL Prefix Property**:
   * Example: `https://infotechcomputers.in`
   * Validates only the exact matching URL scheme.

> **Recommendation**: Create a **Domain Property** for comprehensive coverage, and optionally create an HTTPS URL prefix property for secondary tracking.

### Step 3: Domain Verification via DNS (Recommended Method)
1. In the Domain property prompt, enter your custom domain (e.g. `infotechcomputers.in`).
2. Google will provide a unique `TXT` record, for example:
   ```text
   google-site-verification=abcdef1234567890XYZ_ExampleToken
   ```
3. Log in to your domain registrar (GoDaddy, Namecheap, Hostinger, Cloudflare):
   - Navigate to **DNS Management** / **DNS Records**.
   - Click **Add Record**.
   - Type: `TXT`
   - Name / Host: `@` (or leave blank depending on provider)
   - Value / Content: Paste the Google verification string.
   - TTL: `Auto` or `300 seconds`.
4. Return to Google Search Console and click **Verify**. DNS propagation typically completes within 5–15 minutes.

---

## 4. Submitting the XML Sitemap

Once the production domain is live and `PUBLIC_INDEXING_ENABLED=true`:
1. In the GSC left navigation menu, click **Sitemaps** (under *Indexing*).
2. In the "Add a new sitemap" input box, enter:
   ```text
   sitemap.xml
   ```
3. Click **Submit**.
4. Verification:
   - Status should change to green **"Success"**.
   - Discovered pages count will report **4** (`/`, `/courses/`, `/services/`, and root assets).

---

## 5. URL Inspection & Initial Crawl Request

To accelerate Google's indexing of your new website:
1. Copy the homepage URL: `https://infotechcomputers.in/`.
2. Paste it into the top **URL Inspection** search bar in GSC.
3. Click **Test Live URL** to confirm that Googlebot can fetch the page without errors.
4. Click **Request Indexing**.
5. Repeat this inspection for:
   - `https://infotechcomputers.in/courses/`
   - `https://infotechcomputers.in/services/`

---

## 6. Ongoing Monitoring & Health Maintenance

Check the GSC dashboard monthly for:
1. **Page Indexing Report**:
   * Confirm that valid pages are marked as "Indexed".
   * Confirm that `/404` is correctly recognized as Not Found or excluded via `noindex`.
2. **Core Web Vitals & Page Experience**:
   * Since the website is statically built with zero heavy client JavaScript and self-hosted fonts, LCP (Largest Contentful Paint) and CLS (Cumulative Layout Shift) should rank in the green **"Good"** bracket (< 1.2s).
3. **Search Performance (Queries & Impressions)**:
   * Track which search terms drive clicks (`infotech computers nidadavolu`, `tally coaching nidadavolu`, etc.).
4. **Mobile Usability**:
   * Ensure 100% of pages pass Google's mobile responsiveness tests without viewport or text sizing issues.
