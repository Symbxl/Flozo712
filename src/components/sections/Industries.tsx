'use client';

import styled from 'styled-components';
import { Container, Section, SectionLabel, H2, Lead } from '../primitives';
import { Reveal } from '../Reveal';
import { industries } from '@/data/services';

// =====================================================================
//  Industries We Serve — a clean, editorial index of the home-service
//  trades Flozo Media creates for. No cards: each trade is a full-width
//  row on a hairline-divided ledger — a mono index, a line icon, the
//  name, and a concrete descriptor. Hover slides in a signal-red rule
//  and reddens the name.
// =====================================================================

// One line-drawn icon per sector, keyed by name. Same family as the
// Capabilities icons: 24×24, stroke-only, round joins, so they inherit the
// card's accent colour and read as one coherent set.
const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

const ICONS: Record<string, JSX.Element> = {
  // HVAC — a snowflake (heating & cooling).
  HVAC: (
    <svg {...iconProps}>
      <path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9" />
      <path d="M9.9 4.7L12 6.8l2.1-2.1M9.9 19.3L12 17.2l2.1 2.1" />
    </svg>
  ),
  // Plumbing — a water droplet.
  Plumbing: (
    <svg {...iconProps}>
      <path d="M12 3c3.7 4.4 6.2 7.7 6.2 10.8a6.2 6.2 0 1 1-12.4 0C5.8 10.7 8.3 7.4 12 3z" />
      <path d="M9.3 14.2a2.8 2.8 0 0 0 2.3 3.1" />
    </svg>
  ),
  // Electrical — a lightning bolt.
  Electrical: (
    <svg {...iconProps}>
      <path d="M13 2L4.5 13h5L8 22l8.5-11h-5L13 2z" />
    </svg>
  ),
  // Roofing & Exteriors — a house with the roofline leading.
  'Roofing & Exteriors': (
    <svg {...iconProps}>
      <path d="M2.5 11.5L12 3.5l9.5 8" />
      <path d="M5.5 9.3V20h13V9.3" />
      <path d="M10 20v-4.5h4V20" />
    </svg>
  ),
  // Landscaping & Lawn Care — a sprout over ground.
  'Landscaping & Lawn Care': (
    <svg {...iconProps}>
      <path d="M12 20.5v-8" />
      <path d="M12 12.5c0-3.9-3.1-7-7-7 0 3.9 3.1 7 7 7z" />
      <path d="M12 10c0-3 2.5-5.5 5.5-5.5 0 3-2.5 5.5-5.5 5.5z" />
      <path d="M4.5 20.5h15" />
    </svg>
  ),
  // Remodeling & Painting — a paint roller.
  'Remodeling & Painting': (
    <svg {...iconProps}>
      <rect x="3.5" y="4" width="12.5" height="5.5" rx="1.25" />
      <path d="M16 6.75h4.5v4.75H12V14" />
      <path d="M12 14v6.5" />
    </svg>
  ),
};

// Flat base charcoal (theme.colors.bg, via Section's default). The signal-red
// bloom that used to sit here now lives on the seam between How We Work and
// Book a Call further down the page.
const Wrap = styled(Section)``;

const Inner = styled(Container).attrs({ $wide: true })``;

const Heading = styled(H2)`
  margin-top: 0.5rem;
  margin-bottom: 0.9rem;
  & em {
    font-style: normal;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

// A single hairline-divided ledger. A top rule opens it; each row carries
// its own bottom rule, so the sectors read as one continuous list.
const List = styled.div`
  margin-top: 3rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Row = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 2.75rem 1fr;
  align-items: baseline;
  column-gap: 1.1rem;
  row-gap: 0.35rem;
  padding: 1.6rem 0.5rem 1.6rem 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: background ${({ theme }) => theme.motion.base};

  /* Signal-red rule that grows from the top on hover — the only chrome. */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.colors.accent};
    transform: scaleY(0);
    transform-origin: top;
    transition: transform ${({ theme }) => theme.motion.base};
  }

  &:hover {
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.accentSoft} 0%,
      transparent 45%
    );
  }
  &:hover::before { transform: scaleY(1); }

  /* Mono index — dim at rest, reddens on hover. */
  & .idx {
    grid-row: 1;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    color: ${({ theme }) => theme.colors.textDim};
    transition: color ${({ theme }) => theme.motion.base};
  }
  &:hover .idx { color: ${({ theme }) => theme.colors.accent}; }

  /* Line icon — stroke-only, inherits the accent. */
  & .icon {
    grid-row: 1;
    display: inline-flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.textMuted};
    transform: translateY(-0.15rem);
    transition: color ${({ theme }) => theme.motion.base};
  }
  & .icon svg { width: 26px; height: 26px; }
  &:hover .icon { color: ${({ theme }) => theme.colors.accent}; }

  /* Name — the anchor of each row, reddens on hover. */
  & .name {
    grid-row: 1;
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 700;
    font-size: clamp(1.3rem, 1.05rem + 1vw, 1.75rem);
    line-height: 1.05;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.text};
    transition: color ${({ theme }) => theme.motion.base};
  }
  &:hover .name { color: ${({ theme }) => theme.colors.accent}; }

  /* Descriptor — sits under the name, aligned to the name column. */
  & .blurb {
    grid-column: 3;
    grid-row: 2;
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.55;
    color: ${({ theme }) => theme.colors.textMuted};
    max-width: 52ch;
  }

  /* On wider screens, float the descriptor into its own right-hand column so
     the names form a clean vertical spine. */
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: auto 2.75rem minmax(0, 1fr) minmax(0, 1.15fr);
    align-items: center;
    row-gap: 0;
    column-gap: 1.75rem;
    padding-top: 1.9rem;
    padding-bottom: 1.9rem;

    & .blurb {
      grid-column: 4;
      grid-row: 1;
      padding-left: 2rem;
      border-left: 1px solid ${({ theme }) => theme.colors.border};
    }
  }
`;

export function Industries() {
  return (
    <Wrap id="industries">
      <Inner>
        <Reveal>
          <SectionLabel>Industries We Serve</SectionLabel>
        </Reveal>
        <Reveal delay={100}>
          <Heading>
            Built for the trades that <em>keep homes running</em>.
          </Heading>
        </Reveal>
        <Reveal delay={140}>
          <Lead>
            From HVAC to remodeling, we film the real work and turn it into content that puts
            your trucks in more driveways.
          </Lead>
        </Reveal>

        <List>
          {industries.map(({ name, blurb }, i) => (
            <Reveal key={name} delay={160 + i * 60}>
              <Row>
                <span className="idx">{String(i + 1).padStart(2, '0')}</span>
                <span className="icon">{ICONS[name]}</span>
                <span className="name">{name}</span>
                <p className="blurb">{blurb}</p>
              </Row>
            </Reveal>
          ))}
        </List>
      </Inner>
    </Wrap>
  );
}
