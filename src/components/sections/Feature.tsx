'use client';

import styled from 'styled-components';
import { Container, Section } from '../primitives';
import { Reveal } from '../Reveal';
import { principles } from '@/data/services';
import { site } from '@/data/site';

// =====================================================================
//  About / "Made in Texas" — the one authentic photograph on the site
//  (the Laser Weld yard) paired with the company story and the three
//  operating principles.
// =====================================================================

const Wrap = styled(Section)`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;
const Inner = styled(Container).attrs({ $wide: true })``;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1.05fr 1fr;
    gap: 4.5rem;
  }
`;

const Photo = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  aspect-ratio: 4 / 3;
  box-shadow: 0 30px 70px -44px rgba(22, 23, 26, 0.45);

  & img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(1.02) contrast(1.03);
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 48%, rgba(10, 10, 12, 0.72) 100%),
      radial-gradient(ellipse at 80% 0%, rgba(235, 64, 54, 0.16) 0%, transparent 55%);
  }
`;

const PhotoTag = styled.span`
  position: absolute;
  z-index: 2;
  left: 1.25rem;
  bottom: 1.15rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #fff;

  & .dot { width: 7px; height: 7px; border-radius: 999px; background: ${({ theme }) => theme.colors.accent}; box-shadow: 0 0 10px 1px ${({ theme }) => theme.colors.accent}; }
`;

const Eyebrow = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  font-size: clamp(2rem, 1.4rem + 2.6vw, 3.25rem);
  line-height: 1.02;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  margin: 1rem 0 1.1rem;
  color: ${({ theme }) => theme.colors.text};

  & span { color: ${({ theme }) => theme.colors.accent}; }
`;

const Copy = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 1.7;
  max-width: 54ch;

  & + & { margin-top: 1rem; }
`;

const Principles = styled.ul`
  list-style: none;
  margin: 2rem 0 0;
  display: grid;
  gap: 1.25rem;
`;

const Principle = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.9rem 1rem;
  padding-top: 1.25rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  & .n {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.72rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.accent};
    padding-top: 0.15rem;
  }
  & h3 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 700;
    font-size: 1.1rem;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
  }
  & p {
    grid-column: 2;
    margin: 0.35rem 0 0;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.92rem;
    line-height: 1.6;
  }
`;

export function Feature() {
  return (
    <Wrap id="about">
      <Inner>
        <Layout>
          <Reveal>
            <Photo>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/portfolio/laser.jpg" alt="The Laser Weld Inc. team at the Katy, Texas facility" loading="lazy" />
              <PhotoTag><span className="dot" /> Katy, Texas — Since 1994</PhotoTag>
            </Photo>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow>Who We Are</Eyebrow>
            </Reveal>
            <Reveal delay={70}>
              <Title>
                American manufacturing, <span>built to compete.</span>
              </Title>
            </Reveal>
            <Reveal delay={120}>
              <Copy>
                Laser Weld Inc. has been one of the leading fabricators in Texas since 1994,
                built on a reputation for service and excellence. We run some of the most
                advanced laser and automation equipment in the country and put it to work
                bringing manufacturing jobs back home.
              </Copy>
              <Copy>
                {site.promise} From a single bracket to a full turn-key build, the same
                standard leaves our floor every time.
              </Copy>
            </Reveal>

            <Reveal delay={160}>
              <Principles>
                {principles.map((p, i) => (
                  <Principle key={p.title}>
                    <span className="n">0{i + 1}</span>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </Principle>
                ))}
              </Principles>
            </Reveal>
          </div>
        </Layout>
      </Inner>
    </Wrap>
  );
}
