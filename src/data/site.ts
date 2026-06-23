// =====================================================================
//  Site-wide configuration, the one place to edit brand details,
//  contact info, social links, and the hero showreel source.
// =====================================================================

export const site = {
  brand: 'Viridian Films',
  wordmark: 'VRDN',
  wordmarkFull: 'VIRIDIAN FILMS',
  tagline: 'Make Something Worth Watching',
  location: 'Los Angeles, CA', // update if needed
  url: 'https://www.viridianfilms.org',

  // Mission / value proposition (from viridianfilms.org).
  mission:
    'We create videos with clear, intentional goals, every frame crafted to tell your story, connect with your audience, and drive real results across digital platforms.',

  contact: {
    email: 'nathan@viridianfilms.org',
    phone: '(626) 206-8179',
    phoneHref: 'tel:+16262068179',
    // Where "Book a Call" / "Work With Us" point. Swap for a Calendly/Cal.com
    // link, a contact page, or keep the mailto fallback below.
    bookingUrl:
      'mailto:nathan@viridianfilms.org?subject=Let%27s%20work%20together&body=Hi%20Nathan%2C%20I%27d%20love%20to%20talk%20about%20a%20project.',
  },

  // Primary brand socials (shown in nav / footer).
  socials: {
    instagram: 'https://instagram.com/vrdnfilms',
    tiktok: 'https://tiktok.com/@vrdnfilms',
    youtube: '', // add a brand YouTube channel URL when there is one
  },

  // Footer credit tags.
  credits: {
    designer: 'Mystic Media Film',
    designerUrl: 'https://www.mysticmediafilm.com',
    partner: 'Creator Terminal',
    partnerUrl: 'https://www.creatorterminal.com',
  },

  // Hero showreel. Drop an MP4 into /public (e.g. /showreel.mp4) and a poster
  // frame into /public (e.g. /showreel-poster.jpg). If `videoSrc` is empty the
  // hero falls back to an animated gradient, no broken video.
  showreel: {
    videoSrc: '/showreel.mp4',
    poster: '/showreel-poster.webp',
    // Optional "Watch full showreel" link (YouTube/Vimeo). Leave '' to hide.
    fullUrl: '',
  },
} as const;
