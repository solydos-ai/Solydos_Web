'use client'
import { useEffect, useState } from 'react'
import useInView from '@/hooks/useInView'
import { CHAT } from '@/content/site'

const WAIT = { soly: 1700, handoff: 900 }

const Ticks = () => (
  <svg className="wa-ticks" viewBox="0 0 16 11" width="16" height="11" aria-hidden="true">
    <path d="M11.07.65 4.6 7.12 1.93 4.45.88 5.5 4.6 9.22l7.52-7.52zM15.07.65 8.6 7.12l-.82-.82-1.05 1.05L8.6 9.22l7.52-7.52z" fill="currentColor" />
  </svg>
)

// Íconos de WhatsApp (Material Icons, Apache 2.0)
const PATHS = {
  back: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z',
  video: 'M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z',
  call: 'M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z',
  more: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
  emoji: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z',
  clip: 'M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 0 1 5 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 0 0 5 0V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z',
  camera: 'M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zM9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z',
  send: 'M2.01 21 23 12 2.01 3 2 10l15 2-15 2z',
  mic: 'M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z',
}
const I = ({ name }) => <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d={PATHS[name]} fill="currentColor" /></svg>

// Conversación de ejemplo con aspecto de chat de WhatsApp: se reproduce sola al entrar en pantalla y vuelve a empezar.
// El cliente escribe su mensaje letra por letra en la barra de abajo antes de enviarlo.
export default function ChatDemo() {
  const [ref, seen] = useInView()
  const [n, setN] = useState(0)
  const [typing, setTyping] = useState(false)
  const [draft, setDraft] = useState('')

  useEffect(() => {
    if (!seen) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(CHAT.messages.length); return }
    let t
    const m = CHAT.messages[n]
    if (!m) t = setTimeout(() => setN(0), 6000)
    else if (m.who === 'client') t = draft.length < m.text.length
      // Se recorre por caracteres completos para no partir un emoji a la mitad
      ? setTimeout(() => setDraft([...m.text].slice(0, [...draft].length + 1).join('')), draft ? 40 : 900)
      : setTimeout(() => { setDraft(''); setN(n + 1) }, 450)
    else if (m.who === 'soly' && !typing) t = setTimeout(() => setTyping(true), 500)
    else t = setTimeout(() => { setTyping(false); setN(n + 1) }, WAIT[m.who])
    return () => clearTimeout(t)
  }, [seen, n, typing, draft])

  return (
    <div ref={ref} className="lp-chat-wrap">
      <p className="lp-chat-live"><i aria-hidden="true" />{CHAT.live}</p>
      <div className="wa-chat">
        <div className="wa-head">
          <I name="back" />
          <span className="wa-avatar" aria-hidden="true">{CHAT.initials}</span>
          <div className="wa-who">
            <p className="wa-name">{CHAT.business}</p>
            <p className={`wa-status${typing ? ' is-typing' : ''}`}>{typing ? 'escribiendo…' : 'en línea'}</p>
          </div>
          <span className="wa-actions" aria-hidden="true"><I name="video" /><I name="call" /><I name="more" /></span>
        </div>
        <div className="wa-body" aria-live="polite">
          <span className="wa-day">Hoy</span>
          {CHAT.messages.slice(0, n).map((m, i) => m.who === 'handoff'
            ? <p key={i} className="wa-note">{m.text}</p>
            : (
              <div key={i} className={`wa-msg is-${m.who === 'client' ? 'out' : 'in'}`}>
                <p>{m.text}<span className="wa-spacer" /></p>
                <small>{m.time}{m.who === 'client' && <Ticks />}</small>
              </div>
            ))}
          {typing && <div className="wa-msg is-in wa-typing" role="status" aria-label="Soly está escribiendo"><i /><i /><i /></div>}
        </div>
        <div className="wa-compose" aria-hidden="true">
          <span className="wa-input">
            <I name="emoji" />
            {draft ? <span className="wa-draft">{draft}</span> : <span>Mensaje</span>}
            <I name="clip" />
            {!draft && <I name="camera" />}
          </span>
          <span className="wa-mic"><I name={draft ? 'send' : 'mic'} /></span>
        </div>
      </div>
    </div>
  )
}
