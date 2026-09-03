/*
  Os quatro pilares.

  No site antigo eram oito imagens — quatro cartões preto com o título, quatro
  laranja com o texto. Aqui são texto, com o filete laranja à esquerda a fazer o
  trabalho que a cor de fundo fazia lá, sem gastar um painel inteiro para isso.

  Ver lib/pilares.ts para as transcrições e para o porquê de não terem sido
  reescritas.
*/
import { pilares } from "@/lib/pilares";
import { TituloDeSeccao } from "./TituloDeSeccao";
import { Reveal } from "./Reveal";

export function Pilares() {
  return (
    <section className="border-t border-linha bg-papel-fundo">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <TituloDeSeccao
          etiqueta="Porque escolher os nossos serviços"
          titulo="Quatro coisas que não se negoceiam."
        />

        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {pilares.map((pilar, i) => (
            <Reveal key={pilar.titulo} atraso={(i % 2) * 0.08}>
              <div className="border-l-2 border-laranja-forte pl-6">
                <h3 className="font-display text-xl font-bold tracking-tight">
                  {pilar.titulo}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-cinza">
                  {pilar.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
