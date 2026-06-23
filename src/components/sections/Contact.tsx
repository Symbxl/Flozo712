'use client';

import styled from 'styled-components';
import { Container, Section } from '../primitives';
import { Reveal } from '../Reveal';
import { site } from '@/data/site';

const Wrap = styled(Section)`
  padding-bottom: 0;
`;
const Inner = styled(Container).attrs({ $wide: true })``;

// A contained, solid deep-forest card, no vertical fade-to-black.
const Card = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;
  padding: 4.5rem 1.75rem;
  text-align: center;
  background:
    radial-gradient(ellipse at 18% 0%, rgba(46, 125, 91, 0.4) 0%, transparent 55%),
    ${({ theme }) => theme.colors.bgInverse};
  color: ${({ theme }) => theme.colors.textInverse};
  box-shadow: 0 40px 90px -56px rgba(20, 36, 29, 0.6);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 6rem 2rem;
  }
`;

const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.78);
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  font-size: clamp(2.25rem, 1.5rem + 3.6vw, 4rem);
  line-height: 1.0;
  letter-spacing: -0.04em;
  margin: 0 auto;
  max-width: 18ch;
  & span { color: ${({ theme }) => theme.colors.accent}; }
`;

const Sub = styled.p`
  margin: 1.5rem auto 0;
  max-width: 52ch;
  color: rgba(255, 255, 255, 0.78);
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 1.6;
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.85rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2.25rem;
`;

const Primary = styled.a`
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 1.05rem 2rem; border-radius: 999px;
  background: ${({ theme }) => theme.colors.accent}; color: #fff;
  font-weight: 600; font-size: 0.95rem;
  transition: all ${({ theme }) => theme.motion.base};
  &:hover { background: #fff; color: ${({ theme }) => theme.colors.accentHot}; transform: translateY(-2px); }
`;

const Ghost = styled.a`
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 1.05rem 2rem; border-radius: 999px;
  background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.3); color: #fff;
  font-weight: 600; font-size: 0.95rem;
  transition: all ${({ theme }) => theme.motion.base};
  &:hover { border-color: #fff; background: rgba(255, 255, 255, 0.16); transform: translateY(-2px); }
`;

const Details = styled.div`
  margin-top: 2.75rem;
  display: flex;
  gap: 1rem 2.5rem;
  justify-content: center;
  flex-wrap: wrap;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.72);

  & a:hover { color: #fff; }
`;

export function Contact() {
  return (
    <Wrap id="contact">
      <Inner>
        <Reveal>
          <Card>
            <Eyebrow>Let&apos;s Work Together</Eyebrow>
            <Title>
              Let&apos;s make something <span>worth watching.</span>
            </Title>
            <Sub>
              Whether it&apos;s a brand film, a content engine, or a full partnership, tell us
              about the story you want to tell. We&apos;d love to help you tell it.
            </Sub>
            <Buttons>
              <Primary href={site.contact.bookingUrl}>Book Your Discovery Call →</Primary>
              <Ghost href={`mailto:${site.contact.email}`}>Email Us</Ghost>
            </Buttons>
            <Details>
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              <a href={site.contact.phoneHref}>{site.contact.phone}</a>
            </Details>
          </Card>
        </Reveal>
      </Inner>
    </Wrap>
  );
}
