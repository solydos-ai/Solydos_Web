'use client'
import type { ReactNode } from 'react'
import useVisible from '@/hooks/useVisible'

// Envoltorio que marca `is-idle` cuando sale de pantalla para pausar sus animaciones CSS.
// Lo de adentro sigue siendo HTML del servidor: no suma su código al JavaScript de la página.
export default function PauseOffscreen({ className, children }: { className: string; children: ReactNode }) {
  const [ref, visible] = useVisible(0)
  return <div ref={ref} className={`${className}${visible ? '' : ' is-idle'}`}>{children}</div>
}
