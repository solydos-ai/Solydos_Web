'use client'
import { useEffect, useState } from 'react'

// Cabecera fija: arriba de todo es transparente y alta; al bajar se compacta, toma fondo y muestra la traversa punteada.
// Lo de adentro sigue siendo HTML del servidor.
export default function StickyHeader({ children }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let frame = 0
    const check = () => { frame = 0; setScrolled(window.scrollY > 8) }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(check) }
    check()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(frame) }
  }, [])

  return <header className={`sd-header${scrolled ? ' is-scrolled' : ''}`}>{children}</header>
}
