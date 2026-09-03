/*
  A casa do logo, como motivo do site.

  O logo é uma casa pentagonal: telhado em bico, paredes a pique, cantos de
  baixo arredondados. Essa forma é o único gesto gráfico que o site repete — a
  máscara das fotografias, o marcador das etiquetas de secção, o sinal que
  aparece no hover dos serviços. Um motivo repetido em vez de decoração avulsa.

  ## Porque é que o recorte vive num <clipPath> e não num `clip-path: path()`

  O `path()` do CSS trabalha em pixéis: a forma não acompanha o tamanho do
  elemento e teria de ser redesenhada por cada largura. O `clipPathUnits=
  "objectBoundingBox"` trabalha em fracções de 0 a 1 e escala sozinho — daí o
  caminho estar escrito em números decimais.

  O <MascaraDaCasa /> tem de estar presente no DOM uma vez para o
  `clip-path: url(#casa)` funcionar. Está no layout.
*/

/* O contorno, em fracções da caixa do elemento. */
const CAMINHO = "M0.5 0 L1 0.32 L1 0.93 Q1 1 0.93 1 L0.07 1 Q0 1 0 0.93 Z";

export function MascaraDaCasa() {
  return (
    <svg aria-hidden className="absolute h-0 w-0 overflow-hidden">
      <defs>
        <clipPath id="casa" clipPathUnits="objectBoundingBox">
          <path d={CAMINHO} />
        </clipPath>
      </defs>
    </svg>
  );
}

/*
  A casa como glifo. `preto` desenha-a cheia; sem ele fica só o contorno, que é
  como aparece antes de um hover.
*/
export function Casa({
  className = "",
  cheia = false,
}: {
  className?: string;
  cheia?: boolean;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      className={className}
      fill={cheia ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={cheia ? 0 : 1.6}
      strokeLinejoin="round"
    >
      <path d="M10 1 L19 7.4 L19 17 Q19 19 17 19 L3 19 Q1 19 1 17 L1 7.4 Z" />
    </svg>
  );
}
