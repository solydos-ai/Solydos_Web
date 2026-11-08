import geo from '@/data/geo.json'

export function Mark({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className="sd-mark" aria-hidden="true">
      {geo.loops.map((d, i) => <path key={i} d={d} className={`sd-mark-loop sd-mark-loop-${i}`} />)}
      <circle cx="17.6" cy="14.9" r="1.9" className="sd-mark-summit" />
    </svg>
  )
}

export default function Logo({ size = 28 }) {
  return (
    <span className="sd-logo" role="img" aria-label="Solydos">
      <Mark size={size} />
      <span className="sd-logo-name" aria-hidden="true">Solydos</span>
    </span>
  )
}
