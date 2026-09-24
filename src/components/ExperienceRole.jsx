/**
 * @copyright 2026 dino-bajramovic
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import PropTypes from 'prop-types';
import { useEffect, useId, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


/**
 * Components
 */
import ExperienceCard from './ExperienceCard';


const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900';


const RoleHeader = ({ role, expandable, expanded }) => (
  <>
    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
      <p className="font-semibold text-zinc-100 md:text-lg">{role.company}</p>
      <span className="text-zinc-600" aria-hidden="true">·</span>
      <p className="text-zinc-200 md:text-lg">{role.title}</p>
      {role.current && (
        <span className="inline-flex items-center h-6 px-2 rounded-md text-xs font-medium bg-emerald-400/10 text-emerald-300 ring-1 ring-inset ring-emerald-400/20">
          Current
        </span>
      )}
    </div>

    <p className="text-sm text-sky-400 font-medium mt-1">{role.period}</p>

    {role.summary && (
      <p className="text-sm text-zinc-300 leading-relaxed mt-2">
        {role.summary}
      </p>
    )}

    {role.stack && (
      <ul className="flex flex-wrap items-center gap-2 mt-3">
        {role.stack.map((tech) => (
          <li
            key={tech}
            className="h-7 flex items-center px-2.5 rounded-lg text-xs text-zinc-400 bg-zinc-50/5"
          >
            {tech}
          </li>
        ))}
      </ul>
    )}

    {expandable && (
      <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-sky-400">
        {expanded ? 'Hide projects' : `View ${role.projects.length} projects`}
        <span className="material-symbols-rounded text-[18px]" aria-hidden="true">
          {expanded ? 'expand_less' : 'expand_more'}
        </span>
      </span>
    )}
  </>
);

RoleHeader.propTypes = {
  role: PropTypes.object.isRequired,
  expandable: PropTypes.bool,
  expanded: PropTypes.bool
};


const ExperienceRole = ({ role }) => {
  const [expanded, setExpanded] = useState(false);
  const panelId = `${useId()}-projects`;
  const expandable = (role.projects || []).length > 0;
  const rootRef = useRef(null);

  // Expanding/collapsing changes page height, which invalidates every
  // scroll-driven reveal below this point. Refresh after the browser has
  // laid the new content out - refreshing inside the click handler measures
  // the old layout and leaves the sections below stuck at opacity 0.
  useEffect(() => {
    const element = rootRef.current;

    if (expanded && element) {
      // The .reveal-up tween is scrubbed and only finishes once the bottom of
      // the element reaches 80% of the viewport. Expanded, this card is taller
      // than a phone screen, so that never happens and it sits half faded.
      // Release it from the scrub and pin it visible instead.
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) trigger.kill();
      });
      gsap.set(element, { opacity: 1, y: 0 });
    }

    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(frame);
  }, [expanded]);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div
      ref={rootRef}
      className="rounded-2xl bg-zinc-800/50 ring-1 ring-inset ring-zinc-50/5 reveal-up"
    >

      {expandable ? (
        <button
          type="button"
          onClick={handleToggle}
          aria-expanded={expanded}
          aria-controls={panelId}
          className={`w-full text-left p-5 rounded-2xl hover:bg-zinc-800/60 transition-colors md:p-6 ${focusRing}`}
        >
          <RoleHeader role={role} expandable expanded={expanded} />
        </button>
      ) : (
        <div className="p-5 md:p-6">
          <RoleHeader role={role} />
        </div>
      )}

      {expandable && (
        // The wrapper always renders so aria-controls points at a real node;
        // the grid itself only mounts when expanded. Using the `hidden`
        // attribute here would not work: the `grid` display class overrides it.
        <div id={panelId}>
          {expanded && (
            <div className="grid gap-4 px-5 pb-5 md:grid-cols-2 md:px-6 md:pb-6 lg:grid-cols-3">
              {role.projects.map((project) => (
                <ExperienceCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          )}
        </div>
      )}

    </div>
  )
}

ExperienceRole.propTypes = {
  role: PropTypes.shape({
    company: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    current: PropTypes.bool,
    summary: PropTypes.string,
    stack: PropTypes.arrayOf(PropTypes.string),
    projects: PropTypes.array
  }).isRequired
}

export default ExperienceRole
