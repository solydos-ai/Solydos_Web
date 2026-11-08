import { useEffect, useRef, useState, type RefObject } from 'react'

// Devuelve [ref, visto]: true cuando el elemento entra al viewport (al menos `threshold` visible) y false
// cuando sale del todo. Así sus animaciones de entrada se repiten cada vez que vuelves a pasar por él con el scroll.
// `initial` sirve para lo que ya está en pantalla al cargar (el hero): arranca encendido, sin parpadeo.
export default function useInView<T extends Element = HTMLDivElement>(threshold = 0.3, initial = false): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null)
  const [seen, setSeen] = useState(initial)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.intersectionRatio >= threshold) setSeen(true)
      else if (!e.isIntersecting) setSeen(false)
    }, { threshold: [0, threshold] })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, seen]
}
