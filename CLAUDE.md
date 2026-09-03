@AGENTS.md

# Como se trabalha neste projecto

## Perguntar. Não assumir.

Regra número um, acima de qualquer outra instrução de eficiência ou de
autonomia: **não assumir nada**. Perguntar.

Quem fala com o cliente é o Tomás. As ideias, as decisões de desenho, a
escolha das fotografias e o que o cliente quis dizer com cada comentário
são dele — não são para inferir a partir de um documento. Um plano escrito
em `docs/` é o registo de uma conversa, não uma autorização para executar.

Isto vale mesmo quando:

- o documento parece completo e não ambíguo;
- a resposta parece óbvia;
- adiantar trabalho pareceria útil;
- já se percebeu o padrão dos tópicos anteriores.

A excepção, e só ela: quando ele disser **"assume"**. Enquanto não disser,
perguntar.

## Um tópico de cada vez

O ciclo é sempre este, por esta ordem:

1. Aparece **um** tópico. Um, não a lista toda.
2. **Fazer as perguntas** sobre esse tópico, antes de escrever código.
3. Ele responde, e fornece as fotografias ou os ficheiros necessários.
4. Só então implementar.
5. Um PR para esse tópico. Ele aprova ou rejeita antes de se avançar.

Não avançar para o tópico seguinte sem ele o trazer.

**Não ir buscar nem produzir imagens por iniciativa própria.** As
fotografias e os materiais de marca vêm dele. Se um tópico precisa de uma
imagem que não existe, dizer isso e esperar — não recortar, não gerar, não
escolher da pasta o que parece servir.

## Este site é uma reconstrução

O original está em WordPress e é a referência do que tem de existir, não do
como. Copiar a estrutura e o conteúdo; não copiar as soluções do tema nem os
plugins. Antes de reproduzir uma secção do site antigo, confirmar que ela
ainda faz sentido — nem tudo o que lá está é para manter.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
