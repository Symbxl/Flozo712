// =====================================================================
//  Site-wide configuration, the one place to edit brand details,
//  contact info, social links, and the primary quote CTA.
// =====================================================================

export const site = {
  brand: 'Laser Weld Inc.',
  wordmark: 'LASERWELD',
  wordmarkFull: 'LASER WELD INC.',
  tagline: 'Quality Welding & Turn-Key Manufacturing',
  founded: 1994,
  location: 'Katy, TX',
  url: 'https://laserweldinc.com',

  // Mission / value proposition.
  mission:
    'One of the leading fabricators in Texas. From a single part to a full turn-key build, we cut, bend, weld, machine, and deliver, all under one roof, backed by three decades of American manufacturing.',

  // Short brand promise, used as a punchy secondary line.
  promise: 'From big to small, we do it all.',

  address: {
    street: '1350 Schlipf Road',
    city: 'Katy',
    state: 'TX',
    zip: '77493',
    full: '1350 Schlipf Road, Katy, TX 77493',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=1350+Schlipf+Road+Katy+TX+77493',
  },

  contact: {
    email: 'sales@laserweldinc.com',
    phone: '(713) 935-0815',
    phoneHref: 'tel:+17139350815',
    // Where "Request a Quote" / "Get a Quote" point. Swap for a form URL
    // when there is one; the mailto fallback works everywhere for now.
    bookingUrl:
      'mailto:sales@laserweldinc.com?subject=Request%20a%20Quote&body=Hi%20Laser%20Weld%20team%2C%20I%27d%20like%20a%20quote%20on%20the%20following%20project%3A',
  },

  // Primary brand socials (shown in nav / footer).
  socials: {
    instagram: 'https://instagram.com/laserweldtx',
    tiktok: 'https://tiktok.com/@laserweld.texas',
    youtube: 'https://www.youtube.com/@LaserWeldTexas',
    facebook: 'https://www.facebook.com/laserweldinc',
  },

  // Footer credit tags.
  credits: {
    designer: 'Creator Terminal',
    designerUrl: 'https://www.creatorterminal.com',
    partner: '',
    partnerUrl: '',
  },
} as const;
