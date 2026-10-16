'use client'
import { useEffect, useRef, useState } from 'react'
import Specimen from '../ui/Specimen'
import Button from '../ui/Button'
import { DEMO_URL, DEMO_SCRIPT as SCRIPT, DEMO_CHIPS as CHIPS } from '@/content/site'

const SLOTS = ['6%', '33%', '60%']
const T_RECV = 450, T_TYPE = 1500, T_GAP = 1300
const INITIAL = { sent: 0, answered: 0, typing: false, auto: false }

// Chat tipo WhatsApp sobre la roca. El agente responde a un guion fijo; no hay backend.
export default function HeroDemo() {
  const [s, setS] = useState(INITIAL)
  const cur = useRef(s)
  const timers = useRef([])
  cur.current = s

  const patch = (p) => setS((prev) => ({ ...prev, ...(typeof p === 'function' ? p(prev) : p) }))
  const clear = () => { timers.current.forEach(clearTimeout); timers.current = [] }
  const later = (fn, ms) => { timers.current.push(setTimeout(fn, ms)) }

  function ask() {
    const c = cur.current
    if (c.typing || c.sent !== c.answered || c.sent >= SCRIPT.length) return
    cur.current = { ...c, sent: c.sent + 1 }
    patch({ sent: c.sent + 1 })
    later(() => patch({ typing: true }), T_RECV)
    later(() => patch((p) => ({ typing: false, answered: p.answered + 1 })), T_RECV + T_TYPE)
  }

  function play() {
    clear()
    cur.current = { ...INITIAL, auto: true }
    setS(cur.current)
    let t = 350
    SCRIPT.forEach(() => { later(ask, t); t += T_RECV + T_TYPE + T_GAP })
    later(() => patch({ auto: false }), t - T_GAP)
  }

  useEffect(() => {
    // "Míralo funcionar" del hero (otro componente) enciende la demo.
    const onClick = (e) => { if (e.target.closest?.('a[href="#demo"]')) play() }
    document.addEventListener('click', onClick)
    return () => { document.removeEventListener('click', onClick); clear() }
  }, [])

  const msgs = []
  SCRIPT.forEach(([q, a], j) => {
    if (j < s.sent) msgs.push({ key: `q${j}`, who: 'client', text: q, meta: `Cliente · 22:1${4 + j} ✓✓` })
    if (j < s.answered) msgs.push({ key: `a${j}`, who: 'agent', text: a, meta: `Solydos · 22:1${4 + j}` })
  })
  const shown = msgs.slice(-(s.typing ? 2 : 3))
  const recv = s.sent > s.answered && !s.typing
  const done = s.answered >= SCRIPT.length
  const canAsk = !s.auto && !s.typing && s.sent === s.answered && !done

  const status = s.typing ? 'Escribiendo…'
    : recv ? 'Mensaje recibido'
    : done ? 'Pasado a tu equipo · con contexto'
    : s.answered ? 'Respondido al instante'
    : 'En turno · 22:14'
  const help = s.typing ? 'Busca la respuesta en la información del negocio.'
    : done ? 'Lo que necesita a una persona llega a tu equipo con toda la conversación.'
    : s.sent ? 'Sigue preguntando como lo haría un cliente.'
    : 'Escríbele como lo haría un cliente, a cualquier hora.'

  return (
    <div className={`lp-demo${s.typing ? ' is-think' : ''}${recv ? ' is-recv' : ''}`}>
      <p className="ed-demo-label">Ejemplo · Ferretería El Tornillo · WhatsApp</p>
      <div className="lp-demo-stage">
        <Specimen />
        {s.answered > 0 && <span key={`p${s.answered}`} className="ed-pulse" style={{ left: '56.5%', top: '63%' }} aria-hidden="true" />}
        {shown.length === 0 && (
          <>
            <span className="lp-demo-pill" style={{ left: '4%', top: '34%' }} aria-hidden="true"><i /><i /><i /></span>
            <span className="lp-demo-pill" style={{ right: '2%', top: '44%' }} aria-hidden="true"><i /><i /><i /></span>
          </>
        )}
        <div aria-live="polite">
          {shown.map((m, k) => (
            <div key={m.key} className={`lp-demo-bubble is-${m.who}`} style={{ top: SLOTS[k] }}>
              <span>{m.meta}</span><p>{m.text}</p>
            </div>
          ))}
          {s.typing && (
            <div className="lp-demo-typing" style={{ top: SLOTS[shown.length] }} role="status" aria-label="El agente está escribiendo"><i /><i /><i /></div>
          )}
        </div>
      </div>
      <div className="lp-demo-foot">
        <span className="lp-demo-status">{status}</span>
        <p className="lp-demo-help">{help}</p>
        {canAsk && <div className="lp-demo-chips"><Button variant="secondary" size="sm" onClick={ask}>{CHIPS[s.sent]}</Button></div>}
        <div className="lp-demo-bar">
          <Button href={DEMO_URL} target="_blank" rel="noopener">Agenda una demo</Button>
          <Button variant="ghost" onClick={play} disabled={s.auto}>{s.sent === 0 ? 'Míralo funcionar' : 'Ver de nuevo'}</Button>
        </div>
      </div>
    </div>
  )
}
