import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { beforeEach, describe, expect, it, vi } from 'vitest'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

function readProjectFile(path: string): string {
  return readFileSync(resolve(root, path), 'utf-8')
}

describe('hosted installers', () => {
  beforeEach(() => {
    vi.resetModules()
  })

  it('keeps public and server shell installers in sync', () => {
    expect(readProjectFile('public/install.sh')).toBe(readProjectFile('server/scripts/install.sh'))
  })

  it('keeps public and server PowerShell installers in sync', () => {
    expect(readProjectFile('public/install.ps1')).toBe(
      readProjectFile('server/scripts/install.ps1'),
    )
  })

  it('keeps alpha installer fallback release-based and tag-neutral', () => {
    const installers = [
      readProjectFile('public/install.sh'),
      readProjectFile('public/install.ps1'),
      readProjectFile('server/scripts/install.sh'),
      readProjectFile('server/scripts/install.ps1'),
    ].join('\n')

    expect(installers).toContain('releases?per_page=1')
    expect(installers).not.toContain('releases/latest/download')
    expect(installers).not.toMatch(/v[0-9]+\.[0-9]+\.[0-9]+-alpha\.[0-9]+/)
  })

  it('serves the shell installer route with text cache headers', async () => {
    const route = await import('../server/routes/install.sh.get')
    const event: { headers?: Record<string, string> } = {}

    expect(route.default(event)).toBe(readProjectFile('server/scripts/install.sh'))
    expect(event.headers).toEqual({
      'Cache-Control': 'public, max-age=300',
      'Content-Type': 'text/plain; charset=utf-8',
    })
  })

  it('serves the PowerShell installer route with text cache headers', async () => {
    const route = await import('../server/routes/install.ps1.get')
    const event: { headers?: Record<string, string> } = {}

    expect(route.default(event)).toBe(readProjectFile('server/scripts/install.ps1'))
    expect(event.headers).toEqual({
      'Cache-Control': 'public, max-age=300',
      'Content-Type': 'text/plain; charset=utf-8',
    })
  })
})
