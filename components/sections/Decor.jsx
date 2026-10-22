'use client'
import field from '@/data/field.json'

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
