'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../primitives';
import { Reveal } from '../Reveal';
import { caseStudies, partnership } from '@/data/caseStudies';
import { site } from '@/data/site';

// =====================================================================
// Case Study, a generalized version of the Mystic "LaserWeld" layout.
// Tabs across the top switch clients; each section renders only if the
// active case study has data for it (see src/data/caseStudies.ts).
// =====================================================================

const Wrap = styled.section`
  position: relative;
  background:
    radial-gradient(ellipse at 80% 0%, rgba(46, 125, 91, 0.05) 0%, transparent 45%),
    radial-gradient(ellipse at 0% 90%, rgba(46, 125, 91, 0.04) 0%, transparent 40%),
    ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  padding: 6rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) { padding: 8rem 0; }
`;

const Inner = styled(Container).attrs({ $wide: true })``;

const Tag = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 2rem;
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;

`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-bottom: 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin-bottom: 3.5rem;
  }
`;

const TabBtn = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  width: 100%;
  padding: 1.05rem 1.35rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid
    ${({ theme, $active }) => ($active ? theme.colors.accent : theme.colors.border)};
  background: ${({ theme, $active }) => ($active ? theme.colors.accent : theme.colors.bg)};
  color: ${({ theme, $active }) => ($active ? '#fff' : theme.colors.text)};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: 1.05rem;
  line-height: 1.1;
  transition: all ${({ theme }) => theme.motion.fast};

  & .m {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.8rem;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    opacity: 0.85;
    white-space: nowrap;
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-1px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: auto;
    justify-content: center;
    align-items: baseline;
    gap: 0.6rem;
    padding: 0.9rem 1.5rem;
    font-size: 1rem;

    & .m { font-size: 0.74rem; }
  }
`;

const Hero = styled.div`
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
`;

const Eyebrow = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  margin-bottom: 1rem;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;
  flex-wrap: wrap;
`;

const Badge = styled.span`
  width: 64px; height: 64px;
  border-radius: 16px;
  display: inline-flex; align-items: center; justify-content: center;
  background: ${({ theme }) => theme.colors.bgInverse};
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  font-size: 1.6rem;
  box-shadow: 0 8px 24px -14px rgba(20, 36, 29, 0.5);
`;

const BigTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  font-size: clamp(2.75rem, 1.6rem + 4.5vw, 4.5rem);
  line-height: 1;
  letter-spacing: -0.04em;
  margin: 0;
`;

const SubHeadline = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: clamp(1.4rem, 1.1rem + 1.4vw, 2.1rem);
  line-height: 1.18;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text};
  max-width: 24ch;
  margin: 1.75rem auto 0;
`;

const HeroSub = styled.p`
  margin: 1.5rem auto 0;
  max-width: 62ch;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1.05rem;
  line-height: 1.6;
`;

const HeroBtns = styled.div`
  display: flex;
  gap: 0.85rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const SolidBtn = styled.a`
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.9rem 1.5rem; border-radius: 999px;
  background: ${({ theme }) => theme.colors.accent}; color: #fff;
  font-weight: 600; font-size: 0.9rem;
  transition: all 150ms ease;
  &:hover { background: ${({ theme }) => theme.colors.accentHot}; transform: translateY(-1px); }
`;

const GhostBtn = styled.a`
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.9rem 1.5rem; border-radius: 999px;
  background: #fff; color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.borderStrong}; font-weight: 600; font-size: 0.9rem;
  transition: border-color 150ms ease;
  &:hover { border-color: ${({ theme }) => theme.colors.accent}; color: ${({ theme }) => theme.colors.accent}; }
`;

const Period = styled.div`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textDim};
  margin: 3rem 0 2rem;
`;

const Pill = styled.span`
  display: inline-flex; align-items: center; gap: 0.2rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.68rem; font-weight: 700;
  color: ${({ theme }) => theme.colors.growth}; background: ${({ theme }) => theme.colors.growthSoft};
  border-radius: 999px; padding: 0.2rem 0.5rem;
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 13rem), 1fr));
  gap: 1.25rem;
`;

const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 18px;
  padding: 1.75rem;
  box-shadow: 0 10px 30px -24px rgba(20, 36, 29, 0.25);

  & .top { display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; }
  & .label { font-family: ${({ theme }) => theme.fonts.mono}; font-size: 0.66rem; letter-spacing: 0.14em; text-transform: uppercase; color: ${({ theme }) => theme.colors.textDim}; max-width: 12ch; line-height: 1.4; }
  & .value { font-family: ${({ theme }) => theme.fonts.display}; font-weight: 800; font-size: 2.25rem; letter-spacing: -0.03em; color: ${({ theme }) => theme.colors.text}; margin-top: 1.5rem; line-height: 1; }
`;

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin: 5rem 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) { grid-template-columns: 1fr 1fr; gap: 4rem; }
`;

const Block = styled.div`
  & h3 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 800; font-size: clamp(1.5rem, 1.1rem + 1.6vw, 2.1rem);
    letter-spacing: -0.025em; line-height: 1.1; margin: 0 0 1rem; color: ${({ theme }) => theme.colors.text};
  }
  & p { color: ${({ theme }) => theme.colors.textMuted}; line-height: 1.7; font-size: 0.98rem; }
`;

const SectionHead = styled.div`
  margin: 5rem 0 2.5rem;
  & h3 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 800; font-size: clamp(1.9rem, 1.3rem + 2.4vw, 3rem);
    letter-spacing: -0.03em; margin: 0 0 0.75rem; color: ${({ theme }) => theme.colors.text};
  }
  & p { color: ${({ theme }) => theme.colors.textMuted}; max-width: 64ch; line-height: 1.6; margin: 0; }
  &.center { text-align: center; & p { margin: 0 auto; } }
`;

const PlatformGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) { grid-template-columns: 1fr 1fr; }
`;

const PlatformCard = styled.div`
  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 12px 36px -28px rgba(20, 36, 29, 0.28);

  & .phead { display: flex; align-items: center; gap: 0.85rem; padding-bottom: 1.5rem; }
  & .pname { font-family: ${({ theme }) => theme.fonts.display}; font-weight: 800; font-size: 1.2rem; color: ${({ theme }) => theme.colors.text}; line-height: 1.1; }
  & .phandle { color: ${({ theme }) => theme.colors.textDim}; font-size: 0.8rem; }
  & .pstats { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem 1.5rem; }
  & .slabel { font-family: ${({ theme }) => theme.fonts.mono}; font-size: 0.6rem; letter-spacing: 0.14em; text-transform: uppercase; color: ${({ theme }) => theme.colors.textDim}; }
  & .svalue { font-family: ${({ theme }) => theme.fonts.display}; font-weight: 800; font-size: 1.5rem; color: ${({ theme }) => theme.colors.text}; letter-spacing: -0.02em; margin: 0.2rem 0; line-height: 1; }
`;

const PIcon = styled.span<{ $bg: string }>`
  flex-shrink: 0;
  width: 44px; height: 44px; border-radius: 12px;
  display: inline-flex; align-items: center; justify-content: center;
  background: ${({ $bg }) => $bg};
  color: #fff; font-weight: 800; font-size: 1.1rem;
`;

const MediaHead = styled.div`
  text-align: center;
  margin: 3.5rem 0 1.5rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textDim};
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  max-width: 1100px;
  margin: 0 auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) { grid-template-columns: repeat(3, 1fr); }
`;

const VideoFrame = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 16px 40px -28px rgba(20, 36, 29, 0.35);
  background: #000;
  & iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
`;

const ShortsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 720px;
  margin: 0 auto;
`;

const ShortFrame = styled.div`
  position: relative;
  aspect-ratio: 9 / 16;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 16px 40px -28px rgba(20, 36, 29, 0.35);
  background: #000;
  & iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
`;

const ChannelCta = styled.div`
  text-align: center;
  margin-top: 1.75rem;
`;

const ResultStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 14rem), 1fr));
  gap: 1.5rem;
  margin-top: 2.5rem;
`;

const ResultStat = styled.div`
  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 18px;
  padding: 2rem;
  text-align: center;
  & .value { font-family: ${({ theme }) => theme.fonts.display}; font-weight: 800; font-size: 2.75rem; letter-spacing: -0.03em; color: ${({ theme }) => theme.colors.text}; line-height: 1; }
  & .label { font-family: ${({ theme }) => theme.fonts.mono}; font-size: 0.68rem; letter-spacing: 0.16em; text-transform: uppercase; color: ${({ theme }) => theme.colors.textDim}; margin: 0.75rem 0 0.6rem; }
`;

const ComingSoon = styled.div`
  margin: 4rem auto 0;
  max-width: 620px;
  text-align: center;
  padding: 2.5rem 2rem;
  border: 1px dashed ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radius.lg};
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.95rem;
  line-height: 1.6;
`;

const LinkRow = styled.div`
  display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; margin-top: 1.25rem;
  & a {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase;
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 999px; padding: 0.4rem 0.85rem;
    transition: all 150ms ease;
  }
  & a:hover { border-color: ${({ theme }) => theme.colors.accent}; color: ${({ theme }) => theme.colors.accent}; }
`;

// ---- Shared partnership block --------------------------------------
const PartnerHead = styled(SectionHead)``;
const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2.5rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) { grid-template-columns: 1fr 1fr; }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) { grid-template-columns: repeat(4, 1fr); }
`;
const ServiceCard = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.accent};
  padding-top: 1.25rem;
  & .n { font-family: ${({ theme }) => theme.fonts.mono}; font-size: 0.8rem; color: ${({ theme }) => theme.colors.accent}; font-weight: 700; }
  & h4 { font-family: ${({ theme }) => theme.fonts.display}; font-weight: 800; font-size: 1.15rem; color: ${({ theme }) => theme.colors.text}; margin: 0.5rem 0 0.6rem; letter-spacing: -0.01em; }
  & p { color: ${({ theme }) => theme.colors.textMuted}; font-size: 0.88rem; line-height: 1.6; margin: 0; }
`;

const FinalCta = styled.div`
  text-align: center;
  margin: 5rem auto 0;
  max-width: 640px;
  & h3 { font-family: ${({ theme }) => theme.fonts.display}; font-weight: 800; font-size: clamp(1.75rem, 1.3rem + 2vw, 2.5rem); letter-spacing: -0.03em; color: ${({ theme }) => theme.colors.text}; margin: 0 0 0.85rem; }
  & p { color: ${({ theme }) => theme.colors.textMuted}; line-height: 1.6; margin: 0 auto 1.75rem; }
  & .btns { display: flex; gap: 0.85rem; justify-content: center; flex-wrap: wrap; }
`;

function StatPillView({ pct }: { pct?: string }) {
  if (!pct) return null;
  return <Pill>↑ {pct}</Pill>;
}

export function CaseStudy() {
  const [active, setActive] = useState(0);
  const cs = caseStudies[active];

  const hasHeroStats = !!cs.heroStats?.length;
  const hasChallenge = !!cs.challenge || !!cs.approach;
  const hasPlatforms = !!cs.platforms?.length;
  const hasVideos = !!cs.videos?.length;
  const hasShorts = !!cs.shorts?.length;
  const hasResult = !!cs.resultStats?.length || !!cs.result;
  const isComplete = hasHeroStats || hasPlatforms || hasVideos || hasResult;

  return (
    <Wrap id="case-study">
      <Inner>
        <Reveal>
          <Tag>Case Study</Tag>
        </Reveal>

        <Reveal delay={60}>
          <Tabs role="tablist">
            {caseStudies.map((c, i) => (
              <TabBtn
                key={c.id}
                $active={i === active}
                onClick={() => setActive(i)}
                role="tab"
                aria-selected={i === active}
              >
                {c.client} <span className="m">{c.headlineMetric}</span>
              </TabBtn>
            ))}
          </Tabs>
        </Reveal>

        {/* Hero */}
        <Hero key={cs.id}>
          <Reveal>
            <Eyebrow>Client Case Study</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <TitleRow>
              <Badge>{cs.client.charAt(0)}</Badge>
              <BigTitle>{cs.client}</BigTitle>
            </TitleRow>
          </Reveal>
          <Reveal delay={110}>
            <SubHeadline>{cs.tagline}</SubHeadline>
          </Reveal>
          <Reveal delay={150}>
            <HeroSub>{cs.intro}</HeroSub>
          </Reveal>
          <Reveal delay={200}>
            <HeroBtns>
              <SolidBtn href={site.contact.bookingUrl}>Work With Us →</SolidBtn>
              {cs.channel && (
                <GhostBtn href={cs.channel.url} target="_blank" rel="noreferrer">
                  {cs.channel.ctaLabel} →
                </GhostBtn>
              )}
            </HeroBtns>
          </Reveal>
        </Hero>

        {cs.reportingPeriod && (
          <Reveal delay={120}>
            <Period>Reporting period: {cs.reportingPeriod}</Period>
          </Reveal>
        )}

        {hasHeroStats && (
          <Reveal delay={160}>
            <StatGrid>
              {cs.heroStats!.map((s) => (
                <StatCard key={s.label}>
                  <div className="top">
                    <span className="label">{s.label}</span>
                    <StatPillView pct={s.pct} />
                  </div>
                  <div className="value">{s.value}</div>
                </StatCard>
              ))}
            </StatGrid>
          </Reveal>
        )}

        {hasChallenge && (
          <TwoCol>
            {cs.challenge && (
              <Reveal>
                <Block>
                  <Eyebrow>The Challenge</Eyebrow>
                  <h3>{cs.challenge.heading}</h3>
                  <p>{cs.challenge.body}</p>
                </Block>
              </Reveal>
            )}
            {cs.approach && (
              <Reveal delay={120}>
                <Block>
                  <Eyebrow>The Approach</Eyebrow>
                  <h3>{cs.approach.heading}</h3>
                  <p>{cs.approach.body}</p>
                </Block>
              </Reveal>
            )}
          </TwoCol>
        )}

        {hasPlatforms && (
          <>
            <Reveal>
              <SectionHead>
                <Eyebrow>Platform Breakdown</Eyebrow>
                <h3>Growth across every channel.</h3>
                <p>Every platform grew from near-zero into a consistent, compounding audience.</p>
              </SectionHead>
            </Reveal>
            <PlatformGrid>
              {cs.platforms!.map((p, i) => (
                <Reveal key={p.name} delay={120 + i * 80}>
                  <PlatformCard>
                    <div className="phead">
                      <PIcon $bg={p.bg}>{p.glyph}</PIcon>
                      <div>
                        <div className="pname">{p.name}</div>
                        <div className="phandle">{p.handle}</div>
                      </div>
                    </div>
                    <div className="pstats">
                      {p.stats.map((st) => (
                        <div key={st.label}>
                          <div className="slabel">{st.label}</div>
                          <div className="svalue">{st.value}</div>
                          <StatPillView pct={st.pct} />
                        </div>
                      ))}
                    </div>
                  </PlatformCard>
                </Reveal>
              ))}
            </PlatformGrid>
          </>
        )}

        {(hasVideos || hasShorts) && (
          <>
            {cs.channel && (
              <Reveal>
                <SectionHead className="center" style={{ marginTop: '5rem' }}>
                  <Eyebrow>The Work</Eyebrow>
                  <h3>{cs.channel.heading}</h3>
                  <p>{cs.channel.body}</p>
                </SectionHead>
              </Reveal>
            )}

            {hasVideos && (
              <Reveal delay={120}>
                <MediaHead>Featured videos</MediaHead>
                <VideoGrid>
                  {cs.videos!.map((v) => (
                    <VideoFrame key={v.id}>
                      <iframe
                        src={`https://www.youtube.com/embed/${v.id}${v.start ? `?start=${v.start}` : ''}`}
                        title={`${cs.client} video`}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </VideoFrame>
                  ))}
                </VideoGrid>
              </Reveal>
            )}

            {hasShorts && (
              <Reveal delay={140}>
                <MediaHead>Shorts</MediaHead>
                <ShortsRow>
                  {cs.shorts!.map((id) => (
                    <ShortFrame key={id}>
                      <iframe
                        src={`https://www.youtube.com/embed/${id}`}
                        title={`${cs.client} Short`}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </ShortFrame>
                  ))}
                </ShortsRow>
              </Reveal>
            )}

            {cs.channel && (
              <Reveal delay={120}>
                <ChannelCta>
                  <SolidBtn href={cs.channel.url} target="_blank" rel="noreferrer">
                    {cs.channel.ctaLabel} →
                  </SolidBtn>
                </ChannelCta>
              </Reveal>
            )}
          </>
        )}

        {hasResult && (
          <>
            <Reveal>
              <SectionHead className="center" style={{ marginTop: '5rem' }}>
                <Eyebrow>The Result</Eyebrow>
                <h3>{cs.result?.heading ?? 'Compounding growth that keeps going.'}</h3>
                {cs.result?.body && <p>{cs.result.body}</p>}
              </SectionHead>
            </Reveal>
            {!!cs.resultStats?.length && (
              <Reveal delay={120}>
                <ResultStats>
                  {cs.resultStats.map((s) => (
                    <ResultStat key={s.label}>
                      <div className="value">{s.value}</div>
                      <div className="label">{s.label}</div>
                      <StatPillView pct={s.pct} />
                    </ResultStat>
                  ))}
                </ResultStats>
              </Reveal>
            )}
          </>
        )}

        {/* Scaffolded case studies (no data yet) */}
        {!isComplete && (
          <Reveal>
            <ComingSoon>
              The full breakdown for <strong>{cs.client}</strong>, metrics, platform growth,
              and featured videos, is on the way. In the meantime, take a look:
              {cs.links && (
                <LinkRow>
                  {cs.links.map((l) => (
                    <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
                      {l.label} ↗
                    </a>
                  ))}
                </LinkRow>
              )}
            </ComingSoon>
          </Reveal>
        )}

        {/* Shared: Full-Service Partnership (01–04) */}
        <Reveal>
          <PartnerHead style={{ marginTop: '6rem' }}>
            <Eyebrow>Full-Service Partnership</Eyebrow>
            <h3>Every piece of the puzzle, built in-house.</h3>
            <p>
              We don&apos;t just produce video. We deliver a full suite of services, strategy,
              production, branding, and distribution, under one roof. One partner, one cohesive
              brand, one system working end-to-end.
            </p>
          </PartnerHead>
        </Reveal>
        <ServiceGrid>
          {partnership.map((s, i) => (
            <Reveal key={s.n} delay={120 + i * 70}>
              <ServiceCard>
                <span className="n">{s.n}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </ServiceCard>
            </Reveal>
          ))}
        </ServiceGrid>

        <Reveal delay={100}>
          <FinalCta>
            <h3>Want results like these?</h3>
            <p>
              We build content engines that move the business, one platform, one post, one story
              at a time. Let&apos;s make something worth watching.
            </p>
            <div className="btns">
              <SolidBtn href={site.contact.bookingUrl}>Start Your Project →</SolidBtn>
              <GhostBtn href="/#reviews">See Client Reviews</GhostBtn>
            </div>
          </FinalCta>
        </Reveal>
      </Inner>
    </Wrap>
  );
}
