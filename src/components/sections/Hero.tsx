'use client';

import styled, { keyframes } from 'styled-components';
import { Container } from '../primitives';
import { trustedBy } from '@/data/services';

// =====================================================================
//  Home hero — 1:1 with the CARBYN layout (hero.png):
//  a big left-aligned BLACK grotesk headline, a short muted subhead,
//  two equal rounded photo cards (right one carries a coral pill) with
//  centered black captions, and a large "Trusted by" client-logo strip.
// =====================================================================

const Wrap = styled.section`
  position: relative;
  /* Background comes from the shared app-wide red ambient (see GlobalStyles),
     so the hero and the "One facility" band below share one continuous
     backdrop. */
  background: transparent;
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 8.5rem 0 3.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 10.5rem 0 4.5rem;
  }
`;

const Inner = styled(Container).attrs({ $wide: true })`
  position: relative;
  z-index: 2;
`;

const Headline = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  /* Sized so "turn-key manufacturing." (the longer line) fills the width
     without wrapping — as large as it can be while staying on one line.
     7.2vw fills ~95% of the content width down to 320px, with more
     headroom above; capped at 6.4rem so it doesn't get huge on desktop. */
  font-size: clamp(1.4rem, 7.2vw, 6.4rem);
  line-height: 0.98;
  letter-spacing: -0.035em;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  white-space: nowrap;

  & span {
    display: block;
  }
`;

const Sub = styled.p`
  margin: 1.4rem 0 0;
  max-width: 54ch;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
`;

const Cards = styled.div`
  margin-top: clamp(2.5rem, 5vw, 3.75rem);
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Cell = styled.figure`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
`;

const PhotoCard = styled.div`
  position: relative;
  aspect-ratio: 19 / 10;
  border-radius: 20px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.bgInverse};

  & img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const glow = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
`;

const Pill = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.34rem 0.72rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.accent};
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.6rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 700;

  & .dot {
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background: #fff;
    animation: ${glow} 1.6s ease-in-out infinite;
  }
`;

const Caption = styled.figcaption`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: clamp(1.05rem, 0.9rem + 0.55vw, 1.3rem);
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.text};
`;

const Trust = styled.div`
  margin-top: clamp(3.25rem, 6vw, 5rem);
`;

const TrustHead = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: clamp(1.75rem, 1.1rem + 2.4vw, 3rem);
  line-height: 1;
  letter-spacing: -0.03em;
  margin: 0 0 clamp(1.75rem, 3.5vw, 2.75rem);
  color: ${({ theme }) => theme.colors.text};
`;

// Marquee constrained to the content column — it lines up with the nav logo on
// the left and the "Get a Quote" button on the right, and never runs past them.
// A short fade at each edge keeps logos from popping in/out abruptly.
const Marquee = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent 0,
    #000 40px,
    #000 calc(100% - 40px),
    transparent 100%
  );
  mask-image: linear-gradient(
    90deg,
    transparent 0,
    #000 40px,
    #000 calc(100% - 40px),
    transparent 100%
  );
`;

// Four identical copies of the logo list sit in the track; sliding it left by
// exactly one copy (25%) loops seamlessly.
const marquee = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-25%); }
`;

const Track = styled.div`
  display: flex;
  width: max-content;
  align-items: center;
  animation: ${marquee} 42s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

// Equal-width cells + a shared bounding box (cap height, cap width) so every
// logo — whether a tall badge or a wide wordmark — reads as the same size.
const LogoLink = styled.a`
  flex: 0 0 auto;
  width: clamp(9rem, 13vw, 13rem);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 clamp(0.6rem, 1.4vw, 1.1rem);

  & img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: clamp(3.25rem, 4.6vw, 4.5rem);
    object-fit: contain;
    opacity: 0.7;
    transition: opacity ${({ theme }) => theme.motion.base};
  }

  &:hover img {
    opacity: 1;
  }
`;

export function Hero() {
  return (
    <Wrap id="top">
      <Inner>
        <Headline>
          <span>Quality welding &amp;</span>
          <span>turn-key manufacturing.</span>
        </Headline>
        <Sub>
          MIG, TIG &amp; laser welding, cutting, bending, machining, and delivery, every
          process under one roof in Katy, Texas.
        </Sub>

        <Cards>
          <Cell>
            <PhotoCard>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/portfolio/laser.jpg"
                alt="The Laser Weld Inc. team at the Katy, Texas facility"
                loading="eager"
                style={{ objectPosition: 'center 32%' }}
              />
            </PhotoCard>
            <Caption>30+ years in Katy, Texas.</Caption>
          </Cell>

          <Cell>
            <PhotoCard>
              <Pill>
                <span className="dot" /> Shop Floor
              </Pill>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero.webp"
                alt="Fabrication work on the shop floor in Katy, Texas"
                loading="eager"
                style={{ objectPosition: 'center 72%', transform: 'scale(1.12)' }}
              />
            </PhotoCard>
            <Caption>From local to global, we do it all.</Caption>
          </Cell>
        </Cards>

        <Trust>
          <TrustHead>Trusted by</TrustHead>
          <Marquee>
            <Track>
              {[0, 1, 2, 3].map((copy) =>
                trustedBy.map((c) => (
                  <LogoLink
                    key={`${copy}-${c.name}`}
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={copy === 0 ? `Visit ${c.name}` : undefined}
                    aria-hidden={copy !== 0}
                    tabIndex={copy === 0 ? undefined : -1}
                    title={c.name}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.logo}
                      alt={copy === 0 ? `${c.name} logo` : ''}
                      loading="lazy"
                    />
                  </LogoLink>
                ))
              )}
            </Track>
          </Marquee>
        </Trust>
      </Inner>
    </Wrap>
  );
}
