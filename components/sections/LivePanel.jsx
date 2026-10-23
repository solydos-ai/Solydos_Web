'use client'
import { useEffect, useState } from 'react'
import useVisible from '@/hooks/useVisible'
import { PANEL_LIVE } from '@/content/site'

const GLYPHS = {
  chat: <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H11l-4.2 3.6V16H6.5A2.5 2.5 0 0 1 4 13.5z" />,
  calendar: <><rect x="4" y="5.5" width="16" height="14.5" rx="3" /><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" /></>,
  flame: <path d="M12 2.8c.6 3.3 4.9 5.2 4.9 10.1a4.9 4.9 0 0 1-9.8 0c0-1.9.8-3.3 2-4.4.3 1.4.9 2.2 1.8 2.6-.5-2.3-.2-5.2 1.1-8.3z" />,
  person: <><circle cx="12" cy="8" r="3.6" /><path d="M4.8 20c.7-3.6 3.5-5.6 7.2-5.6s6.5 2 7.2 5.6" /></>,
}
const { url, stats, feed } = PANEL_LIVE

// Lo que Soly va haciendo aparece en tu panel: suben los contadores y entra cada aviso en la línea de tiempo,
// lo más nuevo arriba (se ven 3). Corre en bucle mientras está en pantalla, como el chat de la demo.
export default function LivePanel() {
  const [ref, visible] = useVisible(0.4)
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!visible) { setN(0); return }
    const t = setTimeout(() => setN(n >= feed.length ? 0 : n + 1), n === 0 ? 700 : n >= feed.length ? 4200 : 1500)
    return () => clearTimeout(t)
  }, [visible, n])

  const done = feed.slice(0, n)
  const latest = done[done.length - 1]?.icon
  const shown = done.map((item, i) => ({ ...item, i })).reverse().slice(0, 3)

  return (
    <div ref={ref} className="lp-live" role="img" aria-label="Ejemplo de tu panel: Soly responde, agenda citas, encuentra prospectos y te pasa los chats que necesitan a una persona.">
      <div className="lp-live-bar" aria-hidden="true"><span>{url} · ejemplo</span><b><i />En vivo</b></div>
      <div className="lp-live-stats" aria-hidden="true">
        {stats.map((s) => (
          <div key={s.key} className={`lp-live-stat${latest === s.key ? ' is-up' : ''}`}>
            <b>{s.base + done.filter((d) => d.icon === s.key).length}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
      <ol className="lp-live-feed" aria-hidden="true">
        {shown.map(({ icon, time, text, i }) => (
          <li key={i} className={`lp-live-item${i === feed.length - 1 ? ' is-signal' : ''}`}>
            <span className="lp-live-node">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{GLYPHS[icon]}</svg>
            </span>
            <span className="lp-live-body">
              <span className="lp-live-time">{time}</span>
              <span className="lp-live-text">{text}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}
