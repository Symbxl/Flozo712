// ⚠️ PLACEHOLDER channel — this is real data from the LaserWeld Texas YouTube
// channel (https://www.youtube.com/@LaserWeldTexas), kept for now as a live
// example of what organic long-form content does for a local business. Swap in
// the Flozo Media channel (or a client channel) here when it exists — it powers
// the YouTube section, a 1:1 watch-page replica embedded on the homepage.

export const youtube = {
  channelName: 'LaserWeld Texas',
  handle: '@LaserWeldTexas',
  url: 'https://www.youtube.com/@LaserWeldTexas',
  subscribers: '15K subscribers',
  videoCount: '199 videos',
  // Public channel avatar served from Google's CDN.
  avatar:
    'https://yt3.googleusercontent.com/XLocFARh-I31471wFO8h5mOOC7QFR6B6mK3aekYITwmouAj8r228H2fEKwu2slFQImHEUHCIyQ=s176-c-k-c0x00ffffff-no-rj',
};

export interface YtVideo {
  id: string;
  title: string;
  views: string; // e.g. "86K"
  when: string; // e.g. "3w ago"
}

// Ordered newest-first, exactly as they appear on the channel's Videos tab.
export const ytVideos: YtVideo[] = [
  { id: 'bRnj9a6T53Q', title: 'The Real Cost of Chinese Parts', views: '86K', when: '3w ago' },
  { id: 'hPkhPDwkyrY', title: 'A New Way to Run American Manufacturing', views: '15K', when: '2mo ago' },
  { id: 'TVtGBMb_bdg', title: '5 Machines We Can’t Live Without (Our Shop Essentials)', views: '2.3K', when: '2mo ago' },
  { id: 'eniVoIhtw-s', title: 'We Reviewed 300 Welders… Only 10 Made It', views: '10K', when: '3mo ago' },
  { id: 'wZshsnhiTFE', title: 'Laser vs Plasma: Which One Actually Makes You More Money?', views: '31K', when: '4mo ago' },
  { id: 'mEJ-YoP387c', title: 'Bringing Back The Jobs Sent To China | Shop tour', views: '308K', when: '6mo ago' },
  { id: 'gIlUooJuSYY', title: 'The LARGEST Trumpf Laser in America', views: '4.5K', when: '7mo ago' },
  { id: 'sZKDdiP1Xxw', title: 'This One System Solved 90% of Our People Problems', views: '8.1K', when: '8mo ago' },
  { id: 'O0rkaLx787M', title: 'The Factory Where Employees Are Their Own Bosses', views: '625K', when: '9mo ago' },
  { id: 'D2hUQlFdLHI', title: 'GEN-Z In Manufacturing | Are They A Lost Cause?', views: '6.6K', when: '11mo ago' },
  { id: 'd4SbsrPpNAM', title: 'Why We Hire Welders, Not Robots | Don’t Make These Mistakes', views: '7K', when: '11mo ago' },
  { id: 'cNl-eZD1Zek', title: 'How Panel Benders & Punch Lasers Transform Sheet Metal Production', views: '2.3K', when: '1y ago' },
  { id: 'gusYnUz5-HE', title: 'Stop Guessing—Quote Manufacturing Parts with Confidence Using THIS Method', views: '22K', when: '1y ago' },
  { id: 'RdD8sZtmj84', title: 'The Factory Bringing Back Manufacturing to America | Startup Story', views: '20K', when: '1y ago' },
  { id: 'a_qOqMKdaSA', title: 'Tariffs: Help or Hurt? | Manufacturer’s Perspective', views: '871', when: '1y ago' },
  { id: 'Z62D18SlyBw', title: 'Why American Manufacturing is Losing to China', views: '2.1K', when: '1y ago' },
  { id: 'eeABgbw1Qw0', title: 'Do Tariffs Actually Save U.S. Manufacturing?', views: '2.3K', when: '1y ago' },
  { id: 'c-0A65S7pFk', title: 'Steel Prices Are CRAZY! Do This To Save!', views: '2.6K', when: '1y ago' },
  { id: 'Lgja-9JxB4o', title: 'Made in Texas, Built for the World: How We Compete with China (Part 2)', views: '22K', when: '1y ago' },
  { id: 'Xswd1kUWRDo', title: 'So You Wanna Be a Welder? | Insight from Employer with 50+ Welders', views: '2.1K', when: '1y ago' },
  { id: 'wyfV136Qpwg', title: 'Made in Texas, Built for the World: How We Compete with China (Part 1)', views: '257K', when: '1y ago' },
  { id: '6tifrEV_gwA', title: 'Mastering Fiber Lasers: Optimize Quality, Speed, and Cost!', views: '1.9K', when: '1y ago' },
  { id: 'Zrf0kmzNuIU', title: 'From a $5K Saw to a $1.7M Tube Laser: How It Transformed Our Process', views: '3.8K', when: '1y ago' },
  { id: 'GbWz4cBtHec', title: 'Is Laser Welding the Future of Welding?', views: '2.2K', when: '1y ago' },
  { id: 'sEpqF28gN_w', title: 'Laserweld Houston | Pushing Boundaries in Manufacturing Excellence!', views: '1.3K', when: '2y ago' },
  { id: 'a6CpmeX62b0', title: 'LaserCleaner Is a MUST-HAVE! The Cleaning Tool You’ve Been Waiting For!', views: '1.1K', when: '2y ago' },
];
