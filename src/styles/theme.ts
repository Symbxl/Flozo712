// Laser Weld Inc., design tokens.
// Dark, industrial: a deep charcoal shop-floor canvas, cool off-white ink,
// and the same single bright signal-red accent (#EB4036, matched to
// laserweldinc.com). Surfaces step *lighter* as they rise (bg → elevated
// bands → cards), while the contact card and footer sink to near-black to
// anchor the layout and carry white text.

export const theme = {
  colors: {
    // Backgrounds, deep charcoal base stepping *up* to lighter cards/bands.
    bg: '#0E0F12', // base near-black charcoal
    bgElevated: '#16181D', // raised bands (reviews / industries strips)
    bgSurface: '#1E2027', // cards / panels (lightest step, pops off the bg)
    bgInverse: '#08090B', // near-black anchor bands (footer, CTA card)

    // Text, cool off-white ink on charcoal, with muted / dim steps.
    text: '#F4F5F7',
    textMuted: '#A2A4AC',
    textDim: '#70727A',
    textInverse: '#FFFFFF', // text on the near-black anchor bands

    // Accent, bright signal red (laserweldinc.com), plus a deeper press state.
    accent: '#EB4036',
    accentHot: '#CE2A20',
    accentSoft: 'rgba(235, 64, 54, 0.16)',

    // Warm amber, used sparingly for a secondary highlight.
    sand: '#E8992E',
    sandSoft: 'rgba(224, 138, 30, 0.18)',

    // Positive / "up" indicators keep the brand red so nothing competes.
    growth: '#EB4036',
    growthSoft: 'rgba(235, 64, 54, 0.16)',

    // Borders & dividers, light-on-dark, kept subtle.
    border: 'rgba(255, 255, 255, 0.10)',
    borderStrong: 'rgba(255, 255, 255, 0.20)',

    // Gradients (used as CSS strings), a faint red warmth over the dark canvas.
    gradientHero:
      'radial-gradient(ellipse at 82% -12%, rgba(235,64,54,0.14) 0%, transparent 52%), radial-gradient(ellipse at 4% 108%, rgba(235,64,54,0.08) 0%, transparent 55%), #0E0F12',

    // App-wide ambient: a soft red glow (no base fill) that sits behind the
    // whole page and fades downward from the top. It gives the hero, the
    // "One facility" band directly beneath it, and every inner-page header one
    // continuous red-tinted charcoal backdrop — the shared theme of the app.
    gradientAmbient:
      'radial-gradient(135% 2300px at 88% -170px, rgba(235,64,54,0.26) 0%, rgba(235,64,54,0.12) 32%, rgba(235,64,54,0.035) 60%, transparent 84%), radial-gradient(95% 1500px at -8% 340px, rgba(235,64,54,0.10) 0%, transparent 64%)',
    gradientText: '#F4F5F7',
  },

  fonts: {
    // Matches carbyn.ai: Google Sans Flex for display + body, JetBrains Mono
    // for meta/labels. Inter is a close metric fallback during font swap.
    display:
      "'Google Sans Flex', var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "'Google Sans Flex', var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "var(--font-jetbrains-mono), 'JetBrains Mono', 'SF Mono', Menlo, monospace",
  },

  // Type scale. Fluid, bold, editorial.
  fontSize: {
    xs: 'clamp(0.7rem, 0.65rem + 0.2vw, 0.75rem)',
    sm: 'clamp(0.8rem, 0.75rem + 0.2vw, 0.875rem)',
    base: 'clamp(0.95rem, 0.9rem + 0.2vw, 1rem)',
    md: 'clamp(1.05rem, 1rem + 0.3vw, 1.125rem)',
    lg: 'clamp(1.2rem, 1.1rem + 0.5vw, 1.375rem)',
    xl: 'clamp(1.5rem, 1.3rem + 0.8vw, 1.875rem)',
    '2xl': 'clamp(2rem, 1.6rem + 1.5vw, 2.75rem)',
    '3xl': 'clamp(2.75rem, 2rem + 3vw, 4rem)',
    '4xl': 'clamp(3.5rem, 2.5rem + 5vw, 6rem)',
    '5xl': 'clamp(4.5rem, 3rem + 7vw, 8.5rem)',
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },

  letterSpacing: {
    display: '-0.02em',
    body: '0',
    meta: '0.18em',
    wide: '0.32em',
  },

  space: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
    '5xl': '8rem',
    '6xl': '12rem',
  },

  radius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
    pill: '999px',
  },

  maxWidth: {
    content: '1280px',
    narrow: '880px',
    wide: '1480px',
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },

  motion: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '450ms cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: '500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
} as const;

export type Theme = typeof theme;
