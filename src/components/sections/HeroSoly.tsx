import Specimen from '../ui/Specimen'
import WhatsAppButton from '../ui/WhatsAppButton'
import PauseOffscreen from '../ui/PauseOffscreen'
import { SOLY_CTA, ROCK_CHAT } from '@/content/site'


// Doble check de WhatsApp en los mensajes del cliente
const Checks = () => (
  <svg viewBox="0 0 18 12" width="16" height="11" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1 6.5 4.2 9.6 10.6 2.4M7.4 9.6l1 .9 6.6-8.1" />
  </svg>
)

// La roca viva y la invitación a escribirle a Soly. Al pasar por el botón, la roca se enciende.
// De la roca sale una conversación de WhatsApp: el cliente saluda, Soly escribe y responde (el check del saludo
// se pone azul), el cliente pregunta; luego se van uno por uno y vuelve a empezar.
// Debajo: el botón y los tres pasos, para que sea obvio que abre WhatsApp.
export default function HeroSoly() {
  // Fuera de pantalla las animaciones de la roca se pausan: no gastan batería ni traban el scroll en el celular
  return (
    <PauseOffscreen className="lp-demo">
      <div className="lp-demo-stage">
        <Specimen />
        <span className="ed-pulse" aria-hidden="true" />
        <span className="ed-pulse" aria-hidden="true" />
        <div className="lp-rock-chat" aria-hidden="true">
          {ROCK_CHAT.map(([who, text], i) => (
            <span key={text} className={`lp-rock-bubble is-${who} is-m${i + 1}`}>
              {text}<small>ahora{who === 'client' && <Checks />}</small>
            </span>
          ))}
          {/* Soly "escribiendo…" antes de responder, en el lugar de su mensaje */}
          <span className="lp-rock-bubble is-soly lp-rock-typing"><i /><i /><i /></span>
        </div>
      </div>
      <div className="lp-soly">
        <WhatsAppButton />
        <ol className="lp-soly-steps">
          {SOLY_CTA.steps.map((step, i) => <li key={step}><b>0{i + 1}</b>{step}</li>)}
        </ol>
      </div>
    </PauseOffscreen>
  )
}
