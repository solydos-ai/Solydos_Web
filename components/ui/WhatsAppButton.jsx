import WhatsAppLogo from './WhatsAppLogo'
import { SOLY_CTA, SOLY_URL } from '@/content/site'

// El botón que abre el chat con Soly: verde de WhatsApp y su logo, para que se entienda que abre WhatsApp.
export default function WhatsAppButton() {
  return (
    <a href={SOLY_URL} target="_blank" rel="noopener" className="sd-btn sd-btn-whatsapp">
      <WhatsAppLogo size={22} color="currentColor" />
      <span>{SOLY_CTA.label}</span>
    </a>
  )
}
