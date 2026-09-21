/**
 * @copyright 2025 dino-bajramovic
 * @license Apache-2.0
 */


/**
 * Components
 */
import SkillCard from "./SkillCard";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const skillCategories = [
  {
    category: 'Languages',
    items: [
      { imgSrc: '/images/tech/javascript.svg', label: 'JavaScript', desc: 'Core scripting' },
      { imgSrc: '/images/tech/typescript.svg', label: 'TypeScript', desc: 'Typed JavaScript' },
      { imgSrc: '/images/tech/python.svg', label: 'Python', desc: 'Backend & scripting' },
      { imgSrc: '/images/tech/java.svg', label: 'Java', desc: 'Backend OOP' },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { imgSrc: '/images/tech/react.svg', label: 'React', desc: 'UI library' },
      { imgSrc: '/images/tech/nextdotjs.svg', label: 'Next.js', desc: 'Fullstack React' },
      { imgSrc: '/images/tech/vite.svg', label: 'Vite', desc: 'Build tool' },
      { imgSrc: '/images/tech/tailwindcss.svg', label: 'Tailwind CSS', desc: 'Utility-first CSS' },
      { imgSrc: '/images/tech/shadcnui.svg', label: 'shadcn/ui', desc: 'UI components' },
      { imgSrc: '/images/tech/redux.svg', label: 'Redux Toolkit / Redux', desc: 'State management' },
      { imgSrc: '/images/tech/reactrouter.svg', label: 'React Router', desc: 'Client-side routing' },
      { imgSrc: '/images/tech/tanstack.svg', label: 'TanStack Table', desc: 'Data tables' },
      { imgSrc: '/images/tech/fastapi.svg', label: 'FastAPI', desc: 'Python API framework' },
      { imgSrc: '/images/tech/sqlalchemy.svg', label: 'SQLAlchemy', desc: 'Python ORM' },
      { imgSrc: '/images/tech/alembic.svg', label: 'Alembic', desc: 'DB migrations' },
      { imgSrc: '/images/tech/pydantic.svg', label: 'Pydantic', desc: 'Data validation' },
      { imgSrc: '/images/tech/nodedotjs.svg', label: 'Node.js', desc: 'JS runtime' },
      { imgSrc: '/images/tech/nextauth.svg', label: 'NextAuth', desc: 'Auth for Next.js' },
      { imgSrc: '/images/tech/prisma.svg', label: 'Prisma', desc: 'TypeScript ORM' },
      { imgSrc: '/images/tech/mongoose.svg', label: 'Mongoose', desc: 'MongoDB ODM' },
      { imgSrc: '/images/tech/bootstrap.svg', label: 'Bootstrap', desc: 'UI framework' },
    ],
  },
  {
    category: 'AI/LLM',
    items: [
      { imgSrc: '/images/tech/claude.svg', label: 'Anthropic API (Claude)', desc: 'LLM API' },
      { imgSrc: '/images/tech/openai.svg', label: 'OpenAI', desc: 'LLM API' },
      { imgSrc: '/images/tech/googlegemini.svg', label: 'Google Gemini', desc: 'LLM API' },
      { imgSrc: '/images/tech/groq.svg', label: 'GroqAI', desc: 'Fast inference' },
      { imgSrc: '/images/tech/ollama.svg', label: 'Ollama (Qwen, DeepSeek)', desc: 'Local LLMs' },
      { imgSrc: '/images/tech/modelcontextprotocol.svg', label: 'Model Context Protocol', desc: 'Agent context' },
      { imgSrc: '/images/tech/rag.svg', label: 'RAG', desc: 'Retrieval-augmented gen.' },
      { imgSrc: '/images/tech/agents.svg', label: 'Agents / Subagents', desc: 'Multi-agent systems' },
      { imgSrc: '/images/tech/claude.svg', label: 'Claude Code', desc: 'Agentic coding' },
      { imgSrc: '/images/tech/codex.svg', label: 'Codex', desc: 'AI coding' },
      { imgSrc: '/images/tech/cursor.svg', label: 'Cursor', desc: 'AI IDE' },
      { imgSrc: '/images/tech/windsurf.svg', label: 'Windsurf', desc: 'AI IDE' },
      { imgSrc: '/images/tech/githubcopilot.svg', label: 'GitHub Copilot', desc: 'AI pair programmer' },
      { imgSrc: '/images/tech/chatgpt.svg', label: 'ChatGPT Pro', desc: 'LLM assistant' },
      { imgSrc: '/images/tech/figma.svg', label: 'Figma AI', desc: 'AI-assisted design' },
      { imgSrc: '/images/tech/v0.svg', label: 'v0', desc: 'AI UI generation' },
      { imgSrc: '/images/tech/lovable.svg', label: 'Lovable', desc: 'AI app builder' },
      { imgSrc: '/images/tech/claude.svg', label: 'Claude Design', desc: 'AI-assisted design' },
      { imgSrc: '/images/tech/notion.svg', label: 'Notion AI', desc: 'AI workspace' },
    ],
  },
  {
    category: 'Other',
    items: [
      { imgSrc: '/images/tech/postgresql.svg', label: 'PostgreSQL', desc: 'Relational database' },
      { imgSrc: '/images/tech/neon.svg', label: 'Neon', desc: 'Serverless Postgres' },
      { imgSrc: '/images/tech/supabase.svg', label: 'Supabase', desc: 'Postgres platform' },
      { imgSrc: '/images/tech/mongodb.svg', label: 'MongoDB', desc: 'NoSQL database' },
      { imgSrc: '/images/tech/redis.svg', label: 'Redis / Upstash', desc: 'Cache & queues' },
      { imgSrc: '/images/tech/zod.svg', label: 'Zod', desc: 'Schema validation' },
      { imgSrc: '/images/tech/axios.svg', label: 'Axios', desc: 'HTTP client' },
      { imgSrc: '/images/tech/lucide.svg', label: 'Lucide React', desc: 'Icon library' },
      { imgSrc: '/images/tech/pyjwt.svg', label: 'PyJWT', desc: 'Python JWT' },
      { imgSrc: '/images/tech/bcrypt.svg', label: 'bcrypt', desc: 'Password hashing' },
      { imgSrc: '/images/tech/jsonwebtokens.svg', label: 'JWT / JWE', desc: 'Auth tokens' },
      { imgSrc: '/images/tech/ratelimiting.svg', label: 'Rate limiting', desc: 'API protection' },
      { imgSrc: '/images/tech/vercel.svg', label: 'Vercel', desc: 'Hosting & deploys' },
      { imgSrc: '/images/tech/cloudflare.svg', label: 'Cloudflare R2', desc: 'Object storage' },
      { imgSrc: '/images/tech/cicd.svg', label: 'CI/CD', desc: 'Automated pipelines' },
      { imgSrc: '/images/tech/git.svg', label: 'Git', desc: 'Version control' },
      { imgSrc: '/images/tech/nodemon.svg', label: 'nodemon', desc: 'Dev auto-reload' },
      { imgSrc: '/images/tech/uvicorn.svg', label: 'uvicorn', desc: 'ASGI server' },
      { imgSrc: '/images/tech/resend.svg', label: 'Resend', desc: 'Transactional email' },
      { imgSrc: '/images/tech/mailjet.svg', label: 'Mailjet', desc: 'Email delivery' },
      { imgSrc: '/images/tech/stripe.svg', label: 'Stripe', desc: 'Payments' },
      { imgSrc: '/images/tech/postman.svg', label: 'Postman', desc: 'API testing' },
      { imgSrc: '/images/tech/playwright.svg', label: 'Playwright', desc: 'E2E testing' },
      { imgSrc: '/images/tech/figma.svg', label: 'Figma', desc: 'Design tool' },
      { imgSrc: '/images/tech/restapi.svg', label: 'REST API', desc: 'API architecture' },
      { imgSrc: '/images/tech/saas.svg', label: 'SaaS', desc: 'Product delivery' },
      { imgSrc: '/images/tech/seo.svg', label: 'SEO/AEO', desc: 'Search & answer optimization' },
      { imgSrc: '/images/tech/apscheduler.svg', label: 'APScheduler', desc: 'Python job scheduling' },
    ],
  },
];


const Skill = () => {
  const CATEGORY_LIMIT = 6;
  const [showAll, setShowAll] = useState(false);

  const hasExtra = skillCategories.some(({ items }) => items.length > CATEGORY_LIMIT);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [showAll]);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <section className="section">
      <div className="container">

        <h2 className="headline-2 reveal-up">
          Tech stack & essential tools I use
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
        </p>

        <div className="space-y-8">
          {skillCategories.map(({ category, items }) => {
            const visibleItems = showAll ? items : items.slice(0, CATEGORY_LIMIT);

            return (
              <div key={category}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 mb-3 reveal-up">
                  {category}
                </h3>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                  {visibleItems.map(({ imgSrc, label, desc }, index) => (
                    <SkillCard
                      key={`${category}-${label}-${index}`}
                      imgSrc={imgSrc}
                      label={label}
                      desc={desc}
                      classes="reveal-up"
                      style={showAll ? { opacity: 1, transform: 'none' } : undefined}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {hasExtra && (
          <div className="flex justify-center mt-6 relative z-10">
            <button
              type="button"
              className="btn btn-ghost text-sm relative z-10"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowAll((prev) => !prev);
              }}
            >
              {showAll ? 'Show less tools' : 'Show all tools'}
            </button>
          </div>
        )}

      </div>
    </section>
  )
}

export default Skill
