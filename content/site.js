// Copy y datos de la landing. Editar aquí, no en los componentes.

// Número de WhatsApp con indicativo y sin "+". Definir NEXT_PUBLIC_WA_NUMBER en .env.local / CI.
const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER || '57XXXXXXXXXX'

export const DEMO_URL =
  `https://wa.me/${WA_NUMBER}?text=` +
  encodeURIComponent('Hola, quiero agendar una demo de Solydos para mi negocio.')

// WhatsApp de Soly, el agente (lo opera el repo del agente). Es público: va en la página.
const SOLY_NUMBER = process.env.NEXT_PUBLIC_SOLY_WA_NUMBER || '573246800107'

export const SOLY_URL = `https://wa.me/${SOLY_NUMBER}?text=` + encodeURIComponent('Hola, Soly')

export const HERO = {
  kicker: 'Solydos · Agentes de IA para WhatsApp',
  subtitle:
    'En Solydos creamos a Soly, un agente de IA que atiende a tus clientes por WhatsApp con la información de tu negocio. Nosotros lo configuramos y lo entrenamos por ti.',
  bullets: ['API oficial de WhatsApp', 'Configurado por nosotros', 'Responde 24/7'],
}

export const PAINS = [
  ['Responder tarde cuesta ventas.', 'Si no contestas rápido, el cliente le escribe al de al lado.'],
  ['Las mismas preguntas, todo el día.', 'Precios, horarios, disponibilidad: lo mismo una y otra vez.'],
  ['De noche y fines de semana, nadie contesta.', 'Pero los clientes siguen escribiendo.'],
]

export const SOLVE = [
  'Responde las consultas frecuentes al instante.',
  'Da precios, horarios y disponibilidad según lo que le cargues.',
  'Sabe cuándo pasarle la conversación a tu equipo.',
]

export const STEPS = [
  ['01', 'Nos cuentas de tu negocio.', 'Una conversación corta: qué vendes, tus precios, tus preguntas típicas.'],
  ['02', 'Entrenamos a Soly.', 'Lo cargamos con tu información y le damos tus reglas de atención.'],
  ['03', 'Soly entra en turno.', 'Lo conectamos a tu WhatsApp y empieza a responder a tus clientes.'],
]
