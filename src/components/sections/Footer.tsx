'use client';

import styled from 'styled-components';
import { Container } from '../primitives';
import { Logo } from '../Logo';
import { site } from '@/data/site';

const Wrap = styled.footer`
  background: ${({ theme }) => theme.colors.bgInverse};
  color: ${({ theme }) => theme.colors.textInverse};
  padding: 4.5rem 0 2.25rem;
`;

const Inner = styled(Container).attrs({ $wide: true })``;

const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 3.5rem;
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  & p {
    color: rgba(255, 255, 255, 0.62);
    font-size: ${({ theme }) => theme.fontSize.sm};
    max-width: 40ch;
    line-height: 1.7;
  }
`;

const Col = styled.div`
  & h6 {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSize.xs};
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: rgba(255, 255, 255, 0.45);
    margin-bottom: 1.1rem;
  }
  & ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }
  & li, & a {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: rgba(255, 255, 255, 0.82);
    transition: color ${({ theme }) => theme.motion.fast};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
  & a:hover { color: ${({ theme }) => theme.colors.accent}; }
`;

// Bottom bar: copyright on the left, and a right-aligned stack with the
// legal links plus the two credit lines (each line fully clickable),
// all in line with one another in the bottom-right corner.
const Bottom = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const Copy = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: rgba(255, 255, 255, 0.5);

  & strong { color: #fff; font-weight: ${({ theme }) => theme.fontWeight.semibold}; }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.7rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: flex-end;
    text-align: right;
  }

  & .legal {
    display: flex;
    gap: 1.25rem;
  }
  & .legal a {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSize.xs};
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: rgba(255, 255, 255, 0.5);
    transition: color ${({ theme }) => theme.motion.fast};
  }
  & .legal a:hover { color: ${({ theme }) => theme.colors.accent}; }

  & a.credit {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    color: rgba(255, 255, 255, 0.5);
    transition: color ${({ theme }) => theme.motion.fast};
  }
  & a.credit strong { color: rgba(255, 255, 255, 0.9); font-weight: ${({ theme }) => theme.fontWeight.semibold}; }
  & a.credit:hover, & a.credit:hover strong { color: ${({ theme }) => theme.colors.accent}; }
`;

const nav = [
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/#process', label: 'Process' },
  { href: site.contact.bookingUrl, label: 'Contact' },
];

export function Footer() {
  const year = new Date().getFullYear();
  const { socials, contact, credits } = site;
  return (
    <Wrap>
      <Inner>
        <Top>
          <Brand>
            <Logo href="/" light size={24} />
            <p>{site.mission}</p>
          </Brand>
          <Col>
            <h6>Explore</h6>
            <ul>
              {nav.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </Col>
          <Col>
            <h6>Connect</h6>
            <ul>
              <li><a href={socials.instagram} target="_blank" rel="noreferrer">Instagram ↗</a></li>
              <li><a href={socials.tiktok} target="_blank" rel="noreferrer">TikTok ↗</a></li>
              {socials.youtube && (
                <li><a href={socials.youtube} target="_blank" rel="noreferrer">YouTube ↗</a></li>
              )}
            </ul>
          </Col>
          <Col>
            <h6>Contact</h6>
            <ul>
              <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
              <li><a href={contact.phoneHref}>{contact.phone}</a></li>
              <li><a href={contact.bookingUrl}>Book a call →</a></li>
            </ul>
          </Col>
        </Top>

        <Bottom>
          <Copy>© {year} <strong>{site.brand}</strong>. All rights reserved.</Copy>
          <Right>
            <div className="legal">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
            <a className="credit" href={credits.designerUrl} target="_blank" rel="noreferrer">
              Website designed by <strong>{credits.designer}</strong>
            </a>
            <a className="credit" href={credits.partnerUrl} target="_blank" rel="noreferrer">
              In partnership with <strong>{credits.partner}</strong>
            </a>
          </Right>
        </Bottom>
      </Inner>
    </Wrap>
  );
}
