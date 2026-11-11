# Infotech Computers — Premium Design System Specification

## 1. Design Philosophy & Brand Personality
The visual identity of **Infotech Computers** is designed to evoke the credibility and technological rigor of a modern software studio and premier educational technology institution.

The core visual principles are:
- **Trust & Authority**: Rooted in 16+ years of educational standing in Nidadavolu.
- **Modernity & Precision**: Crisp typography, structured white space, and subtle geometric elevation.
- **Clarity & Restraint**: Strictly avoiding generic computer institute clip-art, neon oversaturation, heavy glassmorphism, or AI-generated clutter.

---

## 2. Color Palette & Distribution Rule

### 2.1 Color Tokens

| Token Name | Hex Code | Role | Purpose / Application |
| :--- | :--- | :--- | :--- |
| **Primary Navy Blue** | `#183B63` | Brand Anchor | Headings, primary CTA buttons, logo badge, active brand marks. |
| **Secondary Blue** | `#3478D4` | Accent & Interaction | Interactive hover states, secondary action buttons, focused borders, links. |
| **Light Blue** | `#EAF3FF` | Tint / Highlight | Subtle badge backgrounds, selection highlights, card category pills. |
| **Main Background** | `#FFFFFF` | Canvas (Primary) | Main page surface, primary card body backgrounds. |
| **Alt Background** | `#F3F7FC` | Canvas (Secondary) | Alternating section backgrounds, drawer headers, footer surface. |
| **Primary Text** | `#253449` | High Contrast Text | Body copy, navigation labels, list items, card titles. |
| **Secondary Text** | `#64748B` | Subdued Text | Descriptions, subtitles, metadata, timestamps, copyright. |
| **Borders** | `#E2EAF3` | Hairline Dividers | Clean 1px structural dividers, card outlines, table borders. |
| **Success Accent** | `#299D72` | Trust & Action | WhatsApp buttons, "Admissions Open" status dots, verified indicators. |

### 2.2 The 75 / 20 / 5 Distribution Rule
To maintain a high-end corporate aesthetic:
- **75% – 80%**: White (`#FFFFFF`) and light neutral (`#F3F7FC`) backgrounds.
- **15% – 20%**: Deep Navy Blue (`#183B63`) headings and Secondary Blue (`#3478D4`) interactive accents.
- **5% or less**: Success Green (`#299D72`) and subtle status tints for micro-details.

> **Strict Rule**: Avoid full-bleed dark blue sections across the entire page. Contrast is achieved through high-contrast typography against pristine light canvases.

---

## 3. Typography System

### 3.1 Font Stacks
- **Headings**: `Manrope Variable`, `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
  - High structural clarity, geometric punch, and elegant letterforms.
- **Interface & Body**: `Inter Variable`, `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
  - World-class legibility on all display sizes, excellent tabular figures, and balanced neutral metrics.

### 3.2 Fluid Scale (`clamp()`)

| Level | Token / Variable | Fluid Size Range | Line Height | Weight | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | `--font-size-display` | `clamp(2.5rem, 5vw + 1rem, 4rem)` (40px–64px) | `1.15` | `800` | `-0.025em` |
| **H1** | `--font-size-h1` | `clamp(2.125rem, 3.5vw + 0.8rem, 3.25rem)` (34px–52px) | `1.18` | `800` | `-0.02em` |
| **H2** | `--font-size-h2` | `clamp(1.65rem, 2.2vw + 0.6rem, 2.25rem)` (26.4px–36px) | `1.25` | `700` | `-0.015em` |
| **H3** | `--font-size-h3` | `clamp(1.25rem, 1.2vw + 0.6rem, 1.625rem)` (20px–26px) | `1.3` | `700` | `-0.01em` |
| **H4** | `--font-size-h4` | `clamp(1.1rem, 0.8vw + 0.6rem, 1.25rem)` (17.6px–20px) | `1.4` | `600` | `0` |
| **Body Large** | `--font-size-body-lg` | `clamp(1.0625rem, 0.4vw + 0.95rem, 1.1875rem)` (17px–19px) | `1.65` | `400 / 500` | `0` |
| **Body** | `--font-size-body` | `1rem` (16px) | `1.6` | `400 / 500` | `0` |
| **Body Small** | `--font-size-body-sm` | `0.875rem` (14px) | `1.5` | `400 / 500` | `0` |
| **Caption** | `--font-size-caption`| `0.75rem` (12px) | `1.4` | `500 / 600` | `+0.02em` |

---

## 4. Responsive Viewport Matrix

The responsive architecture is verified mobile-first across all target screen classes:
- **Compact Mobile**: `320px`, `360px`, `375px`, `390px`, `430px`
- **Small Tablet**: `600px`, `768px`, `820px`
- **Laptop / Tablet Desktop**: `1024px`, `1280px`, `1366px`
- **Desktop**: `1440px`, `1600px`, `1920px`
- **Ultra-Wide**: `2560px`, `3840px` (constrained with `--container-max: 1280px` to prevent line-length degradation)

### Container Guardrails
- **Padding**: Fluid `clamp(1rem, 3.5vw, 2rem)` ensures content never touches viewport edges on mobile while giving generous air on desktop.
- **Overflow Prevention**: `overflow-x: hidden` on body and strict `min-w-0` on flex items prevent horizontal scrolling.

---

## 5. UI Component Specifications

### 5.1 Button Component (`src/components/ui/Button.astro`)
- **`primary`**: `#183B63` fill, white text, subtle shadow, darkens to `#122d4c` on hover.
- **`secondary`**: `#3478D4` fill, white text, `#2761b0` hover.
- **`outline`**: White fill, `1px` border `#183B63`/25, hover `#EAF3FF`/40.
- **`ghost`**: Transparent fill, navy text, hover `#EAF3FF`/60.
- **`success`**: `#299D72` fill, white text (used for direct WhatsApp actions).
- **Interactive Feedback**: `active:scale-[0.98]` micro-compression, `focus-visible:outline-2` accessible focus ring.

### 5.2 Badge Component (`src/components/ui/Badge.astro`)
- Lightweight pill shape (`rounded-full`) with optional status pulse dot.
- Available variants: `blue`, `success`, `navy`, `neutral`, `outline`.

### 5.3 SectionHeading Component (`src/components/ui/SectionHeading.astro`)
- Structured group: Eyebrow badge + H2 title in `Manrope` + relaxed subtitle in `Inter`.
- Alignment options: `center` (default) or `left`.

### 5.4 Card Foundation (`.card-base`)
- Clean white background, `1px solid #E2EAF3` border, `10px` radius, subtle `box-shadow: 0 1px 2px 0 rgba(24, 59, 99, 0.04)`.
- Hover state: `transform: translateY(-2px)`, border turns `#C8D9EC`, shadow elevates to `--shadow-md`.

---

## 6. Motion & Animation Standards

1. **Hardware-Accelerated Only**: Transitions strictly mutate `transform` and `opacity`. No layout recalculating properties (`top`, `margin`, `width`, `height`).
2. **Timing Curves**:
   - Standard transitions: `cubic-bezier(0.4, 0, 0.2, 1)` (220ms).
   - Enter / Reveal transitions: `cubic-bezier(0.16, 1, 0.3, 1)` (500ms).
3. **Accessibility (Reduced Motion)**:
   - When `@media (prefers-reduced-motion: reduce)` is detected, all transitions, keyframe animations, and scroll reveals instantly resolve to `duration: 0.01ms` with full visibility.
