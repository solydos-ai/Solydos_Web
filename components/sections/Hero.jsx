import HeroSoly from './HeroSoly'
import WhatsAppLogo from '../ui/WhatsAppLogo'
import { HERO } from '@/content/site'

export default function Hero() {
  return (
    <section className="sd-hero v3-hero">
      <div className="sd-container sd-hero-grid">
        <div className="sd-hero-copy">
          <p className="sd-kicker lp-kicker"><WhatsAppLogo size={18} /><b>{HERO.kicker[0]}</b><i aria-hidden="true" />{HERO.kicker[1]}</p>
          <h1 className="sd-hero-title">Tu <span className="lp-accent">WhatsApp</span>,<br />vivo 24/7.</h1>
          <p className="sd-hero-subtitle">{HERO.subtitle}</p>
        </div>
        <div className="sd-hero-media"><HeroSoly /></div>
      </div>
    </section>
  )
}
