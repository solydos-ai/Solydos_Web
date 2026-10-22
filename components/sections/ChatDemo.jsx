'use client'
import { useEffect, useState } from 'react'
import useInView from '@/hooks/useInView'
import { CHAT } from '@/content/site'

const WAIT = { client: 1300, soly: 1700, handoff: 900 }

const Ticks = () => (
  <svg className="wa-ticks" viewBox="0 0 16 11" width="16" height="11" aria-hidden="true">
    <path d="M11.07.65 4.6 7.12 1.93 4.45.88 5.5 4.6 9.22l7.52-7.52zM15.07.65 8.6 7.12l-.82-.82-1.05 1.05L8.6 9.22l7.52-7.52z" fill="currentColor" />
  </svg>
)

// Conversación de ejemplo con aspecto de chat de WhatsApp: se reproduce sola al entrar en pantalla y vuelve a empezar.
export default function ChatDemo() {
  const [ref, seen] = useInView()
  const [n, setN] = useState(0)
  const [typing, setTyping] = useState(false)

  useEffect(() => {
    if (!seen) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(CHAT.messages.length); return }
    let t
    if (n === CHAT.messages.length) t = setTimeout(() => setN(0), 6000)
    else if (CHAT.messages[n].who === 'soly' && !typing) t = setTimeout(() => setTyping(true), 500)
    else t = setTimeout(() => { setTyping(false); setN(n + 1) }, n === 0 ? 500 : WAIT[CHAT.messages[n].who])
    return () => clearTimeout(t)
  }, [seen, n, typing])

  return (
    <div ref={ref} className="lp-chat-wrap">
      <p className="lp-chat-live"><i aria-hidden="true" />{CHAT.live}</p>
      <div className="wa-chat">
        <div className="wa-head">
          <span className="wa-avatar" aria-hidden="true">{CHAT.initials}</span>
          <div className="wa-who">
            <p className="wa-name">{CHAT.business}</p>
            <p className={`wa-status${typing ? ' is-typing' : ''}`}>{typing ? 'escribiendo…' : 'en línea'}</p>
          </div>
        </div>
        <div className="wa-body" aria-live="polite">
          <span className="wa-day">Hoy</span>
          {CHAT.messages.slice(0, n).map((m, i) => m.who === 'handoff'
            ? <p key={i} className="wa-note">{m.text}</p>
            : (
              <div key={i} className={`wa-msg is-${m.who === 'client' ? 'out' : 'in'}`}>
                <p>{m.text}</p>
                <small>{m.time}{m.who === 'client' && <Ticks />}</small>
              </div>
            ))}
          {typing && <div className="wa-msg is-in wa-typing" role="status" aria-label="Soly está escribiendo"><i /><i /><i /></div>}
        </div>
      </div>
    </div>
  )
}
