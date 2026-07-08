'use client';

import styled from 'styled-components';
import { Container, Section, SectionLabel, H2, Lead } from '../primitives';
import { Reveal } from '../Reveal';
import { industries } from '@/data/services';

// =====================================================================
//  Industries We Serve — a clean, editorial index of the sectors Laser
//  Weld builds for. No cards: each sector is a full-width row on a
//  hairline-divided ledger — a mono index, a line icon, the name, and a
//  concrete descriptor. Hover slides in a signal-red rule and reddens the
//  name. Reads like a precision spec sheet, not a grid of boxes.
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
  // Oil & Gas — a pressure gauge / dial (high-pressure conditions).
  'Oil & Gas': (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 12l3.6-2.8" />
      <path d="M12 3.5V5M20.5 12H19M12 20.5V19M3.5 12H5" />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
  // Aerospace — a jet silhouette (flight-critical tolerances).
  Aerospace: (
    <svg {...iconProps}>
      <path d="M12 2c1.1 1.6 1.7 3.8 1.7 6.4v1.8l6.3 3.8v2l-6.3-1.9v3.5l2.2 1.6V22L12 20.9 8.1 22v-1.8l2.2-1.6v-3.5L4 17v-2l6.3-3.8V8.4C10.3 5.8 10.9 3.6 12 2z" />
    </svg>
  ),
  // Wastewater — stacked water waves (treatment / flow).
  Wastewater: (
    <svg {...iconProps}>
      <path d="M3 7c2.2 0 2.2-1.7 4.5-1.7S9.8 7 12 7s2.2-1.7 4.5-1.7S18.8 7 21 7" />
      <path d="M3 12.5c2.2 0 2.2-1.7 4.5-1.7S9.8 12.5 12 12.5s2.2-1.7 4.5-1.7S18.8 12.5 21 12.5" />
      <path d="M3 18c2.2 0 2.2-1.7 4.5-1.7S9.8 18 12 18s2.2-1.7 4.5-1.7S18.8 18 21 18" />
    </svg>
  ),
  // Data Centers — stacked server units with status lights (uptime).
  'Data Centers': (
    <svg {...iconProps}>
      <rect x="3.5" y="4" width="17" height="6.5" rx="1.5" />
      <rect x="3.5" y="13.5" width="17" height="6.5" rx="1.5" />
      <path d="M7 7.25h.01M7 16.75h.01" />
      <path d="M10 7.25h7M10 16.75h7" />
    </svg>
  ),
  // Material Handling — a box riding a conveyor of rollers.
  'Material Handling': (
    <svg {...iconProps}>
      <rect x="6.5" y="3.5" width="11" height="8" rx="1" />
      <path d="M6.5 7.5h11" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="12" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
    </svg>
  ),
  // Structural & Fabrication — an I-beam / girder cross-section.
  'Structural & Fabrication': (
    <svg {...iconProps}>
      <path d="M4 5h16M4 19h16M12 5v14" />
      <path d="M7.5 5v2.2M16.5 5v2.2M7.5 19v-2.2M16.5 19v-2.2" />
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
            Built for where <em>failure costs the most</em>.
          </Heading>
        </Reveal>
        <Reveal delay={140}>
          <Lead>
            From high-pressure oil &amp; gas to aerospace tolerances, our parts hold up in the
            environments that punish weak fabrication.
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
