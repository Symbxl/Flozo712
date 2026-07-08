'use client';

import styled from 'styled-components';
import { Container } from './primitives';

const Wrap = styled.header`
  position: relative;
  /* Shares the app-wide red ambient (see GlobalStyles) so every inner-page
     header carries the same hero backdrop. */
  background: transparent;
  padding: 9.5rem 0 3.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 12rem 0 4.5rem;
  }
`;

const Inner = styled(Container).attrs({ $wide: true })``;

const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1.25rem;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  font-size: clamp(2.5rem, 1.6rem + 4vw, 4.75rem);
  line-height: 0.98;
  letter-spacing: -0.04em;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
`;

const Sub = styled.p`
  margin: 1.5rem 0 0;
  max-width: 60ch;
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
`;

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  sub?: string;
}

export function PageHeader({ eyebrow, title, sub }: PageHeaderProps) {
  return (
    <Wrap>
      <Inner>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Title>{title}</Title>
        {sub && <Sub>{sub}</Sub>}
      </Inner>
    </Wrap>
  );
}
