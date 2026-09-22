/**
 * @copyright 2025 dino-bajramovic
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import PropTypes from "prop-types";


/**
 * Components
 */
import { ButtonPrimary } from "./Button";


const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'Experience',
    href: '#experience'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Certifications',
    href: '#certifications'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/dino-bajramovic'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dino-bajramovi%C4%87/'
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/DinoBajramovicc'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/dinobajramovic_13/'
  },
];


const Footer = ({ onOpenAdmin }) => {
  return (
    <footer className="section">
      <div className="container">

        <div className="lg:grid lg:grid-cols-2">

          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>

            <ButtonPrimary
              href="mailto:dinobajramovic01@gmail.com"
              label="Start project"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">

            <div>
              <p className="mb-2 reveal-up">Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">Socials</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a
            href="/"
            className="logo reveal-up"
          >
            <img
              src="/images/db-logo.svg"
              width={48}
              height={48}
              alt="Dino Bajramovic logo"
              loading="lazy"
              decoding="async"
            />
          </a>

          <div className="flex items-center gap-3 reveal-up">
            <p className="text-zinc-500 text-sm">
              &copy; {new Date().getFullYear()} <span className="text-zinc-200">dino-bajramovic</span>
            </p>
            <button
              type="button"
              onClick={onOpenAdmin}
              aria-label="Admin access"
              title="Admin access"
              className="text-zinc-700 hover:text-zinc-400 transition-colors p-1 -m-1"
            >
              <span className="material-symbols-rounded text-base leading-none">lock</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}

Footer.propTypes = {
  onOpenAdmin: PropTypes.func
}

export default Footer

