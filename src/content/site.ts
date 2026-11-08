// Copy y datos de la landing. Editar aquí, no en los componentes.

export type ChatWho = 'client' | 'soly' | 'handoff'
export type ChatMessage = { who: ChatWho; time?: string; text: string }
export type LiveIcon = 'chat' | 'calendar' | 'flame' | 'person'

// WhatsApp de Soly, el agente (lo opera el repo del agente). Es público: va en la página.
const SOLY_NUMBER = process.env.NEXT_PUBLIC_SOLY_WA_NUMBER || '573246800107'

// El mensaje que queda escrito al abrir el chat; el hero lo muestra tal cual en la burbuja que sale de la roca
export const SOLY_GREETING = 'Hola, Soly'

export const SOLY_URL = `https://wa.me/${SOLY_NUMBER}?text=` + encodeURIComponent(SOLY_GREETING)

// El botón que abre WhatsApp (debajo de la roca, en "Empieza" y al final). Dice a dónde lleva: la gente no
// entendía que "Habla con Soly" abría un chat.
export const SOLY_CTA = {
  label: 'Saluda a Soly en WhatsApp',
  // Debajo de la roca: los pasos dicen qué pasa al tocar el botón
  steps: ['Toca el botón', 'Se abre tu WhatsApp', 'Dale enviar'],
}

export const HERO = {
  // [nombre, estado]: la cápsula del hero con el punto verde; abre el WhatsApp de Soly como el botón verde
  kicker: ['Soly', 'En línea ahora'],
  // La línea sobre el trazo de pincel, debajo del título
  brush: 'Y tu CRM al día',
  subtitle: 'Lo configuramos y lo entrenamos con la información de tu negocio. Tú solo entras cuando un cliente te necesita.',
}

// La conversación que sale de la roca en el hero: [quién, texto]. Imita lo que pasa al escribirle a Soly. Solo tres mensajes.
export const ROCK_CHAT: [Exclude<ChatWho, 'handoff'>, string][] = [
  ['client', 'Hola, Soly 👋'],
  ['soly', '¡Hola! Déjame colaborarte.'],
  ['client', '¿Cuáles son tus servicios?'],
]

// Demo en vivo del cierre: ejemplo de cómo Soly respondería a un hotel de noche. Es solo un ejemplo (los emoji son a propósito, para que parezca un chat real de WhatsApp). Soly responde dudas, agenda citas y pasa a una persona cuando hace falta; esta demo muestra una parte.
export const CHAT: { live: string; business: string; initials: string; messages: ChatMessage[] } = {
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

// Garantías bajo el hero: [rótulo, título, texto, ícono, etiqueta]. Ícono: 'whatsapp' o 'crm'.
export const GUARANTEES: [label: string, title: string, text: string, icon?: 'whatsapp' | 'crm', tag?: string][] = [
  ['Conexión', 'API oficial de Meta', 'Tu WhatsApp conectado por el canal oficial de Meta, no por atajos.', 'whatsapp'],
  ['Implementación', 'A la medida de tu negocio', 'Lo configuramos con tus productos, precios, horarios y reglas de atención.'],
  ['Disponibilidad', 'Respuestas 24/7', 'Tus clientes reciben respuesta de noche, en fines de semana y festivos.'],
  ['Registro', 'Tu CRM se llena solo', 'Cada chat queda como un contacto: quién escribió, qué pidió y en qué va.', 'crm', 'Nuevo'],
]

// El reto: cada dolor con una cifra real, su fuente y cómo lo resuelve Soly. No inventar cifras de Soly hasta tener datos propios.
export const PAINS: { value: string; title: string; text: string; source: string; fix: string }[] = [
  { value: '7x', title: 'Responder tarde cuesta ventas.', text: 'Quien responde en la primera hora tiene 7 veces más oportunidades de vender. El que tarda, se la regala al de al lado.', source: 'Harvard Business Review', fix: 'Responde en segundos, a todos a la vez.' },
  { value: '73%', title: 'Las mismas preguntas, todo el día.', text: 'El 73% de las personas prefiere escribirle a un negocio antes que llamar. Y casi todas preguntan lo mismo: precios, horarios, disponibilidad.', source: 'Meta y Kantar, 2025', fix: 'Se sabe tus precios, horarios y políticas.' },
  { value: '72%', title: 'De noche y fines de semana, nadie contesta.', text: 'Pero el 72% le compra más fácil a quien sí le responde por chat. Tus clientes siguen escribiendo cuando tú ya cerraste.', source: 'Meta y Kantar, 2025', fix: 'Atiende de noche, festivos y fines de semana.' },
]

export const STEPS: [n: string, title: string, text: string][] = [
  ['01', 'Nos cuentas de tu negocio.', 'Una llamada corta: qué vendes, qué te preguntan siempre y qué no debe responder Soly.'],
  ['02', 'Lo probamos contigo.', 'Le hacemos las preguntas reales de tus clientes hasta que responda como tú quieres.'],
  ['03', 'Soly entra en turno.', 'Lo activamos en tu WhatsApp y lo ves trabajar desde tu panel.'],
]

// Mini panel en vivo bajo el paso 03 (ejemplo, el mismo hotel de la demo): lo que Soly va haciendo y tú ves en tu panel.
// Cada aviso suma a un contador (stat). El último pide tu acción y va resaltado.
export const PANEL_LIVE: {
  url: string
  stats: { key: LiveIcon; label: string; base: number }[]
  feed: { icon: LiveIcon; time: string; text: string }[]
} = {
  url: 'app.solydos.com',
  stats: [
    { key: 'chat', label: 'Respondidos', base: 11 },
    { key: 'calendar', label: 'Citas', base: 2 },
    { key: 'flame', label: 'Prospectos', base: 3 },
  ],
  feed: [
    { icon: 'chat', time: '11:48 p. m.', text: 'Respondió precios y horarios a +57 300 ··· 4521' },
    { icon: 'calendar', time: '11:48 p. m.', text: 'Agendó una cita para el viernes a las 3:00 p. m.' },
    { icon: 'flame', time: '11:49 p. m.', text: 'Prospecto caliente: quiere la doble del fin de semana' },
    { icon: 'person', time: 'Te espera', text: 'Te pasó un chat con el resumen listo' },
  ],
}
