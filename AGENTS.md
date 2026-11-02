# AGENTS.md

Landing de Solydos (`https://solydos.com`): presenta a Soly y lleva al visitante a escribirle por WhatsApp. Next.js 14 con exportación estática y React 18, en JavaScript. Detalle de estructura y publicación en el [README](README.md).

El agente y el panel viven en el repo `wh-bot`. La documentación de todo el sistema vive en [`Solydos-ai/solydos-context`](https://github.com/Solydos-ai/solydos-context) (la de esta web: `docs/07-web-publica.md`). Esta web solo enlaza a ellos:

- **"Habla con Soly"** abre WhatsApp con el número de `NEXT_PUBLIC_SOLY_WA_NUMBER` (por defecto, el de producción en `content/site.js`).
- **"Ingresar"** lleva al panel, en `https://app.solydos.com`.

## Comandos

```bash
npm run dev     # http://localhost:3000
npm run lint    # Amplify también lo corre: un error de lint detiene la publicación
npm run build   # genera ./out
```

## Reglas

- **Los textos se editan en `content/site.js`**, no en los componentes.
- **Publicar = push a `main`.** Amplify corre `npm ci`, lint y build, y publica `out/`. Corre lint y build antes de hacer push.
- **Copy:** español neutro de tú, titulares cortos, sin exclamaciones, sin "gratis" ni "Entrar". Solo cifras reales con su fuente. La conversación de la demo (`CHAT`) es la excepción: usa emoji y exclamaciones a propósito.
- **No prometer lo que el producto no hace hoy.** Qué existe y qué no: `docs/14-estado-y-pendientes.md` en `solydos-context`.
- **Diseño:** esta web es la fuente de verdad del sistema de diseño de Solydos (`app/globals.css`, `components/`). Si cambias tokens o componentes, la copia de referencia en `wh-bot/.claude/skills/solydos-design-system/references/` también debe actualizarse.
- **Dos temas siempre** (claro y oscuro), responsive desde 375px y `prefers-reduced-motion` respetado.
