// =====================================================================
//  Google Reviews data  ⚠️ PLACEHOLDERS, REPLACE BEFORE LAUNCH
//  ---------------------------------------------------------------------
//  The reviews below are SAMPLE copy so the section looks complete in
//  development. Replace each entry with a real review pulled word-for-word
//  from the Viridian Films Google Business Profile, and update the
//  summary (rating, totalReviews, and the two Google URLs) to match.
//
//  Photo: paste the reviewer's Google photo URL, or save an image into
//  public/reviews/<name>.jpg and use '/reviews/<name>.jpg'. If `photo`
//  is omitted the card shows the reviewer's initials.
// =====================================================================

export interface GoogleReview {
  id: string;
  name: string;
  /** Reviewer photo. Full URL or local path (/reviews/x.jpg). */
  photo?: string;
  /** Whole-star rating, 1–5. */
  rating: number;
  /** Google-style relative time, e.g. "2 months ago". */
  date: string;
  /** The review, word-for-word. */
  text: string;
}

export const googleReviewSummary = {
  /** Overall star rating shown next to the Google logo. */
  rating: 5.0,
  /** Total number of Google reviews on the profile. */
  totalReviews: 12,
  /** Opens the Google "write a review" dialog. Replace with the real link. */
  writeReviewUrl: 'https://www.google.com/search?q=viridian+films',
  /** "View all Google reviews", the full Google profile. Replace this. */
  viewAllUrl: 'https://www.google.com/search?q=viridian+films',
};

export const googleReviews: GoogleReview[] = [
  {
    id: 'r1',
    name: 'Marcus Reyes',
    rating: 5,
    date: '2 months ago',
    text: 'Nathan and the Viridian team completely changed how our brand shows up online. The videos are gorgeous and they actually understand strategy, not just pretty shots. Our reach has never been higher.',
  },
  {
    id: 'r2',
    name: 'Jenna Caldwell',
    rating: 5,
    date: '3 months ago',
    text: 'Professional, creative, and genuinely easy to work with. They took the time to learn our story and turned it into content that finally feels like us. Highly recommend.',
  },
  {
    id: 'r3',
    name: 'Devon Pruitt',
    rating: 5,
    date: '4 months ago',
    text: 'We went from posting randomly to having a real content system. The quality is on another level and the results speak for themselves, leads are coming in from the videos.',
  },
  {
    id: 'r4',
    name: 'Alicia Moreno',
    rating: 5,
    date: '5 months ago',
    text: 'Incredible eye for storytelling. Every project came back better than I imagined and ahead of schedule. Viridian treats your brand like it matters.',
  },
  {
    id: 'r5',
    name: 'Tyler Brooks',
    rating: 5,
    date: '6 months ago',
    text: 'Hands down the best media partner we have worked with. Communication was clear the whole way through and the final cuts blew our team away.',
  },
  {
    id: 'r6',
    name: 'Priya Nair',
    rating: 5,
    date: '7 months ago',
    text: 'They make the whole process feel effortless. Beautiful imagery, sharp editing, and a real understanding of what performs. We are already booking our next shoot.',
  },
];
