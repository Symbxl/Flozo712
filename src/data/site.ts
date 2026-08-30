// =====================================================================
//  Site-wide configuration, the one place to edit brand details,
//  contact info, social links, and the primary booking CTA.
// =====================================================================

export const site = {
  brand: 'Flozo Media',
  wordmark: 'FLOZO',
  wordmarkFull: 'FLOZO MEDIA',
  tagline: 'Organic Content Marketing for Local Business',
  founded: 2026,
  location: 'Redmond, WA',
  url: 'https://flozomedia.com',

  // Mission / value proposition.
  mission:
    'A marketing company built for local business. We plan, film, edit, and publish organic content that turns attention into customers — strategy, production, and growth, all from one team.',

  // Short brand promise, used as a punchy secondary line.
  promise: 'Real content, real customers.',

  // Based out of Redmond, WA — no public street address.
  address: {
    city: 'Redmond',
    state: 'WA',
    full: 'Redmond, WA',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Redmond+WA',
  },

  contact: {
    // ⚠️ PLACEHOLDER email — replace with the real one before launch.
    email: 'hello@flozomedia.com',
    phone: '456549541',
    phoneHref: 'tel:456549541',
    // Where "Book a Call" points. Swap for a form/calendar URL
    // when there is one; the mailto fallback works everywhere for now.
    bookingUrl:
      'mailto:hello@flozomedia.com?subject=Book%20a%20Call&body=Hi%20Flozo%20Media%20team%2C%20I%27d%20like%20to%20talk%20about%20growing%20my%20business%3A',
  },

  // Primary brand socials (shown in nav / footer).
  // ⚠️ PLACEHOLDER handles — point these at the real profiles before launch.
  socials: {
    instagram: 'https://instagram.com/flozomedia',
    tiktok: 'https://tiktok.com/@flozomedia',
    youtube: 'https://www.youtube.com/@flozomedia',
    facebook: 'https://www.facebook.com/flozomedia',
  },

  // Footer credit tags.
  credits: {
    designer: 'Creator Terminal',
    designerUrl: 'https://www.creatorterminal.com',
    partner: '',
    partnerUrl: '',
  },
} as const;
