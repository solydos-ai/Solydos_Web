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
  // [nombre, qué es]: se muestran en la cápsula del hero con el logo de WhatsApp
  kicker: ['Soly', 'Agente de IA para tu negocio'],
  subtitle:
    'En Solydos creamos a Soly, un agente de IA que atiende a tus clientes por WhatsApp con la información de tu negocio. Nosotros lo configuramos y lo entrenamos por ti.',
}

// Demo en vivo del cierre: un hotel atendido por Soly de noche. Solo lo que Soly hace hoy (sin agendar).
export const CHAT = {
  live: 'En vivo · Soly responde',
  business: 'Hotel Brisa Marina',
  initials: 'BM',
  messages: [
    { who: 'client', time: '11:47 p. m.', text: 'Hola, ¿tienen habitación doble para este fin de semana?' },
    { who: 'soly', time: '11:47 p. m.', text: '¡Hola! Sí, nos quedan 2 dobles para viernes y sábado. La noche está en $320.000 con desayuno incluido.' },
    { who: 'client', time: '11:47 p. m.', text: '¿Puedo llevar a mi perro?' },
    { who: 'soly', time: '11:47 p. m.', text: 'Claro. Recibimos mascotas pequeñas sin costo adicional.' },
    { who: 'client', time: '11:48 p. m.', text: 'Perfecto, quiero reservar.' },
    { who: 'soly', time: '11:48 p. m.', text: '¡Listo! Te paso con recepción para confirmar. Ya tienen tus fechas y te escriben en unos minutos.' },
    { who: 'handoff', text: 'Pasada a recepción · con contexto' },
  ],
}

// Garantías bajo el hero: [rótulo, título, texto]. La primera lleva los logos de Meta.
export const GUARANTEES = [
  ['Conexión', 'API oficial de Meta', 'Tu WhatsApp conectado por el canal oficial de Meta, no por atajos.'],
  ['Implementación', 'A la medida de tu negocio', 'Lo configuramos con tus productos, precios, horarios y reglas de atención.'],
  ['Disponibilidad', 'Respuestas 24/7', 'Tus clientes reciben respuesta de noche, en fines de semana y festivos.'],
]

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
