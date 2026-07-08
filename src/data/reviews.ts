// =====================================================================
//  Google Reviews data  ⚠️ PLACEHOLDERS, REPLACE BEFORE LAUNCH
//  ---------------------------------------------------------------------
//  The reviews below are SAMPLE copy so the section looks complete in
//  development. Replace each entry with a real review pulled word-for-word
//  from the Laser Weld Inc. Google Business Profile, and update the
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
  writeReviewUrl: 'https://www.google.com/search?q=laser+weld+inc+katy+tx',
  /** "View all Google reviews", the full Google profile. Replace this. */
  viewAllUrl: 'https://www.google.com/search?q=laser+weld+inc+katy+tx',
};

export const googleReviews: GoogleReview[] = [
  {
    id: 'r1',
    name: 'Randy Whitfield',
    rating: 5,
    date: '1 month ago',
    text: 'These guys turned around a complex stainless job faster than anyone quoted us and the welds were flawless. From big to small, they really do it all. Our go-to fab shop now.',
  },
  {
    id: 'r2',
    name: 'Marcus Delgado',
    rating: 5,
    date: '2 months ago',
    text: 'We sent Laser Weld our prints on a Monday and had finished, coated parts on our dock by Friday. Tolerances were dead on. You can tell this crew takes pride in their work.',
  },
  {
    id: 'r3',
    name: 'Patricia Nguyen',
    rating: 5,
    date: '3 months ago',
    text: 'The laser cutting and bending quality is a step above the other shops in the area. Zero rework on our end. Communication was clear from quote to delivery.',
  },
  {
    id: 'r4',
    name: 'Cole Barrett',
    rating: 5,
    date: '4 months ago',
    text: 'Needed a large structural run for an oil and gas project on a tight deadline. They handled cutting, welding, machining and delivery in-house. Everything showed up on time and ready to install.',
  },
  {
    id: 'r5',
    name: 'Dwayne Foster',
    rating: 5,
    date: '5 months ago',
    text: 'Been using Laser Weld for years across multiple projects. Consistent quality every single time, part one looks exactly like part one thousand. Genuinely American manufacturing done right.',
  },
  {
    id: 'r6',
    name: 'Sofia Ramirez',
    rating: 5,
    date: '6 months ago',
    text: 'Their engineering team helped us redesign a bracket so it was cheaper and stronger to build. That kind of partnership is rare. Highly recommend for anything metal.',
  },
];
