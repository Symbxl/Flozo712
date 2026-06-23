'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { Container, Section, SectionLabel, H2, Lead } from '../primitives';
import { Reveal } from '../Reveal';
import { site } from '@/data/site';

const Wrap = styled(Section).attrs({ $surface: true })`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;
const Inner = styled(Container).attrs({ $wide: true })``;

// Editorial split: heading rail on the left, the accordion on the right.
const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 0.85fr 1.15fr;
    gap: 4.5rem;
    align-items: start;
  }
`;

const Intro = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    position: sticky;
    top: 7rem;
  }
`;

const Heading = styled(H2)`
  margin-bottom: 1.25rem;
  & em { font-style: normal; color: ${({ theme }) => theme.colors.accent}; }
`;

const Aside = styled.p`
  margin-top: 1.75rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;

  & a {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    transition: color ${({ theme }) => theme.motion.fast};
  }
  & a:hover { color: ${({ theme }) => theme.colors.accentHot}; }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Item = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Question = styled.button<{ $open: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.5rem 0;
  text-align: left;
  cursor: pointer;
  background: transparent;
  border: 0;
  color: ${({ theme, $open }) => ($open ? theme.colors.accent : theme.colors.text)};
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: -0.01em;
  line-height: 1.3;
  transition: color ${({ theme }) => theme.motion.fast};

  &:hover { color: ${({ theme }) => theme.colors.accent}; }
`;

const Icon = styled.span<{ $open: boolean }>`
  position: relative;
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1.25rem;
    height: 2px;
    background: currentColor;
    transform: translate(-50%, -50%);
    transition: transform ${({ theme }) => theme.motion.base};
  }
  &::after {
    transform: translate(-50%, -50%) rotate(${({ $open }) => ($open ? '0deg' : '90deg')});
  }
`;

// 0fr -> 1fr grid trick gives a smooth, content-aware open/close animation.
const Panel = styled.div<{ $open: boolean }>`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? '1fr' : '0fr')};
  transition: grid-template-rows ${({ theme }) => theme.motion.base};
`;

const PanelInner = styled.div`
  overflow: hidden;
`;

const Answer = styled.p`
  padding-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
  max-width: 60ch;
`;

const faqs = [
  {
    q: 'What kind of videos do you produce?',
    a: 'Brand films, social content, testimonials, product launches, and ongoing content engines for digital platforms. Whatever the format, every frame is built around a clear, intentional goal, not just footage for the sake of it.',
  },
  {
    q: 'How much does a project cost?',
    a: 'It depends on scope, deliverables, and how often you need content. We tailor every engagement, from a single brand film to a full monthly partnership, so the budget maps to the outcomes that matter. Book a discovery call and we will scope it together.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Most one-off projects run two to four weeks from kickoff to final cut, depending on complexity and shoot logistics. Ongoing partnerships work on a recurring schedule we set together so you always know what is coming and when.',
  },
  {
    q: 'Do you handle everything in-house?',
    a: 'Yes. Scripting, shooting, editing, and graphics are all handled end to end by our team. That keeps the story consistent, the process simple, and the quality high from the first call to launch.',
  },
  {
    q: 'Where are you based, and do you travel?',
    a: `We are based in ${site.location}, and we regularly travel for shoots. If your project takes us somewhere new, we will fold the logistics into the plan up front, no surprises.`,
  },
  {
    q: 'How do we get started?',
    a: 'Book a free discovery call. We will talk through your goals, your audience, and whether we are the right fit, then map out a creative plan and a clear roadmap before any cameras roll.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Wrap id="faq">
      <Inner>
        <Layout>
          <Intro>
            <Reveal>
              <SectionLabel>FAQ</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <Heading>
                Questions, <em>answered.</em>
              </Heading>
            </Reveal>
            <Reveal delay={140}>
              <Lead>Everything you need to know before we make something worth watching together.</Lead>
            </Reveal>
            <Reveal delay={200}>
              <Aside>
                Still have a question? <a href={site.contact.bookingUrl}>Get in touch</a> and we will get right back to you.
              </Aside>
            </Reveal>
          </Intro>

          <Reveal delay={120}>
            <List>
              {faqs.map((item, i) => {
                const isOpen = open === i;
                const panelId = `faq-panel-${i}`;
                const buttonId = `faq-button-${i}`;
                return (
                  <Item key={item.q}>
                    <Question
                      id={buttonId}
                      type="button"
                      $open={isOpen}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      {item.q}
                      <Icon $open={isOpen} aria-hidden="true" />
                    </Question>
                    <Panel
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      $open={isOpen}
                    >
                      <PanelInner>
                        <Answer>{item.a}</Answer>
                      </PanelInner>
                    </Panel>
                  </Item>
                );
              })}
            </List>
          </Reveal>
        </Layout>
      </Inner>
    </Wrap>
  );
}
