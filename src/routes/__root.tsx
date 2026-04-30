import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import fontsCss from '../fonts.css?url'
import themeCss from '../theme.css?url'
import daemon8Css from '../daemon8.css?url'

const THEME_INIT_SCRIPT = `(function(){try{var stored=localStorage.getItem('da-theme');var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=stored==='dark'||stored==='light'?stored:(prefersDark?'dark':'light');var root=document.documentElement;root.classList.toggle('da-dark',resolved==='dark');root.classList.toggle('da-light',resolved==='light');root.style.colorScheme=resolved;}catch(e){}})();`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Daemon8 — The admin layer for AI agents' },
      {
        name: 'description',
        content: 'A single local-first stream of runtime context for AI agents. Powered by Rust and SurrealDB. 100% open source.',
      },
    ],
    links: [
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
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
