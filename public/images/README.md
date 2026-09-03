# Fotografia

O que está aqui são os `webp` que o site serve. Os originais vivem em
`originais/`, fora do repositório, e convertem-se com `npm run imagens`.

## Fotografia de obra

Quatro trabalhos, cada um com um par antes/depois. Vieram do WordPress antigo,
de `antoniohomerepairservices.pt/wp-content/uploads/2025/04/`, onde estavam com
nomes que não diziam nada (`SDQWDQ.png`, `yrjyc.png`, `Liguem-meyrx.png`) e sem
uma única linha de alt text.

| Ficheiro | Original no WordPress | Nativo |
|---|---|---|
| `marquise-antes.webp` | `Copia-de-Panfleto-…-Azul-1-e1744103810957.png` | 1470×1965 |
| `marquise-depois.webp` | `Copia-de-Panfleto-…-Azul-e1744104152573.png` | 1470×1965 |
| `cozinha-antes.webp` | `SDQWDQ.png` | 980×1006 |
| `cozinha-depois.webp` | `dqdesqd.png` | 980×1006 |
| `casa-de-banho-antes.webp` | `Liguem-meyrx.png` | 832×1128 |
| `casa-de-banho-depois.webp` | `Liguem-me.png` | 832×1128 |
| `corredor-antes.webp` | `Antonio-Portfolio.png` | 832×1128 |
| `corredor-depois.webp` | `yrjyc.png` | 832×1128 |

**As proporções diferem entre projectos e coincidem dentro de cada par** — que é
a única coisa que o slider antes/depois exige. Por isso não se corta nada: cada
projecto guarda a sua proporção em `lib/projectos.ts`.

**As fotos "depois" trazem legendas gravadas na imagem** (bolinhas brancas com
"Montagem rolos", "Instalação candeeiro"…). Não são para remover — dizem o que
foi feito e vieram assim do cliente. A mesma informação aparece também como
texto ao lado de cada projecto, para quem usa leitor de ecrã e para os motores
de busca.

## Fotografia de stock

Já estava na pasta do cliente, não é obra do António.

| Ficheiro | Onde é usada |
|---|---|
| `ferramentas-bancada.webp` | banda escura da página inicial |
| `ferramentas-alinhadas.webp` | Sobre Nós e imagem de partilha |

A terceira que lá estava — a palavra "HOME" escrita com ferramentas — não foi
aproveitada: é o registo que o cliente quer perder.

## Logo

`logo.svg`, vector, traço preto sobre transparente. No rodapé escuro é o mesmo
ficheiro com `filter: invert(1)` — não há segundo ficheiro para manter.
