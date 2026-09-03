/*
  Os oito serviços.

  Lista editorial numerada, não cartões com ícones. Dois motivos: oito ícones
  genéricos de martelo e torneira acrescentam ruído e nenhuma informação, e a
  numeração dá à secção a leitura de um catálogo — que é o que ela é.

  O filete em cima de cada célula em vez de em baixo é para as linhas
  coincidirem quando a grelha muda de quatro colunas para duas e para uma. Com o
  filete em baixo, a última linha fica com um traço solto.

  O hover só existe onde há rato: em telemóvel a casa está sempre visível, senão
  ninguém a vê.
*/
import { servicos } from "@/lib/servicos";
import { TituloDeSeccao } from "./TituloDeSeccao";
import { Reveal } from "./Reveal";
import { Casa } from "./Casa";

export function Servicos() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <TituloDeSeccao
        etiqueta="Os nossos serviços"
        titulo="Do estore que não sobe à cozinha montada de novo."
        texto="Desde pequenas reparações até projetos de renovação completa, estamos aqui para satisfazer todas as suas necessidades de reparação e manutenção residencial."
      />

      <ul className="mt-14 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
        {servicos.map((servico, i) => (
          <Reveal key={servico.nome} atraso={(i % 4) * 0.06} className="h-full">
            <li className="group h-full border-t border-linha pb-8 pt-5 transition-colors hover:border-tinta">
              <div className="flex items-center justify-between">
                <span className="etiqueta numeros text-cinza">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Casa
                  className="h-3.5 w-3.5 text-ambar opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100"
                  cheia
                />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold leading-tight tracking-tight">
                {servico.nome}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-cinza">
                {servico.descricao}
              </p>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
