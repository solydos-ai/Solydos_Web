import { useSyncExternalStore } from 'react'

// Lee una condición del navegador (media query o lo que diga `test`) sin efectos: en el servidor vale `fallback`.
export function useMediaQuery(query: string, fallback = false) {
  return useSyncExternalStore(
    (onChange) => {
      const m = window.matchMedia(query)
      m.addEventListener('change', onChange)
      return () => m.removeEventListener('change', onChange)
    },
    () => window.matchMedia(query).matches,
    () => fallback,
  )
}

// iPhone o iPad (iPadOS se presenta como Mac con pantalla táctil). No cambia mientras la página está abierta.
const noop = () => () => {}
const isIOS = () => /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
export function useIsIOS() {
  return useSyncExternalStore(noop, isIOS, () => false)
}
