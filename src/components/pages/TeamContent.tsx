'use client';

import styled from 'styled-components';
import { Container, Section } from '../primitives';
import { Reveal } from '../Reveal';
import { Navigation } from '../Navigation';
import { PageHeader } from '../PageHeader';
import { Footer } from '../sections/Footer';
import { team, teamBanner } from '@/data/team';
import { site } from '@/data/site';

const Inner = styled(Container).attrs({ $wide: true })``;

const Banner = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 4.5rem;
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 36px 80px -54px rgba(20, 36, 29, 0.5);
  aspect-ratio: 16 / 9;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) { aspect-ratio: 21 / 9; }

  & img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
  &::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 55%, rgba(8,21,17,0.55)); }
`;

const BannerCap = styled.span`
  position: absolute;
  z-index: 2;
  left: 1.5rem;
  bottom: 1.25rem;
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) { grid-template-columns: repeat(2, 1fr); }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) { grid-template-columns: repeat(4, 1fr); }
`;

const Member = styled.article`
  & .photo {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 5;
    border-radius: ${({ theme }) => theme.radius.lg};
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.bgSurface};
  }
  & .photo img {
    position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
    transition: transform ${({ theme }) => theme.motion.slow};
  }
  &:hover .photo img { transform: scale(1.04); }

  & .role { font-family: ${({ theme }) => theme.fonts.display}; font-weight: ${({ theme }) => theme.fontWeight.bold}; font-size: ${({ theme }) => theme.fontSize.lg}; color: ${({ theme }) => theme.colors.text}; margin-top: 1.1rem; letter-spacing: -0.01em; }
  & .name { font-family: ${({ theme }) => theme.fonts.mono}; font-size: 0.74rem; letter-spacing: 0.14em; text-transform: uppercase; color: ${({ theme }) => theme.colors.accent}; margin-top: 0.35rem; }
  & .bio { font-size: ${({ theme }) => theme.fontSize.sm}; color: ${({ theme }) => theme.colors.textMuted}; line-height: 1.6; margin-top: 0.65rem; }
`;

const Cta = styled.div`
  text-align: center;
  margin-top: 5rem;
  & h2 { font-family: ${({ theme }) => theme.fonts.display}; font-weight: ${({ theme }) => theme.fontWeight.black}; font-size: clamp(1.75rem, 1.3rem + 2vw, 2.5rem); letter-spacing: -0.03em; margin: 0 0 0.75rem; }
  & p { color: ${({ theme }) => theme.colors.textMuted}; margin: 0 auto 1.5rem; max-width: 48ch; }
  & a {
    display: inline-flex; align-items: center; gap: 0.5rem;
    padding: 1rem 1.85rem; border-radius: 999px;
    background: ${({ theme }) => theme.colors.accent}; color: #fff; font-weight: 600;
    transition: all ${({ theme }) => theme.motion.base};
  }
  & a:hover { background: ${({ theme }) => theme.colors.accentHot}; transform: translateY(-2px); }
`;

export function TeamContent() {
  return (
    <>
      <Navigation />
      <main>
        <PageHeader
          eyebrow="The Team"
          title="Meet the team"
          sub="A small, obsessed crew of storytellers, shooters, and editors who care as much about your results as you do."
        />

        <Section>
          <Inner>
            <Reveal>
              <Banner>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={teamBanner} alt="The Viridian Films crew on set" loading="lazy" />
                <BannerCap>On set together</BannerCap>
              </Banner>
            </Reveal>

            <Reveal delay={80}>
              <Grid>
                {team.map((m, i) => (
                  <Member key={i}>
                    <div className="photo">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={m.photo} alt={m.name ? `${m.name}, ${m.role}` : m.role} loading="lazy" />
                    </div>
                    <div className="role">{m.role}</div>
                    {m.name && <div className="name">{m.name}</div>}
                    <p className="bio">{m.bio}</p>
                  </Member>
                ))}
              </Grid>
            </Reveal>

            <Reveal delay={120}>
              <Cta>
                <h2>Want to work with us?</h2>
                <p>Let&apos;s make something worth watching together.</p>
                <a href={site.contact.bookingUrl}>Book a Discovery Call →</a>
              </Cta>
            </Reveal>
          </Inner>
        </Section>
      </main>
      <Footer />
    </>
  );
}
