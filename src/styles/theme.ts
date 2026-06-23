// Viridian Films, design tokens.
// White-forward, professional, with a refined viridian/forest-green accent
// (a nod to the brand name, nature-ish, never neon) and a deep green-black ink.

export const theme = {
  colors: {
    // Backgrounds, white-forward with faintly green-tinted surfaces.
    bg: '#FFFFFF',
    bgElevated: '#F5F8F6',
    bgSurface: '#ECF2EE',
    bgInverse: '#0E1F18', // deep forest near-black (dark sections / footer)

    // Text, deep green-black on white, with muted / dim steps.
    text: '#14241D',
    textMuted: '#48564F',
    textDim: '#7A8881',
    textInverse: '#FFFFFF',

    // Accents, viridian green, plus a deeper pine for "hot" emphasis.
    accent: '#2E7D5B',
    accentHot: '#1C5B41',
    accentSoft: 'rgba(46, 125, 91, 0.10)',

    // A warm, earthy secondary, used sparingly for highlights / metric pills.
    sand: '#C2A878',
    sandSoft: 'rgba(194, 168, 120, 0.14)',

    // Positive growth (review stars, "up" pills) keep a brighter natural green.
    growth: '#1F9D57',
    growthSoft: 'rgba(31, 157, 87, 0.12)',

    // Borders & dividers, dark-on-light, kept subtle.
    border: 'rgba(20, 36, 29, 0.10)',
    borderStrong: 'rgba(20, 36, 29, 0.20)',

    // Gradients (used as CSS strings), soft green washes on white.
    gradientHero:
      'radial-gradient(ellipse at 28% 16%, rgba(46,125,91,0.14) 0%, transparent 52%), radial-gradient(ellipse at 84% 88%, rgba(28,91,65,0.08) 0%, transparent 55%), #FFFFFF',
    gradientText: '#14241D',
  },

  fonts: {
    display:
      "var(--font-jakarta), 'Plus Jakarta Sans', var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "var(--font-mono), 'JetBrains Mono', 'SF Mono', Menlo, monospace",
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
    display: '-0.03em',
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
