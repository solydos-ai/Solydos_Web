import Specimen from '../ui/Specimen'
import Button from '../ui/Button'
import { SOLY_URL } from '@/content/site'

// Burbujas de "escribiendo…" alrededor de la roca: la roca habla.
const TALK = [{ left: '0%', top: '20%' }, { right: '0%', top: '38%' }, { left: '4%', top: '56%' }]

// La roca viva y la invitación a escribirle a Soly. Al pasar por el botón, la roca se enciende.
export default function HeroSoly() {
  return (
    <div className="lp-demo">
      <div className="lp-demo-stage">
        <Specimen />
        <span className="ed-pulse" aria-hidden="true" />
        <span className="ed-pulse" aria-hidden="true" />
        {TALK.map((pos, i) => <span key={i} className="lp-demo-pill" style={pos} aria-hidden="true"><i /><i /><i /></span>)}
      </div>
      <div className="lp-soly">
        <p className="ed-demo-label">Soly · el agente de Solydos</p>
        <Button href={SOLY_URL} icon="arrow" target="_blank" rel="noopener">Habla con Soly</Button>
        <p className="lp-soly-help">Escríbele por WhatsApp como lo haría uno de tus clientes.</p>
      </div>
    </div>
  )
}
