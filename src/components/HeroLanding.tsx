import { Daemon8Mark } from './Daemon8Mark'
import { useTheme } from '../lib/useTheme'

const REPO_URL = 'https://github.com/daemon8ai/daemon8'

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.05c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.16 1.17a10.97 10.97 0 0 1 5.76 0c2.2-1.48 3.16-1.17 3.16-1.17.62 1.57.23 2.73.11 3.02.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.06.78 2.14v3.17c0 .31.21.66.79.55C20.21 21.39 23.5 17.08 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function ThemeToggle({ theme, onToggle }: { theme: 'light' | 'dark'; onToggle: () => void }) {
  return (
    <button
      type="button"
      className={`da-theme-toggle da-theme-toggle--${theme}`}
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

function Wordmark() {
  return (
    <a href={REPO_URL} className="da-insignia" aria-label="daemon(8)">
      <span>DAEMON</span>
      <span className="da-insignia__paren">(8)</span>
    </a>
  )
}

export function HeroLanding() {
  const { theme, toggle } = useTheme()

  return (
    <div className="da-root">
      <nav className="da-nav">
        <Wordmark />
        <div className="da-nav__mobile-actions">
          <ThemeToggle theme={theme} onToggle={toggle} />
        </div>
        <div className="da-nav__links">
          <ThemeToggle theme={theme} onToggle={toggle} />
        </div>
      </nav>

      <main className="da-content">
        <section className="da-hero-wrap">
          <div className="da-hero">
            <div className="da-hero__content">
              <p className="da-eyebrow">· The admin layer for AI agents</p>
              <h1 className="da-hero__title">
                Observe. Act. <em>Coordinate.</em>
              </h1>
              <p className="da-hero__subhead">
                Your agent can read a codebase in seconds
                but has no view into the runtime context flowing
                from your browser, devices, and applications.
                <br /><br />
                Daemon8 provides a single local-first stream
                for all this context to converge — giving every agent
                the ability to access robust runtime context immediately,
                without needing to guess where it is anymore.
                <br /><br />
                Powered by Rust and SurrealDB, 100% open source.
              </p>
              <div className="da-hero__cta-stack">
                <a
                  href={REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="da-cta-button"
                >
                  <GitHubIcon />
                  View Repo
                </a>
              </div>
            </div>
            <div className="da-hero__mark">
              <span className="da-hero__mark-svg"><Daemon8Mark size={360} /></span>
              <img
                className="da-hero__mark-img"
                src={theme === 'dark' ? '/assets/brand/mark-dark.svg' : '/assets/brand/mark-light.svg'}
                alt="DAEMON(8) mark"
                width={320}
                height={336}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
