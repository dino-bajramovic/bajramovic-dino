/**
 * @copyright 2026 dino-bajramovic
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import { ScrollTrigger } from 'gsap/ScrollTrigger';


/**
 * Components
 */
import ExperienceCard from './ExperienceCard';


/**
 * Data
 */
import { experienceRole, experienceProjects } from '../data/experience';


const Experience = () => {
  // Card content expands in place, so ScrollTrigger needs fresh measurements.
  const handleCardToggle = () => {
    ScrollTrigger.refresh();
  };

  return (
    <section
      id="experience"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          Experience
        </h2>

        <div className="bg-zinc-800/50 p-6 rounded-2xl md:p-8 reveal-up">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <p className="text-lg font-semibold text-zinc-100 md:text-xl">
              {experienceRole.company}
            </p>
            <span className="text-zinc-600" aria-hidden="true">·</span>
            <p className="text-lg text-zinc-200 md:text-xl">
              {experienceRole.title}
            </p>
            <span className="text-zinc-600" aria-hidden="true">·</span>
            <p className="text-sm text-sky-400 font-medium md:text-base">
              {experienceRole.period}
            </p>
          </div>

          <p className="text-xs text-zinc-500 mt-1.5">
            {experienceRole.programNote}
          </p>

          <p className="text-zinc-300 mt-4 max-w-[70ch] leading-relaxed">
            {experienceRole.intro}
          </p>
        </div>

        <div className="grid gap-4 mt-6 items-stretch md:grid-cols-2 lg:grid-cols-3">
          {experienceProjects.map((project) => (
            <ExperienceCard
              key={project.id}
              project={project}
              onToggle={handleCardToggle}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience
