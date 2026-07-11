# IAMS Design System

**IAMS — Inventory Audit Management System.** An on-premises system of record for physical assets and audits, aimed at institutional deployments (campuses, facilities, labs). Tagline: *"Every asset accounted for. Every audit provable."* The product tracks assets (IT equipment, vehicles, lab gear, furniture), their assignment, location, warranty and lifecycle, plus users, audits, reports, and retention policy — "built so nothing has to be taken on trust."

**Sources**
- Codebase: `Production-ready React UI setup (1)/iams-next` (attached local folder) — Next.js 14 + TypeScript + Tailwind + shadcn-style components + Framer Motion. This is the ground truth for every value in this system.
- GitHub: [betheonenicks-commits/UX_IAMS](https://github.com/betheonenicks-commits/UX_IAMS) — README describes the same product ("Premium navy/gold design system, dark mode, accessible, typed mock data layer"); no code beyond the README at time of writing. Explore it for future updates.
- Icons: [lucide-icons/lucide](https://github.com/lucide-icons/lucide) — the kit's icon library; the 17 glyphs the product uses are copied into `assets/icons/`.

One product/surface is represented: the **IAMS web app** (login + authenticated shell with 16 modules; R1 modules are built, R2 modules render locked placeholders).

## CONTENT FUNDAMENTALS

- **Tone: institutional, factual, calm.** Copy reads like an audit record, not marketing. "Every asset accounted for. Every audit provable." No exclamation points, no emoji, ever.
- **Sentence case everywhere** — page titles ("Executive dashboard", "Asset list", "Label print queue"), buttons ("Sign in with SSO", "Print selected labels"), nav items. Only table headers are uppercase (styled, not written).
- **Traceability is part of the voice.** Every screen cites its spec: "Screen SCR-AST-01 · FR-AST-01". IDs, codes and counts render in mono: `AST-00482`, `SCR-DSH-01`, `R2`.
- **Verbs lead actions**, prefixed with "+" for creation: "+ Register asset", "+ Invite user".
- **Statuses are short domain nouns**: "In use", "In storage", "Under repair", "Missing", "Active", "Offboarding".
- **Second person is rare**; the system describes state ("Signed in as elena.m@example.org", "AST-00701 flagged Missing", "Needs review"). Honest about scope: "This screen is defined in the Information Architecture but out of Release R1 (MVP) scope."
- Em-dashes and middots (·) as separators; dates ISO (`2025-11-02`); costs plain ("1,180.00").

## VISUAL FOUNDATIONS

- **Palette**: deep navy **ink** (`hsl(222 25% 10%)`) chrome + muted **gold** (`hsl(40 51% 37%)`) accent on warm **paper** (`hsl(48 26% 96%)`) with pure-white cards. Semantic: **verify** green (success), **amber** (warning), **rust** (error) — each with a `-dim` wash and (gold/verify) a `-deep` text shade. No gradients anywhere; the only decorative motif is thin concentric circles (login hero) echoing the Seal.
- **Type**: system sans (`-apple-system…`) + system mono. No webfonts shipped. Scale is precise and small: 21px/600 page titles (tight tracking), 14px controls, 13.5px nav, 13px tables, 11.5px uppercase table headers, 26px mono metrics. Mono = data (IDs, codes, emails, metrics, nav group labels).
- **Spacing**: content pad 32px×28px; card pad 20px (metrics 16×18); grids gap 12–18px; generous whitespace, low density.
- **Backgrounds**: flat colors only. No imagery, textures, or illustrations anywhere in the product.
- **Borders**: 1px warm hairline (`hsl(44 19% 89%)`) universally; ink-border on dark chrome.
- **Radii**: 12px cards · 8px fields/buttons · 7px nav items · full pills/avatars/dots.
- **Shadows**: cards get a soft two-layer shadow (`0 1px 2px` + `0 4px 14px`, 5% ink); primary buttons shadow-sm; nothing else. No inner shadows.
- **Hover**: color/border shifts only (150ms) — gold darkens to gold-deep, secondary borders darken, ghosts gain paper bg, rows gain paper bg, report tiles lift −1px + gold border. **Press**: scale(0.98). **Focus**: gold ring (2px offset on buttons; gold border + gold-dim halo on inputs).
- **Motion**: quiet. Page entrance fade + 4px rise, 220ms ease-out; login form 300ms. Reduced-motion safe. No loops, bounces, or parallax.
- **Transparency/blur**: none. Opacity used only for icon dimming (0.85) and disabled states (0.5).
- **Dark mode**: class-strategy variable swap (`.dark`) — same hues, inverted lightness; primary button text flips to ink. Selection highlight: verify-dim/verify-deep.
- **Cards**: white surface, hairline border, 12px radius, soft shadow, 20px pad. Tables sit in `padding: 0` cards.
- **Layout**: fixed 232px ink sidebar (64px compact on tablet) + topbar + scrollable main. One primary (gold) action per view.

## ICONOGRAPHY

- **System: Lucide** (stroke icons), rendered at 16px (nav, tiles), 14px (search), 17px (bell), 32px (lock panels), stroke-width 1.6–1.8, always `currentColor`.
- The 17 glyphs the product uses are copied verbatim into `assets/icons/*.svg` and baked into the `Icon` component (data-URI masks). **Substitution flag**: mask rendering fixes stroke-width at Lucide's default 2 vs the kit's 1.6–1.8 — visually near-identical at these sizes.
- No icon font, no PNG icons, no emoji, no unicode-as-icon. Icons never appear without purpose (nav, action affordance, report category).
- **Brand mark**: the `Seal` — concentric navy (#3A4566) + gold (#B08D3F) rings with a gold check; fixed colors in both themes. It is the only logo; the wordmark is plain type "IAMS" 15px/600. No other logo assets exist in the sources.

## Index

- `styles.css` — entry point; imports everything below.
- `tokens/` — `colors.css` (light + `.dark`), `typography.css`, `effects.css` (radii/shadows/motion), `base.css`.
- `components/components.css` — component classes (hover/focus/press states).
- `components/ui/` — **Button**, **Badge**, **Card** + **CardTitle**, **Input**, **Select**, **Label**, **Table** + **Th**/**Td**/**Tr**.
- `components/app/` — **Seal**, **Icon** (+ `ICON_NAMES`), **Sidebar** (+ `NAVIGATION`), **Topbar**, **PageHeader**, **MetricCard**, **StatusPill**, **ActivityFeed**, **AssetTable**, **ReportTile**, **LockPanel**.
- `ui_kits/iams/` — interactive full-app recreation: all 12 R1 screens (login, dashboard, assets + record + register + labels, users, reports, hierarchy, activity log, retention, notifications), R2 locks, dark mode.
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand).
- `assets/icons/` — the 18 Lucide SVGs.
- Component bundle namespace: `window.IAMSDesignSystem_1406c8`.

**Intentional additions** (not 1:1 files in the source): `Icon` (wraps the kit's lucide-react usage for a no-build environment); `ReportTile` (extracted from the inline tile markup in `reports/page.tsx`). `AnimatedPage`/`ThemeToggle` from the source are folded into the kit shell rather than shipped as components (Framer Motion dependency / trivial wrapper).
