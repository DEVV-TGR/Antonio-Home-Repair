# António Home Repair Services

Site da António Home Repair Services — reparações e pequenas obras em casa, na
Maia. Reconstrução em código do site que estava em WordPress.

## Correr

```bash
npm install
npm run dev
```

## Como está feito

Next.js 16 com App Router, TypeScript e Tailwind v4 (CSS-first: o tema vive em
`app/globals.css` e não há `tailwind.config.js`). Seis páginas estáticas, sem
base de dados. A única parte dinâmica é a server action do formulário.

```
app/                     uma pasta por rota; os slugs são os do WordPress antigo
app/contactos/accoes.ts  o envio do formulário, por Resend
components/              uma secção por ficheiro; as que animam são client components
components/AntesDepois   o comparador arrastável do portfolio
lib/site.ts              nome, contactos e domínio — a fonte única
lib/servicos.ts          os 8 serviços, com as descrições do cliente
lib/pilares.ts           os 4 pilares, transcritos das imagens do site antigo
lib/projectos.ts         os pares antes/depois, com alt text e proporção
lib/legais.ts            o texto integral da privacidade e dos termos
lib/cabecalhos.ts        a CSP e os cabeçalhos de segurança
public/images/           fotografia; a proveniência está no README de lá
originais/               os PNGs de origem, fora do repositório
```

## As imagens

Os `webp` que o site serve estão versionados. Os originais não — são PNGs de 1 a
2 MB. Para os regenerar:

```bash
npm run imagens
```

Converte tudo o que estiver em `originais/` e gera também o `public/og.jpg`. O
`public/images/README.md` diz de onde veio cada ficheiro.

## Verificar

```bash
npm run tipos   # next typegen + tsc --noEmit
npm run lint    # ESLint (o next build já não o corre)
npm run build
```

É o que a CI corre em cada push — ver `.github/workflows/ci.yml`. **Os três
passam antes de cada commit**: não há PR onde apanhar um build partido, porque
se trabalha directamente na `main`. Ver `CLAUDE.md`.

## O formulário de contacto

Precisa de `RESEND_API_KEY` e `RESEND_REMETENTE` — ver `.env.example`. Sem elas
não finge que enviou: mostra o telefone e o email e diz que não deu.

## Deploy

Vercel, ligada à `main`.
