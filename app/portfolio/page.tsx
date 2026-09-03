/*
  A página de portfolio.

  A do site antigo estava partida: seis blocos com o texto por defeito do tema
  — "Add Your Heading Text Here" — pares antes/depois trocados, uma das imagens
  repetida e outra que era um cartão de texto e não uma fotografia. Nenhuma
  tinha alt text.

  Aqui são quatro trabalhos, cada um com o seu par certo, o seu título, o que
  foi feito, e uma descrição por fotografia. À proporção nativa e sem corte:
  numa página que existe para se ver fotografias, é onde elas podem ser grandes.

  O bloco de texto fica `sticky` em ecrã largo — a fotografia é alta e, sem
  isso, quem chega ao fim dela já não tem à vista o nome do que está a ver.

  A coluna da fotografia leva quase o dobro da do texto. Numa página cujo
  trabalho é mostrar fotografias, dividir o espaço a meio dá duas colunas
  medianas e nenhuma fotografia que se veja.
*/
import type { Metadata } from "next";
import { projectos } from "@/lib/projectos";
import { AntesDepois } from "@/components/AntesDepois";
import { TituloDeSeccao } from "@/components/TituloDeSeccao";
import { Reveal } from "@/components/Reveal";
import { Botao } from "@/components/Botao";
import { Casa } from "@/components/Casa";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Trabalhos da António Home Repair Services, antes e depois: casa de banho, cozinha, marquise e corredor.",
  alternates: { canonical: "/portfolio" },
};

export default function Pagina() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-4 pt-36 sm:px-8 md:pt-44">
        <TituloDeSeccao
          nivel={1}
          etiqueta="Os nossos projetos"
          titulo="Antes e depois, sem retoques."
          texto="Cada projeto é uma prova do nosso compromisso com qualidade e eficiência. Arraste a barra de cada fotografia para ver como estava e como ficou."
        />
      </section>

      <div className="mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-8 md:pb-28">
        <div className="flex flex-col gap-20 md:gap-28">
          {projectos.map((projecto, i) => (
            <Reveal key={projecto.chave}>
              <article className="grid gap-8 md:grid-cols-[0.72fr_1.28fr] md:items-start md:gap-14">
                <div className="md:sticky md:top-28">
                  <span className="etiqueta numeros text-cinza">
                    {String(i + 1).padStart(2, "0")} /{" "}
                    {String(projectos.length).padStart(2, "0")}
                  </span>
                  <h2 className="titulo mt-4 text-[clamp(1.75rem,4vw,2.5rem)]">
                    {projecto.titulo}
                  </h2>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-cinza">
                    {projecto.legenda}
                  </p>

                  <h3 className="etiqueta mt-8 text-tinta">O que foi feito</h3>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {projecto.trabalhos.map((trabalho) => (
                      <li
                        key={trabalho}
                        className="flex items-start gap-2.5 text-sm text-cinza"
                      >
                        <Casa className="mt-1 h-3 w-3 shrink-0 text-ambar" cheia />
                        {trabalho}
                      </li>
                    ))}
                  </ul>
                </div>

                <AntesDepois
                  projecto={projecto}
                  prioridade={i === 0}
                  alturaMaxima="76vh"
                  sizes="(min-width: 768px) 58vw, 90vw"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <section className="border-t border-linha bg-papel-fundo">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <div className="max-w-xl">
            <h2 className="titulo text-[clamp(1.75rem,4.5vw,2.75rem)]">
              O próximo pode ser o seu.
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-cinza">
              Diga-nos o que precisa e o António passa por lá a ver. O orçamento
              não custa nada.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Botao href="/contactos">Pedir orçamento</Botao>
              <Botao href={site.whatsapp} variante="contorno" externo>
                Falar por WhatsApp
              </Botao>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
