'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Logo } from './Logo';
import { site } from '@/data/site';

const Bar = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: ${({ $scrolled }) => ($scrolled ? '0.85rem 0' : '1.4rem 0')};
  background: ${({ $scrolled }) => ($scrolled ? 'rgba(255, 255, 255, 0.88)' : 'transparent')};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(16px)' : 'none')};
  border-bottom: 1px solid
    ${({ $scrolled, theme }) => ($scrolled ? theme.colors.border : 'transparent')};
  transition: all ${({ theme }) => theme.motion.base};
`;

const Inner = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth.wide};
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 2.75rem;
  }
`;

const NavLinks = styled.nav`
  display: none;
  align-items: center;
  gap: 2.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
  }
`;

const NavLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.textMuted};
  position: relative;
  transition: color ${({ theme }) => theme.motion.fast};

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0;
    height: 2px;
    border-radius: 2px;
    background: ${({ theme }) => theme.colors.accent};
    transition: width ${({ theme }) => theme.motion.base};
  }
  /* Stays muted/gray in both scroll states; brightens to the brand green on
     hover (true white would be invisible on the light navbar). */
  &:hover { color: ${({ theme }) => theme.colors.accent}; }
  &:hover::after { width: 100%; }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const CTA = styled.a`
  display: none;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  padding: 0.7rem 1.3rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.accent};
  color: #fff;
  transition: all ${({ theme }) => theme.motion.fast};

  &:hover { background: ${({ theme }) => theme.colors.accentHot}; transform: translateY(-1px); }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) { display: inline-flex; }
`;

const Burger = styled.button<{ $open: boolean }>`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 42px;
  height: 42px;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) { display: none; }

  & span {
    display: block;
    width: 20px;
    height: 2px;
    background: ${({ theme }) => theme.colors.text};
    border-radius: 2px;
    transition: transform ${({ theme }) => theme.motion.base}, opacity ${({ theme }) => theme.motion.fast};
  }
  & span:nth-child(1) { transform: ${({ $open }) => ($open ? 'translateY(7px) rotate(45deg)' : 'none')}; }
  & span:nth-child(2) { opacity: ${({ $open }) => ($open ? 0 : 1)}; }
  & span:nth-child(3) { transform: ${({ $open }) => ($open ? 'translateY(-7px) rotate(-45deg)' : 'none')}; }
`;

const MobilePanel = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0 0 0 0;
  top: 0;
  z-index: 90;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transition: opacity ${({ theme }) => theme.motion.base};

  & a {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1.75rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text};
  }
  & a.cta {
    margin-top: 1rem;
    font-size: 1rem;
    padding: 0.85rem 1.6rem;
    border-radius: ${({ theme }) => theme.radius.pill};
    background: ${({ theme }) => theme.colors.accent};
    color: #fff;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) { display: none; }
`;

const Progress = styled.div<{ $value: number }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  width: ${({ $value }) => $value}%;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accentHot});
  z-index: 200;
  transition: width 80ms linear;
`;

// Root-relative links so the nav works from any page.
const links = [
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
  { href: '/#reviews', label: 'Reviews' },
  { href: site.contact.bookingUrl, label: 'Contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <Progress $value={progress} aria-hidden />
      <Bar $scrolled={scrolled || open}>
        <Inner>
          <Logo href="/" size={20} mark />
          <NavLinks>
            {links.map((l) => (
              <NavLink key={l.href} href={l.href}>
                {l.label}
              </NavLink>
            ))}
          </NavLinks>
          <Right>
            <CTA href={site.contact.bookingUrl}>Book a Call</CTA>
            <Burger
              $open={open}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span />
              <span />
              <span />
            </Burger>
          </Right>
        </Inner>
      </Bar>

      <MobilePanel $open={open}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a className="cta" href={site.contact.bookingUrl} onClick={() => setOpen(false)}>
          Book a Call →
        </a>
      </MobilePanel>
    </>
  );
}
