/**
 * @copyright 2025 dino-bajramovic
 * @license Apache-2.0
 */


/**
 * Components
 */
import ProjectCard from "./ProjectCard";
import { useState, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: 'Library software project',
    tags: ['CRUD', 'Full-stack', 'Management'],
    projectLink: 'https://github.com/dino-bajramovic/library-software-project'
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'Real estate project',
    tags: ['Web technologies', 'CRUD', 'Responsive'],
    projectLink: 'https://github.com/dino-bajramovic/nekretnine-projekat-web-tehnologije'
  },
  {
    imgSrc: '/images/project-3.jpg',
    title: 'News summarizer AI',
    tags: ['AI', 'API', 'Summarization'],
    projectLink: 'https://github.com/dino-bajramovic/news-summaizer-ai'
  },
  {
    imgSrc: '/images/project-4.jpg',
    title: 'Movie project',
    tags: ['React', 'UI', 'Reusable'],
    projectLink: 'https://github.com/dino-bajramovic/react-project'
  },
  {
    imgSrc: '/images/project-5.jpg',
    title: 'Marketing campaign management',
    tags: ['CRM', 'Analytics', 'Full-stack'],
    projectLink: 'https://github.com/dino-bajramovic/MarketingCampaignManagementSystem'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'MERN project',
    tags: ['MERN', 'Full-stack', 'App'],
    projectLink: 'https://github.com/dino-bajramovic/mern-project'
  },
];


const Work = () => {
  const WORK_LIMIT = 6;
  const [showAll, setShowAll] = useState(false);
  const hasExtra = works.length > WORK_LIMIT;
  const visibleWorks = showAll ? works : works.slice(0, WORK_LIMIT);
  const scrollRef = useRef(null);

  useEffect(() => {
    // Ensure newly shown cards are measured by ScrollTrigger/animations
    ScrollTrigger.refresh();
  }, [showAll]);

  // Below md the cards are a one-at-a-time horizontal strip, so a step is
  // exactly one card wide.
  const scrollByCard = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollBy({ left: direction * container.clientWidth, behavior: 'smooth' });
  };

  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <div className="flex items-center justify-between gap-4 mb-8">
          <h2 className="headline-2 reveal-up">
            Featured projects & case studies
          </h2>

          <div className="flex items-center gap-2 shrink-0 md:hidden reveal-up">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous project"
              className="w-10 h-10 flex items-center justify-center rounded-full ring-2 ring-inset ring-zinc-50/10 text-zinc-300 hover:bg-zinc-800 transition-colors"
            >
              <span className="material-symbols-rounded" aria-hidden="true">chevron_left</span>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next project"
              className="w-10 h-10 flex items-center justify-center rounded-full ring-2 ring-inset ring-zinc-50/10 text-zinc-300 hover:bg-zinc-800 transition-colors"
            >
              <span className="material-symbols-rounded" aria-hidden="true">chevron_right</span>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto overscroll-x-contain scrollbar-hide md:grid md:gap-x-4 md:gap-y-5 md:overflow-visible md:grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]"
        >
          {visibleWorks.map(({ imgSrc, title, tags, projectLink }, index) => (
            <ProjectCard
              key={`${title}-${index}`}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="w-full shrink-0 md:w-auto reveal-up"
              style={showAll ? { opacity: 1, transform: 'none' } : undefined}
            />
          ))}
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
              {showAll ? 'Show less projects' : 'Show all projects'}
            </button>
          </div>
        )}

      </div>
    </section>
  )
}

export default Work
