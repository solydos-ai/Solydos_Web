'use client'
import useInView from '@/hooks/useInView'
import { STEPS } from '@/content/site'

// Perfil de montaña que sube de paso en paso hasta la cima. Mesetas en x≈0, 400 y 800 para que cada nodo
// (01, 02, 03) caiga sobre la línea aunque el SVG se estire al ancho del contenedor.
const RIDGE = 'M0 148 H50 L90 136 L120 142 L170 122 L205 130 L250 112 L290 120 L330 104 L385 96 H460 L500 84 L530 92 L575 70 L610 80 L655 60 L695 68 L740 52 L785 44 H860 L895 32 L925 40 L965 22 L1000 30 L1050 14 L1085 20 L1130 4 L1165 12 L1200 10'
const ECHO = 'M0 162 H50 L90 150 L120 156 L170 136 L205 144 L250 126 L290 134 L330 118 L385 110 H460 L500 98 L530 106 L575 84 L610 94 L655 74 L695 82 L740 66 L785 58 H860 L895 46 L925 54 L965 36 L1000 44 L1050 28 L1085 34 L1130 18 L1165 26 L1200 24'

export default function Steps() {
  const [ref, seen] = useInView()
  return (
    <div ref={ref} className={`ed-steps${seen ? ' is-in' : ''}`}>
      <svg className="lp-ridge" viewBox="0 0 1200 160" preserveAspectRatio="none" aria-hidden="true">
        <path d={ECHO} className="lp-ridge-echo" />
        <path d={RIDGE} pathLength="1" className="lp-ridge-main" />
        <path d="M1130 4V-28l22 7-22 7" className="lp-ridge-flag" />
      </svg>
      <ol className="lp-steps">
        {STEPS.map(([n, title, text]) => (
          <li key={n} className="lp-step">
            <span className="lp-step-n" aria-hidden="true">{n}</span>
            <h3>{title}</h3><p>{text}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
