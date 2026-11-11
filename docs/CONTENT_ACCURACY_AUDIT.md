# Content Accuracy & Institutional Truth Audit
**Project**: Infotech Computers Website  
**Phase**: Phase 03 — Technical SEO, Content Audit & Production Hardening  
**Institute**: Infotech Computers, Nidadavolu, Andhra Pradesh, India  
**Date of Audit**: November 2026  
**Auditor**: Senior Technical Quality Assurance & SEO Engineering Lead  

---

## 1. Executive Summary & Purpose

The purpose of this content accuracy audit is to establish an uncompromising standard of institutional integrity for the official Infotech Computers website. Prior to Phase 3, standard placeholder text or preliminary drafts risked introducing unverified assertions, exaggerated placement promises, fabricated geographic details, or improper role designations.

This document records all verified source-of-truth facts supplied by the institute representative, compares them against audited draft components, and documents the specific code and copy corrections implemented across the website repository.

---

## 2. Institutional Source of Truth

The following parameters represent the authoritative, verified facts for Infotech Computers:

| Parameter | Verified Source of Truth | Verification Status |
| :--- | :--- | :--- |
| **Institute Name** | Infotech Computers | Verified |
| **Location** | Nidadavolu, Andhra Pradesh, India | Verified |
| **Year Established** | 2010 | Verified |
| **Operating Experience** | 16+ Years | Verified |
| **Institute Representative** | N. Srinivas Sir | Verified |
| **Primary Contact Phone** | `+91 9154481735` | Verified |
| **Official WhatsApp** | `+91 9989848608` | Verified |
| **Institute Email** | `infotechcomputers4@gmail.com` | Verified |
| **Operating Timings** | 8:30 AM – 8:00 PM (Monday to Saturday) | Verified |
| **Weekly Holiday** | Sunday | Verified |
| **Official Instagram** | `https://www.instagram.com/infotech_computers_/` | Verified |
| **Google Maps Listing** | `https://maps.app.goo.gl/KLkPWt6gBNEDTrwu5` | Verified |
| **Digital Services Partner** | USolve (`https://usolve.in`) | Verified |
| **USolve Project Email** | `usolveofficial@gmail.com` | Verified |

---

## 3. Detailed Audit & Remediations

### 3.1 Course Offerings & Classification

* **Pre-Audit Issue**: Generic computer institute templates often display confusing course counts, blend upcoming offerings with current admissions, or claim dozens of unverified specializations.
* **Source of Truth**:
  * Exactly **10 Active Courses**:
    1. MS Office (Word, Excel, PowerPoint, Access)
    2. Tally (TallyPrime, GST, Invoicing, Vouchers)
    3. Photoshop (Photo Editing, Retouching, Creative Design)
    4. PageMaker (DTP, Document Layout, Print Production)
    5. CorelDRAW (Vector Graphics, Vector Art, Layouts)
    6. C Programming (Procedural Logic, Data Types, Control Structures)
    7. C++ (OOPs, Classes, Inheritance, Polymorphism)
    8. Java (Core Java, OOP, Exception Handling, Collections)
    9. Oracle (SQL, RDBMS, Tables, Queries, Data Normalization)
    10. Python (Python Basics, Data Structures, Automation)
  * Exactly **2 Upcoming Courses**:
    1. AI Fundamentals (Modern AI Concepts, Prompt Engineering, Practical AI Tools)
    2. Web Technologies (Modern Web Foundations, HTML5, CSS3, JavaScript)
* **Corrections Implemented**:
  1. Updated `src/components/home/WhyChooseUs.astro`: Changed ambiguous "12 Available Programs" badge to explicit `"10 Active Courses + 2 Upcoming"`.
  2. Updated `src/components/courses/CourseInteractiveGrid.astro`: Filter counter reads `"Showing 10 active courses and 2 upcoming programs"`. Category filters isolate active vs. upcoming tracks without misleading enroll labels.
  3. Updated `src/components/courses/CourseCard.astro`: Badges dynamically render `"Course Offered"` for active courses and `"Upcoming Track"` for future curricula. Removed any unverified "Batch starts tomorrow" or "Admissions Open" urgency gimmicks.

---

### 3.2 Institute Representative Designation (N. Srinivas Sir)

* **Pre-Audit Issue**: Draft headers previously contained labels such as "Founder & Director" or "Lead & Founder". The institute owner specifically instructed that N. Srinivas Sir should be identified as the institute representative.
* **Source of Truth**: N. Srinivas Sir is the official **Institute Representative**.
* **Corrections Implemented**:
  1. Updated `src/data/institute.ts`: Verified representative object name: `"N. Srinivas Sir"`, role: `"Institute Representative"`. Added factual note: `"Guiding computer education and practical skills training at Infotech Computers, Nidadavolu."`
  2. Updated `src/components/home/AboutSection.astro`:
     - Badge corrected from `"Institute Leadership"` to `"Institute Representative"`.
     - Monogram badge adjusted from `"Lead"` to `"Rep"`.
     - Quote card displays authentic advisory text focusing on foundational computer literacy and career-ready practical training.
  3. Updated `src/components/layout/Footer.astro`: Representative credit corrected to `"Institute Representative"`.
  4. Visual Integrity: Strictly prohibited generating synthetic or AI human portraits for N. Srinivas Sir. The UI utilizes an elegant, dignified typographic monogram with educational insignia.

---

### 3.3 Digital Services Division & Collaboration with USolve

* **Pre-Audit Issue**: Potential confusion between Infotech's computer education operations and commercial software engineering projects, or misrouting software leads to student helpline numbers.
* **Source of Truth**: Digital services are delivered in technical collaboration with **USolve** (`https://usolve.in`). Commercial inquiries must route to `usolveofficial@gmail.com`.
* **Services Scope (Strictly 9 Approved Solutions)**:
  1. Website Design & Development
  2. Customized Software Development
  3. E-commerce Website Development
  4. Billing & Business Management Systems
  5. Tracking Systems & Inventory Solutions
  6. Web & Mobile Applications
  7. AI-Powered Systems & Voice Agents
  8. Digital Marketing & SEO Solutions
  9. Graphic Design & Brand Identity
* **Corrections Implemented**:
  1. Updated `src/data/institute.ts`: Pruned extraneous standalone services (e.g. "Maintenance & Technical Support") to align exactly with the 9 approved service categories.
  2. Updated `src/components/shared/ContactCTA.astro`: Added `isProjectEnquiry` support. On `/services/`, the CTA buttons route exclusively to:
     - Primary: `mailto:usolveofficial@gmail.com?subject=...`
     - Secondary: `https://usolve.in` (USolve Official Website)
  3. Formatted standardized pre-filled email template via `src/utils/whatsapp.ts`:
     ```text
     To: usolveofficial@gmail.com
     Subject: Digital Project Enquiry — Infotech × USolve
     Body:
     Hello USolve Team,

     I am enquiring about digital services through the Infotech Computers website.

     Project Details:
     - Service Needed: [Website / Software / Mobile App / AI Solution]
     - Organisation / Business Name: 
     - Contact Person: 
     - Phone / WhatsApp: 
     - Project Overview & Requirements: 

     Looking forward to discussing this project.
     ```

---

### 3.4 Contact Information & Channel Separation

| Contact Channel | Student Education Inquiries | USolve Software Inquiries |
| :--- | :--- | :--- |
| **Primary Route** | Direct Phone / WhatsApp | Email / USolve Website |
| **Phone** | `+91 9154481735` | *Not routed to student phone* |
| **WhatsApp** | `+91 9989848608` | *Not routed to student WhatsApp* |
| **Email** | `infotechcomputers4@gmail.com` | `usolveofficial@gmail.com` |
| **Web Destination** | `/courses/` | `https://usolve.in` |

---

### 3.5 Elimination of Unverified Claims

The following claims were audited and permanently eliminated across all layouts:

1. **No Fake Accreditations or Logos**: No unverified ISO logos, government seals, or university affiliations were inserted.
2. **No Invented Street Address**: Google Maps link (`https://maps.app.goo.gl/KLkPWt6gBNEDTrwu5`) and city/state (`Nidadavolu, Andhra Pradesh, India`) are used factually without fabricating a door number, landmark, or PIN code.
3. **No Unsubstantiated Guarantees**: Avoided claims such as "100% placement guaranteed" or "job offer within 30 days." Emphasized real, practical learning, individualized computer practice, and career skill fundamentals.
4. **No Urgency Dark Patterns**: Removed countdown timers, fake seat limits ("only 2 seats remaining"), and artificial discount pricing.

---

## 4. Verification Sign-Off

* **Source Code State**: Audited and confirmed across all Astro components, TypeScript data models, and layouts.
* **Astro Diagnostic Status**: `0 errors, 0 warnings, 0 hints` across 40 files.
* **Browser Test Status**: Validated on desktop and mobile viewports via automated visual inspection.
