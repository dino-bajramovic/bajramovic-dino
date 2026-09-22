/**
 * @copyright 2025 dino-bajramovic
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import { useRef } from 'react';


/**
 * Components
 */
import ReviewCard from "./ReviewCard";


const certifications = [
  {
    title: 'STEM Games Participant',
    issuer: 'STEM Games, Umag',
    year: '2024 - 2025',
    description: 'University sports and programming games (Umag 2024 and 2025) - team competition and hands-on projects.',
    imgSrc: '/images/Steleks - Dino Bajramovic.jpg'
  },
  {
    title: 'Google Developer Group & DevFest',
    issuer: 'Google',
    year: '2023 - 2025',
    description: 'GDG attendee (2024, 2025) and DevFest 2023 participant - focused on web, cloud, AI tools, and community practices.',
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

  const scrollByCard = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollBy({ left: direction * (container.clientWidth * 0.8), behavior: 'smooth' });
  };

  return (
    <section
      id="certifications"
      className="section"
    >
      <div className="container">

        <div className="flex items-center justify-between gap-4 mb-8">
          <h2 className="headline-2 reveal-up">
            Certifications
          </h2>

          <div className="hidden md:flex items-center gap-2 reveal-up">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Scroll certifications left"
              className="w-10 h-10 flex items-center justify-center rounded-full ring-2 ring-inset ring-zinc-50/10 text-zinc-300 hover:bg-zinc-800 transition-colors"
            >
              <span className="material-symbols-rounded">chevron_left</span>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Scroll certifications right"
              className="w-10 h-10 flex items-center justify-center rounded-full ring-2 ring-inset ring-zinc-50/10 text-zinc-300 hover:bg-zinc-800 transition-colors"
            >
              <span className="material-symbols-rounded">chevron_right</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-zinc-400 mb-3 md:hidden">
          <span className="material-symbols-rounded text-base">swipe_left</span>
          <span>Swipe to view more certifications</span>
          <span className="material-symbols-rounded text-base">swipe_right</span>
        </div>

      </div>

      <div
        className="w-full overflow-x-auto pb-2 touch-auto overscroll-x-contain scrollbar-hide"
        ref={scrollRef}
      >
        <div className="flex items-stretch gap-3 min-w-max px-4 sm:px-8">
          {certifications.map((item, key) => (
            <div key={key} data-cert-index={key}>
              <ReviewCard
                cert={item}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
