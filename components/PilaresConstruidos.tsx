/*
  Os quatro pilares, na página Sobre Nós.

  A página inicial já os tem, em lista com um filete laranja à esquerda. Aqui têm
  o tratamento longo: cada um acrescenta uma parte à casa do logo, e os quatro
  lado a lado mostram-na a ser construída.

  ## O que é do cliente e o que é meu

  Os títulos e os textos são dele, transcritos dos cartões do site antigo — ver
  lib/pilares.ts. **"A fundação", "as paredes", "o telhado", "a porta" são
  minhas**: são a legenda do desenho, não uma afirmação sobre o negócio. Estão
  em lib/casa.ts, ao lado dos caminhos que nomeiam.

  A correspondência não é arbitrária. O profissionalismo é o que fica por baixo
  de tudo o resto; a fiabilidade é o que aguenta; a variedade de serviços cobre
  — que é o que um telhado faz, e a palavra serve para as duas coisas; e o
  atendimento é a porta, que é onde se recebe alguém.
*/
import { pilares } from "@/lib/pilares";
import { TituloDeSeccao } from "./TituloDeSeccao";
import { Reveal } from "./Reveal";
import { CasaEmQuatro } from "./CasaEmQuatro";
import { partesDaCasa } from "@/lib/casa";

export function PilaresConstruidos() {
  return (
    <section className="border-y border-linha bg-papel-fundo">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <TituloDeSeccao
          etiqueta="Porque escolher os nossos serviços"
          titulo="Quatro coisas, e uma casa em pé."
          texto="Cada uma acrescenta uma parte. Tire uma e o resto não se aguenta."
        />

        <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {pilares.map((pilar, i) => (
            <Reveal key={pilar.titulo} atraso={i * 0.1} className="h-full">
              <li className="flex h-full flex-col border-t border-tinta/15 pt-5">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="etiqueta numeros text-cinza">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.6875rem] italic text-cinza">
                    {partesDaCasa[i].nome}
                  </span>
                </div>

                {/*
                  O desenho tem largura máxima em vez de encher a coluna: numa
                  grelha de duas colunas em tablet, uma casa com 300px de largura
                  fica maior do que o texto que a explica.
                */}
                <div className="mt-6 w-full max-w-[8.5rem]">
                  <CasaEmQuatro passo={i + 1} />
                </div>

                <h3 className="mt-7 font-display text-lg font-bold leading-tight tracking-tight">
                  {pilar.titulo}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-cinza">
                  {pilar.texto}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
