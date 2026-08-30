'use client';

import styled from 'styled-components';
import { Container } from '../primitives';

// =====================================================================
//  Home hero — 1:1 with the CARBYN layout (hero.png):
//  a big left-aligned BLACK grotesk headline, a short muted subhead,
//  and two equal rounded photo cards with centered black captions.
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
  /* A touch taller than the original 19 / 10. */
  aspect-ratio: 18 / 10;
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

const Caption = styled.figcaption`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: clamp(1.05rem, 0.9rem + 0.55vw, 1.3rem);
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.text};
`;

export function Hero() {
  return (
    <Wrap id="top">
      <Inner>
        <Headline>
          <span>Organic content &amp;</span>
          <span>marketing that works.</span>
        </Headline>
        <Sub>
          Short-form video, social management, on-location filming, local SEO, and
          strategy — everything a local business needs to grow, all from one team.
        </Sub>

        <Cards>
          <Cell>
            <PhotoCard>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {/* Slightly zoomed out: 94% of the card width, centered, still
                  anchored to the photo's real bottom edge. The photo remains
                  taller than the card, so only the top crop shrinks. */}
              <img
                src="/content.png"
                alt="Organic short-form content example"
                loading="eager"
                style={{
                  top: 'auto',
                  left: '3%',
                  width: '94%',
                  height: 'auto',
                  borderRadius: '20px',
                }}
              />
            </PhotoCard>
            <Caption>Organic content to get more clients</Caption>
          </Cell>

          <Cell>
            <PhotoCard>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand.png"
                alt="Aesthetics and personal brand"
                loading="eager"
                style={{ objectPosition: 'center 35%' }}
              />
            </PhotoCard>
            <Caption>Aesthetics and Personal Brand</Caption>
          </Cell>
        </Cards>
      </Inner>
    </Wrap>
  );
}
