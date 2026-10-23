import { Anton, IBM_Plex_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'

// Fuentes servidas desde el propio sitio (sin pedirlas a Google al abrir la página) y precargadas.
// globals.css las usa por estas variables en --font-sans, --font-display y --font-mono.
const sans = Space_Grotesk({ subsets: ['latin'], variable: '--ff-sans', display: 'swap' })
const display = Anton({ subsets: ['latin'], weight: '400', variable: '--ff-display', display: 'swap' })
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--ff-mono', display: 'swap' })

const title = 'Solydos — Soly, tu agente de IA para WhatsApp'
const description = 'Soly es el agente de IA de Solydos que atiende a tus clientes por WhatsApp con la información de tu negocio, de día y de noche. Nosotros lo configuramos y lo entrenamos por ti.'

export const metadata = {
  metadataBase: new URL('https://solydos.com'),
  title,
  description,
  // Vista previa al compartir el enlace (WhatsApp, LinkedIn, Facebook, X)
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Solydos',
    locale: 'es_CO',
    title,
    description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Soly, agente de IA para tu negocio: Tu WhatsApp, vivo 24/7.' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/og.png'] },
  alternates: { canonical: '/' },
}

// Color de la barra del navegador en móvil, en cada tema (--background).
// colorScheme anuncia que la página tiene tema claro y oscuro propios: así Samsung Internet y el modo oscuro
// automático de Chrome en Android no la oscurecen a la fuerza con sus propios colores.
export const viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f2ed' },
    { media: '(prefers-color-scheme: dark)', color: '#121211' },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`ed ${sans.variable} ${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
