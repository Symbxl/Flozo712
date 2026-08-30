// =====================================================================
//  Google Reviews data  ⚠️ PLACEHOLDERS, REPLACE BEFORE LAUNCH
//  ---------------------------------------------------------------------
//  The reviews below are SAMPLE copy so the section looks complete in
//  development. Replace each entry with a real review pulled word-for-word
//  from the Flozo Media Google Business Profile, and update the
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
  totalReviews: 48,
  /** Opens the Google "write a review" dialog. Replace with the real link. */
  writeReviewUrl: 'https://www.google.com/search?q=flozo+media',
  /** "View all Google reviews", the full Google profile. Replace this. */
  viewAllUrl: 'https://www.google.com/search?q=flozo+media',
};

export const googleReviews: GoogleReview[] = [
  {
    id: 'r1',
    name: 'Randy Whitfield',
    rating: 5,
    date: '1 month ago',
    text: 'Flozo took over our socials three months ago and we have never been busier. The videos feel like us, not like ads. Our go-to marketing team now.',
  },
  {
    id: 'r2',
    name: 'Marcus Delgado',
    rating: 5,
    date: '2 months ago',
    text: 'They filmed at our shop on a Tuesday and had content running by the weekend. Views turned into actual phone calls within the first month. You can tell this crew takes pride in their work.',
  },
  {
    id: 'r3',
    name: 'Patricia Nguyen',
    rating: 5,
    date: '3 months ago',
    text: 'The strategy and consistency are a step above anyone we have worked with before. Zero stress on our end. Communication was clear from day one.',
  },
  {
    id: 'r4',
    name: 'Cole Barrett',
    rating: 5,
    date: '4 months ago',
    text: 'Needed to get our new location in front of the neighborhood fast. They handled strategy, filming, editing, and posting in-house. Foot traffic followed within weeks.',
  },
  {
    id: 'r5',
    name: 'Dwayne Foster',
    rating: 5,
    date: '5 months ago',
    text: 'Been with Flozo across two of my businesses now. Consistent quality every single month, and they genuinely understand local customers. Organic marketing done right.',
  },
  {
    id: 'r6',
    name: 'Sofia Ramirez',
    rating: 5,
    date: '6 months ago',
    text: 'Their team helped us rethink our whole content approach so it cost less and worked better. That kind of partnership is rare. Highly recommend for any local business.',
  },
];
