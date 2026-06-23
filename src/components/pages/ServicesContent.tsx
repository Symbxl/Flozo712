'use client';

import styled from 'styled-components';
import { Container, Section } from '../primitives';
import { Reveal } from '../Reveal';
import { Navigation } from '../Navigation';
import { PageHeader } from '../PageHeader';
import { Footer } from '../sections/Footer';
import { services } from '@/data/services';
import { partnership } from '@/data/caseStudies';
import { site } from '@/data/site';

const Inner = styled(Container).attrs({ $wide: true })``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) { grid-template-columns: repeat(2, 1fr); }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) { grid-template-columns: repeat(4, 1fr); }
`;

const Card = styled.article`
  position: relative;
  padding: 2rem 1.75rem 2.25rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.bg};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: all ${({ theme }) => theme.motion.base};

  &:hover { border-color: ${({ theme }) => theme.colors.accent}; transform: translateY(-4px); box-shadow: 0 18px 44px -28px rgba(20,36,29,0.3); }

  & .num { font-family: ${({ theme }) => theme.fonts.mono}; font-size: 0.72rem; color: ${({ theme }) => theme.colors.accent}; letter-spacing: 0.16em; }
  & h3 { font-family: ${({ theme }) => theme.fonts.display}; font-size: ${({ theme }) => theme.fontSize.lg}; font-weight: ${({ theme }) => theme.fontWeight.bold}; letter-spacing: -0.015em; color: ${({ theme }) => theme.colors.text}; }
  & p { font-size: ${({ theme }) => theme.fontSize.sm}; color: ${({ theme }) => theme.colors.textMuted}; line-height: 1.6; }
`;

const PartnerWrap = styled(Section).attrs({ $surface: true })`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const SectionHead = styled.div`
  max-width: 760px;
  margin-bottom: 3rem;
  & .eyebrow { font-family: ${({ theme }) => theme.fonts.mono}; font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase; color: ${({ theme }) => theme.colors.accent}; }
  & h2 { font-family: ${({ theme }) => theme.fonts.display}; font-weight: ${({ theme }) => theme.fontWeight.black}; font-size: clamp(2rem, 1.4rem + 2.4vw, 3rem); letter-spacing: -0.03em; margin: 0.75rem 0 0.75rem; }
  & p { color: ${({ theme }) => theme.colors.textMuted}; line-height: 1.65; }
`;

const ServiceRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) { grid-template-columns: 1fr 1fr; }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) { grid-template-columns: repeat(4, 1fr); }
`;

const Step = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.accent};
  padding-top: 1.25rem;
  & .n { font-family: ${({ theme }) => theme.fonts.mono}; font-size: 0.8rem; color: ${({ theme }) => theme.colors.accent}; font-weight: 700; }
  & h4 { font-family: ${({ theme }) => theme.fonts.display}; font-weight: 800; font-size: 1.15rem; color: ${({ theme }) => theme.colors.text}; margin: 0.5rem 0 0.6rem; }
  & p { color: ${({ theme }) => theme.colors.textMuted}; font-size: 0.88rem; line-height: 1.6; }
`;

const Cta = styled.div`
  text-align: center;
  & a {
    display: inline-flex; align-items: center; gap: 0.5rem;
    margin-top: 1rem;
    padding: 1rem 1.85rem; border-radius: 999px;
    background: ${({ theme }) => theme.colors.accent}; color: #fff; font-weight: 600;
    transition: all ${({ theme }) => theme.motion.base};
  }
  & a:hover { background: ${({ theme }) => theme.colors.accentHot}; transform: translateY(-2px); }
`;

export function ServicesContent() {
  return (
    <>
      <Navigation />
      <main>
        <PageHeader
          eyebrow="What We Do"
          title="Services"
          sub="One studio for the whole pipeline, from the first idea to the final post. Here's how we help brands show up consistently, beautifully, everywhere it matters."
        />

        <Section>
          <Inner>
            <Reveal>
              <Grid>
                {services.map((s, i) => (
                  <Card key={s.num}>
                    <span className="num">{s.num}</span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </Card>
                ))}
              </Grid>
            </Reveal>
          </Inner>
        </Section>

        <PartnerWrap>
          <Inner>
            <Reveal>
              <SectionHead>
                <span className="eyebrow">Full-Service Partnership</span>
                <h2>Every piece of the puzzle, built in-house.</h2>
                <p>
                  Strategy, production, branding, and distribution under one roof, one partner,
                  one cohesive brand, one system working end to end.
                </p>
              </SectionHead>
            </Reveal>
            <Reveal delay={120}>
              <ServiceRow>
                {partnership.map((s) => (
                  <Step key={s.n}>
                    <span className="n">{s.n}</span>
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </Step>
                ))}
              </ServiceRow>
            </Reveal>
          </Inner>
        </PartnerWrap>

        <Section>
          <Inner>
            <Reveal>
              <Cta>
                <SectionHead style={{ margin: '0 auto', textAlign: 'center' }}>
                  <h2>Ready to build something worth watching?</h2>
                  <p style={{ margin: '0 auto' }}>Tell us about your project, we&apos;d love to help you tell it.</p>
                </SectionHead>
                <a href={site.contact.bookingUrl}>Book Your Discovery Call →</a>
              </Cta>
            </Reveal>
          </Inner>
        </Section>
      </main>
      <Footer />
    </>
  );
}
