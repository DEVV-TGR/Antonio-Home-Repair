/*
  A apresentação das duas páginas legais.

  Coluna estreita — 65ch — porque é texto corrido para se ler, e uma linha de
  120 caracteres não se lê: perde-se o início da seguinte. O número da secção
  fica na goteira em ecrã largo, para os títulos alinharem todos à mesma
  esquerda.
*/
import type { Legal } from "@/lib/legais";

export function TextoLegal({ documento }: { documento: Legal }) {
  return (
    <section className="mx-auto max-w-3xl px-5 pb-20 pt-36 sm:px-8 md:pb-28 md:pt-44">
      <p className="etiqueta text-cinza">
        Última atualização: {documento.actualizacao}
      </p>
      <h1 className="titulo mt-4 text-[clamp(2rem,5.5vw,3.25rem)]">
        {documento.titulo}
      </h1>

      {documento.introducao.map((paragrafo) => (
        <p
          key={paragrafo}
          className="mt-8 text-[1.0625rem] leading-relaxed text-cinza"
        >
          {paragrafo}
        </p>
      ))}

      <div className="mt-14 flex flex-col gap-12">
        {documento.seccoes.map((seccao) => (
          <div
            key={seccao.numero}
            className="border-t border-linha pt-6 md:relative md:pl-16"
          >
            <span
              aria-hidden
              className="etiqueta numeros text-cinza md:absolute md:left-0 md:top-6"
            >
              {String(seccao.numero).padStart(2, "0")}
            </span>
            <h2 className="mt-3 font-display text-xl font-bold tracking-tight md:mt-0">
              {seccao.titulo}
            </h2>

            {seccao.texto && (
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-cinza">
                {seccao.texto}
              </p>
            )}

            {seccao.lista && (
              <ul className="mt-4 flex flex-col gap-2">
                {seccao.lista.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-cinza"
                  >
                    <span
                      aria-hidden
                      className="mt-2.5 h-1 w-1 shrink-0 bg-laranja-forte"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {seccao.remate && (
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-cinza">
                {seccao.remate}
              </p>
            )}
          </div>
        ))}
      </div>

      <p className="mt-14 border-l-2 border-laranja-forte pl-6 text-[0.9375rem] leading-relaxed text-tinta">
        {documento.fecho}
      </p>
    </section>
  );
}
