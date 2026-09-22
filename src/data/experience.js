/**
 * @copyright 2026 dino-bajramovic
 * @license Apache-2.0
 */

/**
 * Experience content.
 *
 * All copy for the Experience section lives here so it can be edited without
 * touching layout. Private work is described at a high level only: no internal
 * links, repository names, teammates or implementation details.
 */

export const experienceIntro =
  "Most of my Symphony work lives in private, company-owned codebases — so instead of code, here's what I built and what I owned.";

const fepProjects = [
  {
    id: 'platform',
    title: 'Internship & Talent-Management Platform',
    context: 'Symphony · Internal platform',
    visibility: 'private',
    badges: [
      { label: 'Product Manager', emphasis: true },
      { label: 'Full-Stack Developer' },
      { label: 'Team of 7' },
      { label: 'Private', icon: 'lock' }
    ],
    summary:
      "Internal platform that runs Symphony's internship program end to end, with a built-in ticketing and sprint module.",
    highlights: [
      'Led the product side — requirements, priorities, tickets and sprint planning — while shipping features myself',
      'Built sprint management: sprint view, draft tickets, filtering, optimistic board updates and AI sprint summaries',
      "Migrated the platform's AI features to a new LLM model after the previous one was retired"
    ],
    moreHighlights: [
      'Turned feedback into user stories and ready-to-build tasks, and reported progress weekly',
      'Shipped mentor assignment, intern specializations, AI profile skills and a better technology catalog',
      'Added in-app notifications, a collapsible sidebar, drag-and-drop quick actions and an onboarding flow',
      'Refactored a ~1,400-line component into custom hooks and sub-components',
      'Ran QA before each release across role-based flows, dashboards and AI features'
    ],
    stack: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'TanStack Query',
      'Socket.IO',
      'Groq (LLM)',
      'Supabase'
    ]
  },
  {
    id: 'five-stack',
    title: '5-stack',
    context: 'Bank management system · Team project',
    visibility: 'private',
    badges: [
      { label: 'Full-Stack Developer' },
      { label: 'Team of 6' },
      { label: 'Private', icon: 'lock' }
    ],
    summary:
      'Bank management system — wallet, virtual cards, transfers, analytics and an admin panel — on a layered FastAPI backend.',
    highlights: [
      'Built payment templates: browse saved templates, reuse one through a prefilled send-money flow, delete safely',
      'Built admin data views with server-side filtering, debounced search and pagination',
      "Set up the team's AI-assisted workflow — Claude Code skills, subagents and hooks"
    ],
    moreHighlights: [
      'Picked up feature work across the layered backend (routers → services → repositories)'
    ],
    stack: [
      'React',
      'Redux Toolkit',
      'TanStack Table',
      'Zod',
      'FastAPI',
      'SQLAlchemy',
      'PostgreSQL',
      'Alembic'
    ]
  },
  {
    id: 'optihire',
    title: 'OptiHire · AI Job Description Generator',
    context: 'FEP 2026 Hackathon',
    visibility: 'public',
    badges: [
      { label: 'AI integration' },
      { label: 'SEO scoring' },
      { label: 'Team of 5' },
      { label: 'Public', tone: 'public' }
    ],
    summary:
      'Generates inclusive job descriptions from a form, or diagnoses an existing one and returns a corrected version side by side.',
    highlights: [
      'Owned the SEO side: each description gets a quality score, then an optimization pass rewrites it to read and rank better',
      'Worked on the AI implementation behind both modes, driven by one strict ruleset for structure and tone',
      'Severity-coded diagnostics showing the exact phrase and the fix'
    ],
    moreHighlights: [
      'One-click refinements, PDF upload with text extraction, and export to TXT, Markdown or PNG',
      'Gemini API calls run through a Vercel serverless proxy, so the key never reaches the browser'
    ],
    stack: ['React', 'Vite', 'Gemini API', 'Vercel Functions'],
    links: [
      {
        label: 'Live app',
        href: 'https://optihire-job-description-generator.vercel.app',
        icon: 'arrow_outward',
        primary: true
      }
    ]
  }
];

export const experienceRoles = [
  {
    id: 'symphony-engineer',
    company: 'Symphony',
    title: 'Junior Full-Stack / AI Engineer',
    period: 'September 2026 – Present',
    current: true
  },
  {
    id: 'symphony-fep',
    company: 'Symphony',
    title: 'FutureExperts Program',
    period: 'March – September 2026',
    summary: 'Six-month program: an internal platform as PM and developer, a team banking app, and an AI hackathon project.',
    projects: fepProjects
  },
  {
    id: 'zira',
    company: 'ZIRA Talent Academy',
    title: 'Internship',
    period: 'September – November 2025',
    summary:
      'Full-stack app (Spring Boot microservices + Angular). Built REST APIs, implemented backend logic (DTO, DAO), and integrated the frontend in an Agile environment.',
    stack: ['Spring Boot', 'Microservices', 'Angular', 'REST API', 'Agile']
  }
];

export const privateFooterNote = {
  text: 'Company-owned codebase — happy to walk through my work in an interview',
  href: '#contact'
};
