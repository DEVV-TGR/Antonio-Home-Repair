"use client";

/*
  A casa do logo, desenhada em quatro passos.

  Cada pilar acrescenta-lhe uma parte: a fundação, as paredes, o telhado, a
  porta. Lado a lado, os quatro cartões mostram uma casa a ser construída — que
  é o que a secção diz por palavras, dito outra vez pelo desenho.

  O que já lá estava fica esbatido; a parte que **este** pilar acrescenta sai a
  âmbar e desenha-se sozinha quando o cartão entra na vista. É a única coisa no
  site que se desenha a si própria, e é aqui porque é aqui que há uma ideia de
  construção para transmitir.

  Os caminhos e os nomes das partes estão em `lib/casa.ts`, e não aqui, porque a
  secção que usa este componente é de servidor e precisa dos nomes. Ver o
  comentário lá — um componente de servidor que importa um array de um ficheiro
  `"use client"` recebe uma referência e não o valor.

  ## O movimento

  O `pathLength` da Motion anima um traço a ser desenhado sem se saber o
  comprimento dele em pixéis — normaliza-o para 0 a 1. Feito à mão, isto era
  medir cada caminho com `getTotalLength()` e mexer no `stroke-dashoffset`.

  Quem pediu ao sistema para não haver movimento vê o traço já desenhado. Não é
  uma versão pobre: o desenho final é exactamente o mesmo, só não se vê a
  aparecer.
*/
import { motion, useReducedMotion } from "motion/react";
import { partesDaCasa } from "@/lib/casa";

export function CasaEmQuatro({ passo }: { passo: number }) {
  const semMovimento = useReducedMotion();

  return (
    <svg
      viewBox="0 0 120 110"
      aria-hidden
      className="h-auto w-full"
      fill="none"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {partesDaCasa.slice(0, passo - 1).map((parte) => (
        <path
          key={parte.nome}
          d={parte.caminho}
          className="stroke-tinta/20"
        />
      ))}

      <motion.path
        d={partesDaCasa[passo - 1].caminho}
        className="stroke-ambar"
        initial={semMovimento ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}
