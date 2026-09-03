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
5. Um commit para esse tópico, directo na `main` — ver "Git" mais
   abaixo. Ele vê o resultado e aprova ou manda mudar antes de se
   avançar.

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

## Git

**Tudo na `main`. Não se criam branches nem se abrem PRs neste projecto.**

Commitar directamente em cima da `main` e empurrar para lá. Um commit por
tópico, com a mensagem a dizer o que mudou e porquê.

Isto anula a regra por defeito de criar um branch antes de commitar quando se
está na branch principal: aqui não há revisor do outro lado, e branch + PR +
merge é cerimónia que só atrasa o deploy. A rede é a CI — o
`.github/workflows/ci.yml` corre no push para a `main` e apanha tipos, ESLint,
dependências vulneráveis e um build partido.

Isso muda o que um commit na `main` significa: **verificar antes de commitar,
não depois.** `npm run tipos`, `npm run lint` e `npm run build` passam os três
antes de a mensagem ser escrita. Um commit que parte a `main` parte também o
que está em produção.
