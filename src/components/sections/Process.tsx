'use client';

import styled from 'styled-components';
import { Container, Section, SectionLabel, H2, Lead } from '../primitives';
import { Reveal } from '../Reveal';
import { process } from '@/data/services';

// Flat base charcoal (theme.colors.bg) to match the "One facility" band and the
// hero — the whole home page reads as one continuous surface — with a faint
// signal-red bloom rising from the bottom edge. It's mirrored by the bloom at
// the top of Book a Call below, so the seam between the two sections reads as
// one continuous, shared glow.
const Wrap = styled(Section)`
  position: relative;
  overflow: hidden;
`;

// Soft red bloom rising from the bottom of the section — the top half of the
// glow shared with Book a Call across the seam.
const Glow = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    62% 55% at 50% 100%,
    ${({ theme }) => theme.colors.accentSoft} 0%,
    transparent 70%
  );
`;

const Inner = styled(Container).attrs({ $wide: true })`
  position: relative;
  z-index: 1;
`;

const Heading = styled(H2)`
  margin-bottom: 1rem;
  & em { font-style: normal; color: ${({ theme }) => theme.colors.accent}; }
`;

// A connected process rail, not four detached cards. On desktop the phases
// sit in one horizontal track threaded by a hairline rail with glowing nodes;
// on mobile it folds into a classic vertical timeline. Each step is anchored
// by a big ghosted numeral instead of card chrome.
const Timeline = styled.div`
  margin-top: 3.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 4.5rem;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.75rem;
  }
`;

const RAIL_GAP = '1.75rem';

const Phase = styled.article`
  position: relative;
  padding: 0 0 2.75rem 2.25rem;

  &:last-child {
    padding-bottom: 0;
  }

  /* Node marker — a glowing signal-red dot punched cleanly out of the rail. */
  & .dot {
    position: absolute;
    top: 1px;
    left: 0;
    width: 12px;
    height: 12px;
    border-radius: 999px;
    background: ${({ theme }) => theme.colors.accent};
    box-shadow:
      0 0 0 4px ${({ theme }) => theme.colors.bg},
      0 0 0 5px ${({ theme }) => theme.colors.accentSoft},
      0 0 16px 1px ${({ theme }) => theme.colors.accent};
    transition: transform ${({ theme }) => theme.motion.base},
      box-shadow ${({ theme }) => theme.motion.base};
    z-index: 2;
  }

  /* The destination node reads a touch heavier — the end of the pipeline. */
  &:last-child .dot {
    box-shadow:
      0 0 0 4px ${({ theme }) => theme.colors.bg},
      0 0 0 6px ${({ theme }) => theme.colors.accentSoft},
      0 0 0 7px ${({ theme }) => theme.colors.accent}55,
      0 0 20px 2px ${({ theme }) => theme.colors.accent};
  }

  /* Vertical rail (mobile) from this node down to the next. */
  &::before {
    content: '';
    position: absolute;
    top: 16px;
    bottom: -2px;
    left: 5px;
    width: 2px;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.borderStrong},
      ${({ theme }) => theme.colors.border}
    );
  }
  &:last-child::before {
    display: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    & .dot {
      animation: nodePulse 3.2s ease-in-out infinite;
    }
    &:nth-child(2) .dot { animation-delay: 0.4s; }
    &:nth-child(3) .dot { animation-delay: 0.8s; }
    &:nth-child(4) .dot { animation-delay: 1.2s; }
  }

  @keyframes nodePulse {
    0%, 100% { box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.bg}, 0 0 0 5px ${({ theme }) => theme.colors.accentSoft}, 0 0 12px 0 ${({ theme }) => theme.colors.accent}; }
    50% { box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.bg}, 0 0 0 5px ${({ theme }) => theme.colors.accentSoft}, 0 0 22px 3px ${({ theme }) => theme.colors.accent}; }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2.75rem 0 0 0;

    /* Horizontal rail (desktop) — threads each node into the next. */
    &::before {
      top: 5px;
      bottom: auto;
      left: 6px;
      width: calc(100% + ${RAIL_GAP});
      height: 2px;
      background: linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.borderStrong},
        ${({ theme }) => theme.colors.border}
      );
    }
    &:last-child::before {
      display: none;
    }
  }

  &:hover .dot {
    transform: scale(1.18);
    box-shadow:
      0 0 0 4px ${({ theme }) => theme.colors.bg},
      0 0 0 6px ${({ theme }) => theme.colors.accentSoft},
      0 0 26px 3px ${({ theme }) => theme.colors.accent};
  }
`;

const Index = styled.div`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  font-size: clamp(2.4rem, 1.9rem + 2vw, 3.25rem);
  line-height: 1;
  letter-spacing: -0.04em;
  background: linear-gradient(180deg, rgba(244, 245, 247, 0.2), rgba(244, 245, 247, 0.04));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  transition: background ${({ theme }) => theme.motion.base};

  ${Phase}:hover & {
    background: linear-gradient(180deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accentHot});
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

const When = styled.span`
  display: inline-block;
  margin-top: 0.9rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSize.xs};
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
`;

const PhaseTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: -0.015em;
  line-height: 1.1;
  margin: 0.5rem 0 0;
`;

const PhaseBody = styled.p`
  margin: 0.85rem 0 0;
  max-width: 36ch;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.65;
`;

export function Process() {
  return (
    <Wrap id="process">
      <Glow aria-hidden="true" />
      <Inner>
        <Reveal>
          <SectionLabel>How We Work</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <Heading>
            From first call to <em>content that converts</em>.
          </Heading>
        </Reveal>
        <Reveal delay={140}>
          <Lead>A simple, done-for-you process that keeps your content moving — planned with purpose, filmed on location, and published on schedule.</Lead>
        </Reveal>

        <Timeline>
          {process.map((p, i) => (
            <Reveal key={p.n} delay={180 + i * 80}>
              <Phase>
                <span className="dot" aria-hidden="true" />
                <Index>{p.n}</Index>
                <When>{p.when}</When>
                <PhaseTitle>{p.title}</PhaseTitle>
                <PhaseBody>{p.desc}</PhaseBody>
              </Phase>
            </Reveal>
          ))}
        </Timeline>
      </Inner>
    </Wrap>
  );
}
