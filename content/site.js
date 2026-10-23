// Copy y datos de la landing. Editar aquí, no en los componentes.

// WhatsApp de Soly, el agente (lo opera el repo del agente). Es público: va en la página.
const SOLY_NUMBER = process.env.NEXT_PUBLIC_SOLY_WA_NUMBER || '573246800107'

export const SOLY_URL = `https://wa.me/${SOLY_NUMBER}?text=` + encodeURIComponent('Hola, Soly')

export const HERO = {
  // [nombre, qué es]: se muestran en la cápsula del hero con el logo de WhatsApp
  kicker: ['Soly', 'Agente de IA para tu negocio'],
  subtitle:
    'En Solydos creamos a Soly, un agente de IA que atiende a tus clientes por WhatsApp con la información de tu negocio. Nosotros lo configuramos y lo entrenamos por ti.',
}

// Demo en vivo del cierre: ejemplo de cómo Soly respondería a un hotel de noche. Es solo un ejemplo (los emoji son a propósito, para que parezca un chat real de WhatsApp). Soly responde dudas, agenda citas y pasa a una persona cuando hace falta; esta demo muestra una parte.
export const CHAT = {
  live: 'En vivo · Soly responde',
  business: 'Hotel Brisa Marina',
  initials: 'BM',
  messages: [
    { who: 'client', time: '11:47 p. m.', text: 'Hola, ¿tienen habitación doble para este fin de semana?' },
    { who: 'soly', time: '11:47 p. m.', text: '¡Hola! Sí, nos quedan 2 dobles para viernes y sábado. La noche está en $320.000 con desayuno incluido.' },
    { who: 'client', time: '11:47 p. m.', text: '¿Puedo llevar a mi perro? 🐶' },
    { who: 'soly', time: '11:47 p. m.', text: '¡Claro! 🐾 Recibimos mascotas pequeñas sin costo adicional.' },
    { who: 'client', time: '11:48 p. m.', text: 'Perfecto, quiero reservar 😊' },
    { who: 'soly', time: '11:48 p. m.', text: '¡Listo! Te paso con recepción para confirmar. Ya tienen tus fechas y te escriben en unos minutos.' },
    { who: 'handoff', text: 'Pasada a recepción · con contexto' },
  ],
}

// Garantías bajo el hero: [rótulo, título, texto]. La primera lleva el logo de WhatsApp.
export const GUARANTEES = [
  ['Conexión', 'API oficial de Meta', 'Tu WhatsApp conectado por el canal oficial de Meta, no por atajos.'],
  ['Implementación', 'A la medida de tu negocio', 'Lo configuramos con tus productos, precios, horarios y reglas de atención.'],
  ['Disponibilidad', 'Respuestas 24/7', 'Tus clientes reciben respuesta de noche, en fines de semana y festivos.'],
]

// El reto: cada dolor con una cifra real, su fuente y cómo lo resuelve Soly. No inventar cifras de Soly hasta tener datos propios.
export const PAINS = [
  { value: '7x', title: 'Responder tarde cuesta ventas.', text: 'Quien responde en la primera hora tiene 7 veces más oportunidades de vender. El que tarda, se la regala al de al lado.', source: 'Harvard Business Review', fix: 'Responde en segundos, a todos a la vez.' },
  { value: '73%', title: 'Las mismas preguntas, todo el día.', text: 'El 73% de las personas prefiere escribirle a un negocio antes que llamar. Y casi todas preguntan lo mismo: precios, horarios, disponibilidad.', source: 'Meta y Kantar, 2025', fix: 'Se sabe tus precios, horarios y políticas.' },
  { value: '72%', title: 'De noche y fines de semana, nadie contesta.', text: 'Pero el 72% le compra más fácil a quien sí le responde por chat. Tus clientes siguen escribiendo cuando tú ya cerraste.', source: 'Meta y Kantar, 2025', fix: 'Atiende de noche, festivos y fines de semana.' },
]

export const STEPS = [
  ['01', 'Nos cuentas de tu negocio.', 'Una llamada corta: qué vendes, qué te preguntan siempre y qué no debe responder Soly.'],
  ['02', 'Lo probamos contigo.', 'Le hacemos las preguntas reales de tus clientes hasta que responda como tú quieres.'],
  ['03', 'Soly entra en turno.', 'Lo activamos en tu WhatsApp y lo ajustamos con las primeras conversaciones.'],
]
