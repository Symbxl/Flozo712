'use client';

import styled from 'styled-components';
import { Container, Section } from '../primitives';
import { Reveal } from '../Reveal';

const Wrap = styled(Section)``;
const Inner = styled(Container).attrs({ $wide: true })``;

const Head = styled.div`
  max-width: 920px;
  margin: 0 auto;
  text-align: center;
`;

const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1.75rem;
`;

const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-top: 4.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Pillar = styled.div`
  padding: 2.25rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.bg};
  transition: all ${({ theme }) => theme.motion.base};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
    box-shadow: 0 16px 40px -28px rgba(20, 36, 29, 0.22);
  }

  & .num {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.72rem;
    color: ${({ theme }) => theme.colors.accent};
    letter-spacing: 0.16em;
  }
  & h3 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text};
    margin: 0.7rem 0 0.5rem;
    letter-spacing: -0.01em;
  }
  & p {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.6;
  }
`;

const pillars = [
  { num: '01', title: 'Tell the Story', body: 'Documentary-grade storytelling people actually remember.' },
  { num: '02', title: 'Build the Brand', body: 'A look and voice that stay consistent across every frame.' },
  { num: '03', title: 'Drive Results', body: 'Beautiful imagery tied to reach, engagement, and inbound.' },
];

export function Mission() {
  return (
    <Wrap id="mission">
      <Inner>
        <Head>
          <Reveal>
            <Eyebrow>Our Mission</Eyebrow>
          </Reveal>
        </Head>

        <Reveal delay={180}>
          <PillarsGrid>
            {pillars.map((p) => (
              <Pillar key={p.num}>
                <span className="num">{p.num}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Pillar>
            ))}
          </PillarsGrid>
        </Reveal>
      </Inner>
    </Wrap>
  );
}
