'use client';

import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Container } from '../primitives';
import { caseStudies } from '@/data/caseStudies';
import { site } from '@/data/site';

// =====================================================================
// Case Study Showcase, a scroll-driven hero band that sits right under
// the home hero. A large cover image is pinned to the viewport; as the
// visitor scrolls through the section the active case study (image +
// title + CTAs) cross-fades from one to the next.
// =====================================================================

// Only studies that have a cover image take part in the showcase.
const items = caseStudies
  .filter((c) => !!c.cover)
  .map((c) => ({
    id: c.id,
    client: c.client,
    metric: c.headlineMetric,
    tagline: c.tagline,
    cover: c.cover as string,
    href: '/case-studies',
  }));

const COUNT = items.length;

const Wrap = styled.section`
  position: relative;
  /* One viewport of pinned scroll per case study. */
  height: ${COUNT * 100}vh;
  background: ${({ theme }) => theme.colors.bgInverse};
`;

const Sticky = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
`;

const Slides = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

const Slide = styled.div<{ $active: boolean }>`
  position: absolute;
  inset: 0;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 0.8s ease;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(${({ $active }) => ($active ? 1.06 : 1)});
    transition: transform 7s ease-out;
  }
`;

const Shade = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(8, 21, 17, 0.55) 0%,
    rgba(8, 21, 17, 0.12) 26%,
    rgba(8, 21, 17, 0.32) 58%,
    rgba(8, 21, 17, 0.92) 100%
  );
`;

const Foreground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6.75rem 0 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 8rem 0 4rem;
  }
`;

const Inner = styled(Container).attrs({ $wide: true })`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  color: #fff;
`;

const Label = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.82);
`;

const Steps = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Step = styled.button<{ $active: boolean }>`
  position: relative;
  width: 2.4rem;
  height: 3px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.28);
  cursor: pointer;
  overflow: hidden;
  transition: background ${({ theme }) => theme.motion.fast};

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    width: ${({ $active }) => ($active ? '100%' : '0%')};
    background: ${({ theme }) => theme.colors.accent};
    transition: width ${({ theme }) => theme.motion.base};
  }
  &:hover { background: rgba(255, 255, 255, 0.45); }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 3.25rem;
  }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: none; }
`;

const Content = styled.div`
  color: #fff;
  max-width: 46rem;
  animation: ${fadeUp} 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
`;

const Index = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1.1rem;

  & i { font-style: normal; color: rgba(255, 255, 255, 0.55); }
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  font-size: clamp(2.6rem, 1.6rem + 5vw, 5.5rem);
  line-height: 0.95;
  letter-spacing: -0.04em;
  margin: 0;
  color: #fff;
`;

const Metric = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 1.25rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #fff;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.22);
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  backdrop-filter: blur(6px);
`;

const Tagline = styled.p`
  margin: 1.4rem 0 0;
  max-width: 40ch;
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.82);
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 2rem;
`;

const Primary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.85rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.accent};
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all ${({ theme }) => theme.motion.base};
  &:hover { background: #fff; color: ${({ theme }) => theme.colors.accentHot}; transform: translateY(-2px); }
`;

const Ghost = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.85rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.32);
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all ${({ theme }) => theme.motion.base};
  &:hover { border-color: #fff; background: rgba(255, 255, 255, 0.18); transform: translateY(-2px); }
`;

export function CaseStudyShowcase() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const vh = window.innerHeight;
      const total = el.offsetHeight - vh; // scrollable distance while pinned
      const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), total);
      const p = total > 0 ? scrolled / total : 0;
      const idx = Math.min(COUNT - 1, Math.floor(p * COUNT));
      setActive((prev) => (prev === idx ? prev : idx));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const jumpTo = (i: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const vh = window.innerHeight;
    const total = el.offsetHeight - vh;
    const top = window.scrollY + el.getBoundingClientRect().top;
    const p = (i + 0.5) / COUNT;
    window.scrollTo({ top: top + p * total, behavior: 'smooth' });
  };

  if (!COUNT) return null;
  const cur = items[active];

  return (
    <Wrap ref={wrapRef} id="case-study-showcase" aria-label="Featured case studies">
      <Sticky>
        <Slides>
          {items.map((it, i) => (
            <Slide key={it.id} $active={i === active} aria-hidden={i !== active}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={it.cover} alt={`${it.client} case study`} loading={i === 0 ? 'eager' : 'lazy'} />
            </Slide>
          ))}
        </Slides>
        <Shade />
        <Foreground>
          <Inner>
            <TopRow>
              <Label>Featured Case Studies</Label>
              <Steps role="tablist" aria-label="Case study">
                {items.map((it, i) => (
                  <Step
                    key={it.id}
                    type="button"
                    $active={i === active}
                    onClick={() => jumpTo(i)}
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`View ${it.client}`}
                  />
                ))}
              </Steps>
            </TopRow>

            <Content key={cur.id}>
              <Index>
                0{active + 1} <i>/ 0{COUNT}</i>
              </Index>
              <Title>{cur.client}</Title>
              <Metric>{cur.metric}</Metric>
              <Tagline>{cur.tagline}</Tagline>
              <Buttons>
                <Primary href={site.contact.bookingUrl}>Book a Call</Primary>
                <Ghost href={cur.href}>View Case Study →</Ghost>
              </Buttons>
            </Content>
          </Inner>
        </Foreground>
      </Sticky>
    </Wrap>
  );
}
