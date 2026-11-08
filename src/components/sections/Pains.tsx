'use client'
import { useEffect, useState } from 'react'
import useInView from '@/hooks/useInView'
import { useMediaQuery } from '@/hooks/useMedia'
import Icon from '@/components/ui/Icon'
import { PAINS } from '@/content/site'

type Pain = (typeof PAINS)[number]

// Cuenta de 0 a la cifra (p. ej. "73%") cada vez que la fila entra en pantalla.
function CountUp({ value, run }: { value: string; run: boolean }) {
  const [, num, suffix] = value.match(/^(\d+)(.*)$/) ?? ['', value, '']
  const target = Number(num)
  const [n, setN] = useState(0)
  const calm = useMediaQuery('(prefers-reduced-motion: reduce)')
  // Al salir de pantalla vuelve a 0 para contar otra vez
  const [wasRunning, setWasRunning] = useState(run)
  if (run !== wasRunning) {
    setWasRunning(run)
    if (!run) setN(0)
  }
  useEffect(() => {
    if (!run || calm) return
    let raf = 0
    let start: number | undefined
    const tick = (t: number) => {
      start ??= t
      const p = Math.min((t - start) / 1400, 1)
      setN(Math.round(target * (1 - (1 - p) ** 3)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, calm, target])
  return <span className="lp-row-n" aria-label={value}>{run && calm ? target : n}{suffix}</span>
}

// Una fila por dolor: cifra · el problema · la respuesta de Soly en un bloque negro que se despliega.
function Row({ p }: { p: Pain }) {
  const [ref, seen] = useInView<HTMLLIElement>(0.4)
  return (
    <li ref={ref} className={`lp-row${seen ? ' is-in' : ''}`}>
      <CountUp value={p.value} run={seen} />
      <div className="lp-row-body">
        <h3 className="lp-row-title">{p.title}</h3>
        <p className="lp-row-text">{p.text}</p>
        <p className="lp-row-src">Fuente: {p.source}</p>
      </div>
      <div className="lp-row-fix">
        <small><Icon name="down" size={12} />Con Soly</small>
        <strong>{p.fix}</strong>
      </div>
    </li>
  )
}

export default function Pains() {
  return <ol className="lp-rows">{PAINS.map((p) => <Row key={p.title} p={p} />)}</ol>
}
