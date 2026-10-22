import Button from '../ui/Button'
import HeroSoly from './HeroSoly'
import { DEMO_URL, HERO } from '@/content/site'

export default function Hero() {
  return (
    <section className="sd-hero v3-hero">
      <div className="sd-container sd-hero-grid">
        <div className="sd-hero-copy">
          <p className="sd-kicker">{HERO.kicker}</p>
          <h1 className="sd-hero-title">Tu <span className="lp-accent">WhatsApp</span>, vivo 24/7.</h1>
          <p className="sd-hero-subtitle">{HERO.subtitle}</p>
          <div className="sd-hero-actions">
            <Button href={DEMO_URL} icon="arrow" target="_blank" rel="noopener">Agenda una demo</Button>
          </div>
        </div>
        <div className="sd-hero-media"><HeroSoly /></div>
      </div>
    </section>
  )
}
