export interface ProjectStat {
  value: string;
  label: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  type: string;
  role: string;
  tech: string[];
  description: string;
  overview: string;
  architecture: string;
  implementation: string;
  stats: ProjectStat[];
  accent: string;
  myRole: string[];
  images: string[];
  hoverImage: string;
  github: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    slug: 'polar-ems',
    title: 'Polar EMS — AI-Driven Smart Energy Management',
    type: 'AI-Driven Smart Energy Management & Forecasting System',
    role: 'Full Stack & AI Developer',
    tech: ['React.js', 'Python', 'FastAPI', 'AI/ML', 'REST APIs', 'WebSockets', 'Weather APIs', 'Data Analytics'],
    description:
      'A full-stack energy management system for remote polar stations, monitoring solar, wind, diesel, and battery in real time with ML forecasting, failure alerts, and What-If simulations.',
    overview:
      'Built a full-stack energy management system for remote polar stations, monitoring solar, wind, diesel, and battery storage in real time. Developed ML forecasting on historical energy and weather data to predict generation and battery consumption while implementing AI-based recommendations and failure alerts to cut fuel dependency and keep critical loads running.',
    architecture:
      'Engineered with React.js on the frontend and high-performance FastAPI REST endpoints with WebSockets on the backend for real-time telemetry streaming. Integrates ML forecasting models trained on historical power data and live Weather APIs to model battery depletion curves and renewable yield under harsh arctic conditions.',
    implementation:
      'Implemented AI-based energy recommendations and proactive alerts for sudden component failures, ensuring uninterrupted operation of critical station loads. Designed an interactive What-If simulation module and FastAPI endpoints allowing operators to stress-test energy scenarios and optimize hybrid power generation.',
    stats: [
      { value: 'Real-Time', label: 'Multi-source energy monitoring' },
      { value: 'ML Forecast', label: 'Weather & battery analytics' },
      { value: 'What-If', label: 'Scenario simulation module' },
    ],
    accent: '#2E7D6B',
    myRole: [
      'Built a full-stack energy management system for remote polar stations, monitoring solar, wind, diesel, and battery in real time.',
      'Developed ML forecasting on historical energy and weather data to predict generation and battery consumption.',
      'Implemented AI-based energy recommendations and alerts for sudden failures to cut fuel dependency and keep critical loads running.',
      'Designed a What-If simulation module and FastAPI REST endpoints to support reliable energy planning in extreme environments.',
      'Integrated WebSockets and Weather APIs for real-time telemetry streaming and climate-aware adjustments.',
    ],
    images: [
      '/Projects/EMS/1.png',
      '/Projects/EMS/2.png',
      '/Projects/EMS/3.png',
    ],
    hoverImage: '/Projects/EMS/1.png',
    github: 'https://github.com/Sachin1707-jpg/Polar-EMS',
    liveUrl: 'https://polar-ems-barl.vercel.app/',
  },
  {
    id: 2,
    slug: 'redconnect',
    title: 'RedConnect — Blood Donation & Emergency Coordination',
    type: 'Real-Time Blood Donation & Emergency Coordination Platform',
    role: 'Full Stack Developer',
    tech: ['React.js', 'PostgreSQL', 'Python', 'Pandas', 'NumPy', 'REST APIs', 'JavaScript'],
    description:
      'A full-stack emergency healthcare platform with Donor, Hospital, NGO, and Admin modules, an intelligent matching algorithm reducing match time by 60%, and 15+ sub-200ms RESTful endpoints.',
    overview:
      'Led architecture of a full-stack healthcare platform connecting blood donors, hospitals, and NGOs with dedicated modules for 4 user roles (Donor, Hospital, NGO, and Admin). Scaled platform to 1,000+ donors and 50+ hospital partners nationwide, recognized as a Finalist at the Web Nova Hackathon among 1,000+ national teams.',
    architecture:
      'Architected with React.js and a modular backend communicating through 15+ RESTful endpoints achieving sub-200ms response times. Features strict role-based access control (RBAC) across Donor, Hospital, NGO, and Admin portals backed by PostgreSQL database and Pandas/NumPy analytics.',
    implementation:
      'Engineered a smart blood-matching algorithm that reduced match time by 60%, improving emergency response turnaround. Integrated Pandas and NumPy data analytics pipelines to improve NGO procurement planning efficiency by 35% while scaling to 1,000+ donors and 50+ hospital partners.',
    stats: [
      { value: '60%', label: 'Match time reduction' },
      { value: '1,000+', label: 'Donors registered' },
      { value: '<200ms', label: 'API response times' },
    ],
    accent: '#E63946',
    myRole: [
      'Led architecture of a full-stack healthcare platform with Donor, Hospital, NGO, and Admin modules for 4 user roles.',
      'Engineered a smart blood-matching algorithm that reduced match time by 60%, improving emergency response.',
      'Deployed 15+ RESTful endpoints achieving sub-200ms response times across all platform modules.',
      'Scaled platform to 1,000+ donors and 50+ hospital partners, growing adoption nationwide.',
    ],
    images: [
      '/Projects/DHN/1.png',
      '/Projects/DHN/2.png',
      '/Projects/DHN/3.png',
      '/Projects/DHN/4.png',
    ],
    hoverImage: '/Projects/DHN/1.png',
    github: 'https://github.com/Sachin1707-jpg/RED-CONNECT',
    liveUrl: 'https://red-connect-d-h-n.vercel.app/',
  },
  {
    id: 3,
    slug: 'medicare-reminder',
    title: 'MediCare Reminder — Full-Stack MERN Platform',
    type: 'Full-Stack MERN Medication Management Platform',
    role: 'Full Stack Developer',
    tech: ['React.js (Vite)', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Tailwind CSS', 'Chart.js', 'Web Push API'],
    description:
      'A production-grade MERN medication platform featuring secure HttpOnly cookie JWT auth, automated Web Push notification scheduling, and 30-day adherence trend analytics with Chart.js.',
    overview:
      'A full-stack MERN medication management platform engineered to automate patient dosage reminders and monitor health adherence. Led development of secure JWT authentication with HttpOnly cookies across 3 flows, automated push reminders with Node-cron scheduling, and real-time dashboard analytics with Chart.js.',
    architecture:
      'Architected with React.js (Vite) frontend and Node.js/Express.js backend with MongoDB and Mongoose. Implemented secure JWT authentication via HttpOnly cookies covering login, registration, and password reset flows with robust schema validation.',
    implementation:
      'Built real-time dashboard analytics engine tracking 30-day medication adherence trends using Chart.js. Engineered full CRUD functionality to manage medicine and prescription records. Automated medication reminders using native Web Push API and Node-cron scheduling, eliminating manual intervention, and developed a comprehensive health-tracking module visualizing water intake, BMI, steps, blood pressure, and sleep trends.',
    stats: [
      { value: '30-Day', label: 'Adherence trend charts' },
      { value: '5 Vitals', label: 'Health metrics tracked' },
      { value: 'Automated', label: 'Web push & cron reminders' },
    ],
    accent: '#D97706',
    myRole: [
      'Led development of secure JWT authentication with HttpOnly cookies across 3 flows: login, registration, password reset.',
      'Built real-time dashboard analytics engine tracking 30-day medication adherence trends with Chart.js.',
      'Engineered full CRUD functionality to manage medicine and prescription records.',
      'Automated medication reminders using Web Push API and Node-cron scheduling, eliminating manual intervention.',
      'Developed health-tracking module visualizing water intake, BMI, steps, blood pressure, and sleep trends.',
    ],
    images: [
      '/Projects/Health-reminder/1.png',
      '/Projects/Health-reminder/2.png',
      '/Projects/Health-reminder/3.png',
    ],
    hoverImage: '/Projects/Health-reminder/1.png',
    github: 'https://github.com/Sachin1707-jpg/MediCareReminder',
    liveUrl: 'https://lenevo-assignment2.vercel.app/login',
  },
];
export function getAllProjects(): Project[] {
  return projects;
}
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
export function getAdjacentProjects(slug: string): { prev?: Project; next?: Project } {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return {};
  return {
    prev: projects[(idx - 1 + projects.length) % projects.length],
    next: projects[(idx + 1) % projects.length],
  };
}
