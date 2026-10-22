import Header from '@/components/ui/Header'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import WhatsAppLogo from '@/components/ui/WhatsAppLogo'
import Hero from '@/components/sections/Hero'
import Steps from '@/components/sections/Steps'
import Footer from '@/components/sections/Footer'
import ChatDemo from '@/components/sections/ChatDemo'
import { ContourField, ContourRule, Station } from '@/components/sections/Decor'
import { GUARANTEES, PAINS, SOLVE, SOLY_URL } from '@/content/site'

const Accent = ({ children }) => <span className="lp-accent">{children}</span>

export default function Page() {
  return (
    <div className="ed-page">
      <ContourField />
      <a className="ed-skip" href="#contenido">Saltar al contenido</a>
      <Header cta={{ label: 'Login', href: 'https://app.solydos.com/' }} />
      <main id="contenido">
        <Hero />
        <div className="sd-container">
          <ul className="lp-guar">
            {GUARANTEES.map(([label, title, text], i) => (
              <li key={title} className="lp-guar-item">
                <span className="lp-guar-label"><b>0{i + 1}</b>{label}</span>
                <h3 className="lp-guar-title">{title}{i === 0 && <WhatsAppLogo />}</h3>
                <p className="lp-guar-text">{text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="sd-container ed-rule-wrap"><ContourRule /></div>

        <section id="reto" className="lp-section">
          <div className="sd-container"><div className="ed-rail">
            <Station code="E·02" label="El reto" />
            <div className="ed-head">
              <h2 className="ed-title">Cada mensaje sin responder es un cliente que se <Accent>enfría.</Accent></h2>
              <p className="ed-sub">No puedes estar en el WhatsApp todo el día. Tus clientes, tampoco esperan todo el día.</p>
            </div>
            <div className="sd-grid">
              {PAINS.map(([title, text]) => (
                <article key={title} className="sd-feature ed-pain">
                  <div className="sd-feature-head"><span className="sd-feature-icon"><Icon name="down" /></span></div>
                  <h3 className="sd-feature-title">{title}</h3>
                  <p className="sd-feature-text">{text}</p>
                </article>
              ))}
            </div>
            <div className="ed-solve">
              <Station code="E·02b" label="La solución" />
              <h2 className="ed-title">Soly atiende por ti, con la <Accent>voz de tu negocio.</Accent></h2>
              <div>
                <p className="ed-sub">Un agente de IA conectado a tu WhatsApp. Responde con tu información y tus reglas. Y cuando algo necesita una persona, le pasa la conversación a tu equipo.</p>
                <ul className="ed-list">{SOLVE.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            </div>
          </div></div>
        </section>

        <div className="sd-container"><ContourRule /></div>

        <section id="como" className="lp-section">
          <div className="sd-container"><div className="ed-rail">
            <Station code="E·03" label="Cómo funciona" />
            <div className="ed-head"><h2 className="ed-title">Tú no configuras nada.<br />Nosotros lo dejamos listo.</h2></div>
            <Steps />
            <div className="ed-cta"><div className="ed-cta-inner">
              <div className="ed-cta-copy">
                <Station code="E·03b" label="Empieza" />
                <h2 className="ed-cta-title">Pon a <span>Soly</span> a responder tu WhatsApp.</h2>
                <p className="ed-sub">Son las 11:47 p. m. y la recepción del hotel ya cerró. Soly no: responde precios y dudas al instante, y le pasa la reserva a tu equipo con todo el contexto.</p>
                <div className="ed-cta-actions">
                  <Button href={SOLY_URL} icon="arrow" target="_blank" rel="noopener">Habla con Soly</Button>
                </div>
              </div>
              <ChatDemo />
            </div></div>
          </div></div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
