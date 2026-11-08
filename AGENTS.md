# AGENTS.md

Landing de Solydos (`https://solydos.com`): presenta a Soly y lleva al visitante a escribirle por WhatsApp. Next.js 16 con exportación estática y React 19, en TypeScript (`src/`). Detalle de estructura y publicación en el [README](README.md).

El agente y el panel viven en el repo `wh-bot`. La documentación de todo el sistema vive en [`Solydos-ai/solydos-context`](https://github.com/Solydos-ai/solydos-context) (la de esta web: `docs/07-web-publica.md`). Esta web solo enlaza a ellos:

- **"Saluda a Soly en WhatsApp"** (botón verde, `WhatsAppButton`) abre WhatsApp con el número de `NEXT_PUBLIC_SOLY_WA_NUMBER` (por defecto, el de producción en `src/content/site.ts`).
- **"Ingresar"** lleva al panel, en `https://app.solydos.com`.

## Comandos

```bash
npm run dev        # http://localhost:3000
npm run lint       # ESLint 9; Amplify también lo corre: un error de lint detiene la publicación
npm run typecheck  # TypeScript estricto (el build también lo revisa)
npm run build      # genera ./out
```

## Reglas

- **Los textos se editan en `src/content/site.ts`**, no en los componentes. Sus tipos dicen qué forma tiene cada bloque.
- **TypeScript estricto**, sin `any`. Node 22 en Amplify y en CI (Next 16 pide 20.9 o más).
- **Publicar = push a `main`.** Amplify corre `npm ci`, lint y build, y publica `out/`. Corre lint y build antes de hacer push.
- **Copy:** español neutro de tú, titulares cortos, sin exclamaciones, sin "gratis" ni "Entrar". Solo cifras reales con su fuente. La conversación de la demo (`CHAT`) es la excepción: usa emoji y exclamaciones a propósito.
- **Issue de Linear:** el trabajo se sigue en Linear (equipo `SOL`). La rama, el título del PR o el commit llevan el ID (`SOL-9`), así Linear enlaza el cambio y mueve el issue solo.
- **No prometer lo que el producto no hace hoy.** Qué existe y qué no: `docs/14-estado-y-pendientes.md` en `solydos-context`.
- **Diseño:** esta web es la fuente de verdad del sistema de diseño de Solydos (`src/app/globals.css`, `src/components/`). Si cambias tokens o componentes, la copia de referencia en `wh-bot/.claude/skills/solydos-design-system/references/` también debe actualizarse.
- **Dos temas siempre** (claro y oscuro), responsive desde 375px y `prefers-reduced-motion` respetado.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
