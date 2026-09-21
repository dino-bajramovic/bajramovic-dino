/**
 * @copyright 2025 dino-bajramovic
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';


/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


/**
 * Components
 */
import ReviewCard from "./ReviewCard";


const certifications = [
  {
    title: 'STEM Games Participant',
    issuer: 'STEM Games, Umag',
    year: '2024 - 2025',
    description: 'Fakultetske igre sporta i programiranja (Umag 2024 i 2025) - timsko takmicenje i prakticni projekti.',
    imgSrc: '/images/Steleks - Dino Bajramovic.jpg'
  },
  {
    title: 'Google Developer Group & DevFest',
    issuer: 'Google',
    year: '2023 - 2025',
    description: 'GDG attendee (2024, 2025) i DevFest 2023 participant - fokus na web, cloud, AI alatima i community practices.',
    imgSrc: '/images/Google Dev Fest.jpg'
  },
  {
    title: 'Zira Talent Academy Certification',
    issuer: 'Zira',
    year: '2025',
    description: 'Full-stack curriculum with product thinking, delivery, and collaborative team practices.',
    imgSrc: '/images/ZTA - Dino Bajramovic.jpg'
  },
  {
    title: 'SoftSkills Academy Attendee',
    issuer: 'SoftSkills',
    year: '2024',
    description: 'Workshops on communication, stakeholder alignment, teamwork, and presentation skills.',
    imgSrc: '/images/Soft Skills Academy - Dino Bajramovic.jpg'
  },
  {
    title: 'NEAR Development 101',
    issuer: 'NEAR',
    year: '2022',
    description: 'Intro to smart contracts and dApp fundamentals on the NEAR ecosystem.',
    imgSrc: '/images/Near Balkan - Dino Bajramovic.jpg'
  },
  {
    title: 'HP LIFE Data Science Certificate',
    issuer: 'HP LIFE',
    year: '2024',
    description: 'Data literacy, analytics workflows, and practical visualization skills.',
    imgSrc: '/images/HP Life - Dino Bajramovic.jpg'
  },
  {
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    year: '2026',
    description: 'Hands-on agentic coding with Claude Code - multi-file edits, tool use, and real developer workflows.',
    imgSrc: '/images/certificates/claude-code-in-action.svg'
  },
  {
    title: 'Claude with the Anthropic API',
    issuer: 'Anthropic',
    year: '2026',
    description: 'Building with the Anthropic API - prompting, tool use, and integrating Claude into applications.',
    imgSrc: '/images/certificates/claude-anthropic-api.svg'
  },
  {
    title: 'Introduction to Model Context Protocol',
    issuer: 'Anthropic',
    year: '2026',
    description: 'MCP fundamentals - connecting LLMs to tools, data, and external context through a standard protocol.',
    imgSrc: '/images/certificates/intro-model-context-protocol.svg'
  },
  {
    title: 'Introduction to agent skills',
    issuer: 'Anthropic',
    year: '2026',
    description: 'Designing and equipping agents with reusable skills for autonomous, multi-step task execution.',
    imgSrc: '/images/certificates/intro-agent-skills.svg'
  },
  {
    title: 'Advanced Anti-Phishing',
    issuer: 'Cybersecurity Awareness Training',
    year: '2026',
    description: 'Advanced techniques for recognizing and defending against sophisticated phishing attacks.',
    imgSrc: '/images/certificates/advanced-anti-phishing.svg'
  },
  {
    title: 'Spot the Red Flag',
    issuer: 'Cybersecurity Awareness Training',
    year: '2026',
    description: 'Identifying warning signs of social engineering and suspicious digital communication.',
    imgSrc: '/images/certificates/spot-the-red-flag.svg'
  },
  {
    title: 'Phishing and Email Flooding',
    issuer: 'Cybersecurity Awareness Training',
    year: '2026',
    description: 'Recognizing email-based attacks, including flooding tactics used to mask malicious activity.',
    imgSrc: '/images/certificates/phishing-email-flooding.svg'
  },
  {
    title: 'Using QR Codes Safely',
    issuer: 'Cybersecurity Awareness Training',
    year: '2026',
    description: 'Best practices for safely scanning and verifying QR codes to avoid malicious redirects.',
    imgSrc: '/images/certificates/using-qr-codes-safely.svg'
  },
  {
    title: 'A Guide To Dealing With Password Breaches',
    issuer: 'Cybersecurity Awareness Training',
    year: '2026',
    description: 'Responding to credential breaches - password hygiene, rotation, and account recovery steps.',
    imgSrc: '/images/certificates/password-breaches-guide.svg'
  },
  {
    title: 'The Art of Phishing',
    issuer: 'Cybersecurity Awareness Training',
    year: '2026',
    description: 'Core principles of phishing awareness and how attackers craft convincing deceptive messages.',
    imgSrc: '/images/certificates/the-art-of-phishing.svg'
  }
];


const Certifications = () => {
  const scrollRef = useRef(null);

  useGSAP(() => {
    const isDesktop = typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches;
    if (!isDesktop) return;

    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-200% 80%',
        end: '400% 80%',
        scrub: true
      },
      x: '-1000'
    })
  });

  useEffect(() => {
    const isDesktop = typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches;
    if (isDesktop) return;
    const container = scrollRef.current;
    if (!container) return;

    const target = container.querySelector('[data-cert-index="2"]'); // Zira card
    if (!target) return;

    const centerOffset = target.offsetLeft - (container.clientWidth / 2) + (target.clientWidth / 2);
    requestAnimationFrame(() => {
      container.scrollLeft = Math.max(0, centerOffset);
    });
  }, []);

  return (
    <section
      id="certifications"
      className="section overflow-hidden"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          Certifications
        </h2>

        <div className="flex items-center gap-2 text-sm text-zinc-400 mb-3 lg:hidden">
          <span className="material-symbols-rounded text-base">swipe_left</span>
          <span>Swipe to view more certifications</span>
          <span className="material-symbols-rounded text-base">swipe_right</span>
        </div>

        <div
          className="overflow-x-auto px-4 pb-2 touch-auto snap-x snap-mandatory overscroll-x-contain scrollbar-hide lg:overflow-visible lg:snap-none lg:overscroll-x-auto lg:px-0 lg:pb-0"
          ref={scrollRef}
        >
          <div className="scrub-slide flex items-stretch gap-3 px-4 min-w-max lg:px-0">
            {certifications.map((item, key) => (
              <div key={key} className="snap-start" data-cert-index={key}>
                <ReviewCard
                  cert={item}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Certifications
