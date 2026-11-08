'use client'
import type { ReactNode } from 'react'
import useInView from '@/hooks/useInView'

// Brochazo detrás de "Y tu CRM al día": cuerpo, cola izquierda, gotas, cerdas y huecos de pincel seco.
// El filtro deshilacha los bordes. Es decorativo; el color sale de --brush.
// La brocha vuelve a pintarla cada vez que el hero entra de nuevo en pantalla.

// Cuerpo del brochazo y la cola izquierda
const BODY = [
  'M200 54 C 340 46, 600 42, 880 48 C 920 52, 930 70, 925 96 C 760 108, 480 114, 230 112 C 206 98, 198 72, 200 54 Z',
  'M36 74 C 90 68, 160 66, 214 64 L 214 94 C 150 94, 90 92, 44 88 C 26 84, 24 78, 36 74 Z',
]
const DROPS: [cx: number, cy: number, r: number][] = [[980, 70, 5], [992, 76, 2]]

// Cerdas: [x inicio, y, x fin, grosor, dash]
const BRISTLES: [x1: number, y: number, x2: number, width: number, dash?: string][] = [
  // arriba
  [300, 46, 700, 5], [420, 42, 640, 3, '60 8 90 6'], [560, 44, 880, 4, '120 10 60 6 80'], [680, 40, 830, 2.5, '30 6 50 9'],
  // punta derecha deshilachada
  [800, 54, 965, 9, '90 6 40 4 30'], [820, 64, 950, 7], [780, 74, 985, 8, '110 5 60 8 20'], [800, 86, 960, 9, '70 7 50 5 25'], [760, 98, 940, 7, '60 10 80 4'], [820, 108, 900, 4, '30 8 40'],
  // borde de abajo
  [110, 116, 640, 4, '160 8 90 12 120'], [160, 124, 560, 2.5, '60 10 140 8 70'], [380, 118, 700, 5, '90 6 120'], [220, 108, 760, 6],
  // cola izquierda
  [40, 70, 300, 5, '80 6 120'], [60, 82, 260, 4, '50 8 90'], [90, 90, 320, 3, '40 10 100'],
]
// Huecos de pincel seco (color del fondo): [x inicio, y, x fin, grosor, dash, opacidad]
const GAPS: [x1: number, y: number, x2: number, width: number, dash: string, opacity: number][] = [
  [560, 70, 900, 1.6, '80 14 40 10 120', 0.8], [640, 84, 930, 1.3, '50 12 90 8 60', 0.8],
  [260, 60, 520, 1.1, '40 18 70 12', 0.6], [300, 100, 600, 1.2, '60 14 50', 0.6],
]

// Línea con una ondulación mínima, para que no se vea de regla
const wave = (x1: number, y: number, x2: number) => `M${x1} ${y} C ${x1 + (x2 - x1) * 0.35} ${y - 1.5}, ${x1 + (x2 - x1) * 0.7} ${y + 1.5}, ${x2} ${y}`

export default function Brush({ children }: { children: ReactNode }) {
  const [ref, on] = useInView<HTMLParagraphElement>(0.6, true)
  return (
    <p ref={ref} className={`lp-brush${on ? ' is-on' : ''}`}>
      <svg className="lp-brush-stroke" viewBox="0 0 1000 160" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <filter id="lp-brush-rough" x="-5%" y="-20%" width="110%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9 0.08" numOctaves="2" seed="4" />
            <feDisplacementMap in="SourceGraphic" scale="7" />
          </filter>
        </defs>
        <g filter="url(#lp-brush-rough)" fill="none" strokeLinecap="round">
          {BODY.map((d) => <path key={d} d={d} fill="currentColor" />)}
          {DROPS.map(([cx, cy, r]) => <circle key={cx} cx={cx} cy={cy} r={r} fill="currentColor" />)}
          {BRISTLES.map(([x1, y, x2, w, dash], i) => (
            <path key={`b${i}`} d={wave(x1, y, x2)} stroke="currentColor" strokeWidth={w} strokeDasharray={dash} />
          ))}
          {GAPS.map(([x1, y, x2, w, dash, op], i) => (
            <path key={`g${i}`} d={wave(x1, y, x2)} stroke="var(--background)" strokeWidth={w} strokeDasharray={dash} opacity={op} />
          ))}
        </g>
      </svg>
      <span>{children}</span>
    </p>
  )
}
