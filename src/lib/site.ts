export const site = {
  name: 'Sachin Verma',
  firstName: 'Sachin',
  lastName: 'Verma',
  handle: 'Sachin1707-jpg',
  brand: 'sachin.dev',
  email: 'sachinverma964839@gmail.com',
  location: 'Varanasi, UP, India',
  timeZone: 'Asia/Kolkata',
  timeZoneLabel: 'IST',
  url: 'https://sachinverma.dev',
  tagline: 'MERN Stack & Full Stack Developer building scalable, real-time web applications.',
  roles: [
    'MERN Stack Developer',
    'Full Stack Developer',
    'React & Node.js Engineer',
    'AI & Data Analytics',
    'Open to Opportunities',
  ],
} as const;

export type SocialKey = 'github' | 'linkedin' | 'source';

export const socials: Record<SocialKey, { label: string; href: string }> = {
  github: { label: 'GitHub', href: 'https://github.com/Sachin1707-jpg' },
  linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sachinvermadev' },
  source: { label: 'Source Code', href: 'https://github.com/Sachin1707-jpg/Portfolio' },
};

export const socialList: Array<{ label: string; href: string }> = [
  socials.linkedin,
  socials.github,
  socials.source,
];

export const navLinks = [
  { name: 'Home', href: '/#top', menuOnly: true },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Work', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
] as const;
