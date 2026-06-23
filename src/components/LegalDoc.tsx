'use client';

import styled from 'styled-components';
import { Container } from './primitives';
import { Navigation } from './Navigation';
import { PageHeader } from './PageHeader';
import { Footer } from './sections/Footer';
import type { LegalDocData } from '@/data/legal';

const Body = styled.div`
  padding: 4rem 0 5rem;
`;

const Inner = styled(Container).attrs({ $narrow: true })``;

const Intro = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.75;
  white-space: pre-line;
  margin-bottom: 2.5rem;
`;

const Section = styled.section`
  margin-top: 2.75rem;

  & h2 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1rem;
  }
  & p {
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.75;
    margin-bottom: 1rem;
  }
  & ul {
    margin: 0 0 1rem;
    padding-left: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }
  & li {
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.7;
  }
  & li::marker { color: ${({ theme }) => theme.colors.accent}; }
`;

const Disclaimer = styled.p`
  margin-top: 3.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textDim};
  line-height: 1.6;
  font-style: italic;
`;

export function LegalDoc({ doc }: { doc: LegalDocData }) {
  return (
    <>
      <Navigation />
      <main>
        <PageHeader eyebrow={`Last updated · ${doc.lastUpdated}`} title={doc.title} />
        <Body>
          <Inner>
            {doc.intro && <Intro>{doc.intro}</Intro>}
            {doc.sections.map((section, i) => (
              <Section key={i}>
                <h2>{section.heading}</h2>
                {section.blocks.map((block, j) =>
                  block.type === 'bullets' ? (
                    <ul key={j}>
                      {(block.items ?? []).map((item, k) => (
                        <li key={k}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={j}>{block.text}</p>
                  )
                )}
              </Section>
            ))}
            <Disclaimer>
              This document is provided for general informational purposes and does not constitute
              legal advice. Please consult a qualified attorney before relying on it.
            </Disclaimer>
          </Inner>
        </Body>
      </main>
      <Footer />
    </>
  );
}
