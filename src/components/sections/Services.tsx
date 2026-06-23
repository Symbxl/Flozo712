'use client';

import styled from 'styled-components';
import { Container, Section, SectionLabel, H2, Lead } from '../primitives';
import { Reveal } from '../Reveal';
import { services } from '@/data/services';

const Wrap = styled(Section).attrs({ $surface: true })`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;
const Inner = styled(Container).attrs({ $wide: true })``;

const Heading = styled(H2)`
  margin-bottom: 1rem;
  & em {
    font-style: normal;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Grid = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.article`
  position: relative;
  padding: 2rem 1.75rem 2.25rem;
  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  transition: all ${({ theme }) => theme.motion.base};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 3px;
    width: 0;
    background: ${({ theme }) => theme.colors.accent};
    transition: width ${({ theme }) => theme.motion.base};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-4px);
    box-shadow: 0 18px 44px -28px rgba(20, 36, 29, 0.3);
  }
  &:hover::after {
    width: 100%;
  }

  & .num {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSize.xs};
    letter-spacing: 0.16em;
    color: ${({ theme }) => theme.colors.accent};
  }
  & h3 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    letter-spacing: -0.015em;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.15;
  }
  & p {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.6;
  }
`;

export function Services() {
  return (
    <Wrap id="services">
      <Inner>
        <Reveal>
          <SectionLabel>What We Do</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <Heading>
            One studio. <em>Every piece</em> of the puzzle.
          </Heading>
        </Reveal>
        <Reveal delay={140}>
          <Lead>
            From the first idea to the final post, we handle the whole pipeline, so your
            brand shows up consistently, beautifully, everywhere it matters.
          </Lead>
        </Reveal>

        <Grid>
          {services.map((s, i) => (
            <Reveal key={s.num} delay={180 + i * 60}>
              <Card>
                <span className="num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Inner>
    </Wrap>
  );
}
