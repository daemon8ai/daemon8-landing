import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import fontsCss from '../fonts.css?url'
import themeCss from '../theme.css?url'
import daemon8Css from '../daemon8.css?url'

const SITE_URL = 'https://daemon8.ai'
const SITE_NAME = 'Daemon8'
const TITLE = 'Daemon8 — Situational awareness for AI agents'
const DESCRIPTION =
  'Daemon8 gives AI agents one place to see logs, errors, browser state, and device events while they work. Local-first. Open source.'
const OG_IMAGE = `${SITE_URL}/assets/brand/social/og-image.png`

const THEME_INIT_SCRIPT = `document.documentElement.classList.add('da-dark');document.documentElement.style.colorScheme='dark';`

const STRUCTURED_DATA = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SITE_NAME,
  description: DESCRIPTION,
  url: SITE_URL,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'macOS, Linux, Windows',
  softwareVersion: '0.3-alpha',
  releaseNotes: 'In active development. APIs may change.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  image: OG_IMAGE,
  author: {
    '@type': 'Organization',
    name: 'Daemon8',
    url: SITE_URL,
  },
})

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#1a1714' },
      { name: 'color-scheme', content: 'dark' },
      { name: 'robots', content: 'index,follow' },
      { title: TITLE },
      { name: 'description', content: DESCRIPTION },

      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:title', content: TITLE },
      { property: 'og:description', content: DESCRIPTION },
      { property: 'og:url', content: SITE_URL },
      { property: 'og:image', content: OG_IMAGE },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Daemon8 — Situational awareness for AI agents' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@daemon8ai' },
      { name: 'twitter:creator', content: '@daemon8ai' },
      { name: 'twitter:title', content: TITLE },
      { name: 'twitter:description', content: DESCRIPTION },
      { name: 'twitter:image', content: OG_IMAGE },
      { name: 'twitter:image:alt', content: 'Daemon8 — Situational awareness for AI agents' },
    ],
    links: [
      { rel: 'canonical', href: SITE_URL },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'icon', href: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'preload', as: 'image', href: '/assets/brand/mark-dark.svg' },
      { rel: 'stylesheet', href: fontsCss },
      { rel: 'stylesheet', href: themeCss },
      { rel: 'stylesheet', href: daemon8Css },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: STRUCTURED_DATA }} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
