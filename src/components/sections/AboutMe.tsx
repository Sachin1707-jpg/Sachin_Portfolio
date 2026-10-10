'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import ScrollWordReveal from '@/components/ui/ScrollWordReveal';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import FlowField from '@/components/canvas/FlowField';

const CREDENTIALS = [
  {
    year: "May '26 - Jul '26",
    title: 'Data Analyst Intern',
    organization: 'Bluestock Fintech • Remote',
    stat: 'Analyzed 10,000+ financial records using Python (Pandas, NumPy) & SQL; reduced data errors by 30% and cut reporting turnaround by 40% with Power BI & DAX.',
    type: 'Experience',
  },
  {
    year: "Jun '26 - Jul '26",
    title: 'IBM SkillsBuild Intern',
    organization: 'BharatCares / AICTE • Remote',
    stat: 'Completed 6-week hands-on training in Gen AI development, prompt engineering, and cloud deployment. Earned official AICTE & BharatCares Internship Certificate.',
    type: 'Experience',
  },
  {
    year: '2025 - 2026',
    title: 'Hackathon Winner & Finalist',
    organization: 'Tech Eximius, Web Nova & Hack on Titan',
    stat: 'Secured 2 hackathon wins and 5 finalist placements. Winner at Tech Eximius 2026; Team Lead Finalist at Web Nova Hackathon among 1,000+ national teams; Finalist at Hack on Titan.',
    type: 'Recognition',
  },
  {
    year: '2024 - 2028',
    title: 'B.Tech, Computer Science & Engineering',
    organization: 'ABES Engineering College, Ghaziabad, UP',
    stat: 'CGPA: 8.4 / 10 • Technical Team Volunteer organizing coding competitions for 100+ students • Contributed to IIT Bombay Open Source Program • Solved 100+ DSA problems on LeetCode.',
    type: 'Education',
  },
];

const CERTIFICATIONS = [
  {
    title: 'Intro to Machine Learning',
    issuer: 'NPTEL',
    year: '2025',
    category: 'AI & ML',
  },
  {
    title: 'Prompt Engineering',
    issuer: 'TCS',
    year: '2026',
    category: 'Generative AI',
  },
  {
    title: 'Data Analysis',
    issuer: 'Microsoft',
    year: '2026',
    category: 'Data Analytics',
  },
  {
    title: 'Gen AI & Cloud Computing',
    issuer: 'BharatCares / AICTE',
    year: '2026',
    category: 'Cloud & AI',
  },
];

const HIGHLIGHTS = [
  {
    stat: '2 Wins & 5 Finalists',
    label: 'National Hackathons',
    desc: 'Winner at Tech Eximius 2026 & Team Lead Finalist at Web Nova among 1,000+ teams',
  },
  {
    stat: '1,000+ Donors / 50+ Hospitals',
    label: 'Scaled Live Platform',
    desc: 'RedConnect emergency coordinator with sub-200ms REST endpoints',
  },
  {
    stat: '10,000+ Records',
    label: 'Financial Data Analytics',
    desc: 'EDA & Power BI dashboards cutting reporting turnaround by 40% at Bluestock Fintech',
  },
  {
    stat: '100+ DSA Solved',
    label: 'LeetCode & 2-Star CodeChef',
    desc: 'Open source contributor under IIT Bombay Open Source Program',
  },
];

const About = () => {
  const headingWords = [
    { t: 'WHO' },
    { t: 'am', serif: true },
    { t: 'i?' },
  ];
  const descriptionText =
    'B.Tech CSE undergraduate (CGPA 8.4) and MERN Stack Developer building scalable healthcare platforms, AI energy systems, and high-performance web products.';
  const aboutMeText = `I am a B.Tech Computer Science & Engineering undergraduate at ABES Engineering College (CGPA 8.4/10) and a MERN Stack Developer proficient in React.js, Node.js, Express.js, MongoDB, REST APIs, and JWT authentication. I specialize in building efficient, user-focused web applications with clean architectures, responsive interfaces, and reliable backend systems.\n\nI have architected and shipped full-stack platforms — including Polar EMS (an AI-driven energy management system with ML forecasting), RedConnect (a real-time blood donation emergency platform scaled to 1,000+ donors and 50+ hospital partners with sub-200ms APIs), and MediCare Reminder (a full-stack MERN platform with automated Web Push reminders and 30-day Chart.js adherence analytics). My solutions have secured 2 hackathon wins and 5 finalist placements, including Winner at Tech Eximius 2026 and Team Lead Finalist at Web Nova Hackathon among 1,000+ national teams.\n\nAlongside full-stack engineering, I bring data analytics and AI expertise from my internships at Bluestock Fintech (analyzing 10,000+ financial records and cutting reporting turnaround by 40% with Python, SQL, and Power BI) and IBM SkillsBuild / BharatCares / AICTE in Gen AI & Cloud Computing. I am also an active open-source contributor under the IIT Bombay Open Source Program and have solved 100+ DSA problems on LeetCode.`;

  const sectionRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.about-image-wrapper',
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          force3D: true,
          scrollTrigger: {
            trigger: '.about-image-wrapper',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      gsap.fromTo(
        '.about-label',
        { opacity: 0, letterSpacing: '0.45em' },
        {
          opacity: 1,
          letterSpacing: '0.3em',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-label',
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      const rows = gsap.utils.toArray<HTMLElement>('.cred-row');
      rows.forEach((row, i) => {
        const side = row.dataset.side === 'left' ? -1 : 1;
        const dot = row.querySelector('.timeline-dot');
        const connector = row.querySelector('.timeline-connector');
        const content = row.querySelector('.timeline-content');
        gsap.fromTo(
          row,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.65,
            ease: 'power3.out',
            delay: i * 0.07,
            scrollTrigger: {
              trigger: row,
              start: 'top 90%',
              once: true,
            },
          },
        );
        if (content) {
          gsap.fromTo(
            content,
            { x: side * 42, y: 18 },
            {
              x: 0,
              y: 0,
              duration: 0.8,
              ease: 'power4.out',
              scrollTrigger: {
                trigger: row,
                start: 'top 87%',
                once: true,
              },
            },
          );
        }
        if (dot) {
          gsap.fromTo(
            dot,
            { scale: 0 },
            {
              scale: 1,
              duration: 0.45,
              ease: 'back.out(2.5)',
              delay: 0.18,
              scrollTrigger: {
                trigger: row,
                start: 'top 87%',
                once: true,
              },
            },
          );
        }
        if (connector) {
          gsap.fromTo(
            connector,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 0.55,
              delay: 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: row,
                start: 'top 87%',
                once: true,
              },
            },
          );
        }
      });

      gsap.fromTo(
        '.cred-section-label',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: tableRef.current,
            start: 'top 92%',
            once: true,
          },
        },
      );

      const experienceWords = gsap.utils.toArray<HTMLElement>('.experience-word > span');
      if (experienceWords.length) {
        gsap.fromTo(
          experienceWords,
          { yPercent: 120, rotate: 3 },
          {
            yPercent: 0,
            rotate: 0,
            duration: 1,
            stagger: 0.12,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: tableRef.current,
              start: 'top 82%',
              once: true,
            },
          },
        );
      }

      if (pathRef.current) {
        const length = pathRef.current.getTotalLength();
        gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          duration: 2.2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: tableRef.current,
            start: 'top 75%',
            once: true,
          },
        });
      }
    },
    { scope: sectionRef },
  );

  return (
    <div className="bg-cream">
      <section
        ref={sectionRef}
        id="about"
        className="min-h-screen bg-ink text-light pt-24 pb-20 md:pt-32 md:pb-28 rounded-t-4xl overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="mb-10 md:mb-20">
            <AnimatedHeading
              words={headingWords}
              className="text-[clamp(2.5rem,7vw,6.5rem)] tracking-tight mb-4"
            />
            <ScrollWordReveal
              text={descriptionText}
              offset={['start 0.95', 'end 0.7']}
              className="text-base sm:text-lg md:text-xl text-gray-soft font-sans leading-relaxed"
            />
          </div>

          <div className="grid grid-cols-12 gap-6 md:gap-8 pb-16 md:pb-24 items-center">
            <div className="col-span-12 md:col-span-5 lg:col-span-5 flex items-center justify-center">
              <div className="about-image-wrapper relative group w-full max-w-[350px] md:max-w-[380px] h-[360px] md:h-[480px] bg-elevated-dark rounded-2xl overflow-hidden border border-border-subtler shadow-2xl">
                <FlowField />
              </div>
            </div>

            <div className="col-span-12 md:col-span-7 lg:col-span-6 md:col-start-6 lg:col-start-7 flex flex-col justify-center space-y-8">
              <span className="about-label font-mono text-sm sm:text-base md:text-base text-warm uppercase tracking-[0.3em] font-medium text-center md:text-left inline-block">
                (About Me)
              </span>
              <div className="space-y-6">
                {aboutMeText.split('\n\n').map((p, i) => (
                  <ScrollWordReveal
                    key={i}
                    text={p}
                    offset={['start 0.92', 'end 0.65']}
                    className="text-base sm:text-lg md:text-lg leading-relaxed font-sans"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="py-12 md:py-16 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS.map((h, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-surface/40 border border-white/[0.06] flex flex-col justify-between hover:border-accent/30 transition-all duration-300"
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-accent block mb-2">
                    {h.label}
                  </span>
                  <p className="font-display text-2xl sm:text-3xl font-bold text-cream mb-2 leading-tight">
                    {h.stat}
                  </p>
                </div>
                <p className="font-sans text-xs sm:text-sm text-gray-soft leading-relaxed mt-2">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>

          <div ref={tableRef} className="pt-12 md:pt-20 border-t border-white/10">
            <div className="mb-12 text-center md:mb-20">
              <span className="cred-section-label font-mono text-sm sm:text-base md:text-base text-warm uppercase tracking-[0.3em] font-medium inline-block opacity-0">
                (Experience & Journey)
              </span>
              <h3 className="mt-5 font-display text-[clamp(2.5rem,7vw,6.5rem)] font-black uppercase tracking-tight leading-none text-light">
                <span className="experience-word inline-block overflow-hidden align-top"><span className="block">The</span></span>{' '}
                <span className="experience-word inline-block overflow-hidden align-top"><span className="serif-accent block normal-case tracking-[-0.05em] text-accent">path</span></span>{' '}
                <span className="experience-word inline-block overflow-hidden align-top"><span className="block">so far.</span></span>
              </h3>
            </div>

            <div className="relative mx-auto max-w-6xl">
              <div aria-hidden="true" className="absolute bottom-0 left-[7px] top-0 w-px bg-white/15 md:hidden" />
              <svg aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 hidden h-full w-16 -translate-x-1/2 md:block" viewBox="0 0 64 1000" preserveAspectRatio="none">
                <path
                  ref={pathRef}
                  d="M32 0 C25 84 39 164 32 250 C25 334 39 416 32 500 C25 584 39 666 32 750 C25 834 39 916 32 1000"
                  fill="none"
                  stroke="rgba(232, 228, 222, 0.28)"
                  strokeWidth="1.5"
                />
              </svg>
              <div className="flex flex-col gap-12 md:gap-20">
                {CREDENTIALS.map((item, idx) => {
                  const isLeft = idx % 2 === 0;
                  return (
                    <article key={item.title} data-side={isLeft ? 'left' : 'right'} className="cred-row relative grid grid-cols-[32px_1fr] gap-x-5 opacity-0 md:grid-cols-[1fr_96px_1fr] md:gap-x-0">
                      <div className="relative order-1 md:col-start-2 md:row-start-1 md:justify-self-center">
                        <span className="timeline-dot relative z-10 block h-[15px] w-[15px] rounded-full border-[3px] border-ink bg-cream" />
                        <span aria-hidden="true" className={`timeline-connector absolute top-[7px] hidden h-px w-14 bg-white/25 md:block ${isLeft ? 'right-full origin-right' : 'left-full origin-left'}`} />
                        <span className={`absolute top-7 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.2em] text-warm-light ${isLeft ? 'left-0 md:right-7 md:left-auto md:text-right' : 'left-0 md:left-7'}`}>
                          {item.year}
                        </span>
                      </div>

                      <div className={`timeline-content order-2 pt-8 md:row-start-1 md:pt-0 ${isLeft ? 'md:col-start-1 md:pr-14 md:text-right' : 'md:col-start-3 md:pl-14'}`}>
                        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">{item.type}</span>
                        <h4 className="mt-4 font-display text-[clamp(2.15rem,4.4vw,4.5rem)] font-bold uppercase tracking-[-0.065em] leading-[0.86] text-cream">
                          {item.title}
                        </h4>
                        <div className={`mt-6 border-t border-white/10 pt-4 ${isLeft ? 'md:ml-auto md:max-w-md' : 'md:max-w-md'}`}>
                          <p className="font-mono text-xs leading-relaxed text-gray-soft">{item.organization}</p>
                          {item.stat && <p className="mt-3 font-sans text-sm leading-relaxed text-warm-light">{item.stat}</p>}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="pt-16 md:pt-24 border-t border-white/10">
            <div className="mb-8 md:mb-12 text-center md:text-left">
              <span className="font-mono text-sm sm:text-base text-warm uppercase tracking-[0.3em] font-medium inline-block">
                (Certifications)
              </span>
              <h3 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-light">
                Verified Credentials
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {CERTIFICATIONS.map((cert, i) => (
                <div
                  key={i}
                  className="p-5 sm:p-6 rounded-2xl bg-surface/50 border border-white/[0.06] hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20">
                        {cert.category}
                      </span>
                      <span className="font-mono text-xs text-warm-light">{cert.year}</span>
                    </div>
                    <h4 className="font-display text-lg sm:text-xl font-bold text-cream mb-1">
                      {cert.title}
                    </h4>
                  </div>
                  <p className="font-mono text-xs text-gray-soft mt-3 pt-3 border-t border-white/5">
                    {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
