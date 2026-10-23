# Solydos Web

Landing de Solydos (`https://solydos.com`): presenta a Soly, el agente de IA que atiende el WhatsApp de un negocio, y lleva al visitante a hablar con él. Next.js 14 con exportación estática y React 18, en JavaScript.

El agente y el dashboard viven en otro repositorio, `wh-bot`. Esta página solo enlaza a ellos:

- **"Habla con Soly"** abre WhatsApp con el número del agente.
- **"Ingresar"** lleva al dashboard, en `https://app.solydos.com`.

## Desarrollo

```bash
cp .env.example .env.local   # define NEXT_PUBLIC_SOLY_WA_NUMBER
npm install
npm run dev                  # http://localhost:3000
npm run lint
npm run build                # genera ./out
```

`NEXT_PUBLIC_SOLY_WA_NUMBER` es el WhatsApp de Soly, con indicativo y sin `+`. Es público: va dentro de la página. Si no se define, `content/site.js` usa el número de producción.

## Estructura

```
app/            layout (metadatos y vista previa al compartir), page (composición de la landing),
                globals.css (tokens y estilos), icon.svg
components/
  ui/           piezas reutilizables: Logo, Button, Header, Icon, Annotation, Specimen, WhatsAppLogo
  sections/     bloques de la página: Hero, HeroSoly, ChatDemo, Pains, Marquee, Steps, Footer,
                Decor (curvas de nivel, estaciones, divisores)
content/site.js todos los textos: hero, garantías, retos con sus cifras y fuentes, pasos,
                la conversación de la demo y el enlace de WhatsApp
data/           geometría de la roca y de las curvas de fondo (JSON)
hooks/          useInView (activa las animaciones al entrar en pantalla)
public/         og.png (vista previa) y brand/solydos-roca.webp
```

El copy se edita en `content/site.js`, no en los componentes.

## Publicación

La web se publica en **AWS Amplify**, no en S3 ni en CloudFront.

1. Un push a `main` dispara un webhook de Amplify.
2. Amplify ejecuta lo que dice `amplify.yml`: `npm ci`, `npm run lint` y `npm run build`, y publica la carpeta `out/`.
3. En unos 2 minutos queda publicada en `solydos.com`. Si el build falla, la versión anterior sigue en línea.

`www.solydos.com` redirige con un 301 a `solydos.com`. La regla está en las redirecciones de la app de Amplify.

Como Amplify ejecuta `npm run lint` y `npm run build`, un error de lint también detiene la publicación. Conviene correr los dos antes de hacer push.

`.github/workflows/ci.yml` ejecuta lint y build en cada push y en cada pull request, para detectar errores antes de que lleguen a Amplify. No publica nada y no necesita secretos.

## Reglas de copy

Español neutro de tú, titulares cortos, sin exclamaciones y sin las palabras que prohíbe la guía de marca de Solydos. Solo se usan cifras reales y con su fuente. La conversación de la demo es la excepción a propósito: usa emoji y exclamaciones para parecer un chat real de WhatsApp.
