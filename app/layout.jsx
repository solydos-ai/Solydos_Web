import './globals.css'

export const metadata = {
  title: 'Solydos — Soly, tu agente de IA para WhatsApp',
  description: 'Soly es el agente de IA de Solydos que atiende a tus clientes por WhatsApp que atiende a tus clientes por WhatsApp con la información de tu negocio. Nosotros lo configuramos y lo entrenamos por ti.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="ed">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
