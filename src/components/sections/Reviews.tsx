'use client';

import styled from 'styled-components';
import { Container } from '../primitives';
import { Reveal } from '../Reveal';
import {
  googleReviews,
  googleReviewSummary,
  type GoogleReview,
} from '@/data/reviews';

// =====================================================================
//  Google Reviews, homepage social-proof section. Renders reviews from
//  src/data/reviews.ts with reviewer initials/photo, gold stars, an
//  aggregate rating pill, and a "View all Google reviews" link.
// =====================================================================

const DISPLAY_COUNT = 6;

const Wrap = styled.section`
  padding: 7rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgElevated};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) { padding: 9rem 0; }
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 4rem;
  text-align: center;
`;

const Label = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};

`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  font-size: clamp(2.25rem, 1.6rem + 3vw, 3.75rem);
  line-height: 1.04;
  letter-spacing: -0.035em;
  margin: 0;
  & span { color: ${({ theme }) => theme.colors.accent}; }
`;

const RatingPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.75rem 1.4rem;
  background: ${({ theme }) => theme.colors.bgSurface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  box-shadow: 0 4px 14px -4px #000;

  & .score { font-family: ${({ theme }) => theme.fonts.display}; font-weight: 700; font-size: 1.05rem; color: ${({ theme }) => theme.colors.text}; }
  & .divider { width: 1px; height: 18px; background: ${({ theme }) => theme.colors.border}; }
  & .count { font-size: 0.84rem; color: ${({ theme }) => theme.colors.textMuted}; font-weight: 500; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) { grid-template-columns: repeat(2, 1fr); }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) { grid-template-columns: repeat(3, 1fr); }
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  padding: 2rem 1.85rem;
  height: 100%;
  background: ${({ theme }) => theme.colors.bgSurface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 0 1px 2px rgba(22, 23, 26, 0.04), 0 14px 30px -24px rgba(22, 23, 26, 0.16);
  transition: all ${({ theme }) => theme.motion.base};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 50px -28px rgba(22, 23, 26, 0.22);
    border-color: ${({ theme }) => theme.colors.borderStrong};
  }
`;

const TopG = styled.div`
  position: absolute;
  top: 18px;
  right: 18px;
`;

const Reviewer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;

  & .name { font-family: ${({ theme }) => theme.fonts.display}; font-weight: 600; font-size: 0.98rem; color: ${({ theme }) => theme.colors.text}; line-height: 1.3; letter-spacing: -0.01em; }
  & .date { font-size: 0.78rem; color: ${({ theme }) => theme.colors.textDim}; }
`;

const Avatar = styled.span`
  width: 44px; height: 44px;
  border-radius: 50%;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent} 0%, ${({ theme }) => theme.colors.accentHot} 100%);
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 700;
  font-size: 0.95rem;
`;

const Text = styled.p<{ $clamp: boolean }>`
  font-size: 0.92rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.textMuted};
  ${({ $clamp }) =>
    $clamp &&
    `display: -webkit-box; -webkit-line-clamp: 6; -webkit-box-orient: vertical; overflow: hidden;`}
`;

const SeeMore = styled.a`
  align-self: flex-start;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  &:hover { text-decoration: underline; }
`;

const ViewAllRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3.5rem;
`;

const ViewAll = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 1.75rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.accent};
  color: #fff;
  font-weight: 600;
  font-size: 0.92rem;
  box-shadow: 0 14px 40px -16px ${({ theme }) => theme.colors.accent};
  transition: all ${({ theme }) => theme.motion.base};
  &:hover { background: ${({ theme }) => theme.colors.accentHot}; transform: translateY(-2px); }
`;

function GoogleG({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden style={{ display: 'block', flexShrink: 0 }}>
      <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34A21.99 21.99 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z" />
      <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
    </svg>
  );
}

function Stars({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <span style={{ display: 'inline-flex', gap: 1 }} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} width={size} height={size} viewBox="0 0 24 24" aria-hidden style={{ display: 'block' }}>
          <path
            fill={n <= Math.round(rating) ? '#FBBC05' : 'rgba(255, 255, 255, 0.16)'}
            d="M12 17.27l5.18 3.13-1.37-5.9 4.58-3.97-6.03-.52L12 4.5 9.64 10.08l-6.03.52 4.58 3.97-1.37 5.9z"
          />
        </svg>
      ))}
    </span>
  );
}

function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .slice(0, 2)
    .join('');
}

function ReviewCard({ review }: { review: GoogleReview }) {
  const clamp = review.text.length > 240;
  return (
    <Card>
      <TopG>
        <GoogleG size={20} />
      </TopG>
      <Reviewer>
        <Avatar>{getInitials(review.name)}</Avatar>
        <div>
          <div className="name">{review.name}</div>
          <div className="date">{review.date}</div>
        </div>
      </Reviewer>
      <Stars rating={review.rating} />
      <Text $clamp={clamp}>{review.text}</Text>
      {clamp && (
        <SeeMore href={googleReviewSummary.viewAllUrl} target="_blank" rel="noreferrer">
          Read more →
        </SeeMore>
      )}
    </Card>
  );
}

export function Reviews() {
  const { rating, totalReviews, viewAllUrl } = googleReviewSummary;
  const displayed = googleReviews.slice(0, DISPLAY_COUNT);

  return (
    <Wrap id="reviews">
      <Container $wide>
        <Reveal>
          <Head>
            <Label>Customer Reviews</Label>
            <Title>
              Trusted by the people who <span>build hard things</span>
            </Title>
            <RatingPill>
              <GoogleG size={22} />
              <span className="score">{rating.toFixed(1)}</span>
              <Stars rating={rating} size={17} />
              <span className="divider" />
              <span className="count">{totalReviews} Google reviews</span>
            </RatingPill>
          </Head>
        </Reveal>

        <Reveal delay={80}>
          <Grid>
            {displayed.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </Grid>
        </Reveal>

        <Reveal delay={120}>
          <ViewAllRow>
            <ViewAll href={viewAllUrl} target="_blank" rel="noreferrer">
              View all Google reviews →
            </ViewAll>
          </ViewAllRow>
        </Reveal>
      </Container>
    </Wrap>
  );
}
