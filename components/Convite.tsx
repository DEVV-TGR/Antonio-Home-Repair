/*
  A banda escura, a meio da página.

  É o momento em que a página deixa de enumerar o que ele faz e diz porque é que
  isso interessa a quem está a ler. A copy é a do site antigo, onde vivia num
  bloco laranja a meio de outros seis — aqui tem a página toda para si.

  A fotografia atrás está a 12% de opacidade e por baixo de um véu escuro. Não é
  para se ver: é para o preto não ser um preto liso. Se se conseguir ler as
  ferramentas, está alta demais.
*/
import Image from "next/image";
import { site } from "@/lib/site";
import { Botao } from "./Botao";
import { Casa } from "./Casa";
import { Telefone, Whatsapp } from "./Icones";

export function Convite() {
  return (
    <section className="relative isolate overflow-hidden bg-tinta">
      <Image
        src="/images/ferramentas-bancada.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-12"
      />
      <div className="absolute inset-0 -z-10 bg-tinta/55" />

      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="etiqueta flex items-center gap-2.5 text-laranja">
            <Casa className="h-3.5 w-3.5" cheia />
            O António trata disso por si
          </p>
          <h2 className="titulo mt-5 text-[clamp(2rem,5.5vw,3.5rem)] text-papel">
            Deixe as tarefas complicadas connosco.
          </h2>
          <p className="mt-6 text-[1.0625rem] leading-relaxed text-papel/70">
            Com o António, tem a solução à distância de um pedido. Aproveite o
            seu tempo com o que realmente interessa — e se precisar de ajuda,
            ele está pronto para resolver.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Botao href={site.whatsapp} externo>
              <Whatsapp className="h-4 w-4" />
              Falar por WhatsApp
            </Botao>
            <Botao href={`tel:${site.telefone}`} variante="claro">
              <Telefone className="h-4 w-4" />
              <span className="numeros">{site.telefoneVisivel}</span>
            </Botao>
          </div>
        </div>
      </div>
    </section>
  );
}
