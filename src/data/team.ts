// =====================================================================
//  Team, shown on /team.
//  Names are placeholders where unknown; fill them in (the `name` field
//  can be left as '' and the card will show just the role). Photos are
//  the optimized webp portraits in /public/portfolio.
// =====================================================================

export interface TeamMember {
  role: string;
  name?: string;
  photo: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: 'Nathan',
    role: 'Founder & Director',
    photo: '/portfolio/portfolio-6.webp',
    bio: 'Founder of Viridian Films. Obsessed with telling real stories through beautiful imagery, from documentaries to brand films that actually move people.',
  },
  {
    name: '',
    role: 'Cinematographer',
    photo: '/portfolio/portfolio-1.webp',
    bio: 'Lives behind the lens. Shapes the light, the lens, and the look so every frame feels intentional.',
  },
  {
    name: '',
    role: 'Editor & Colorist',
    photo: '/portfolio/portfolio-2.webp',
    bio: 'Turns hours of footage into a story with rhythm, cuts that hook, hold, and land the message.',
  },
  {
    name: '',
    role: 'Photographer',
    photo: '/portfolio/portfolio-3.webp',
    bio: 'Editorial eye for stills, portraits and product work with a clean, premium finish.',
  },
];

// Group / behind-the-scenes shot used as the team page banner.
export const teamBanner = '/portfolio/portfolio-4.webp';
