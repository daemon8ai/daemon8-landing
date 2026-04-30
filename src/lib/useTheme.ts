import { useState, useEffect, useCallback, useSyncExternalStore } from 'react'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'da-theme'
const listeners = new Set<() => void>()

function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getStoredTheme(): Theme | null {
  if (typeof window === 'undefined') return null
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'dark' || stored === 'light') return stored
  return null
}

function getResolvedTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme()
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.toggle('da-dark', theme === 'dark')
  root.classList.toggle('da-light', theme === 'light')
}

let currentTheme: Theme = typeof window !== 'undefined' ? getResolvedTheme() : 'light'

if (typeof window !== 'undefined') {
  applyTheme(currentTheme)
}

function subscribe(cb: () => void) {
  listeners.add(cb)
  return () => { listeners.delete(cb) }
}

function getSnapshot() {
  return currentTheme
}

function setTheme(next: Theme) {
  currentTheme = next
  localStorage.setItem(STORAGE_KEY, next)
  applyTheme(next)
  for (const cb of listeners) cb()
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, () => 'light' as Theme)

  const toggle = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => {
      if (!getStoredTheme()) {
        const next = getSystemTheme()
        currentTheme = next
        applyTheme(next)
        for (const cb of listeners) cb()
      }
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return { theme, toggle } as const
}
