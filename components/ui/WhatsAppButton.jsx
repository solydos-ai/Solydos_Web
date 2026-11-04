import Icon from './Icon'
import WhatsAppLogo from './WhatsAppLogo'
import { SOLY_CTA, SOLY_URL } from '@/content/site'

// El botón que abre el chat con Soly: verde de WhatsApp, su logo y una flecha, para que se entienda que abre WhatsApp.
// Un anillo late cada pocos segundos y el logo se mueve, para invitar a tocarlo (sin movimiento si el sistema lo pide).
export default function WhatsAppButton() {
  return (
    <a href={SOLY_URL} target="_blank" rel="noopener" className="sd-btn sd-btn-whatsapp">
      <span className="sd-btn-wa-logo"><WhatsAppLogo size={20} color="currentColor" /></span>
      <span>{SOLY_CTA.label}</span>
      <Icon name="arrow" size={18} />
    </a>
  )
}
