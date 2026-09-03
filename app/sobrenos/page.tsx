/*
  Sobre Nós.

  O slug é `sobrenos`, colado, porque é o do site em WordPress. Feio, mas está
  indexado — e trocá-lo por `sobre-nos` deitava fora o que o Google já tem sem
  ganhar nada que se veja.

  A copy é integralmente a do site antigo. É a melhor que eles têm: fala de um
  estore que não sobe e de tratar a casa como se fosse a sua, e é isso que
  distingue um homem de confiança de uma empresa de serviços gerais. Não foi
  reescrita.

  Os quatro pilares estão aqui **e** na página inicial, como no site antigo, mas
  com tratamentos diferentes: na inicial são uma lista curta, aqui é a casa do
  logo a ser construída em quatro passos. É a página onde o cliente os procura —
  o site antigo punha-os debaixo de "Porque escolher os nossos serviços?", nesta
  página.

  O texto é o mesmo nas duas, e isso divide entre elas o valor que cada uma tem
  para os motores de busca. É uma troca consciente: o Tomás quis-os aqui, e a
  página inicial de um site de cinco páginas não vai perder posição para a sua
  própria página Sobre. Se um dia isso incomodar, a que encolhe é a da inicial.
*/
import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import { Botao } from "@/components/Botao";
import { TituloDeSeccao } from "@/components/TituloDeSeccao";
import { Reveal } from "@/components/Reveal";
import { Whatsapp } from "@/components/Icones";
import { PilaresConstruidos } from "@/components/PilaresConstruidos";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "O António trabalha há vários anos na área das reparações e pequenas obras, na Maia. Cada cliente é tratado como vizinho.",
  alternates: { canonical: "/sobrenos" },
};

export default function Pagina() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-36 sm:px-8 md:pt-44">
        <TituloDeSeccao
          nivel={1}
          etiqueta="Sobre nós"
          titulo="Um serviço feito com dedicação e um toque pessoal."
        />

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col gap-6 text-[1.0625rem] leading-relaxed text-cinza">
            <p>
              Na {site.nome}, acreditamos que não há nada como um serviço feito
              com dedicação e um toque pessoal. O António trabalha há vários anos
              na área das reparações e pequenas obras, sempre com foco na
              qualidade, confiança e satisfação de quem o contacta.
            </p>
            <p>
              Mais do que consertar, o objetivo é ajudar. Seja um estore que já
              não sobe, uma parede a precisar de pintura ou um projeto que ficou
              por acabar, pode contar com um trabalho bem feito, sem
              complicações e com aquele cuidado de quem trata da casa como se
              fosse a sua.
            </p>
          </div>

          {/*
            A frase que fecha a página do site antigo, aqui tratada como o que
            é: a promessa da casa. Em display, grande, e com o filete laranja do
            lado — a única coisa nesta página que não é corpo de texto.
          */}
          <Reveal>
            <blockquote className="border-l-2 border-laranja-forte pl-6 md:pl-8">
              <p className="titulo text-[clamp(1.5rem,3.2vw,2.125rem)]">
                Porque aqui, cada cliente é tratado como vizinho — com respeito,
                honestidade e atenção aos detalhes.
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/*
        A fotografia atravessa o ecrã de lado a lado. É de stock e não de obra —
        as de obra estão todas no portfolio, que é onde valem algo. Esta serve de
        respiração entre o texto e o convite.
      */}
      <div className="relative mt-16 aspect-[21/9] w-full md:mt-24 md:aspect-[3/1]">
        <Image
          src="/images/ferramentas-alinhadas.webp"
          alt="Ferramentas alinhadas por tamanho sobre um fundo claro: martelo, chave inglesa, formão, chaves de fendas, alicate e uma fita métrica aberta."
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <PilaresConstruidos />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="max-w-xl">
          <h2 className="titulo text-[clamp(1.75rem,4.5vw,2.75rem)]">
            Tem uma reparação ou melhoria em mente?
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-cinza">
            Estamos prontos para ajudar. Diga-nos o que precisa — por mensagem,
            por email ou ao telefone, como lhe for mais fácil.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Botao href="/contactos">Pedir orçamento</Botao>
            <Botao href={site.whatsapp} variante="contorno" externo>
              <Whatsapp className="h-4 w-4" />
              Falar por WhatsApp
            </Botao>
          </div>
        </div>
      </section>
    </>
  );
}
