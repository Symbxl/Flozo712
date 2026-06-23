'use client';

import styled from 'styled-components';
import { Container, Section, SectionLabel, H2, Lead } from '../primitives';
import { Reveal } from '../Reveal';
import { caseStudies } from '@/data/caseStudies';

const Wrap = styled(Section)``;
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
  gap: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 2.75rem 2rem 2.25rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.bgElevated}, ${({ theme }) => theme.colors.bg});
  overflow: hidden;
  transition: all ${({ theme }) => theme.motion.base};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-5px);
    box-shadow: 0 24px 60px -34px rgba(20, 36, 29, 0.4);
  }
  &:hover .arrow { transform: translateX(4px); }

  & .metric {
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: ${({ theme }) => theme.fontWeight.black};
    font-size: ${({ theme }) => theme.fontSize['3xl']};
    letter-spacing: -0.04em;
    line-height: 1;
    color: ${({ theme }) => theme.colors.accent};
  }
  & .client {
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.colors.text};
    margin-top: 0.5rem;
  }
  & .desc {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.6;
  }
  & .link {
    margin-top: auto;
    padding-top: 1.25rem;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSize.xs};
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.text};
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
  & .arrow { transition: transform ${({ theme }) => theme.motion.base}; }
`;

export function Results() {
  return (
    <Wrap id="work">
      <Inner>
        <Reveal>
          <SectionLabel>Selected Work</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <Heading>
            From <em>invisible</em> to viral.
          </Heading>
        </Reveal>
        <Reveal delay={140}>
          <Lead>Past projects, real results. We&apos;ve taken brands from a standing start to tens of millions of views, and turned that attention into a real, loyal audience.</Lead>
        </Reveal>

        <Grid>
          {caseStudies.map((c, i) => (
            <Reveal key={c.id} delay={180 + i * 90}>
              <Card href="#case-study">
                <span className="metric">{c.headlineMetric}</span>
                <span className="client">{c.client}</span>
                <span className="desc">{c.tagline}</span>
                <span className="link">
                  View case study <span className="arrow">→</span>
                </span>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Inner>
    </Wrap>
  );
}
