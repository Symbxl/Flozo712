'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { Container, Section, SectionLabel, H2, Lead } from '../primitives';
import { Reveal } from '../Reveal';
import { site } from '@/data/site';

// Flat base charcoal (theme.colors.bg) to match the "One facility" band and the
// hero — the whole home page reads as one continuous surface.
const Wrap = styled(Section)``;
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
    q: 'What materials and processes do you work with?',
    a: 'Steel, stainless, and aluminum across MIG, TIG, and laser welding, plus laser and plate cutting, CNC tube and plate bending, 3D tube profiling, machining, coating, and laser cleaning, all under one roof.',
  },
  {
    q: 'Do you handle small orders, or only large production runs?',
    a: 'Both. From a single one-off part or prototype to production runs in the thousands, from big to small, we do it all. The same quality standard applies no matter the quantity.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Send us your prints, a CAD file, or even a rough sketch, along with material, quantity, and your timeline. We review the job, engineer it for manufacturability, and get you a fast, honest quote back as swiftly as possible.',
  },
  {
    q: 'How fast can you turn a job around?',
    a: 'Lead time depends on scope and material availability, but running every process in-house lets us move fast, no waiting on outside vendors. We ship an average of 1,754 parts a day and will commit to a firm schedule up front.',
  },
  {
    q: 'Do you deliver, and which industries do you serve?',
    a: `We deliver on our own trucks and serve oil & gas, aerospace, wastewater, data centers, material handling, and structural fabrication. We are based in ${site.location} and ship across Texas and beyond.`,
  },
  {
    q: 'Can you help engineer or improve my part?',
    a: 'Yes. Our design and engineering team offers design-for-manufacture support to help you build the part faster, weld it stronger, and lower the cost, before a single cut is made.',
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
              <Lead>Everything you need to know before you send us your next job.</Lead>
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
