import { useEffect, useRef, useState } from 'react'

// Devuelve [ref, visible]: true mientras el elemento está en pantalla y false cuando sale (a diferencia de useInView, que avisa una sola vez).
export default function useVisible(threshold = 0.3) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) { setVisible(true); return }
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, visible]
}
