/*
  As quatro partes da casa do logo, por ordem de construção.

  ## Porque é que isto não vive no componente que as desenha

  Porque o `CasaEmQuatro.tsx` é `"use client"` — precisa da Motion para animar o
  traço — e o `PilaresConstruidos.tsx`, que é de servidor, também precisa dos
  nomes das partes para os escrever ao lado de cada pilar.

  Um componente de servidor **pode** importar de um ficheiro `"use client"`, mas
  o que recebe de volta não é o valor: é uma referência que o cliente há-de
  resolver. Para um componente isso é exactamente o que se quer; para um array,
  o que se obtém é `undefined` e um erro em execução:

      Cannot read properties of undefined (reading 'nome')

  Num módulo sem directiva nenhuma, como este, os dois lados importam o valor a
  sério.

  ## As proporções

  Base a 100, paredes até 42, bico do telhado a 8, num `viewBox` de 120×110. É a
  mesma silhueta do `clipPath` em `components/Casa.tsx` e do `app/icon.svg` — se
  mudar aqui, muda nos três, ou deixam de ser a mesma casa.

  Os nomes são legendas do desenho e não afirmações sobre o negócio. A ordem
  casa com a de `lib/pilares.ts`, e é essa correspondência que dá sentido à
  secção: o profissionalismo é o que fica por baixo de tudo, a fiabilidade é o
  que aguenta, a variedade de serviços cobre — que é o que um telhado faz — e o
  atendimento é a porta, que é onde se recebe alguém.
*/
export const partesDaCasa = [
  { nome: "a fundação", caminho: "M14 100 H106" },
  { nome: "as paredes", caminho: "M14 100 V42 M106 100 V42" },
  { nome: "o telhado", caminho: "M14 42 L60 8 L106 42" },
  { nome: "a porta", caminho: "M48 100 V72 Q48 66 54 66 H66 Q72 66 72 72 V100" },
] as const;
