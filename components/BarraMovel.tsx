/*
  A barra fixa no fundo do ecrã, só em telemóvel.

  Quem chega a este site com uma persiana encravada não vai preencher um
  formulário: liga. A barra põe o telefone e o WhatsApp ao alcance do polegar em
  qualquer ponto da página, e é a alteração com mais efeito prático em todo o
  redesenho.

  O `pb-[env(safe-area-inset-bottom)]` é para os iPhones com barra de gestos —
  sem ele, metade do botão fica debaixo dela. O espaço que a barra ocupa é
  reservado no rodapé, senão tapa-lhe a última linha.
*/
import { site } from "@/lib/site";
import { Telefone, Whatsapp } from "./Icones";

export function BarraMovel() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-tinta/10 pb-[env(safe-area-inset-bottom)] md:hidden">
      <a
        href={`tel:${site.telefone}`}
        className="flex flex-1 items-center justify-center gap-2.5 bg-tinta py-4 font-display text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-papel"
      >
        <Telefone className="h-4 w-4" />
        Ligar
      </a>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2.5 bg-laranja py-4 font-display text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-tinta"
      >
        <Whatsapp className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  );
}
