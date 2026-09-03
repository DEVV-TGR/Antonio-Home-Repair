/*
  Os projectos na página inicial: os três destaques.

  Cada um traz a lista do que foi feito como **texto**. Essa lista está também
  gravada nas bolinhas da fotografia do "depois" — que é exactamente o problema:
  quem usa leitor de ecrã não a ouve, e o Google não a lê. Repetida aqui, ouve-se
  e lê-se.
*/
import Link from "next/link";
import { destaques } from "@/lib/projectos";
import { AntesDepois } from "./AntesDepois";
import { TituloDeSeccao } from "./TituloDeSeccao";
import { Reveal } from "./Reveal";
import { Seta } from "./Icones";

export function Projetos() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <TituloDeSeccao
        etiqueta="Os nossos projetos"
        titulo="Arraste para ver o antes e o depois."
        texto="Cada projeto é uma prova do nosso compromisso com qualidade e eficiência. Desde pequenas reparações a remodelações mais complexas, garantimos soluções práticas e duradouras."
      />

      <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {destaques.map((projecto, i) => (
          <Reveal key={projecto.chave} atraso={i * 0.08}>
            <article>
              <AntesDepois
                projecto={projecto}
                prioridade={i === 0}
                proporcao="4 / 5"
                sizes="(min-width: 768px) 32vw, 90vw"
              />
              <h3 className="mt-5 font-display text-lg font-bold tracking-tight">
                {projecto.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cinza">
                {projecto.legenda}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {projecto.trabalhos.map((trabalho) => (
                  <li
                    key={trabalho}
                    className="border border-linha px-2.5 py-1 text-[0.6875rem] text-cinza"
                  >
                    {trabalho}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Link
        href="/portfolio"
        className="group mt-12 inline-flex items-center gap-3 font-display text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-tinta"
      >
        Ver todos os projetos
        <Seta className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </section>
  );
}
