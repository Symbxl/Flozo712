// =====================================================================
//  Capabilities, process, industries and principles for Laser Weld Inc.
//  This is the content hub for the Services grid, the home Process band,
//  the Industries strip, and the About section.
// =====================================================================

export interface Service {
  num: string;
  title: string;
  desc: string;
  // Optional hero image for the capability selector card. Drop a path in here
  // (e.g. '/capabilities/laser-welding.webp') and it replaces the placeholder
  // frame automatically — no component changes needed.
  image?: string;
}

// Core capabilities (shown in the Capabilities / Services grid).
export const services: Service[] = [
  {
    num: '01',
    title: 'Laser Welding',
    desc: 'Precision laser welds with minimal heat distortion and a clean, near-finished seam, ideal for thin gauge, tight tolerances, and high-repeat production.',
  },
  {
    num: '02',
    title: 'MIG & TIG Welding',
    desc: 'Certified MIG and TIG welders for steel, stainless, and aluminum, from one-off structural work to full production runs.',
  },
  {
    num: '03',
    title: 'Laser & Plate Cutting',
    desc: 'High-speed flat-sheet and plate cutting on the largest Trumpf lasers in America, clean edges, tight nesting, zero secondary work.',
  },
  {
    num: '04',
    title: 'CNC Bending',
    desc: 'Tube and plate bending with press-brake precision and repeatable accuracy across the full run, from prototypes to thousands of parts.',
  },
  {
    num: '05',
    title: '3D Tube Profiling',
    desc: 'Multi-axis tube laser profiling for complex intersections, holes, and copes, engineered to drop straight into assembly.',
  },
  {
    num: '06',
    title: 'Machining',
    desc: 'In-house machining to finish, drill, and tolerance your parts so they leave the floor ready to install, no outside handoffs.',
  },
  {
    num: '07',
    title: 'Coating & Laser Cleaning',
    desc: 'Surface prep, laser cleaning, and durable coating that protect the part and deliver the finish your spec calls for.',
  },
  {
    num: '08',
    title: 'Design & Engineering',
    desc: 'Design-for-manufacture support up front, we help engineer the part to build faster, weld stronger, and cost less.',
  },
];

// Turn-key process, mirrored on the home Process band and the Services page.
export interface ProcessStep {
  n: string;
  title: string;
  desc: string;
}

export const process: ProcessStep[] = [
  {
    n: '01',
    title: 'Quote & Approval',
    desc: 'Send us your prints or a sketch. We review the job, engineer for manufacturability, and get you a fast, honest quote to approve.',
  },
  {
    n: '02',
    title: 'Engineering & Setup',
    desc: 'We program the lasers, nest the material, and set up the line, so the first part off the machine is already right.',
  },
  {
    n: '03',
    title: 'Fabrication',
    desc: 'Cut, bent, welded, machined, and coated in one facility. One team owns the part from raw steel to finished assembly.',
  },
  {
    n: '04',
    title: 'Delivery',
    desc: 'Inspected, packaged, and delivered on our own trucks, on schedule and ready to install. 1,754 parts ship on an average day.',
  },
];

// Trusted-by client logos (mirrors the "Trusted By" strip on laserweldinc.com).
// Each card links out to the company's own site.
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
// build for that sector, used by the Industries strip on the home page.
export interface Industry {
  name: string;
  blurb: string;
}

export const industries: Industry[] = [
  {
    name: 'Oil & Gas',
    blurb: 'Pressure-rated skids, vessels, and separators built to hold under downhole conditions.',
  },
  {
    name: 'Aerospace',
    blurb: 'Flight-critical assemblies held to tolerances measured in thousandths of an inch.',
  },
  {
    name: 'Wastewater',
    blurb: 'Corrosion-resistant tanks, screens, and frames engineered to run for decades.',
  },
  {
    name: 'Data Centers',
    blurb: 'Enclosures, racks, and cooling structures built for mission-critical uptime.',
  },
  {
    name: 'Material Handling',
    blurb: 'Conveyors, frames, and heavy weldments that run every shift without fail.',
  },
  {
    name: 'Structural & Fabrication',
    blurb: 'Load-bearing steel and weldments that meet code and pass inspection first time.',
  },
];

// Operating principles (shown in the About section).
export interface Principle {
  title: string;
  desc: string;
}

export const principles: Principle[] = [
  {
    title: 'Reliability & Consistency',
    desc: 'Part number one and part number one million leave the floor identical. Repeatable quality you can build a schedule on.',
  },
  {
    title: 'Safety & Quality Assurance',
    desc: 'Inspected at every stage against your spec. A culture built on trust, dignity, and doing the job right the first time.',
  },
  {
    title: 'Innovation & Adaptability',
    desc: 'We invest in the newest laser and automation technology so American manufacturing competes, and wins, on speed and price.',
  },
];
