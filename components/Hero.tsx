/*
  O hero.

  Conduzido por tipografia, não por fotografia. A frase "O António trata disso
  por si" é a melhor linha do site antigo, onde estava enterrada a meio da
  página — aqui é a primeira coisa que se lê.

  A fotografia da direita é a flat-lay de ferramentas e não uma foto de obra, e
  é de propósito: as fotos de obra trazem legendas gravadas na imagem e o sítio
  delas é o slider antes/depois, onde essas legendas dizem algo. A flat-lay é um
  padrão denso, o que quer dizer que aguenta qualquer corte que a máscara da
  casa lhe faça — em telemóvel, em tablet ou num ecrã largo.
*/
import Image from "next/image";
import { site } from "@/lib/site";
import { Botao } from "./Botao";
import { Sublinhado } from "./Sublinhado";
import { Casa } from "./Casa";
import { Telefone } from "./Icones";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 md:min-h-[86vh] md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:pb-24 md:pt-16">
        <div>
          <p className="etiqueta flex items-center gap-2.5 text-laranja-texto">
            <Casa className="h-3.5 w-3.5" cheia />
            {site.zona}
          </p>

          <h1 className="titulo mt-6 text-[clamp(2.75rem,9vw,5.25rem)]">
            O António <Sublinhado>trata disso</Sublinhado> por si.
          </h1>

          <p className="mt-7 max-w-md text-[1.0625rem] leading-relaxed text-cinza">
            As tarefas do dia a dia podem ser mais simples do que imagina.
            Reparações, remodelações e pequenas obras em casa — com orçamento
            sem compromisso.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Botao href="/contactos">Pedir orçamento</Botao>
            <Botao href={`tel:${site.telefone}`} variante="contorno">
              <Telefone className="h-4 w-4" />
              <span className="numeros">{site.telefoneVisivel}</span>
            </Botao>
          </div>
        </div>

        {/*
          A máscara da casa vem do <clipPath> em components/Casa.tsx. O
          `sizes` diz ao Next que esta imagem nunca ocupa mais de metade de um
          ecrã largo — sem isso serve a versão de 2000px a um telemóvel.
        */}
        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div
            className="relative aspect-[5/6] w-full bg-papel-fundo"
            style={{ clipPath: "url(#casa)" }}
          >
            <Image
              src="/images/ferramentas-bancada.webp"
              alt="Ferramentas e material de obra dispostos numa bancada: martelo, chave inglesa, rolo de pintura, torneiras, buchas e parafusos."
              fill
              priority
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
