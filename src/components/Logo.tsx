'use client';

import styled from 'styled-components';
import { site } from '@/data/site';

// Wordmark for Laser Weld Inc. A small red "spark" mark (pure CSS, so it
// works on any surface) sits next to a bold, slightly-condensed wordmark:
// LASER in solid ink, WELD carrying the red accent.
const Wrap = styled.a<{ $light?: boolean; $size: number }>`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  line-height: 1;
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ $size }) => $size}px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${({ theme, $light }) => ($light ? theme.colors.textInverse : theme.colors.text)};
  transition: color ${({ theme }) => theme.motion.fast};

  & .wm b {
    font-weight: ${({ theme }) => theme.fontWeight.black};
  }
  & .wm i {
    font-style: normal;
    color: ${({ theme }) => theme.colors.accent};
    font-weight: ${({ theme }) => theme.fontWeight.black};
  }
`;

// A red angled "beam" mark, evokes a cutting laser / weld spark.
const Mark = styled.span`
  position: relative;
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.accent};
  box-shadow: 0 0 14px -2px ${({ theme }) => theme.colors.accent};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -30%;
    left: 46%;
    width: 3px;
    height: 160%;
    background: #fff;
    transform: rotate(24deg);
    opacity: 0.9;
  }
`;

const Image = styled.img<{ $size: number }>`
  display: block;
  height: ${({ $size }) => $size}px;
  width: auto;
`;

interface LogoProps {
  href?: string;
  light?: boolean;
  size?: number;
  mark?: boolean;
  image?: string;
}

export function Logo({ href = '/', light, size = 20, mark = false, image }: LogoProps) {
  return (
    <Wrap href={href} aria-label={site.brand} $light={light} $size={size}>
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <Image src={image} alt={site.brand} $size={size} />
      ) : (
        <>
          {mark && <Mark aria-hidden />}
          <span className="wm">
            <b>Laser</b>
            <i>weld</i>
          </span>
        </>
      )}
    </Wrap>
  );
}
