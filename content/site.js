// Copy y datos de la landing. Editar aquí, no en los componentes.

// Número de WhatsApp con indicativo y sin "+". Definir NEXT_PUBLIC_WA_NUMBER en .env.local / CI.
const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER || '57XXXXXXXXXX'

export const DEMO_URL =
  `https://wa.me/${WA_NUMBER}?text=` +
  encodeURIComponent('Hola, quiero agendar una demo de Solydos para mi negocio.')

export const HERO = {
  kicker: 'SOLYDOS AI AGENT · PARA WHATSAPP',
  subtitle:
    'Solydos es un agente de IA que atiende a tus clientes por WhatsApp con la información de tu negocio. Nosotros lo configuramos y lo entrenamos por ti.',
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
  ['02', 'Entrenamos tu agente.', 'Lo cargamos con tu información y le damos tus reglas de atención.'],
  ['03', 'Entra en turno.', 'Lo conectamos a tu WhatsApp y empieza a responder a tus clientes.'],
]

// Demo del hero: [pregunta del cliente, respuesta del agente]
export const DEMO_SCRIPT = [
  ['¿Tienen el taladro DX-20? ¿A cuánto está?', '¡Hola! Sí, nos quedan 3 en la sede Norte. Está a $289.000 con la broca incluida.'],
  ['¿Hasta qué hora abren hoy?', 'Hoy abrimos hasta las 7:00 p. m., y mañana desde las 7:00 a. m.'],
  ['¿Me pueden hacer factura a nombre de mi empresa?', 'Claro. Para eso te paso con alguien del equipo: ya tiene tu pedido y te escribe en unos minutos.'],
]
export const DEMO_CHIPS = ['¿Tienen el taladro DX-20?', '¿Hasta qué hora abren?', '¿Me hacen factura?']
