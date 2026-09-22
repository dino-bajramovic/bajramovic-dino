/**
 * @copyright 2026 dino-bajramovic
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import PropTypes from 'prop-types';
import { useId, useState } from 'react';


/**
 * Data
 */
import { privateFooterNote } from '../data/experience';


const badgeBase =
  'inline-flex items-center gap-1.5 h-7 px-3 rounded-lg text-xs font-medium ring-1 ring-inset';

const badgeTone = {
  default: 'bg-zinc-50/5 text-zinc-300 ring-zinc-50/10',
  emphasis: 'bg-sky-400/15 text-sky-300 ring-sky-400/40',
  public: 'bg-emerald-400/10 text-emerald-300 ring-emerald-400/20'
};

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900';


const ExperienceCard = ({ project, onToggle, classes, style }) => {
  const [expanded, setExpanded] = useState(false);
  const listId = `${useId()}-highlights`;

  const moreHighlights = project.moreHighlights || [];
  const hasMore = moreHighlights.length > 0;
  const links = project.links || [];

  const handleToggle = () => {
    setExpanded((prev) => !prev);
    onToggle?.();
  };

  return (
    <article
      className={
        'flex flex-col p-5 rounded-2xl bg-zinc-900/60 ring-1 ring-inset ring-zinc-50/5 ' +
        (classes || '')
      }
      style={style}
    >

      <h3 className="title-1">
        {project.title}
      </h3>

      <p className="text-sm text-zinc-400 mt-1">
        {project.context}
      </p>

      <ul className="flex flex-wrap items-center gap-2 mt-4">
        {project.badges.map(({ label, icon, emphasis, tone }) => (
          <li key={label}>
            <span
              className={`${badgeBase} ${
                emphasis ? badgeTone.emphasis : badgeTone[tone] || badgeTone.default
              }`}
            >
              {icon && (
                <span className="material-symbols-rounded text-[14px]" aria-hidden="true">
                  {icon}
                </span>
              )}
              {label}
            </span>
          </li>
        ))}
      </ul>

      {project.tagline && (
        <p className="text-zinc-200 font-medium mt-4">
          {project.tagline}
        </p>
      )}

      <p className="text-zinc-300 text-sm leading-relaxed mt-3">
        {project.summary}
      </p>

      <ul
        id={listId}
        className="flex flex-col gap-2.5 mt-4 text-sm text-zinc-300"
      >
        {project.highlights.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span
              className="material-symbols-rounded text-[18px] text-sky-400 shrink-0 mt-0.5"
              aria-hidden="true"
            >
              check_small
            </span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}

        {expanded && moreHighlights.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span
              className="material-symbols-rounded text-[18px] text-sky-400 shrink-0 mt-0.5"
              aria-hidden="true"
            >
              check_small
            </span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      {hasMore && (
        <button
          type="button"
          onClick={handleToggle}
          aria-expanded={expanded}
          aria-controls={listId}
          className={`inline-flex items-center gap-1 self-start mt-3 -mx-1 px-1 py-1 rounded-lg text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors ${focusRing}`}
        >
          {expanded ? 'Show less' : `Show ${moreHighlights.length} more`}
          <span className="material-symbols-rounded text-[18px]" aria-hidden="true">
            {expanded ? 'expand_less' : 'expand_more'}
          </span>
        </button>
      )}

      <ul className="flex flex-wrap items-center gap-2 mt-5">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="h-7 flex items-center px-2.5 rounded-lg text-xs text-zinc-400 bg-zinc-50/5"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-5">
        {project.visibility === 'private' ? (
          <p className="text-xs text-zinc-400 leading-relaxed">
            <a
              href={privateFooterNote.href}
              className={`inline-flex items-start gap-1.5 hover:text-zinc-200 transition-colors rounded-lg ${focusRing}`}
            >
              <span
                className="material-symbols-rounded text-[14px] shrink-0 mt-0.5"
                aria-hidden="true"
              >
                lock
              </span>
              {privateFooterNote.text}
            </a>
          </p>
        ) : (
          <div className="flex flex-wrap items-center gap-2">
            {links.map(({ label, href, icon, primary }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${primary ? 'btn-primary' : 'btn-outline'} ${focusRing}`}
              >
                {label}
                <span className="sr-only"> (opens in new tab)</span>
                {icon && (
                  <span className="material-symbols-rounded" aria-hidden="true">
                    {icon}
                  </span>
                )}
              </a>
            ))}
          </div>
        )}
      </div>

    </article>
  )
}

ExperienceCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    visibility: PropTypes.oneOf(['private', 'public']).isRequired,
    badges: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        icon: PropTypes.string,
        emphasis: PropTypes.bool,
        tone: PropTypes.string
      })
    ).isRequired,
    tagline: PropTypes.string,
    summary: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    moreHighlights: PropTypes.arrayOf(PropTypes.string),
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
        icon: PropTypes.string,
        primary: PropTypes.bool
      })
    )
  }).isRequired,
  onToggle: PropTypes.func,
  classes: PropTypes.string,
  style: PropTypes.object
}

export default ExperienceCard
