import { defineEventHandler, setResponseHeaders } from 'nitro/runtime'
import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const script = readFileSync(resolve(__dirname, '../scripts/install.sh'), 'utf-8')

export default defineEventHandler((event) => {
  setResponseHeaders(event, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Cache-Control': 'public, max-age=300',
  })
  return script
})
