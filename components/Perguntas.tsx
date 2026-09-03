"use client";

/*
  O painel de perguntas frequentes.

  Tem a forma de um assistente de conversa e **não tem assistente nenhum**: as
  respostas estão escritas em lib/perguntas.ts, e o painel di-lo na primeira
  linha. A forma é boa — dá as perguntas uma a uma em vez de uma parede de
  texto, e é o gesto que toda a gente já conhece do canto do ecrã. Fingir que do
  outro lado está alguém, ou uma máquina que pensa, seria outra coisa.

  ## Porque é que isto é um <dialog> e não um <div>

  Pela mesma razão que o comparador antes/depois é um `<input type="range">`: o
  browser já faz o trabalho difícil, e faz melhor.

  Um painel escrito à mão com um `<div>` precisa de fechar no Escape, de prender
  o Tab lá dentro enquanto está aberto, de devolver o foco ao botão que o abriu
  quando fecha, e de esconder o resto da página de um leitor de ecrã. São quatro
  coisas e três delas costumam ficar por fazer. O `showModal()` traz as quatro.

  O que fica por nossa conta é o aspecto — um `<dialog>` modal aparece centrado
  por omissão, e este quer-se encostado ao canto em ecrã largo e a subir do
  fundo em telemóvel.

  ## O tempo a "escrever"

  Há uma pausa curta antes de cada resposta, com três pontos. Não é para fingir
  que alguém está a escrever: é para a resposta não aparecer no mesmo instante
  em que se carrega, o que faz perder o sítio onde a conversa ia.

  Quem pediu ao sistema para não haver movimento não a leva — a resposta aparece
  logo. Uma pausa artificial é exactamente o tipo de coisa que o
  `prefers-reduced-motion` existe para desligar.

  ## O que um leitor de ecrã ouve

  O histórico é um `role="log"` com `aria-live="polite"`: cada mensagem nova é
  lida quando chega, sem interromper o que estava a ser dito e sem roubar o
  foco. Por isso é que a pausa tem de ser curta — o anúncio só acontece quando a
  resposta entra no DOM.
*/
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { perguntas, saudacao, type Pergunta } from "@/lib/perguntas";
import { site } from "@/lib/site";
import { Casa } from "./Casa";
import { Telefone, Whatsapp } from "./Icones";

type Mensagem =
  | { id: string; de: "pessoa"; texto: string }
  | { id: string; de: "bot"; conteudo: Pick<Pergunta, "resposta" | "lista" | "ligacao"> };

const PAUSA = 550;

const PRIMEIRA: Mensagem = {
  id: "saudacao",
  de: "bot",
  conteudo: { resposta: saudacao },
};

export function Perguntas() {
  const [aberto, setAberto] = useState(false);
  const [mensagens, setMensagens] = useState<Mensagem[]>([PRIMEIRA]);
  const [respondidas, setRespondidas] = useState<string[]>([]);
  const [aEscrever, setAEscrever] = useState(false);

  const painel = useRef<HTMLDialogElement>(null);
  const historico = useRef<HTMLDivElement>(null);
  const relogio = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* O `showModal()` tem de ser chamado no elemento, não declarado numa
     propriedade: é o que liga o Escape, o foco preso e o fundo inerte. */
  useEffect(() => {
    const elemento = painel.current;
    if (!elemento) return;

    if (aberto && !elemento.open) elemento.showModal();
    if (!aberto && elemento.open) elemento.close();
  }, [aberto]);

  /* O Escape fecha o <dialog> por sua conta, sem passar pelo nosso estado. Sem
     isto, o React continuava a achar que estava aberto e o botão deixava de o
     reabrir à primeira. */
  useEffect(() => {
    const elemento = painel.current;
    if (!elemento) return;

    const aoFechar = () => setAberto(false);
    elemento.addEventListener("close", aoFechar);
    return () => elemento.removeEventListener("close", aoFechar);
  }, []);

  /* O histórico cresce por baixo; sem isto, a resposta nova nasce fora da
     vista. */
  useEffect(() => {
    historico.current?.scrollTo({
      top: historico.current.scrollHeight,
      behavior: "smooth",
    });
  }, [mensagens, aEscrever]);

  useEffect(() => () => {
    if (relogio.current) clearTimeout(relogio.current);
  }, []);

  const perguntar = useCallback((pergunta: Pergunta) => {
    setRespondidas((anteriores) => [...anteriores, pergunta.chave]);
    setMensagens((anteriores) => [
      ...anteriores,
      { id: `${pergunta.chave}-p`, de: "pessoa", texto: pergunta.pergunta },
    ]);

    const responder = () => {
      setMensagens((anteriores) => [
        ...anteriores,
        {
          id: `${pergunta.chave}-r`,
          de: "bot",
          conteudo: {
            resposta: pergunta.resposta,
            lista: pergunta.lista,
            ligacao: pergunta.ligacao,
          },
        },
      ]);
      setAEscrever(false);
    };

    const semMovimento = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (semMovimento) {
      responder();
      return;
    }

    setAEscrever(true);
    relogio.current = setTimeout(responder, PAUSA);
  }, []);

  const porResponder = perguntas.filter((p) => !respondidas.includes(p.chave));

  return (
    <>
      {/*
        Em telemóvel é um círculo e não a pastilha com "Dúvidas?" escrito.

        A pastilha tem uns 130px de largura e, num ecrã de 390, tapava o fim de
        um parágrafo e metade de um botão em várias páginas. Um botão flutuante
        que esconde conteúdo troca uma comodidade por um defeito, e o defeito é
        maior. O círculo tapa um canto, que é o que toda a gente já espera de um
        botão destes.

        O rótulo não desaparece — passa a `sr-only`, e quem ouve a página ouve-o
        na mesma.

        Dentro do círculo vai um ponto de interrogação e não a casa do logo. A
        casa é a marca em todo o resto do site, mas um ícone de casa dentro de um
        círculo no canto inferior direito lê-se como "página inicial" — que é o
        contrário de ajuda, e leva alguém a tocar à espera de sair da página onde
        está. Em ecrã largo a casa fica, porque ao lado dela está escrito
        "Dúvidas?" e não há como confundir.
      */}
      <button
        type="button"
        onClick={() => setAberto(true)}
        aria-haspopup="dialog"
        className="fixed bottom-[calc(4.75rem+env(safe-area-inset-bottom))] right-4 z-30 flex h-12 w-12 items-center justify-center gap-2.5 rounded-full bg-tinta text-papel shadow-lg transition-transform duration-200 hover:-translate-y-0.5 sm:bottom-6 sm:right-6 sm:h-auto sm:w-auto sm:rounded-none sm:py-3 sm:pl-3.5 sm:pr-4"
      >
        <span className="sr-only sm:hidden">Perguntas frequentes</span>
        <span
          aria-hidden
          className="font-display text-lg font-bold leading-none text-ambar sm:hidden"
        >
          ?
        </span>
        <Casa className="hidden h-4 w-4 text-ambar sm:block" cheia />
        <span className="hidden font-display text-[0.75rem] font-semibold uppercase tracking-[0.12em] sm:inline">
          Dúvidas?
        </span>
      </button>

      <dialog
        ref={painel}
        aria-labelledby="titulo-perguntas"
        className="m-0 max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-tinta/50 sm:left-auto sm:right-6 sm:top-auto sm:w-[24rem]"
        style={{ insetBlockStart: "auto", insetBlockEnd: 0 }}
      >
        <div className="flex max-h-[88dvh] flex-col bg-papel shadow-2xl sm:mb-6 sm:max-h-[min(36rem,82dvh)]">
          <div className="flex shrink-0 items-center justify-between gap-4 bg-tinta px-5 py-4 text-papel">
            <div className="flex items-center gap-3">
              <Casa className="h-5 w-5 shrink-0 text-ambar" cheia />
              <div>
                <h2 id="titulo-perguntas" className="font-display text-sm font-bold tracking-tight">
                  Perguntas frequentes
                </h2>
                <p className="mt-0.5 text-[0.6875rem] text-papel/55">
                  Respostas escritas. Não é um robot.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setAberto(false)}
              className="-mr-1 flex h-9 w-9 shrink-0 items-center justify-center text-papel/70 transition-colors hover:text-papel"
            >
              <span className="sr-only">Fechar as perguntas frequentes</span>
              <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <div
            ref={historico}
            role="log"
            aria-live="polite"
            aria-label="Conversa"
            className="flex-1 overflow-y-auto px-5 pb-8 pt-5"
          >
            <div className="flex flex-col gap-4">
              {mensagens.map((mensagem) =>
                mensagem.de === "pessoa" ? (
                  <p
                    key={mensagem.id}
                    className="ml-auto max-w-[85%] bg-tinta px-4 py-2.5 text-[0.875rem] leading-relaxed text-papel"
                  >
                    {mensagem.texto}
                  </p>
                ) : (
                  <div key={mensagem.id} className="max-w-[92%]">
                    <div className="bg-papel-fundo px-4 py-3">
                      {mensagem.conteudo.resposta.map((paragrafo) => (
                        <p
                          key={paragrafo}
                          className="text-[0.875rem] leading-relaxed text-tinta [&+p]:mt-2.5"
                        >
                          {paragrafo}
                        </p>
                      ))}

                      {mensagem.conteudo.lista && (
                        <ul className="mt-3 flex flex-col gap-1.5">
                          {mensagem.conteudo.lista.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-[0.875rem] leading-relaxed text-cinza"
                            >
                              <Casa className="mt-1 h-2.5 w-2.5 shrink-0 text-ambar" cheia />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {mensagem.conteudo.ligacao && (
                      <Ligacao
                        ligacao={mensagem.conteudo.ligacao}
                        aoSeguir={() => setAberto(false)}
                      />
                    )}
                  </div>
                ),
              )}

              {aEscrever && (
                <p className="flex w-fit gap-1 bg-papel-fundo px-4 py-4">
                  <span className="sr-only">A responder…</span>
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      aria-hidden
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-cinza"
                      style={{ animationDelay: `${i * 130}ms` }}
                    />
                  ))}
                </p>
              )}
            </div>

            {porResponder.length > 0 && !aEscrever && (
              <div className="mt-5 flex flex-col items-end gap-2">
                {porResponder.map((pergunta) => (
                  <button
                    key={pergunta.chave}
                    type="button"
                    onClick={() => perguntar(pergunta)}
                    className="border border-tinta/25 px-3.5 py-2 text-right text-[0.8125rem] leading-snug text-tinta transition-colors hover:border-tinta hover:bg-tinta hover:text-papel"
                  >
                    {pergunta.pergunta}
                  </button>
                ))}
                </div>
              )}
            </div>

          {/*
            O rodapé está sempre visível e não só no fim da lista. Quem abre isto
            com uma canalização a verter não vai ler seis perguntas primeiro.

            Em telemóvel o painel encosta ao fundo do ecrã, e nos iPhones com
            barra de gestos metade dos dois botões ficava debaixo dela — daí o
            `env(safe-area-inset-bottom)`. Em ecrã largo o painel já está
            afastado do fundo e não precisa dele.
          */}
          <div className="relative shrink-0 border-t border-linha bg-papel px-5 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4 sm:pb-4">
            {/*
              O esbatimento vive aqui, ancorado ao rodapé e a subir por cima da
              conversa. Sem ele, a última pergunta da lista fica cortada a meio
              pela borda do scroll e lê-se como um erro de desenho e não como
              "há mais por baixo".

              Esteve primeiro num embrulho à volta da área de conversa, com o
              scroll a `h-full` lá dentro. Não funcionou: a altura em
              percentagem não resolveu contra o pai flexível, o `overflow` ficou
              sem nada para cortar e as perguntas passaram a sair por cima deste
              rodapé. Ancorado ao rodapé, que já tem altura própria, não há
              altura nenhuma para resolver.
            */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -top-8 h-8 bg-gradient-to-t from-papel to-transparent"
            />
            <p className="text-[0.75rem] text-cinza">
              {porResponder.length === 0
                ? "Acabaram as perguntas. Para o resto, fale com o António:"
                : "Não é nenhuma destas? Fale com o António:"}
            </p>
            <div className="mt-3 flex gap-2">
              <a
                href={`tel:${site.telefone}`}
                className="flex flex-1 items-center justify-center gap-2 bg-tinta py-2.5 font-display text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-papel transition-opacity hover:opacity-90"
              >
                <Telefone className="h-3.5 w-3.5" />
                Ligar
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 bg-ambar py-2.5 font-display text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-tinta transition-opacity hover:opacity-90"
              >
                <Whatsapp className="h-3.5 w-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

/*
  A ligação que fecha algumas respostas. Fecha o painel ao ser seguida: um
  <dialog> modal deixa o resto da página inerte, e navegar para uma página nova
  com ele aberto por cima é a maneira mais rápida de parecer que o site encravou.
*/
function Ligacao({
  ligacao,
  aoSeguir,
}: {
  ligacao: { href: string; texto: string };
  aoSeguir: () => void;
}) {
  const classes =
    "mt-2 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-ambar-texto underline decoration-ambar/40 underline-offset-4 transition-colors hover:decoration-ambar";

  if (ligacao.href.startsWith("http")) {
    return (
      <a
        href={ligacao.href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {ligacao.texto} →
      </a>
    );
  }

  return (
    <Link href={ligacao.href} onClick={aoSeguir} className={classes}>
      {ligacao.texto} →
    </Link>
  );
}
