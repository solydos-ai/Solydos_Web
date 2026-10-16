# Solydos Web

Landing de Solydos — agente de IA para WhatsApp. Next.js 14 (export estático) + React 18.

## Desarrollo

```bash
cp .env.example .env.local   # define NEXT_PUBLIC_WA_NUMBER
npm install
npm run dev                  # http://localhost:3000
npm run build                # genera ./out
```

## Estructura

```
app/            layout, page (composición de la landing), globals.css (tokens + estilos), icon.svg
components/
  ui/           piezas reutilizables: Logo, Button, Header, Icon, Annotation, Specimen
  sections/     bloques de la página: Hero, HeroDemo, Steps, Footer, Decor (curvas, estaciones, cima)
content/site.js copy, guion de la demo y URL de WhatsApp
data/           geometría de la roca y curvas de fondo (JSON)
hooks/          useInView
public/brand/   solydos-roca.webp
```

El copy se edita en `content/site.js`. Despliegue: `.github/workflows/deploy.yml` (S3 + CloudFront en push a `main`).
