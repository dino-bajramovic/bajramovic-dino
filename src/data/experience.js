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

export const experienceRole = {
  company: 'Symphony',
  title: 'Junior Full-Stack Engineer',
  period: 'March 2026 – Present',
  programNote: 'FutureExperts Program · March – September 2026',
  intro:
    "I joined Symphony through the FutureExperts Program and continued as a Junior Full-Stack Engineer. Most of that work lives in private, company-owned codebases — so instead of code, here's what I built, what I owned, and how I worked with the team."
};

export const experienceProjects = [
  {
    id: 'platform',
    title: 'Internship & Talent-Management Platform',
    context: 'Symphony · Internal platform',
    visibility: 'private',
    badges: [
      { label: 'Product Manager', emphasis: true },
      { label: 'Full-Stack Developer' },
      { label: 'Team of 7' },
      { label: 'Private · company-owned', icon: 'lock' }
    ],
    tagline: 'Kept an inherited platform shipping, sprint after sprint — as both PM and developer.',
    summary:
      "An internal platform that runs Symphony's internship program end to end — intern profiles, mentoring and evaluations, readiness tracking and leadership dashboards — with a built-in, workspace-based ticketing and sprint module.",
    highlights: [
      'Led the product side: gathered requirements from our mentor, shaped ideas into priorities, wrote and assigned tickets, and planned sprints across the team, while shipping features myself',
      'Turned feedback into user stories, acceptance criteria and ready-to-build tasks, and reported progress to the mentor every week',
      'Built sprint-management features: sprint view, draft tickets, multi-status filtering, optimistic board updates (with a fix for concurrent ticket numbering) and AI-generated sprint summaries'
    ],
    moreHighlights: [
      'Restored the platform’s AI features by migrating them to a new LLM model after the previous one was retired',
      'Shipped primary/secondary mentor assignment, intern specializations, AI skills for intern profiles, and a better technology catalog, including fixes to CV-based technology detection',
      'Added in-app notifications (e.g. when a ticket is assigned to you), a collapsible navigation sidebar, drag-and-drop quick actions, leadership settings and a skippable onboarding flow',
      'Refactored a ~1,400-line ticket-details component into custom hooks and sub-components',
      'Ran QA before each release: role-based flows, dashboards, attendance, daily stand-ups and AI features',
      'Worked in a team of seven — five software engineers plus QA and DevOps — taking over a platform already in production and leading its next phase of development'
    ],
    stack: [
      'React',
      'Vite',
      'Tailwind CSS',
      'TanStack Query',
      'Node.js',
      'Express',
      'MongoDB',
      'Socket.IO',
      'Groq (LLM)',
      'Supabase'
    ]
  },
  {
    id: 'five-stack',
    title: '5-stack',
    context: 'Symphony FutureExperts Program · Bank management system · Team project',
    visibility: 'private',
    badges: [
      { label: 'Full-Stack Developer' },
      { label: 'Team of 6' },
      { label: 'Private · company-owned', icon: 'lock' }
    ],
    summary:
      'A full-stack bank management system — wallet, virtual cards, peer-to-peer transfers, spending analytics and an admin panel — built on a layered FastAPI backend and a component-driven React frontend.',
    highlights: [
      'Built the payment templates experience: browse saved templates, reuse one through a prefilled send-money flow, and delete with confirmation without affecting past transactions',
      'Built admin data views with server-side filtering, debounced search and pagination',
      'Set up the team’s AI-assisted development workflow — Claude Code skills, subagents and hooks',
      'Picked up feature work across the layered backend (routers → services → repositories), implementing a share of the platform’s features end to end'
    ],
    moreHighlights: [],
    stack: [
      'React',
      'Vite',
      'Tailwind CSS',
      'shadcn/ui',
      'Redux Toolkit',
      'TanStack Table',
      'Zod',
      'FastAPI',
      'SQLAlchemy (async)',
      'PostgreSQL',
      'Alembic'
    ]
  },
  {
    id: 'optihire',
    title: 'OptiHire · AI Job Description Generator & Optimizer',
    context: 'FEP 2026 Hackathon · Public',
    visibility: 'public',
    badges: [
      { label: 'AI integration' },
      { label: 'SEO scoring & optimization' },
      { label: 'Team of 5' },
      { label: 'Public · Hackathon', tone: 'public' }
    ],
    summary:
      'Job descriptions are slow to write, inconsistent, and often carry biased language. OptiHire generates complete, inclusive JDs from a structured form — or diagnoses an existing JD and returns a corrected version side by side.',
    highlights: [
      'Owned the SEO side: every generated description gets a quality score, then runs through an optimization pass that rewrites it to read better and rank better',
      'Worked on the AI implementation behind both modes — generate from scratch and optimize an existing JD — driven by one strict ruleset for structure, tone and inclusive language',
      'Severity-coded diagnostics (critical / moderate / minor) showing the exact phrase and the fix, in a before/after comparison view'
    ],
    moreHighlights: [
      'One-click refinements, PDF upload with text extraction, and export to TXT, Markdown or a branded PNG',
      'Gemini API calls go through a Vercel serverless proxy, so the API key never reaches the browser'
    ],
    stack: ['React', 'Vite', 'Gemini API', 'Vercel Serverless Functions'],
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

export const privateFooterNote = {
  text: 'Company-owned codebase — happy to walk through my work in an interview',
  href: '#contact'
};
