"use client";

/*
  A casa do logo, desenhada em quatro passos.

  Cada pilar acrescenta-lhe uma parte: a fundação, as paredes, o telhado, a
  porta. Lado a lado, os quatro cartões mostram uma casa a ser construída — que
  é o que a secção diz por palavras, dito outra vez pelo desenho.

  O que já lá estava fica esbatido; a parte que **este** pilar acrescenta sai a
  âmbar e desenha-se quando o cartão entra na vista.

  Os caminhos e os nomes das partes estão em `lib/casa.ts`, e não aqui, porque a
  secção que usa este componente é de servidor e precisa dos nomes.

  ## O estado por omissão é "desenhado", e isso não é um pormenor

  A primeira versão disto animava o `pathLength` da Motion, de 0 a 1. Funciona —
  mas põe a **visibilidade** da linha nas mãos da animação: enquanto o
  `whileInView` não dispara, o traço está a comprimento zero, que é o mesmo que
  não existir. Se o bundle falhar, se a hidratação encravar, se o observador não
  chegar a disparar naquele browser, a linha nunca aparece. E o que se perde não
  é um efeito: é metade do desenho.

  Aqui a regra é ao contrário. O `<path>` não leva estilo nenhum, e por isso
  **está desenhado desde o primeiro instante**, com ou sem JavaScript. A
  animação é uma classe que se acrescenta quando o cartão entra na vista, e o
  fim dela é exactamente o estado que já lá estava — ver `traco-a-desenhar` no
  globals.css. Falhe o que falhar, a linha vê-se.

  O `pathLength={1}` normaliza o comprimento de cada caminho para uma unidade,
  para o mesmo `stroke-dasharray` servir os quatro sem se medir nenhum.

  Quem pediu ao sistema para não haver movimento cai no mesmo sítio: o
  globals.css corta a duração de todas as animações, esta acaba no primeiro
  instante, e o fim dela é o traço desenhado.
*/
import { useRef } from "react";
import { useInView } from "motion/react";
import { partesDaCasa } from "@/lib/casa";

export function CasaEmQuatro({ passo }: { passo: number }) {
  const referencia = useRef<SVGSVGElement>(null);
  const naVista = useInView(referencia, { once: true, margin: "-80px" });

  return (
    <svg
      ref={referencia}
      viewBox="0 0 120 110"
      aria-hidden
      className="h-auto w-full"
      fill="none"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {partesDaCasa.slice(0, passo - 1).map((parte) => (
        <path key={parte.nome} d={parte.caminho} className="stroke-tinta/20" />
      ))}

      <path
        d={partesDaCasa[passo - 1].caminho}
        pathLength={1}
        className={`stroke-ambar ${naVista ? "traco-a-desenhar" : ""}`}
      />
    </svg>
  );
}
