'use client'
import field from '@/data/field.json'
import geo from '@/data/geo.json'
import useInView from '@/hooks/useInView'

// Curvas de nivel fijas al fondo de toda la página.
export function ContourField() {
  return (
    <div className="ed-field" aria-hidden="true">
      <svg viewBox="0 0 1440 1120" preserveAspectRatio="xMidYMid slice">
        {field.map((b, i) => <path key={i} d={b.d} className={`ed-fline${b.dot ? ' is-dot' : ''}`} />)}
      </svg>
    </div>
  )
}

// Divisor ondulado entre secciones.
export function ContourRule() {
  return (
    <svg className="ed-rule" viewBox="0 0 1200 26" preserveAspectRatio="none" aria-hidden="true">
      <path className="ed-rule-main" d="M0 13 C 180 2, 360 2, 540 13 S 900 24, 1200 13" />
      <path className="ed-rule-dot" d="M0 19 C 220 9, 440 9, 600 19 S 980 29, 1200 19" />
      <circle cx="600" cy="13" r="3.4" />
    </svg>
  )
}

export function Station({ code, label }) {
  return <p className="ed-station"><b>{code}</b> / {label}</p>
}

// Cima de la roca vista desde arriba (curvas del logo); se dibuja al entrar en pantalla.
export function Summit() {
  const [ref, seen] = useInView()
  return (
    <figure ref={ref} className={`ed-cta-fig${seen ? ' is-in' : ''}`}>
      <svg viewBox="-10 -10 52 52" role="img" aria-label="Cima de la roca Solydos en curvas de nivel">
        <circle className="ed-summit-ring" cx="16" cy="16" r="19" />
        <circle className="ed-summit-ring" cx="16" cy="16" r="24" />
        <path className="ed-summit-tick" d="M16 -9v4M16 37v4M-9 16h4M37 16h4" />
        {geo.loops.map((d, i) => (
          <path key={i} d={d} pathLength={i === 0 ? undefined : 1} className={`ed-summit-loop${i === 0 ? ' is-dot' : ' is-draw'}`} />
        ))}
        <circle className="ed-summit-pt" cx="17.6" cy="14.9" r="1.6" />
      </svg>
      <figcaption>Cima · Solydos</figcaption>
    </figure>
  )
}
