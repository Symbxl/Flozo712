'use client';

import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Container } from '../primitives';
import { site } from '@/data/site';

// Full-viewport hero: showreel up top, headline + single CTA below it,
// with a rotating stat row anchored at the bottom.
const Wrap = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.gradientHero};
  overflow: hidden;
  padding: 8.5rem 0 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 9rem 0 3.5rem;
  }
`;

const Inner = styled(Container).attrs({ $wide: true })`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const VideoBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 880px;
  aspect-ratio: 16 / 9;
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: #000;
  box-shadow: 0 40px 90px -50px rgba(20, 36, 29, 0.55);

  & video, & .fallback {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  & .fallback { background: linear-gradient(160deg, #123226, #0E1F18); }
`;

const ReelTag = styled.span`
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  background: rgba(8, 21, 17, 0.55);
  backdrop-filter: blur(8px);
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.66rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;

  & .dot { width: 7px; height: 7px; border-radius: 999px; background: ${({ theme }) => theme.colors.accent}; }
`;

const ReviewsBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin: 2.25rem 0 1.25rem;
  padding: 0.5rem 1.05rem;
  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  box-shadow: 0 8px 22px -12px rgba(20, 36, 29, 0.22);

  & .stars { display: inline-flex; gap: 1px; }
  & .txt {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.84rem;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: -0.005em;
  }
  & .sep { width: 1px; height: 16px; background: ${({ theme }) => theme.colors.border}; }
`;

function GoogleG({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden style={{ display: 'block', flexShrink: 0 }}>
      <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34A21.99 21.99 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z" />
      <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
    </svg>
  );
}

function Stars({ size = 14 }: { size?: number }) {
  return (
    <span className="stars" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((n) => (
        <svg key={n} width={size} height={size} viewBox="0 0 24 24" aria-hidden style={{ display: 'block' }}>
          <path fill="#FBBC05" d="M12 17.27l5.18 3.13-1.37-5.9 4.58-3.97-6.03-.52L12 4.5 9.64 10.08l-6.03.52 4.58 3.97-1.37 5.9z" />
        </svg>
      ))}
    </span>
  );
}

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  font-size: clamp(2.5rem, 1.7rem + 4.4vw, 5.5rem);
  line-height: 0.95;
  letter-spacing: -0.045em;
  margin: 0;
  max-width: 16ch;
  color: ${({ theme }) => theme.colors.text};

  & span { color: ${({ theme }) => theme.colors.accent}; }
`;

const Sub = styled.p`
  margin: 1.4rem auto 0;
  max-width: 52ch;
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
`;

const Primary = styled.a`
  display: inline-flex; align-items: center; gap: 0.5rem;
  margin-top: 2rem;
  padding: 1.05rem 2.25rem; border-radius: 999px;
  background: ${({ theme }) => theme.colors.accent}; color: #fff;
  font-weight: 600; font-size: 0.98rem;
  transition: all ${({ theme }) => theme.motion.base};
  &:hover { background: ${({ theme }) => theme.colors.accentHot}; transform: translateY(-2px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const MetaRow = styled.div`
  width: 100%;
  margin-top: clamp(2.5rem, 5vh, 4rem);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem 1.5rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  animation: ${fadeIn} 600ms cubic-bezier(0.22, 1, 0.36, 1);
`;

const MetaCell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  text-align: center;

  & .value {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.6rem, 1.1rem + 1.8vw, ${({ theme }) => theme.fontSize['2xl']});
    font-weight: ${({ theme }) => theme.fontWeight.black};
    line-height: 1;
    letter-spacing: -0.03em;
    color: ${({ theme }) => theme.colors.accent};
  }
  & .label {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.62rem;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: ${({ theme }) => theme.colors.textDim};
    line-height: 1.4;
  }
`;

const Dots = styled.div`
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  margin-top: 1.5rem;

  & button {
    width: 7px; height: 7px; border-radius: 999px;
    background: ${({ theme }) => theme.colors.border};
    transition: background ${({ theme }) => theme.motion.fast}, width ${({ theme }) => theme.motion.base};
  }
  & button.active { background: ${({ theme }) => theme.colors.accent}; width: 18px; }
`;

// Rotating analytics — each group shows for 5s. Numbers are editable
// estimates; swap in confirmed figures any time.
const statGroups: { value: string; label: string }[][] = [
  [
    { value: '60M+', label: 'Views Driven' },
    { value: '750+', label: 'Pieces of Content' },
    { value: '100%', label: 'Asset Ownership' },
  ],
  [
    { value: '+5,000%', label: 'Avg. Audience Growth' },
    { value: '3M+', label: 'Avg. Monthly Reach' },
    { value: '4', label: 'Platforms Per Client' },
  ],
  [
    { value: '10x', label: 'More Inbound Leads' },
    { value: '$1M+', label: 'Client Revenue Influenced' },
    { value: '48h', label: 'Edit Turnaround' },
  ],
];

export function Hero() {
  const { videoSrc, poster } = site.showreel;
  const [group, setGroup] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setGroup((g) => (g + 1) % statGroups.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <Wrap id="top">
      <Inner>
        <VideoBox>
          {videoSrc ? (
            <video autoPlay muted loop playsInline poster={poster || undefined} preload="metadata">
              <source src={videoSrc} type="video/mp4" />
            </video>
          ) : (
            <div className="fallback" />
          )}
          <ReelTag><span className="dot" /> Showreel</ReelTag>
        </VideoBox>

        <ReviewsBadge>
          <GoogleG size={18} />
          <Stars size={14} />
          <span className="sep" />
          <span className="txt">5-Star Reviews in Katy, Texas</span>
        </ReviewsBadge>
        <Title>
          Is Your Content <span>Actually Growing Your&nbsp;Business?</span>
        </Title>
        <Sub>{site.mission}</Sub>
        <Primary href={site.contact.bookingUrl}>Book a Call →</Primary>

        <MetaRow key={group}>
          {statGroups[group].map((s) => (
            <MetaCell key={s.label}>
              <span className="value">{s.value}</span>
              <span className="label">{s.label}</span>
            </MetaCell>
          ))}
        </MetaRow>
        <Dots>
          {statGroups.map((_, i) => (
            <button
              key={i}
              className={i === group ? 'active' : ''}
              onClick={() => setGroup(i)}
              aria-label={`Show stat group ${i + 1}`}
            />
          ))}
        </Dots>
      </Inner>
    </Wrap>
  );
}
