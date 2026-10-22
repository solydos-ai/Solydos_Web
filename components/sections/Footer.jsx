import Logo from '../ui/Logo'
import { SOLY_URL } from '@/content/site'

export default function Footer() {
  return (
    <footer id="contacto" className="v3-footer">
      <div className="sd-container v3-footer-inner">
        <Logo size={22} />
        <p className="v3-footer-line">Agentes de IA para WhatsApp · 2026</p>
        <a className="v3-footer-contact" href={SOLY_URL} target="_blank" rel="noopener">Habla con Soly por WhatsApp</a>
      </div>
    </footer>
  )
}
