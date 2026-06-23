// =====================================================================
//  Case Studies
//  ---------------------------------------------------------------------
//  Each case study drives one tab in the Case Study section. Laserweld is
//  fully populated (real numbers + real YouTube embeds). The Table and
//  Personal Brand are scaffolded, drop in `heroStats`, `platforms`,
//  `videos`, `shorts`, and `resultStats` the same way and they fill in
//  automatically. Any section left empty simply doesn't render.
//
//  Finding YouTube IDs: the part after `?v=` (watch URLs) or after the
//  last `/` (youtu.be / shorts URLs). `start` is an optional start time
//  in seconds for the horizontal videos.
// =====================================================================

export interface StatPill {
  label: string;
  value: string;
  /** Growth, e.g. "+5,608%". Optional. */
  pct?: string;
}

export interface Platform {
  name: string;
  handle: string;
  /** Single-character glyph shown in the colored badge. */
  glyph: string;
  /** CSS background for the badge (solid color or gradient). */
  bg: string;
  stats: StatPill[];
}

export interface CaseStudy {
  id: string;
  client: string;
  /** Big headline metric, e.g. "25M+ Views". */
  headlineMetric: string;
  /** One-line result statement. */
  tagline: string;
  /** Longer intro paragraph under the title. */
  intro: string;
  /** Large cover image for the home scroll showcase (path under /public). */
  cover?: string;
  reportingPeriod?: string;
  heroStats?: StatPill[];
  challenge?: { heading: string; body: string };
  approach?: { heading: string; body: string };
  platforms?: Platform[];
  channel?: { heading: string; body: string; url: string; ctaLabel: string };
  /** Horizontal YouTube videos (16:9). */
  videos?: { id: string; start?: number }[];
  /** YouTube Shorts (9:16). */
  shorts?: string[];
  result?: { heading: string; body: string };
  resultStats?: StatPill[];
  /** Social links shown under the client name. */
  links?: { label: string; url: string }[];
}

export const caseStudies: CaseStudy[] = [
  // -------------------------------------------------------------------
  // 1) LASERWELD, fully built example.
  // -------------------------------------------------------------------
  {
    id: 'laserweld',
    client: 'Laserweld',
    headlineMetric: '25M+ Views',
    tagline: 'From invisible online to a go-to voice in American manufacturing.',
    intro:
      'A 70-acre Texas manufacturing operation competing head-on with overseas imports, the kind of American story people want to see but rarely do. We built a content engine around the shop floor and let the work speak.',
    cover: '/portfolio/laser.jpg',
    reportingPeriod: 'Dec 2024 – Jan 2026',
    heroStats: [
      { label: 'Followers Gained', value: '31.74K', pct: '+5,608%' },
      { label: 'Total Impressions', value: '19.29M', pct: '+33,320%' },
      { label: 'Total Interactions', value: '317.31K', pct: '+13,425%' },
      { label: 'Pieces of Content', value: '755', pct: '+545%' },
    ],
    challenge: {
      heading: 'A Texas factory, mostly invisible online.',
      body: 'In December 2024 their combined social footprint was a rounding error. No Shorts strategy, no Reels, no consistent story, just world-class manufacturing nobody could see.',
    },
    approach: {
      heading: 'Short-form video, built around real stories.',
      body: 'We built a content engine around the shop floor: process breakthroughs, production pay, the largest Trumpf laser in America, bringing jobs back home. Four platforms, one cohesive narrative, a relentless publishing cadence, 755 pieces in 14 months.',
    },
    platforms: [
      {
        name: 'Facebook',
        handle: 'Laserweld Inc',
        glyph: 'f',
        bg: '#1877F2',
        stats: [
          { label: 'Followers', value: '11.94K', pct: '+3,530%' },
          { label: 'Impressions', value: '9.61M', pct: '+270,648%' },
          { label: 'Interactions', value: '95.69K', pct: '+60,465%' },
          { label: 'Posts', value: '202', pct: '+573%' },
        ],
      },
      {
        name: 'Instagram',
        handle: '@laserweldtx',
        glyph: '◎',
        bg: 'linear-gradient(135deg,#F9CE34,#EE2A7B,#6228D7)',
        stats: [
          { label: 'Followers', value: '2,070', pct: '+3,185%' },
          { label: 'Impressions', value: '1.37M', pct: '+14,617%' },
          { label: 'Interactions', value: '32.54K', pct: '+8,287%' },
          { label: 'Posts', value: '212', pct: '+505%' },
        ],
      },
      {
        name: 'TikTok',
        handle: '@laserweld.texas',
        glyph: '♪',
        bg: '#111111',
        stats: [
          { label: 'Followers', value: '5,224', pct: '+4,875%' },
          { label: 'Impressions', value: '3.00M', pct: '+45,957%' },
          { label: 'Interactions', value: '113.22K', pct: '+9,503%' },
          { label: 'Posts', value: '161', pct: '+847%' },
        ],
      },
      {
        name: 'YouTube',
        handle: 'LaserWeld Texas',
        glyph: '▶',
        bg: '#FF0000',
        stats: [
          { label: 'Subscribers', value: '12.50K', pct: '+21,086%' },
          { label: 'Views', value: '5.31M', pct: '+13,755%' },
          { label: 'Interactions', value: '75.85K', pct: '+12,114%' },
          { label: 'Videos', value: '180', pct: '+414%' },
        ],
      },
    ],
    channel: {
      heading: 'See it live on YouTube.',
      body: '12.5K subscribers. 5.31M views. 180 videos, all built from the shop floor.',
      url: 'https://www.youtube.com/@LaserWeldTexas',
      ctaLabel: 'Watch on YouTube',
    },
    videos: [
      { id: 'O0rkaLx787M', start: 77 },
      { id: 'mEJ-YoP387c' },
      { id: 'wyfV136Qpwg' },
    ],
    shorts: ['loQ76r8AWkQ', 'QoP3LX5x2AM', 'pEL_j6InUqo'],
    result: {
      heading: 'A manufacturing brand that actually competes online.',
      body: 'Fourteen months. Four platforms. One partnership. Laserweld went from invisible to a go-to voice in American manufacturing, with compounding growth that keeps accelerating.',
    },
    resultStats: [
      { label: 'Followers', value: '31.74K', pct: '+5,608%' },
      { label: 'Impressions', value: '19.29M', pct: '+33,320%' },
      { label: 'Interactions', value: '317.31K', pct: '+13,425%' },
    ],
    links: [
      { label: 'Instagram', url: 'https://instagram.com/laserweldtx' },
      { label: 'TikTok', url: 'https://tiktok.com/@laserweld.texas' },
      { label: 'YouTube', url: 'https://www.youtube.com/@LaserWeldTexas' },
    ],
  },

  // -------------------------------------------------------------------
  // 2) THE TABLE, scaffold. Add heroStats / platforms / videos / shorts
  //    / resultStats the same way Laserweld is built and they'll appear.
  // -------------------------------------------------------------------
  {
    id: 'the-table',
    client: 'The Table',
    headlineMetric: '20M+ Views',
    tagline: 'Turning a local table into a feed people actually crave.',
    intro:
      'A short-form content engine built to grow reach and turn attention into a real, loyal community.',
    cover: '/portfolio/table.jpeg',
    heroStats: [
      { label: 'Return on Ad Spend', value: '5x' },
      { label: 'Revenue Increase', value: '+200%' },
      { label: 'Foot Traffic', value: '+160%' },
      { label: 'Total Views', value: '20M+' },
    ],
    platforms: [],
    videos: [],
    shorts: [],
    resultStats: [],
    links: [{ label: 'Instagram', url: 'https://instagram.com/thetable_phc' }],
  },

  // -------------------------------------------------------------------
  // 3) PERSONAL BRAND (RORY), scaffold.
  // -------------------------------------------------------------------
  {
    id: 'personal-brand',
    client: 'Personal Brand',
    headlineMetric: '15M+ Views',
    tagline: 'Building a personal brand from the ground up.',
    intro:
      'Story-first short-form content that grew a personal brand from zero into a recognizable voice.',
    cover: '/portfolio/portfolio-3.webp',
    heroStats: [
      { label: 'Return on Ad Spend', value: '5x' },
      { label: 'Revenue Increase', value: '+200%' },
      { label: 'Audience Growth', value: '+340%' },
      { label: 'Total Views', value: '15M+' },
    ],
    platforms: [],
    videos: [],
    shorts: [],
    resultStats: [],
    links: [
      { label: 'Instagram', url: 'https://instagram.com/rroryy.y' },
      { label: 'TikTok', url: 'https://tiktok.com/@roryiell' },
    ],
  },
];

// Shared "Full-Service Partnership" block (the 01–04 row under the case study).
export interface PartnershipStep {
  n: string;
  title: string;
  desc: string;
}

export const partnership: PartnershipStep[] = [
  {
    n: '01',
    title: 'Strategy & Scripting',
    desc: 'Story arcs built around real wins, written to hook, hold, and convert.',
  },
  {
    n: '02',
    title: 'Production',
    desc: 'Cinematic video and photography, captured on location and cut for every platform.',
  },
  {
    n: '03',
    title: 'Branding & Graphics',
    desc: 'A cohesive identity, logo, palette, thumbnails, carried across every channel.',
  },
  {
    n: '04',
    title: 'Distribution & Web',
    desc: 'A consistent publishing cadence plus a high-converting website that turns views into leads.',
  },
];
