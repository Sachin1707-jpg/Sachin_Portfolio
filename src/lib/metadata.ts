import { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: {
    default: 'Sachin Verma - MERN Stack & Full Stack Developer',
    template: '%s | Sachin Verma',
  },
  description:
    'Portfolio of Sachin Verma, MERN Stack & Full Stack Developer (B.Tech CSE, CGPA 8.4) specializing in React.js, Node.js, Express.js, MongoDB, REST APIs, FastAPI, AI/ML, and Data Analytics.',
  keywords: [
    'Sachin Verma',
    'MERN Stack Developer',
    'Full Stack Developer',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'REST APIs',
    'FastAPI',
    'Python',
    'PostgreSQL',
    'Data Analytics',
    'Power BI',
    'Portfolio',
  ],
  authors: [
    {
      name: 'Sachin Verma',
    },
  ],
  creator: 'Sachin Verma',
  metadataBase: new URL('https://sachinverma.dev'),
  alternates: {
    canonical: './',
  },
  icons: {
    icon: '/logo.webp',
  },
  openGraph: {
    title: 'Sachin Verma - MERN Stack & Full Stack Developer',
    description:
      'Portfolio of Sachin Verma, MERN Stack and Full Stack Developer specializing in React.js, Node.js, Express.js, MongoDB, REST APIs, and data analytics.',
    url: 'https://sachinverma.dev',
    siteName: 'Sachin Verma Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sachin Verma - MERN Stack & Full Stack Developer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sachin Verma - MERN Stack & Full Stack Developer',
    description:
      'Portfolio of Sachin Verma, MERN Stack and Full Stack Developer specializing in React.js, Node.js, Express.js, MongoDB, REST APIs, and data analytics.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

