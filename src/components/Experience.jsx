/**
 * @copyright 2026 dino-bajramovic
 * @license Apache-2.0
 */


/**
 * Components
 */
import ExperienceRole from './ExperienceRole';


/**
 * Data
 */
import { experienceIntro, experienceRoles } from '../data/experience';


const Experience = () => {
  return (
    <section
      id="experience"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 reveal-up">
          Experience
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[55ch] reveal-up">
          {experienceIntro}
        </p>

        <div className="flex flex-col gap-3">
          {experienceRoles.map((role) => (
            <ExperienceRole
              key={role.id}
              role={role}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience
