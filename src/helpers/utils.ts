export function noop() {}

export function nonNullable<T>(x: T): x is NonNullable<T> {
  return x != null
}

export function onloadSafe(fn: () => void) {
  if (document.readyState === 'complete') {
    fn()
  } else {
    window.addEventListener('load', fn)
  }
}

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function getColorScheme(): 'light' | 'dark' {
  return document.documentElement.style.getPropertyValue('color-scheme') as
    | 'light'
    | 'dark'
}

export function simpleHash(str: string) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash &= hash // Convert to 32bit integer
  }
  return Math.abs(hash).toString(36)
}
