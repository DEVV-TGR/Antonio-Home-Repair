# Antonio Home Repair Services

Site da Antonio Home Repair Services, reconstruído em código a partir do
site actual em WordPress.

## Correr

```bash
npm install
npm run dev
```

## Como está feito

Next.js 16 com App Router, TypeScript e Tailwind v4 (CSS-first, o tema vive
em `app/globals.css` e não há `tailwind.config.js`). Sem base de dados.

```
app/               layout, fontes, metadata, robots e sitemap
components/        uma secção por ficheiro; as que animam são client components
lib/site.ts        nome, morada, contactos e domínio — a fonte única
public/images/     fotografia local, inventariada em public/images/README.md
docs/              o plano e o registo das conversas com o cliente
```

## Verificar

```bash
npm run tipos   # next typegen + tsc --noEmit
npm run lint    # ESLint (o next build já não o corre)
npm run build
```

É o que a CI corre em cada push e PR — ver `.github/workflows/ci.yml`.

## Deploy

Vercel, ligada à `main`.
