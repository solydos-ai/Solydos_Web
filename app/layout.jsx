import './globals.css'

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
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="ed">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=IBM+Plex+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
