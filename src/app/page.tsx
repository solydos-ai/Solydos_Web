import type { ReactNode } from 'react'
import Header from '@/components/ui/Header'
import Icon from '@/components/ui/Icon'
import WhatsAppLogo from '@/components/ui/WhatsAppLogo'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import Hero from '@/components/sections/Hero'
import Steps from '@/components/sections/Steps'
import Footer from '@/components/sections/Footer'
import ChatDemo from '@/components/sections/ChatDemo'
import Pains from '@/components/sections/Pains'
import Marquee from '@/components/sections/Marquee'
import { ContourField, ContourRule, Station } from '@/components/sections/Decor'
import { GUARANTEES } from '@/content/site'

const Accent = ({ children }: { children: ReactNode }) => <span className="lp-accent">{children}</span>

// Tabla de contactos, para "Tu CRM se llena solo"
const CrmIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--signal)" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
    <rect x="3.5" y="4.5" width="17" height="15" /><path d="M3.5 9.5h17M8.5 9.5v10M11.5 13h6M11.5 16h4" />
  </svg>
)

export default function Page() {
  return (
    <div className="ed-page">
      <ContourField />
      <a className="ed-skip" href="#contenido">Saltar al contenido</a>
      <Header cta={{ label: 'Ingresar', href: 'https://app.solydos.com/' }} />
      <main id="contenido">
        <Hero />
        <div className="sd-container">
          <ul className="lp-guar">
            {GUARANTEES.map(([label, title, text, icon, tag], i) => (
              <li key={title} className="lp-guar-item">
                <span className="lp-guar-label"><b>0{i + 1}</b>{label}{tag && <span className="lp-guar-tag">{tag}</span>}</span>
                <h3 className="lp-guar-title">{title}{icon === 'whatsapp' && <WhatsAppLogo />}{icon === 'crm' && <CrmIcon />}</h3>
                <p className="lp-guar-text">{text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="sd-container ed-rule-wrap"><ContourRule /></div>

        <section id="reto" className="lp-section">
          <Marquee />
          <div className="sd-container"><div className="ed-rail">
            <Station code="E·02" label="El reto" />
            <div className="lp-reto-head">
              <p className="lp-reto-title">Tus clientes ya eligieron el <Accent>chat.</Accent></p>
              <p className="lp-reto-sub">Lo que decide la venta es qué tan rápido les respondes, estudios lo demuestran.<Icon name="down" size={14} /></p>
            </div>
            <Pains />
          </div></div>
        </section>

        <div className="sd-container"><ContourRule /></div>

        <section id="como" className="lp-section">
          <div className="sd-container"><div className="ed-rail">
            <div className="ed-cta"><div className="ed-cta-inner">
              <div className="ed-cta-copy">
                <Station code="E·03" label="Empieza" />
                <h2 className="ed-cta-title">Mira a <span>Soly</span> respondiendo por ti.</h2>
                <p className="ed-sub">Son las 11:47 p. m. y la recepción del hotel ya cerró. Soly no: responde precios y dudas al instante, y le pasa la reserva a tu equipo con todo el contexto.</p>
                <div className="ed-cta-actions">
                  <WhatsAppButton />
                </div>
              </div>
              <ChatDemo />
            </div></div>
            <div className="ed-next">
              <Station code="E·04" label="Cómo funciona" />
              <div className="ed-head"><h2 className="ed-title">Tú no configuras nada.<br />Nosotros lo dejamos listo.</h2></div>
              <Steps />
              <div className="ed-end">
                <p className="ed-end-text">Ya llegaste a la cima. <span>Ahora háblale a Soly.</span></p>
                <WhatsAppButton />
              </div>
            </div>
          </div></div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
