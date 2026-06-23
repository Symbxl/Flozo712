'use client';

import styled from 'styled-components';
import { Container, Section, SectionLabel, H2, Lead } from '../primitives';
import { Reveal } from '../Reveal';

const Wrap = styled(Section).attrs({ $surface: true })`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;
const Inner = styled(Container).attrs({ $wide: true })``;

const Heading = styled(H2)`
  margin-bottom: 1rem;
  & em { font-style: normal; color: ${({ theme }) => theme.colors.accent}; }
`;

const Timeline = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.75rem;
  }
`;

const Phase = styled.article`
  position: relative;
  padding: 2.25rem 1.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.bg};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all ${({ theme }) => theme.motion.base};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
    box-shadow: 0 18px 44px -28px rgba(20, 36, 29, 0.28);
  }
`;

const PhaseTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  & .step {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSize.xs};
    letter-spacing: 0.16em;
    color: ${({ theme }) => theme.colors.accent};
    text-transform: uppercase;
  }
  & .when {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.textDim};
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }
`;

const PhaseTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: -0.015em;
  line-height: 1.1;
  margin: 0;
`;

const PhaseBody = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.65;
`;

const phases = [
  {
    step: 'Step 01',
    when: 'Free Call',
    title: 'Discover',
    body: 'A free consultation to understand your goals, your audience, and whether we are the right fit to tell your story.',
  },
  {
    step: 'Step 02',
    when: 'The Plan',
    title: 'Strategize',
    body: 'Creative planning tailored to your brand, concepts, hooks, and a roadmap tied to the outcomes that matter.',
  },
  {
    step: 'Step 03',
    when: 'The Work',
    title: 'Create',
    body: 'Full production, end to end, scripting, shooting, editing, and graphics, all handled in-house.',
  },
  {
    step: 'Step 04',
    when: 'Go Live',
    title: 'Launch',
    body: 'We publish, distribute, and measure performance, then double down on what works.',
  },
];

export function Process() {
  return (
    <Wrap id="process">
      <Inner>
        <Reveal>
          <SectionLabel>How We Work</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <Heading>
            From first call to <em>final cut</em>.
          </Heading>
        </Reveal>
        <Reveal delay={140}>
          <Lead>A simple, proven process that keeps things clear, collaborative, and on schedule from day one.</Lead>
        </Reveal>

        <Timeline>
          {phases.map((p, i) => (
            <Reveal key={p.step} delay={180 + i * 80}>
              <Phase>
                <PhaseTop>
                  <span className="step">{p.step}</span>
                  <span className="when">{p.when}</span>
                </PhaseTop>
                <PhaseTitle>{p.title}</PhaseTitle>
                <PhaseBody>{p.body}</PhaseBody>
              </Phase>
            </Reveal>
          ))}
        </Timeline>
      </Inner>
    </Wrap>
  );
}
