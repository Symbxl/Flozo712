'use client';

import styled, { css } from 'styled-components';

export const Container = styled.div<{ $narrow?: boolean; $wide?: boolean }>`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  max-width: ${({ theme, $narrow, $wide }) =>
    $narrow ? theme.maxWidth.narrow : $wide ? theme.maxWidth.wide : theme.maxWidth.content};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 2.5rem;
  }
`;

export const Section = styled.section<{ $surface?: boolean; $light?: boolean }>`
  position: relative;
  padding: ${({ theme }) => theme.space['4xl']} 0;
  background: ${({ theme, $surface, $light }) =>
    $light
      ? theme.colors.bgInverse
      : $surface
      ? theme.colors.bgElevated
      : theme.colors.bg};
  color: ${({ theme, $light }) =>
    $light ? theme.colors.textInverse : theme.colors.text};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.space['5xl']} 0;
  }
`;

export const SectionLabel = styled.div<{ $light?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSize.xs};
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme, $light }) => ($light ? theme.colors.textDim : theme.colors.textMuted)};
  margin-bottom: ${({ theme }) => theme.space.lg};
`;

export const Eyebrow = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSize.xs};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
`;

export const H1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSize['5xl']};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  line-height: 0.92;
  letter-spacing: -0.04em;
  margin-bottom: ${({ theme }) => theme.space.xl};

  @media (max-width: 640px) {
    font-size: clamp(2.4rem, 9vw, 3.4rem);
  }
`;

export const H2 = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  line-height: 0.95;
  letter-spacing: -0.035em;
  margin-bottom: ${({ theme }) => theme.space.xl};

  @media (max-width: 640px) {
    font-size: clamp(2rem, 8vw, 3rem);
  }
`;

export const H3 = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin-bottom: ${({ theme }) => theme.space.md};
`;

export const H4 = styled.h4`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.2;
  letter-spacing: -0.01em;
  margin-bottom: ${({ theme }) => theme.space.sm};
`;

export const Lead = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.55;
  max-width: 60ch;
`;

export const Body = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
  max-width: 64ch;
`;

const buttonReset = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  letter-spacing: 0.02em;
  padding: 1rem 1.75rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  transition: all ${({ theme }) => theme.motion.base};
  cursor: pointer;
  white-space: nowrap;
`;

export const PrimaryButton = styled.a`
  ${buttonReset};
  background: ${({ theme }) => theme.colors.accent};
  color: #fff;

  &:hover {
    background: ${({ theme }) => theme.colors.accentHot};
    color: #fff;
    transform: translateY(-2px);
  }
`;

export const SecondaryButton = styled.a`
  ${buttonReset};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.accentSoft};
    transform: translateY(-2px);
  }
`;

export const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  margin: ${({ theme }) => theme.space['2xl']} 0;
`;

export const Grid = styled.div<{ $cols?: number; $gap?: string }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ $gap, theme }) => $gap || theme.space.xl};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(${({ $cols }) => $cols || 2}, 1fr);
  }
`;

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 0.375rem 0.75rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.accentSoft};
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.accent}33;
`;
