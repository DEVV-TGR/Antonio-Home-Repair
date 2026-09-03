"use client";

/*
  O comparador antes/depois.

  ## Porque é que o comando é um <input type="range">

  A tentação é escrever isto com `onPointerDown`/`onPointerMove` e um <div> a
  fazer de manípulo. Fica a funcionar com o rato, fica a funcionar com o dedo, e
  fica inutilizável com o teclado — que é como quem não usa rato percorre uma
  página.

  Um `range` transparente esticado por cima da imagem resolve as três de uma vez,
  e nenhuma delas com código nosso: arrastar, tocar, e as setas do teclado vêm
  do browser. Traz também o papel de `slider` e o `aria-valuenow` sem se
  declarar nada. O que se escreve à mão é só o aspecto.

  O `aria-valuetext` existe porque "50" não diz nada a quem ouve a página: o que
  interessa é que metade se está a ver do antes.

  ## O recorte

  A base é o **depois** e o **antes** está por cima, cortado à direita com
  `inset()`. Ao contrário — o depois por cima — o gesto ficava invertido em
  relação ao que a cabeça espera: arrastar para a direita tem de revelar o
  resultado, não esconder.

  As duas fotografias de cada par têm a mesma proporção (garantido em
  lib/projectos.ts), e é isso que faz as duas metades assentarem. Com proporções
  diferentes, o antes saltava em relação ao depois a cada pixel de arrasto.
*/
import { useState } from "react";
import Image from "next/image";
import type { Projecto } from "@/lib/projectos";

export function AntesDepois({
  projecto,
  prioridade = false,
  sizes,
  proporcao,
  alturaMaxima,
}: {
  projecto: Projecto;
  /* A primeira comparação de uma página é carregada com prioridade; as outras
     ficam para quando chegarem à vista. */
  prioridade?: boolean;
  sizes: string;
  /*
    Uma proporção imposta, para quando várias comparações estão lado a lado numa
    grelha. Os quatro projectos têm proporções nativas diferentes (0,75 / 0,97 /
    0,74) e numa fila de três isso põe as legendas a começar a três alturas
    diferentes. Impor a mesma a todas alinha-as.

    A comparação continua honesta: o corte é o mesmo nas duas metades do par, e
    é isso — e só isso — que o antes/depois exige. Sem esta propriedade fica a
    proporção nativa, que é o que a página de portfolio quer.
  */
  proporcao?: string;
  /*
    Um tecto de altura, em unidades de viewport.

    À proporção nativa, um retrato de 832×1128 com 660px de largura fica com
    895px de altura e não cabe num ecrã de portátil. Num comparador antes/depois
    isso não é só feio: quem não vê as duas metades ao mesmo tempo não está a
    comparar nada.

    O tecto aplica-se pela **largura** e não por um `max-height`. Uma caixa com
    `aspect-ratio` e `width: 100%` ignora um tecto de altura e transborda; o que
    a encolhe de verdade é limitar-lhe a largura ao que a altura permite, que é
    a altura vezes a proporção.

    O `w-full` na caixa é obrigatório e não decorativo. Com `margin-inline:
    auto` e sem largura declarada, um item de grelha deixa de esticar e passa a
    dimensionar-se pelo conteúdo — e o conteúdo aqui são duas imagens em posição
    absoluta, que não ocupam espaço no fluxo. O resultado é uma caixa de largura
    zero e uma página sem fotografia nenhuma. Aconteceu.
  */
  alturaMaxima?: string;
}) {
  const [posicao, setPosicao] = useState(50);

  return (
    <div
      className="group relative w-full select-none overflow-hidden bg-papel-fundo"
      style={{
        aspectRatio: proporcao ?? `${projecto.largura} / ${projecto.altura}`,
        ...(alturaMaxima && {
          maxWidth: `calc(${alturaMaxima} * ${projecto.largura} / ${projecto.altura})`,
          marginInline: "auto",
        }),
      }}
    >
      <Image
        src={`/images/${projecto.chave}-depois.webp`}
        alt={projecto.altDepois}
        fill
        sizes={sizes}
        priority={prioridade}
        className="object-cover"
      />

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - posicao}% 0 0)` }}
      >
        <Image
          src={`/images/${projecto.chave}-antes.webp`}
          alt={projecto.altAntes}
          fill
          sizes={sizes}
          priority={prioridade}
          className="object-cover"
        />
      </div>

      {/* A linha e o manípulo. `pointer-events-none` porque quem recebe o
          gesto é o range que está por cima de tudo. */}
      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-papel shadow-[0_0_12px_rgba(0,0,0,0.35)]"
        style={{ left: `${posicao}%` }}
      >
        <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-papel shadow-lg">
          <svg
            viewBox="0 0 24 24"
            aria-hidden
            className="h-4 w-4 text-tinta"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m10 7-4 5 4 5M14 7l4 5-4 5" />
          </svg>
        </span>
      </div>

      <span className="pointer-events-none absolute left-3 top-3 z-10 bg-tinta/85 px-2.5 py-1 font-display text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-papel">
        Antes
      </span>
      <span className="pointer-events-none absolute right-3 top-3 z-10 bg-ambar px-2.5 py-1 font-display text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-tinta">
        Depois
      </span>

      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={posicao}
        onChange={(e) => setPosicao(Number(e.target.value))}
        aria-label={`Comparar antes e depois — ${projecto.titulo}`}
        aria-valuetext={`${posicao}% do antes visível`}
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
      />
    </div>
  );
}
