/*
  A página que aparece quando o endereço não existe.

  Um 404 num site de cinco páginas não deve ser um beco: as três hipóteses de
  onde a pessoa queria ir estão todas aqui, e o telefone também.
*/
import { Botao } from "@/components/Botao";
import { Casa } from "@/components/Casa";
import { site } from "@/lib/site";

export default function NaoEncontrado() {
  return (
    <section className="mx-auto flex min-h-[72vh] max-w-2xl flex-col items-start justify-center px-5 py-32 sm:px-8">
      <Casa className="h-10 w-10 text-laranja-forte" />
      <h1 className="titulo mt-8 text-[clamp(2rem,6vw,3.5rem)]">
        Esta página não existe.
      </h1>
      <p className="mt-5 text-[1.0625rem] leading-relaxed text-cinza">
        O endereço que seguiu não leva a nada — ou já não leva. Se procurava um
        trabalho ou queria pedir um orçamento, está tudo a um clique.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Botao href="/">Voltar ao início</Botao>
        <Botao href="/portfolio" variante="contorno">
          Ver os projetos
        </Botao>
        <Botao href={`tel:${site.telefone}`} variante="contorno">
          <span className="numeros">{site.telefoneVisivel}</span>
        </Botao>
      </div>
    </section>
  );
}
