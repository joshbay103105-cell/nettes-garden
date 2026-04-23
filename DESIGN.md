# Design Brief

## Direction
Green Harvest Farm — A warm, editorial agriculture showcase celebrating sustainable farming through inviting visual storytelling and natural earthy tones.

## Tone
Warm, organic, and editorial. The design reflects trust in natural practices with refined typography and spacious composition rather than industrial severity.

## Differentiation
Forest green primary accent on cream background with warm terracotta secondary creates an unexpected, sophisticated palette that elevates farm branding beyond typical agricultural green clichés.

## Color Palette

| Token      | OKLCH          | Role                           |
| ---------- | -------------- | ------------------------------ |
| background | 0.96 0.015 75  | Warm cream, main container     |
| foreground | 0.2 0.03 50    | Deep warm brown, primary text  |
| card       | 0.98 0.01 75   | Light card surface             |
| primary    | 0.48 0.14 155  | Forest green, CTAs & accents   |
| secondary  | 0.92 0.02 75   | Subtle warm divider            |
| accent     | 0.52 0.12 100  | Warm gold/ochre, highlights    |
| muted      | 0.92 0.02 75   | Light neutral dividers         |

## Typography

- Display: Fraunces — warm serif for headings, hero text, section titles. Creates editorial premium feel.
- Body: DM Sans — modern sans-serif for content, labels, descriptions. Ensures readability on mobile and desktop.
- Scale: hero `text-6xl md:text-8xl font-bold tracking-tight`, h2 `text-4xl md:text-5xl font-bold`, labels `text-xs font-semibold uppercase tracking-widest`, body `text-base md:text-lg`

## Elevation & Depth

Soft, organic shadows with warm undertones. No harsh shadow contrast — use `shadow-subtle` (0 2px 8px) for baseline cards, `shadow-elevated` (0 8px 24px) for hover states. Prefer background color variation over pure shadow intensity.

## Structural Zones

| Zone    | Background        | Border              | Notes                                   |
| ------- | ----------------- | ------------------- | --------------------------------------- |
| Header  | card (light cream)| border (tan line)   | Sticky with subtle shadow on scroll     |
| Hero    | background cream | —                   | Full-width hero with farm image overlay |
| Sections| Alternate bg/card | border subtle       | Even sections on bg, odd on card light  |
| Footer  | background dark  | border top          | Warm footer with contact & socials      |

## Spacing & Rhythm

Large, breathing gaps between sections (6rem–8rem vertical). Content grouped in card zones with consistent 2rem padding. Micro-spacing: 0.5rem between label and input, 1rem between adjacent elements within cards. Mobile-first: single column with consistent 1rem side padding.

## Component Patterns

- Buttons: rounded-lg, primary green with white text, hover-lift with shadow-elevated. Secondary buttons outlined with forest-green border.
- Cards: rounded-lg, bg-card with subtle shadow, hover state lifts and deepens shadow. Product/achievement cards feature farm imagery.
- Badges: rounded-full, small text-xs, muted background with foreground text. Success badges use accent ochre.

## Motion

- Entrance: Staggered fade-in + slide-up (0.6s ease-out) on section visibility. Hero image fades in on load.
- Hover: Buttons lift 4px with transition-smooth on all interactive elements. Cards scale slightly on hover.
- Decorative: Subtle float animation (3s loop) on achievement badges. Smooth scroll behavior site-wide.

## Constraints

- No dark mode — light cream theme optimizes for warm agricultural imagery and readability.
- Maximum 2 font families — Fraunces + DM Sans only. No system fallbacks.
- High-quality imagery is essential — farm photos, crop close-ups, team portraits are primary design drivers.
- Minimum spacing around content — spacious layout with breathing room, not compact density.
- Mobile-first responsive — all sections adapt gracefully from mobile (full width) to desktop (contained grid).

## Signature Detail

Warm cream background with forest green accents creates a sophisticated, editorial agriculture brand that feels premium and trustworthy while maintaining approachable, natural warmth.
