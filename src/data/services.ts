// The eight Viridian Films service lines (shown in the Services section).

export interface Service {
  num: string;
  title: string;
  desc: string;
}

export const services: Service[] = [
  {
    num: '01',
    title: 'Video Production',
    desc: 'Cinematic brand films, documentaries, and short-form built to make people stop scrolling, and feel something.',
  },
  {
    num: '02',
    title: 'Photography',
    desc: 'Editorial, product, and lifestyle imagery that gives your brand a look as strong as its story.',
  },
  {
    num: '03',
    title: 'UGC Content',
    desc: 'Authentic, native-feeling creator content engineered to convert across every feed.',
  },
  {
    num: '04',
    title: 'Creative Strategy',
    desc: 'The plan behind the pretty pictures, positioning, hooks, and a roadmap tied to real outcomes.',
  },
  {
    num: '05',
    title: 'Graphic Design',
    desc: 'Thumbnails, covers, and on-screen assets designed for clicks, clarity, and retention.',
  },
  {
    num: '06',
    title: 'Social Media Management',
    desc: 'A consistent publishing engine, calendar, captions, and community, so your channels never go quiet.',
  },
  {
    num: '07',
    title: 'Content Creation',
    desc: 'A steady stream of platform-ready video and stills, captured once and cut for every channel.',
  },
  {
    num: '08',
    title: 'Website Development',
    desc: 'A fast, beautiful home base that turns the attention we earn into inbound leads.',
  },
];
