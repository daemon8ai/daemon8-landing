import { Daemon8Mark } from './Daemon8Mark'

const REPO_URL = 'https://github.com/daemon8ai/daemon8'

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

export function HeroLanding() {
  return (
    <div className="da-root">
      <main className="da-content">
        <section id="name" className="da-hero-wrap">
          <div className="da-hero">
            <div className="da-hero__content">
              <p className="da-eyebrow">· A runtime layer made for AI agents</p>
              <h1 className="da-hero__title">
                Context, <em>Evolved</em>.
              </h1>
              <ul className="da-hero__points">
                <li><span className="da-hero__points-mark">·</span> One place to send logs, errors, and runtime observations.</li>
                <li><span className="da-hero__points-mark">·</span> Realtime browser, ADB, and Vega OS error access.</li>
                <li><span className="da-hero__points-mark">·</span> Checkpoints and lenses for focused before-and-after debugging.</li>
                <li><span className="da-hero__points-mark">·</span> CLI hooks that capture what agents actually did.</li>
                <li><span className="da-hero__points-mark">·</span> Curated memory for verified lessons and decisions.</li>
                <li><span className="da-hero__points-mark">·</span> One simple MCP surface.</li>
              </ul>
              <ul className="da-link-list">
                <li>
                  <a href={REPO_URL}>
                    <GitHubIcon /> GitHub
                  </a>
                </li>
                <li>
                  <a href="https://x.com/daemon8ai">
                    <XIcon /> @daemon8ai
                  </a>
                </li>
                <li>
                  <a href="mailto:mail@daemon8.ai">
                    <MailIcon /> mail@daemon8.ai
                  </a>
                </li>
              </ul>
              <p className="da-hero__alpha-tag">In active development</p>
            </div>
            <div className="da-hero__mark">
              <span className="da-hero__mark-svg"><Daemon8Mark size={360} /></span>
              <img
                className="da-hero__mark-img"
                src="/assets/brand/mark-dark.svg"
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
