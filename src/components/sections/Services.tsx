'use client';

import { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Container, Section, H2 } from '../primitives';
import { Reveal } from '../Reveal';
import { services, type Service } from '@/data/services';

// One line-drawn icon per service, keyed by service number. Kept as a
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
  // 01 — Short-Form Video: a phone with a play button.
  '01': (
    <svg {...iconProps}>
      <rect x="7" y="2" width="10" height="20" rx="2.5" />
      <path d="M10.5 9.5v5l4.5-2.5z" />
    </svg>
  ),
  // 02 — Social Media Management: a chat bubble with a heart.
  '02': (
    <svg {...iconProps}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
      <path d="M12 14.5s-2.8-1.7-2.8-3.6a1.6 1.6 0 0 1 2.8-1 1.6 1.6 0 0 1 2.8 1c0 1.9-2.8 3.6-2.8 3.6z" />
    </svg>
  ),
  // 03 — Content Strategy: a publishing calendar.
  '03': (
    <svg {...iconProps}>
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M16 2v4M8 2v4M3 9.5h18" />
      <path d="M8 14h3M8 17.5h6" />
    </svg>
  ),
  // 04 — On-Location Production: a video camera.
  '04': (
    <svg {...iconProps}>
      <rect x="2" y="6" width="14" height="12" rx="2" />
      <path d="m22 8.5-6 3.5 6 3.5z" />
    </svg>
  ),
  // 05 — YouTube Channel Growth: a player window with a play glyph.
  '05': (
    <svg {...iconProps}>
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="m10 9 5.5 3-5.5 3z" />
    </svg>
  ),
  // 06 — Local SEO & Google Business: a map pin.
  '06': (
    <svg {...iconProps}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
};

// "One team" band that sits directly under the hero's "Trusted by" strip.
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

// ---------------------------------------------------------------------------
//  Service selector.
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

// Bordered placeholder that stands in for the (future) service photo. When
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

// Live Instagram embeds shown when a service provides `examples` — two reels
// side by side under a small mono label, in place of the placeholder frame.
// Stacked on narrow screens so each embed keeps a usable width.
const ExamplesFrame = styled.div`
  & .cap {
    display: block;
    margin-bottom: 0.6rem;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSize.xs};
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textDim};
  }
  container-type: inline-size;

  & .grid {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 0.75rem;
  }
  & .reel {
    position: relative;
    width: 100%;
    max-width: 360px;
    aspect-ratio: 9 / 19;
    border: 1px solid ${({ theme }) => theme.colors.borderStrong};
    border-radius: ${({ theme }) => theme.radius.md};
    overflow: hidden;
    background: ${({ theme }) => theme.colors.bg};
  }
  /* Instagram's embed collapses into a tiny floating card below 326px, so the
     iframe never renders narrower than that — in a tighter cell it stays at
     326px, centered, and the cell crops the embed's outer margins instead. */
  & .reel iframe {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    min-width: 326px;
    height: 100%;
    border: 0;
  }

  /* Side-by-side only when the card itself is wide enough for two full-width
     embeds (container query, so the accordion and desktop card both behave). */
  @container (min-width: 688px) {
    & .grid {
      grid-template-columns: repeat(2, minmax(0, 360px));
      justify-content: center;
    }
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

// The image frame + copy shown for a given service, reused on both layouts.
function CapabilityDetail({ s }: { s: Service }) {
  return (
    <Detail>
      {s.examples ? (
        <ExamplesFrame>
          <span className="cap">{s.examples.label}</span>
          <div className="grid">
            {s.examples.urls.map((url) => (
              <div className="reel" key={url}>
                <iframe
                  src={`${url.replace(/\/+$/, '')}/embed/`}
                  title={`${s.title} example on Instagram`}
                  loading="lazy"
                  allowFullScreen
                  scrolling="no"
                />
              </div>
            ))}
          </div>
        </ExamplesFrame>
      ) : (
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
      )}
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
            We handle all of the <em>content</em> and <em>marketing</em> for you
          </Heading>
        </Reveal>
        <Reveal delay={110}>
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
