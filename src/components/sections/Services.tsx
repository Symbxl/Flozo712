'use client';

import { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Container, Section, H2, Lead } from '../primitives';
import { Reveal } from '../Reveal';
import { services, type Service } from '@/data/services';

// One line-drawn icon per capability, keyed by service number. Kept as a
// single coherent set: 24×24, stroke-only, round joins, so they inherit the
// card's accent colour and read as one family.
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
  // 01 — Laser Welding: focused beam meeting a seam, with spatter.
  '01': (
    <svg {...iconProps}>
      <path d="M12 2v6" />
      <path d="M9.5 8.5 12 11l2.5-2.5" />
      <circle cx="12" cy="13.5" r="1.6" />
      <path d="M4 20h16" />
      <path d="M7.5 20l1-2M16.5 20l-1-2" />
    </svg>
  ),
  // 02 — MIG & TIG Welding: the electric arc.
  '02': (
    <svg {...iconProps}>
      <path d="M13 2 3 14h9l-1 8 10-12h-9z" />
    </svg>
  ),
  // 03 — Laser & Plate Cutting: cutting head over a dashed kerf.
  '03': (
    <svg {...iconProps}>
      <path d="M9 3h6v4l-3 3-3-3z" />
      <path d="M12 13v3" />
      <path d="M3 19h3M8.5 19h2M13.5 19h2M18 19h3" />
    </svg>
  ),
  // 04 — CNC Bending: a plate folding up through a radius.
  '04': (
    <svg {...iconProps}>
      <path d="M3 18h9a4 4 0 0 0 4-4V7" />
      <path d="M13 9l3-3 3 3" />
    </svg>
  ),
  // 05 — 3D Tube Profiling: a tube with a profiled hole.
  '05': (
    <svg {...iconProps}>
      <rect x="3" y="8" width="18" height="8" rx="4" />
      <path d="M7 9v6" />
      <circle cx="14" cy="12" r="2.2" />
    </svg>
  ),
  // 06 — Machining: a machined gear / cog.
  '06': (
    <svg {...iconProps}>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  // 07 — Coating & Laser Cleaning: a protective coating droplet.
  '07': (
    <svg {...iconProps}>
      <path d="M12 3c3.5 4 5.5 6.7 5.5 9.5a5.5 5.5 0 0 1-11 0C6.5 9.7 8.5 7 12 3z" />
      <path d="M9.5 13a2.5 2.5 0 0 0 2 2.4" />
    </svg>
  ),
  // 08 — Design & Engineering: a drafting compass drawing an arc.
  '08': (
    <svg {...iconProps}>
      <circle cx="12" cy="3.5" r="1.6" />
      <path d="M12 5.1 7.5 20" />
      <path d="M12 5.1 16.5 20" />
      <path d="M6.6 20.5a11 11 0 0 0 10.8 0" />
      <circle cx="12" cy="9" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
};

// "One facility" band that sits directly under the hero's "Trusted by" strip.
// It has no fill of its own — it's transparent, so it shares the hero's red
// ambient (see GlobalStyles) and reads as one continuous surface with the hero
// above it, the hero's red flowing straight down through it.
const Wrap = styled(Section)`
  background: transparent;
`;
const Inner = styled(Container).attrs({ $wide: true })``;

const Heading = styled(H2)`
  margin-bottom: 0.75rem;
  & em {
    font-style: normal;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

// Supporting tagline that sits directly under the main heading.
const Subhead = styled.p`
  margin: 0 0 1.5rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  letter-spacing: -0.01em;
  line-height: 1.15;
  color: ${({ theme }) => theme.colors.textMuted};
  & em {
    font-style: normal;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

// ---------------------------------------------------------------------------
//  Capability selector.
//  Desktop: a vertical list of options on the left, one large display card on
//  the right showing the active capability (image frame + copy).
//  Mobile: the same list becomes an accordion — tapping a row expands it in
//  place to reveal the image + copy, so there's no throwaway button rail.
// ---------------------------------------------------------------------------

// Two columns on desktop (option rail + big card); a single stacked column on
// mobile where the rows and their expanding panels do all the work.
const Layout = styled.div`
  margin-top: 3.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  align-items: start;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(280px, 360px) 1fr;
    gap: 2.5rem;
    margin-top: 4rem;
  }
`;

const Rail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 0.25rem;
  }
`;

// Wraps one option row + its (mobile-only) expanding panel. On mobile it reads
// as a self-contained card that lights up when active; on desktop it's just a
// transparent group and the row carries the active styling.
const OptionGroup = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  transition: border-color ${({ theme }) => theme.motion.base},
    background ${({ theme }) => theme.motion.base};

  &[data-active='true'] {
    border-color: ${({ theme }) => theme.colors.borderStrong};
    background: ${({ theme }) => theme.colors.bgSurface};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    border-color: transparent;
    border-radius: ${({ theme }) => theme.radius.md};
    overflow: visible;
    &[data-active='true'] {
      border-color: transparent;
      background: transparent;
    }
  }
`;

const OptionRow = styled.button`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.9rem;
  text-align: left;
  padding: 1.05rem 1.15rem;
  background: transparent;
  border: 0;
  border-radius: inherit;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: background ${({ theme }) => theme.motion.base},
    color ${({ theme }) => theme.motion.base};

  /* Left accent bar for the active option. */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%) scaleY(0);
    height: 58%;
    width: 3px;
    border-radius: 0 3px 3px 0;
    background: ${({ theme }) => theme.colors.accent};
    transition: transform ${({ theme }) => theme.motion.base};
  }

  & .num {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    letter-spacing: 0.14em;
    color: ${({ theme }) => theme.colors.textDim};
    transition: color ${({ theme }) => theme.motion.base};
  }

  & .title {
    flex: 1;
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    letter-spacing: -0.01em;
    line-height: 1.15;
    color: inherit;
    transition: color ${({ theme }) => theme.motion.base};
  }

  /* Chevron: an accordion caret on mobile, hidden on desktop (the big card
     to the right is affordance enough there). */
  & .chev {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.textDim};
    transition: transform ${({ theme }) => theme.motion.base},
      color ${({ theme }) => theme.motion.base};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: rgba(255, 255, 255, 0.03);
  }
  &:hover .title {
    color: ${({ theme }) => theme.colors.text};
  }

  &[data-active='true'] {
    color: ${({ theme }) => theme.colors.text};
  }
  &[data-active='true']::before {
    transform: translateY(-50%) scaleY(1);
  }
  &[data-active='true'] .num {
    color: ${({ theme }) => theme.colors.accent};
  }
  &[data-active='true'] .title {
    color: ${({ theme }) => theme.colors.text};
  }
  &[data-active='true'] .chev {
    transform: rotate(180deg);
    color: ${({ theme }) => theme.colors.accent};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: -2px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    border-radius: ${({ theme }) => theme.radius.md};
    &[data-active='true'] {
      background: ${({ theme }) => theme.colors.bgSurface};
    }
    &[data-active='true'] .chev {
      transform: none;
    }
    & .chev {
      display: none;
    }
  }
`;

// Mobile accordion panel: animates open using the grid-rows 0fr→1fr trick so
// the height transition is smooth without measuring. Hidden entirely on desktop.
const MobilePanel = styled.div`
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 340ms cubic-bezier(0.4, 0, 0.2, 1);

  & > .clip {
    overflow: hidden;
  }
  & .pad {
    padding: 0 1.15rem 1.2rem;
    opacity: 0;
    transform: translateY(-6px);
    transition: opacity ${({ theme }) => theme.motion.base},
      transform ${({ theme }) => theme.motion.base};
  }

  &[data-open='true'] {
    grid-template-rows: 1fr;
  }
  &[data-open='true'] .pad {
    opacity: 1;
    transform: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

// The large display card, right column on desktop only.
const DisplayCard = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
    padding: 1.75rem;
    background: ${({ theme }) => theme.colors.bgSurface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.lg};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2), 0 24px 50px -30px rgba(0, 0, 0, 0.5);
  }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: none; }
`;

// Re-keyed on the active index so the desktop card content re-animates on swap.
const Swap = styled.div`
  animation: ${fadeUp} 360ms cubic-bezier(0.4, 0, 0.2, 1);
`;

// Shared copy block used by both the mobile panel and the desktop card.
const Detail = styled.div`
  & .frameMeta {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin: 1.15rem 0 0.55rem;
  }
  & .frameMeta .num {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    letter-spacing: 0.14em;
    color: ${({ theme }) => theme.colors.accent};
  }
  & .frameMeta .line {
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.border};
  }
  & .frameMeta .kicker {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSize.xs};
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textDim};
  }
  & h3 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    letter-spacing: -0.02em;
    line-height: 1.1;
    color: ${({ theme }) => theme.colors.text};
    margin: 0 0 0.6rem;
  }
  & p {
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.65;
    margin: 0;
    max-width: 56ch;
  }
`;

// Bordered placeholder that stands in for the (future) capability photo. When
// a `Service.image` is provided it renders that instead of the placeholder.
const ImgFrame = styled.div`
  position: relative;
  aspect-ratio: 16 / 10;
  border: 1px dashed ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radius.md};
  background: radial-gradient(
      120% 120% at 80% 0%,
      ${({ theme }) => theme.colors.accentSoft} 0%,
      transparent 55%
    ),
    ${({ theme }) => theme.colors.bg};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.textDim};

  & img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  & .ph {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3.25rem;
    height: 3.25rem;
    border-radius: ${({ theme }) => theme.radius.md};
    background: ${({ theme }) => theme.colors.accentSoft};
    color: ${({ theme }) => theme.colors.accent};
  }
  & .ph svg {
    width: 30px;
    height: 30px;
  }
  & .cap {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSize.xs};
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }
`;

const ChevronIcon = () => (
  <svg
    className="chev"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

// The image frame + copy shown for a given capability, reused on both layouts.
function CapabilityDetail({ s }: { s: Service }) {
  return (
    <Detail>
      <ImgFrame>
        {s.image ? (
          <img src={s.image} alt={s.title} loading="lazy" />
        ) : (
          <>
            <span className="ph">{ICONS[s.num]}</span>
            <span className="cap">Image coming soon</span>
          </>
        )}
      </ImgFrame>
      <div className="frameMeta">
        <span className="num">{s.num}</span>
        <span className="line" />
        <span className="kicker">In-house</span>
      </div>
      <h3>{s.title}</h3>
      <p>{s.desc}</p>
    </Detail>
  );
}

export function Services() {
  const [active, setActive] = useState(0);
  const rowRefs = useRef<Array<HTMLButtonElement | null>>([]);

  // Arrow keys move between options and follow focus, so the rail is fully
  // keyboard-operable.
  const handleKey = (e: React.KeyboardEvent, i: number) => {
    let next: number | null = null;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (i + 1) % services.length;
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft')
      next = (i - 1 + services.length) % services.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = services.length - 1;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    rowRefs.current[next]?.focus();
  };

  return (
    <Wrap id="capabilities">
      <Inner>
        <Reveal delay={80}>
          <Heading>
            One facility. <em>Every process</em> under one roof.
          </Heading>
        </Reveal>
        <Reveal delay={110}>
          <Subhead>
            Trusted where <em>failure isn&apos;t an option</em>.
          </Subhead>
        </Reveal>
        <Reveal delay={140}>
          <Lead>
            Cut, bent, welded, machined, coated, and shipped, all in-house. No outside
            handoffs, no lost tolerances, no finger-pointing. From big to small, we do it all.
          </Lead>
        </Reveal>

        <Reveal delay={180}>
          <Layout>
            <Rail role="tablist" aria-label="Capabilities">
              {services.map((s, i) => {
                const isActive = i === active;
                return (
                  <OptionGroup key={s.num} data-active={isActive}>
                    <OptionRow
                      ref={(el) => {
                        rowRefs.current[i] = el;
                      }}
                      role="tab"
                      aria-selected={isActive}
                      aria-expanded={isActive}
                      aria-controls={`capability-panel-${s.num}`}
                      tabIndex={isActive ? 0 : -1}
                      data-active={isActive}
                      onClick={() => setActive(i)}
                      onKeyDown={(e) => handleKey(e, i)}
                    >
                      <span className="num">{s.num}</span>
                      <span className="title">{s.title}</span>
                      <ChevronIcon />
                    </OptionRow>

                    <MobilePanel
                      id={`capability-panel-${s.num}`}
                      role="region"
                      aria-label={s.title}
                      data-open={isActive}
                      aria-hidden={!isActive}
                    >
                      <div className="clip">
                        <div className="pad">
                          <CapabilityDetail s={s} />
                        </div>
                      </div>
                    </MobilePanel>
                  </OptionGroup>
                );
              })}
            </Rail>

            <DisplayCard aria-live="polite">
              <Swap key={active}>
                <CapabilityDetail s={services[active]} />
              </Swap>
            </DisplayCard>
          </Layout>
        </Reveal>
      </Inner>
    </Wrap>
  );
}
