# Artiim — Complete Website Content Reference

> **Single source of truth** for every piece of content, section, page, and configuration across the Artiim website.

---

## Table of Contents

1. [Brand Identity](#1-brand-identity)
2. [Project Structure](#2-project-structure)
3. [Pages Overview](#3-pages-overview)
4. [Homepage — Section-by-Section Content](#4-homepage--section-by-section-content)
5. [Booking Page](#5-booking-page)
6. [Templates Page](#6-templates-page)
7. [Design System](#7-design-system)
8. [SEO & Meta Tags](#8-seo--meta-tags)
9. [Third-Party Integrations](#9-third-party-integrations)
10. [Animations & Interactions](#10-animations--interactions)

---

## 1. Brand Identity

| Property        | Value                                    |
|-----------------|------------------------------------------|
| **Brand Name**  | Artiim                                   |
| **Tagline**     | AI Automation Agency                     |
| **Email**       | hello@artiim.com                         |
| **Logo Style**  | Text-based — `Artiim.` (Inter, 900 weight, tight tracking) |
| **Copyright**   | © 2026 Artiim. All rights reserved.     |
| **Social Links** | None (removed) |

---

## 2. Project Structure

```
Website Design/
├── index.html              ← Main homepage entry point
├── booking.html            ← Booking / consultation page
├── vite.config.js          ← Vite config (port 3000, multi-page)
├── package.json            ← Vite 7.3.1 dev dependency
├── public/
│   ├── favicon.ico         ← Standard favicon
│   ├── apple-touch-icon.png← Apple device icon
│   ├── favicon-16x16.png   ← 16px favicon
│   ├── favicon-32x32.png   ← 32px favicon
│   ├── site.webmanifest    ← Web app manifest
│   ├── android-chrome...   ← Android icons
│   └── images/
│       └── services/       ← Service images directory
├── src/
│   ├── main.js             ← App entry: loads all components, scroll reveal
│   ├── index.css           ← Full design system (926 lines)
│   └── components/
│       ├── Header.js       ← Fixed navigation bar
│       ├── Hero.js         ← Hero section
│       ├── TrustedBy.js    ← Scrolling logo marquee (not currently used in main.js)
│       ├── Services.js     ← "Our Expertise" bento grid (8 cards)
│       ├── Process.js      ← "How It Works" 4-step process
│       ├── Benefits.js     ← "Why Automation Matters" (5 cards)
│       ├── FAQ.js          ← FAQ accordion (8 questions)
│       └── Footer.js       ← Footer with CTA and contact
└── dist/                   ← Production build output
```

**Tech Stack:** Vanilla JS + Vite (no framework). Components are JS functions returning template literal HTML.

---

## 3. Pages Overview

| Page           | URL Path          | Purpose                                      |
|----------------|-------------------|----------------------------------------------|
| **Homepage**   | `/`               | Main landing page with all sections          |
| **Booking**    | `/booking.html`   | Cal.com embedded consultation scheduler      |

---

## 4. Homepage — Section-by-Section Content

### 4.1 Header / Navigation

- **Logo:** `Artiim.` (left-aligned)
- **Nav Links (pill-shaped container, right-aligned):**
  - Home → `#`
  - Services → `#services`
  - Benefits → `#benefits`
  - How it Works → `#process`
  - **Book a Call** button → `/booking.html` (white bg, black text)
- **Behavior:** Fixed top nav, transparent background, pointer-events-none except interactive elements

---

### 4.2 Hero Section

- **Heading:**
  > Real systems. Real results.
  > Not promises that look good on paper.

  (Second line uses `--color-text-main` tint)

- **Subtext:**
  > We build custom AI automation systems for growing businesses ready to stop doing everything manually. No big agency overhead. No templates. No generic tools. Every system is built specifically for your business and delivered in 7 to 10 days. We build fast. We build clean. And we stay around long after delivery.

- **CTA Button:**
  - **Book a Free Consultation** (primary, white bg, with arrow icon) → `/booking.html`

- **Decorative:** Background grid, two concentric dashed circles (800px & 1200px)

---

### 4.3 Services / "Our Expertise" Section

- **Badge:** `Our Expertise` (pill-shaped label)
- **Heading:**
  > If your team does it manually every day, we can automate it.
- **Subtext:**
  > We build custom automations that handle repetitive tasks, connect your software, and free up your team to focus on high-impact work.

**Bento Grid Layout (6-column grid, 8 cards):**

| # | Card Title              | Description                                                                                                                                       | Visual Element         | Background Image (Unsplash)                     |
|---|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|--------------------------------------------------|
| 1 | CRM Ecosystems          | Centralize your customer data with intelligent CRM setups that track every interaction, deal stage, and touchpoint automatically — from first click to closed deal. | Bar chart              | Team collaboration photo                         |
| 2 | Project Management      | Automate task assignments, deadline reminders, and progress tracking to keep your team aligned without manual check-ins or status meetings.        | Task list (4 items with status) | Kanban board / wireframe photo            |
| 3 | AI Lead Qualification   | Analyze and score prospects in real-time. Automatically identify high-intent leads and route them to your team based on custom qualifying criteria. | Lead scoring list (98 vs 24) | Analytics dashboard photo                  |
| 4 | Smart Email Systems     | Automate outreach, follow-ups, and newsletter sequences with hyper-personalized triggers that convert leads on autopilot.                          | Email inbox list       | Email/laptop photo                               |
| 5 | Interview Pipeline      | Screen candidates, schedule interviews, and manage feedback loops without lifting a finger — all fully automated.                                  | Pipeline stages (Applied → Screened → Interview → Hired) | Woman at computer photo |
| 6 | Custom Dashboard        | Centralize key metrics and analytics into a real-time, custom dashboard for a complete birds-eye view of your business.                            | Dashboard blocks with stats | Data visualization photo                    |
| 7 | Customer AI Support     | Deploy intelligent AI chatbots to provide instant 24/7 support, quickly resolve common issues, and answer user queries automatically.              | Chat bubbles           | Customer support photo                           |
| 8 | Appointment & Followup  | Seamlessly integrate scheduling and let AI handle booking appointments, sending reminders, and automatically following up.                         | Timeline events (10:00 AM, 1:30 PM) | Calendar photo                        |

**Grid Layout:**
- Row 1: Cards 1–2 (each 3/6 columns)
- Row 2: Cards 3–5 (each 2/6 columns)
- Row 3: Cards 6–8 (each 2/6 columns)

**Hover Effect:** Background image transitions from grayscale + dim → full color + vibrant. Card lifts up, icon turns white bg with black stroke.

---

### 4.4 Process / "How It Works" Section

- **Heading:**
  > How we transform your business.
- **Subtext:**
  > Four steps. No fluff. From first call to going live in under two weeks.

**4 Steps (vertical timeline with dot markers):**

| Step | Title                 | Description                                                                                                                    |
|------|-----------------------|--------------------------------------------------------------------------------------------------------------------------------|
| 01   | Discovery & Audit     | We analyze your current workflows to identify high-impact automation opportunities.                                             |
| 02   | Custom Architecture   | Our team designs a bespoke AI framework tailored to your specific business needs.                                              |
| 03   | Seamless Integration  | We deploy the solution without disrupting your daily operations, ensuring a smooth transition.                                  |
| 04   | Handover & Support    | We deliver your complete system with full documentation and training, ensuring your team can manage it independently from day one. |

---

### 4.5 Benefits / "Why Automation Matters" Section

- **Heading:**
  > What changes when you stop doing it manually
- **Subtext:**
  > The same team. The same hours. Completely different output.

**5 Benefit Cards (horizontal grid):**

| # | Title              | Description                                                                       | Icon         |
|---|--------------------|-----------------------------------------------------------------------------------|--------------|
| 1 | Reclaim Time       | Shift focus from mundane administrative tasks to high-value strategic growth.      | Clock        |
| 2 | Reduce Overhead    | Lower operational costs by automating roles that don't require human creativity.   | Wallet       |
| 3 | Effortless Scaling | Handle 10x the workload without needing to hire 10x the staff.                    | Bar chart    |
| 4 | Eliminate Errors   | Remove human mistakes from repetitive processes with precision-driven AI systems.  | Shield check |
| 5 | 24/7 Operations    | Your automated systems work around the clock — no breaks, no downtime.            | Clock circle |

**Hover Effect:** Card lifts up (`translateY(-4px)`), shadow deepens, icon background turns white.

---

### 4.6 FAQ Section

- **Badge:** `FAQ` (pill-shaped label)
- **Heading:**
  > Things people ask before booking a call

**8 Questions (accordion `<details>` elements):**

| # | Question | Answer |
|---|----------|--------|
| 1 | How long does it take to build? | Most systems are fully built, tested, and delivered within 7 to 10 working days. We start with a focused discovery session to map out exactly what you need, then architect, build, and rigorously test everything before handoff. Complex multi-system builds may take slightly longer, but you'll always get a clear timeline upfront. |
| 2 | Do I need any technical knowledge? | Not at all — that's the whole point. We handle everything from strategy and architecture to build, testing, and deployment. You simply tell us what processes you want automated, and we take it from there. Once delivered, we provide clear documentation and a walkthrough so your team feels confident from day one. |
| 3 | What tools do you use? | We work with industry-leading platforms like Make.com, OpenAI, Zapier, and n8n to build reliable automation workflows. We also integrate seamlessly with tools your business already uses — HubSpot, Salesforce, Gmail, Slack, Calendly, Shopify, Notion, and dozens more. Every stack is chosen specifically for your use case. |
| 4 | What happens after delivery? | We don't disappear after handoff. Every project includes a support window to make sure everything runs smoothly. Beyond that, we offer monthly support plans where we monitor your automations, fix issues proactively, and optimize your systems as your business evolves. Think of us as a long-term partner, not a one-time vendor. |
| 5 | How much does it cost? | Pricing depends on the complexity of the system, the number of integrations, and the level of AI sophistication required. That said, most clients see a return on investment within the first 30 days through time saved and efficiency gained. Book a free consultation and we'll provide a transparent, no-obligation quote tailored to your needs. |
| 6 | Do we own the automation systems after delivery? | Absolutely — 100% ownership is yours. Every system, workflow, and integration we build belongs entirely to your business once delivered. You get full access to all accounts, platforms, and documentation. We never lock you into proprietary tools or hold your systems hostage — everything stays with you, always. |
| 7 | Can you integrate with our existing software stack? | Yes, and that's one of our core strengths. We design every automation to work seamlessly with your existing tools — whether that's your CRM, project management platform, email, or accounting software. From HubSpot and Salesforce to Slack, Shopify, and QuickBooks, we connect your entire ecosystem into one intelligent workflow. |
| 8 | What does the process look like? | It starts with a free discovery call where we learn about your business and goals. We then audit your workflows, identify the highest-impact opportunities, and design a custom architecture. From there, we build, test, and deploy everything seamlessly — then hand it over with full documentation and ongoing support. |

---

### 4.7 CTA Section (inline in main.js)

- **Heading:**
  > Stop losing time to manual work.
- **Subtext:**
  > Book a free 20-minute call. We will map out exactly what your team should never have to do manually again.
- **Button:** `Book Your Free Meeting` → `/booking.html`

---

### 4.8 Footer

**Left Column:**
- **Heading:**
  > Ready to scale your business with AI?
- **Subtext:**
  > Your team is doing work that should not need a human. Let us fix that.
- **Button:** `Book a Consultation` (white bg, black text) → `/booking.html`

**Right Column (card):**
- **Title:** Contact
- **Email:** hello@artiim.com

**Bottom Bar:**
- © {current year} Artiim. All rights reserved.

---

## 5. Booking Page

| Property         | Value                                                                                   |
|------------------|-----------------------------------------------------------------------------------------|
| **Title**        | Book a Meeting — Artiim                                                                 |
| **Header Logo**  | Artiim. (links to `/`)                                                                  |
| **Back Link**    | ← Back to Home (links to `/`)                                                          |
| **Heading**      | Schedule a Free Consultation                                                            |
| **Subtext**      | Pick a time that works for you. 20 minutes — we map out exactly what we can automate for your business and give you a clear price. No obligation. |
| **Embed**        | Cal.com inline embed (dark theme, month view)                                           |
| **Cal Link**     | `artiim-5afvkk/20-minutes-consultation-call`                                            |
| **Trust Badges** | • No commitment required • 30-minute session • 100% Free                                |
| **Footer**       | © 2026 Artiim. All rights reserved.                                                     |


## 7. Design System

### Colors

| Token                    | Value       | Usage                          |
|--------------------------|-------------|--------------------------------|
| `--color-primary`        | `#ffffff`   | Primary / headings             |
| `--color-primary-hover`  | `#cccccc`   | Hover state                    |
| `--color-background`     | `#000000`   | Page background                |
| `--color-surface`        | `#111111`   | Card / section backgrounds     |
| `--color-surface-hover`  | `#222222`   | Hover surfaces                 |
| `--color-text-main`      | `#ffffff`   | Body text                      |
| `--color-text-muted`     | `#a3a3a3`   | Secondary text                 |
| `--color-border`         | `#333333`   | Borders                        |

### Typography

| Property        | Value                       |
|-----------------|-----------------------------|
| Font Family     | Inter (Google Fonts)        |
| Heading Weight  | 750                         |
| Body Weight     | 400                         |
| Hero Size       | 4.5rem (3rem on mobile)     |

### Key Component Styles

- **Buttons:** Rounded (`0.5rem`), `.btn-primary` = white bg/black text, `.btn-outline` = black bg/white text with border
- **Cards:** Dark (#111111), rounded-xl (`1.25rem`), subtle border (#222222), hover lifts + shadow
- **Nav Pill:** Full-round, dark glassy background, blur backdrop
- **Bento Grid:** 6-column CSS grid, responsive → 1 column on mobile
- **Process Timeline:** Vertical line with dot markers, staggered reveal

---

## 8. SEO & Meta Tags

### Homepage (`index.html`)
- **Title:** Artiim - AI Automation Agency
- **Description:** Artiim builds custom AI automation systems for growing businesses. We eliminate manual work, connect your tools, and deliver working systems in 7 to 10 days.
- **Keywords:** AI Automation, Business Process Automation, CRM Automation, lead qualification, AI Agency

### Booking Page (`booking.html`)
- **Title:** Book a Meeting — Artiim
- **Description:** Schedule a free consultation with Artiim to discuss your AI automation needs.


---

## 9. Third-Party Integrations

| Service          | Purpose                    | Configuration                                                          |
|------------------|----------------------------|------------------------------------------------------------------------|
| **Cal.com**      | Meeting scheduler          | Inline embed, dark theme, month view, brand color `#ffffff`            |
| **Google Fonts** | Typography                 | Inter (100–900 weight, italic)                                         |
| **Unsplash**     | Bento card background imgs | 8 images loaded via CSS `--bg-img` custom property (auto-format, 800w) |

---

## 10. Animations & Interactions

### Scroll Reveal System
- **Mechanism:** Intersection Observer (10% threshold)
- **Directions:** `reveal-left`, `reveal-right`, `reveal-bottom`, `reveal-top`, `reveal-scale`
- **Delays:** 5 stagger levels (100ms–500ms)
- **Behavior:** Bi-directional — elements re-animate when scrolling back up (class removed on exit)
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` — smooth deceleration

### Background Animations
- **Ambient Background:** Slow gradient shift (`15s ease infinite`)
- **Grid Layer:** Moving dot-grid (`50s linear infinite`)
- **Glow Layer:** Floating radial glows (`20s ease-in-out infinite alternate`)

### Hover Effects
- **Bento Cards:** Lift + shadow + border brightens + background image goes from grayscale→color
- **Benefit Cards:** Lift + shadow + icon inverts to white bg
- **Nav Links:** Background highlight + color change
- **Buttons:** Scale up / translate up

### Other
- **Marquee (TrustedBy):** Infinite horizontal scroll (40s linear) — *component exists but not currently loaded in main.js*

---

## TrustedBy Marquee Logos (not currently active)

Placeholder brand names scrolling: **Nexus, Galactic, Orbit, Vertex, Pulse, Echo, Flux, Quantum**

---

*Last updated: 9 May 2026*
