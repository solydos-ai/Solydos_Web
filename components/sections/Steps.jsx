'use client'
import useInView from '@/hooks/useInView'
import { STEPS } from '@/content/site'

export default function Steps() {
  const [ref, seen] = useInView()
  return (
    <div ref={ref} className={`ed-steps${seen ? ' is-in' : ''}`}>
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
