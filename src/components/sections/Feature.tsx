'use client';

import styled from 'styled-components';
import { Container, Section } from '../primitives';
import { Reveal } from '../Reveal';

const Wrap = styled(Section)``;
const Inner = styled(Container).attrs({ $wide: true })``;

const Band = styled.div`
  position: relative;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 40px 90px -54px rgba(20, 36, 29, 0.5);
  aspect-ratio: 16 / 10;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) { aspect-ratio: 21 / 9; }

  & img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(8, 21, 17, 0.05) 0%, transparent 35%, rgba(8, 21, 17, 0.75) 100%);
  }
`;

const Caption = styled.div`
  position: absolute;
  z-index: 2;
  left: 1.5rem;
  right: 1.5rem;
  bottom: 1.5rem;
  color: #fff;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    left: 2.5rem;
    bottom: 2.25rem;
  }

  & .eyebrow {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.8);
  }
  & h2 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: ${({ theme }) => theme.fontWeight.black};
    font-size: clamp(1.75rem, 1.2rem + 2.6vw, 3rem);
    letter-spacing: -0.03em;
    line-height: 1;
    margin: 0.6rem 0 0;
    color: #fff;
    max-width: 18ch;
  }
`;

export function Feature() {
  return (
    <Wrap id="feature">
      <Inner>
        <Reveal>
          <Band>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/portfolio/portfolio-5.webp" alt="Viridian Films on set" loading="lazy" />
            <Caption>
              <span className="eyebrow">On Set</span>
              <h2>Obsessed with the craft behind every frame.</h2>
            </Caption>
          </Band>
        </Reveal>
      </Inner>
    </Wrap>
  );
}
