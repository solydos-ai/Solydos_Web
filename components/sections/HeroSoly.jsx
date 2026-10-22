import Specimen from '../ui/Specimen'
import Button from '../ui/Button'
import { SOLY_URL } from '@/content/site'

// La roca y la invitación a escribirle a Soly por WhatsApp. Al pasar por el botón, el núcleo se enciende.
export default function HeroSoly() {
  return (
    <div className="lp-demo">
      <div className="lp-demo-stage"><Specimen /></div>
      <div className="lp-soly">
        <p className="ed-demo-label">Soly · el agente de Solydos</p>
        <Button href={SOLY_URL} icon="arrow" target="_blank" rel="noopener">Habla con Soly</Button>
        <p className="lp-soly-help">Escríbele por WhatsApp como lo haría uno de tus clientes.</p>
      </div>
    </div>
  )
}
