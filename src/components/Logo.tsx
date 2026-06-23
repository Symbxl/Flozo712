'use client';

import styled from 'styled-components';
import { site } from '@/data/site';

// Wordmark with an optional logo mark (used in the nav). The mark is a
// transparent webp, so it's only shown on light surfaces — the footer
// (dark) renders the wordmark without it.
const Wrap = styled.a<{ $light?: boolean; $size: number }>`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  text-decoration: none;
  line-height: 1;
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ $size }) => $size}px;
  letter-spacing: -0.02em;
  color: ${({ theme, $light }) => ($light ? theme.colors.textInverse : theme.colors.text)};
  transition: color ${({ theme }) => theme.motion.fast};

  & b {
    font-weight: ${({ theme }) => theme.fontWeight.black};
  }
`;

const Mark = styled.img`
  height: 30px;
  width: auto;
  display: block;
  flex-shrink: 0;
`;

interface LogoProps {
  href?: string;
  light?: boolean;
  size?: number;
  mark?: boolean;
}

export function Logo({ href = '/', light, size = 20, mark = false }: LogoProps) {
  return (
    <Wrap href={href} aria-label={site.brand} $light={light} $size={size}>
      {mark && <Mark src="/logo.webp" alt="" aria-hidden />}
      <span><b>Viridian</b>&nbsp;Films</span>
    </Wrap>
  );
}
