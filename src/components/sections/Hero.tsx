import HeroSoly from './HeroSoly'
import Brush from '../ui/Brush'
import { HERO, SOLY_URL } from '@/content/site'

export default function Hero() {
  return (
    <section className="sd-hero v3-hero">
      <div className="sd-container sd-hero-grid">
        <div className="sd-hero-copy">
          <a href={SOLY_URL} target="_blank" rel="noopener" className="sd-kicker lp-kicker" aria-label="Saluda a Soly en WhatsApp: en línea ahora"><span className="lp-kicker-dot" aria-hidden="true" /><b>{HERO.kicker[0]}</b><i aria-hidden="true" />{HERO.kicker[1]}</a>
          <h1 className="sd-hero-title">Tu <span className="lp-accent">WhatsApp</span>,<br />vivo 24/7.</h1>
          <Brush>{HERO.brush}</Brush>
          <p className="sd-hero-subtitle">{HERO.subtitle}</p>
        </div>
        <div className="sd-hero-media"><HeroSoly /></div>
      </div>
    </section>
  )
}
