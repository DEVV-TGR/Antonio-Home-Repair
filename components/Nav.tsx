"use client";

/*
  O cabeçalho.

  Fica colado ao topo. Enquanto o hero está à vista é transparente e sem
  filete — o título tem de poder respirar; a partir daí ganha fundo de papel e
  um filete em baixo, para se separar do que passa por baixo.

  ## O menu em telemóvel

  Abre em ecrã inteiro em vez de num painel que desliza. Com três links e um
  botão, um painel é mais peça do que serve, e o ecrã inteiro dá alvos de toque
  do tamanho certo sem se andar a medir margens.

  Fecha em três situações, e as três contam: no X, ao clicar num link (senão
  fica aberto por cima da página nova) e no Escape. Enquanto está aberto o corpo
  não faz scroll, senão a página mexe-se atrás do menu.
*/
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navegacao, site } from "@/lib/site";
import { Marca } from "./Marca";
import { Botao } from "./Botao";
import { Casa } from "./Casa";

export function Nav() {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);
  const caminho = usePathname();

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  useEffect(() => {
    if (!aberto) return;

    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberto(false);
    };
    document.addEventListener("keydown", aoTeclar);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", aoTeclar);
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        rolou || aberto
          ? "border-b border-linha bg-papel/95 backdrop-blur"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Marca />

        <nav className="hidden items-center gap-9 md:flex">
          {navegacao.map((item) => {
            const activo = caminho === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={activo ? "page" : undefined}
                className={`font-display text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
                  activo ? "text-tinta" : "text-cinza hover:text-tinta"
                }`}
              >
                {item.texto}
              </Link>
            );
          })}
          <Botao href="/contactos" className="px-5 py-3">
            Pedir orçamento
          </Botao>
        </nav>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-controls="menu-movel"
          className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
        >
          <span className="sr-only">{aberto ? "Fechar menu" : "Abrir menu"}</span>
          {/* Duas barras que se cruzam quando aberto — o mesmo elemento nos dois
              estados, para a transição ter o que animar. */}
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-[2px] w-6 bg-tinta transition-transform duration-300 ${
                aberto ? "top-[7px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 block h-[2px] w-6 bg-tinta transition-transform duration-300 ${
                aberto ? "top-[7px] -rotate-45" : "top-[14px]"
              }`}
            />
          </span>
        </button>
      </div>

      {aberto && (
        <div
          id="menu-movel"
          className="flex h-[calc(100dvh-5rem)] flex-col justify-between bg-papel px-5 pb-10 pt-6 md:hidden"
        >
          <nav className="flex flex-col">
            {navegacao.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setAberto(false)}
                className="flex items-center gap-4 border-b border-linha py-5 font-display text-2xl font-bold uppercase tracking-tight"
              >
                <Casa className="h-4 w-4 shrink-0 text-ambar" cheia />
                {item.texto}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <Botao href="/contactos" className="w-full">
              Pedir orçamento
            </Botao>
            <Botao href={`tel:${site.telefone}`} variante="contorno" className="w-full">
              <span className="numeros">{site.telefoneVisivel}</span>
            </Botao>
          </div>
        </div>
      )}
    </header>
  );
}
