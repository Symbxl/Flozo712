// =====================================================================
//  Services, process, industries and principles for Flozo Media.
//  This is the content hub for the Services grid, the home Process band,
//  the Industries strip, and the About section.
// =====================================================================

export interface Service {
  num: string;
  title: string;
  desc: string;
  // Optional hero image for the service selector card. Drop a path in here
  // (e.g. '/services/short-form-video.webp') and it replaces the placeholder
  // frame automatically — no component changes needed.
  image?: string;
  // Optional live examples for the service selector card. Instagram post/reel
  // permalinks embedded in place of the image/placeholder frame, under the
  // given label. Takes precedence over `image`.
  examples?: {
    label: string;
    urls: string[];
  };
}

// Core services (shown in the Services grid).
export const services: Service[] = [
  {
    num: '01',
    title: 'Short-Form Video',
    desc: 'Scroll-stopping TikToks, Reels, and Shorts, filmed and edited to hook in the first second and built around what your customers actually watch and share.',
    examples: {
      label: 'Reels',
      urls: [
        'https://www.instagram.com/p/DZ8adQNSSAD/',
        'https://www.instagram.com/p/DZk8pGnPtBT/',
      ],
    },
  },
  {
    num: '02',
    title: 'Social Media Management',
    desc: 'Full ownership of your profiles — posting, captions, comments, and DMs — so your business shows up every day without you lifting a finger.',
    image: '/ssm.png',
  },
  {
    num: '03',
    title: 'Content Strategy',
    desc: 'A monthly content plan built on your goals, your audience, and your local market, so every post has a job to do before we hit record.',
    image: '/strat.png',
  },
  {
    num: '04',
    title: 'On-Location Production',
    desc: 'We come to you. Filming days at your business that capture the real story — your team, your craft, and your customers.',
    image: '/pro.png',
  },
  {
    num: '05',
    title: 'YouTube Channel Growth',
    desc: 'Long-form video that compounds. We plan, script, film, and optimize a channel that keeps earning views and customers for years.',
    image: '/yt.png',
  },
  {
    num: '06',
    title: 'Local SEO & Google Business',
    desc: 'Optimized profiles, reviews, and local search presence, so you are the first result when neighbors look for what you do.',
    image: '/seo.png',
  },
];

// How-we-work process, mirrored on the home Process band and the Services page.
// `when` is the short mono eyebrow label shown above each step title on the
// home timeline.
export interface ProcessStep {
  n: string;
  when: string;
  title: string;
  desc: string;
}

export const process: ProcessStep[] = [
  {
    n: '01',
    when: 'Free Call',
    title: 'Discovery Call',
    desc: 'Tell us about your business, your customers, and your goals. We audit your current presence and find the fastest wins.',
  },
  {
    n: '02',
    when: 'Custom Plan',
    title: 'Content Strategy',
    desc: 'We build your content plan — pillars, platforms, and a publishing calendar — so every post has a purpose before we hit record.',
  },
  {
    n: '03',
    when: 'On Location',
    title: 'Create & Publish',
    desc: 'We film on location, edit in-house, and publish on schedule. One team owns your content from idea to posted.',
  },
  {
    n: '04',
    when: 'Every Month',
    title: 'Grow & Report',
    desc: 'We track what works, double down, and send a plain-English report every month. Content that compounds, not campaigns that expire.',
  },
];

// Trusted-by client logos.
// ⚠️ PLACEHOLDER logos carried over from the previous site — swap in real
// client logos before launch. Each card links out to the company's own site.
export interface TrustedCompany {
  name: string;
  logo: string;
  url: string;
}

export const trustedBy: TrustedCompany[] = [
  { name: 'Shell', logo: '/logos/shell.webp', url: 'https://www.shell.com' },
  { name: 'AEREON', logo: '/logos/aereon.webp', url: 'https://aereon.com' },
  { name: 'Caterpillar', logo: '/logos/caterpillar.webp', url: 'https://www.caterpillar.com' },
  { name: 'JWC Environmental', logo: '/logos/jwc.webp', url: 'https://www.jwce.com' },
  { name: 'Mitsubishi', logo: '/logos/mitsubishi.webp', url: 'https://www.mitsubishi.com' },
  { name: 'Munters', logo: '/logos/munters.webp', url: 'https://www.munters.com' },
  { name: 'Sulzer', logo: '/logos/sulzer.webp', url: 'https://www.sulzer.com' },
  { name: 'NOV', logo: '/logos/nov.webp', url: 'https://www.nov.com' },
];

// Industries served. Each carries a short, concrete descriptor of what we
// create for that sector, used by the Industries strip on the home page.
export interface Industry {
  name: string;
  blurb: string;
}

export const industries: Industry[] = [
  {
    name: 'HVAC',
    blurb: 'Seasonal tips, install stories, and honest explainers that make you the first call when the AC dies in July.',
  },
  {
    name: 'Plumbing',
    blurb: 'Job-site videos and before-and-afters that win the emergency call — and the remodel that comes after it.',
  },
  {
    name: 'Electrical',
    blurb: 'Safety-first content that builds trust with homeowners before your crew ever steps through the door.',
  },
  {
    name: 'Roofing & Exteriors',
    blurb: 'Drone shots and dramatic transformations that sell the whole neighborhood while your crew is still on the roof.',
  },
  {
    name: 'Landscaping & Lawn Care',
    blurb: 'Transformation reels that turn one manicured yard into ten calls from the same street.',
  },
  {
    name: 'Remodeling & Painting',
    blurb: 'Time-lapse builds and finished reveals that close your next three estimates before you quote them.',
  },
];

// Operating principles (shown in the About section).
export interface Principle {
  title: string;
  desc: string;
}

export const principles: Principle[] = [
  {
    title: 'Consistency Over Virality',
    desc: 'One viral clip does not build a business. Showing up every week does. We build systems that publish on schedule, every time.',
  },
  {
    title: 'Authenticity First',
    desc: 'People buy from people. We film the real you — your team, your work, your story — because that is the content your customers trust.',
  },
  {
    title: 'Data-Driven Creativity',
    desc: 'Every post teaches us something. We track what your audience watches, saves, and shares, then double down on what works.',
  },
];
