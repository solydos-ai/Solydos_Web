import { useEffect, useRef, useState, type RefObject } from 'react'

// Devuelve [ref, visible]: true mientras el elemento está en pantalla y false cuando sale (a diferencia de useInView, que se enciende con un umbral y solo se apaga al salir del todo).
export default function useVisible<T extends Element = HTMLDivElement>(threshold = 0.3): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, visible]
}
