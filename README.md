# Solydos Web

Landing de Solydos (`https://solydos.com`): presenta a Soly, el agente de IA que atiende el WhatsApp de un negocio, y lleva al visitante a hablar con él. Next.js 16 con exportación estática y React 19, en TypeScript.

El agente y el dashboard viven en otro repositorio, `wh-bot`. Esta página solo enlaza a ellos:

- **"Saluda a Soly en WhatsApp"** (botón verde de WhatsApp) abre WhatsApp con el número del agente.
- **"Ingresar"** lleva al dashboard, en `https://app.solydos.com`.

## Desarrollo

```bash
cp .env.example .env.local   # define NEXT_PUBLIC_SOLY_WA_NUMBER
npm install
npm run dev                  # http://localhost:3000
npm run lint                 # ESLint 9 con las reglas de Next
npm run typecheck            # TypeScript estricto
npm run build                # genera ./out
```

`NEXT_PUBLIC_SOLY_WA_NUMBER` es el WhatsApp de Soly, con indicativo y sin `+`. Es público: va dentro de la página. Si no se define, `src/content/site.ts` usa el número de producción. Hace falta Node 20.9 o más (Amplify y CI usan Node 22).

## Estructura

```
src/
  app/              layout (fuentes, metadatos y vista previa al compartir), page (composición de la landing),
                    globals.css (tokens y estilos), icon.svg, robots.ts y sitemap.ts
  components/
    ui/             piezas reutilizables: Logo, Button, Header (con StickyHeader), Icon, Specimen (la roca),
                    Brush (el brochazo de "Y tu CRM al día"), WhatsAppButton, WhatsAppLogo,
                    PauseOffscreen (pausa animaciones fuera de pantalla)
    sections/       bloques de la página: Hero, HeroSoly (la roca con su chat y el botón), ChatDemo
                    (estilo iPhone o Android según el teléfono), Pains, Marquee, Steps (la montaña con la
                    bandera CRM) con LivePanel (el panel en vivo del paso 03), Footer, Decor (curvas de nivel,
                    estaciones, divisores)
  content/site.ts   todos los textos, con sus tipos: hero, chat de la roca, garantías, retos con sus cifras
                    y fuentes, pasos, la conversación de la demo, el panel en vivo y el enlace de WhatsApp
  data/             geometría de la roca y de las curvas de fondo (JSON)
  hooks/            useInView (animaciones de entrada que se repiten al volver con el scroll), useVisible
                    (pausar o reiniciar fuera de pantalla), useMedia (media queries y detección de iPhone)
public/             og.png (vista previa), brand/solydos-roca.webp (420px de ancho; basta para pantallas 3x)
                    y cursor-whatsapp.svg (el cursor sobre lo que abre WhatsApp)
```

El copy se edita en `src/content/site.ts`, no en los componentes.

## Publicación

La web se publica en **AWS Amplify**, no en S3 ni en CloudFront.

1. Un push a `main` dispara un webhook de Amplify.
2. Amplify ejecuta lo que dice `amplify.yml` con Node 22: `npm ci`, `npm run lint` y `npm run build`, y publica la carpeta `out/`.
3. En unos 2 minutos queda publicada en `solydos.com`. Si el build falla, la versión anterior sigue en línea.

`customHttp.yml` fija la caché: los archivos de `/_next/static` (con hash en el nombre) se guardan un año y las imágenes de `/brand`, un día.

`www.solydos.com` redirige con un 301 a `solydos.com`. La regla está en las redirecciones de la app de Amplify.

Como Amplify ejecuta `npm run lint` y `npm run build`, un error de lint también detiene la publicación. Conviene correr los dos antes de hacer push.

`.github/workflows/ci.yml` ejecuta lint y build en cada push y en cada pull request, para detectar errores antes de que lleguen a Amplify. No publica nada y no necesita secretos.

## Reglas de copy

Español neutro de tú, titulares cortos, sin exclamaciones y sin las palabras que prohíbe la guía de marca de Solydos. Solo se usan cifras reales y con su fuente. La conversación de la demo es la excepción a propósito: usa emoji y exclamaciones para parecer un chat real de WhatsApp.
