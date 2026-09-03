# Plano

O registo do que foi combinado e do que falta. Cada tópico entra aqui depois de
conversado, não antes — ver `CLAUDE.md`.

## O que está feito

Reconstrução completa do site em WordPress, com o mesmo conteúdo e as mesmas
URLs. Seis páginas: inicial, `/portfolio`, `/sobrenos`, `/contactos` e as duas
legais. Tudo estático, sem base de dados.

**Decisões de desenho**, tomadas a 3 de Setembro de 2026:

- **Preto e âmbar.** Papel `#FAF9F7`, tinta `#0F0F0E`, âmbar `#E8A317`. O âmbar
  não é cor de fundo de secção — só botões, o sublinhado do título e o estado
  activo. A excepção é o bloco de fecho da página inicial, e está justificada no
  `components/Cta.tsx`.
- **A casa do logo como motivo**: máscara das fotografias, marcador das
  etiquetas de secção, sinal no hover dos serviços.
- **Archivo** para títulos, **Inter** para corpo.
- **Fotografia**: as do WordPress antigo, quatro pares antes/depois.

## O que falta, e é do cliente

Nada disto bloqueia o site; tudo isto o melhora.

### Antes de publicar

- [ ] **Domínio final.** O `lib/site.ts` tem `antoniohomerepairservices.pt` — se
      for outro, muda numa linha, mas alimenta o sitemap, o robots e as
      partilhas.
- [ ] **Chave do Resend** e domínio verificado, ou o formulário não envia. Ver
      `.env.example`. Enquanto não houver, o formulário mostra o telefone e o
      email e diz que não deu — não engole o pedido.
- [ ] **Crédito do rodapé.** O site antigo diz "XquisiteVision". Está a dizer
      "DevPlus". Confirmar.

### Conteúdo a pedir ao António

- [ ] **Uma fotografia do António.** A página Sobre Nós fala dele na primeira
      pessoa e não tem uma única imagem sua. Num negócio que vive de deixar
      entrar um desconhecido em casa, é a fotografia que mais falta no site.
- [ ] **Há quantos anos trabalha.** A copy diz "há vários anos". Um número é
      mais forte do que qualquer adjectivo.
- [ ] **Confirmar as legendas dos projectos.** As de `lib/projectos.ts` foram
      escritas a partir do que se vê nas fotografias, não ditadas por ele. A
      lista do "que foi feito" essa veio das bolinhas gravadas nas imagens.
- [ ] **Mais fotografias de obra.** Há quatro trabalhos. O portfolio aguenta
      mais sem alterações — basta acrescentar as imagens e uma entrada no
      `lib/projectos.ts`.
- [ ] **Perguntas frequentes.** O site antigo tinha o título "Perguntas
      frequentes" na página de contactos e nenhuma pergunta por baixo. Ficou de
      fora até haver perguntas.
- [ ] **Horário.** Não existe em lado nenhum do site antigo. Faz diferença nos
      dados estruturados e no Google.

### Legal, a rever com quem sabe

O texto das duas páginas legais é o do site antigo, palavra por palavra. Não foi
reescrito de propósito — é texto a que o cliente se comprometeu. Mas há duas
coisas a assinalar:

- [ ] **Falta a identificação da entidade.** O RGPD exige que o responsável pelo
      tratamento se identifique: nome fiscal, NIF e sede. A política actual só
      diz "António Home Repair Services".
- [ ] **A política fala de cookies que não existem.** Diz que o website "pode
      utilizar cookies". Este não põe nenhum — não há analítica, não há píxeis,
      não há consentimento a pedir. Ou se acrescenta analítica e um aviso, ou se
      corrige a frase.

## Notas técnicas

- **Sem analítica.** Não foi instalada nenhuma. Se entrar Google Analytics ou
  Meta Pixel, entram com eles um banner de consentimento e uma alteração à CSP
  em `lib/cabecalhos.ts`, que hoje não deixa carregar nada de fora.
- **Os redirects.** `/politivaprivacidade` e `/termosecondicoes` respondem em
  permanente para os endereços novos. Não os apagar: são o que está indexado.
