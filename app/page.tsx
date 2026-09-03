/*
  A página inicial.

  A ordem das secções é a de uma conversa: quem é e o que resolve (Hero), as
  três perguntas que se fazem antes de ligar (Faixa), o catálogo (Serviços),
  porque é que isso interessa (Convite), o que o distingue (Pilares), a prova
  (Projetos) e como se fala com ele (Cta).

  O site antigo tinha a mesma matéria pela ordem inversa: listava os serviços
  duas vezes antes de dizer a quem servem, e enterrava a melhor frase — "o
  António trata disso por si" — a meio da página.
*/
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Faixa } from "@/components/Faixa";
import { Servicos } from "@/components/Servicos";
import { Convite } from "@/components/Convite";
import { Pilares } from "@/components/Pilares";
import { Projetos } from "@/components/Projetos";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Pagina() {
  return (
    <>
      <Hero />
      <Faixa />
      <Servicos />
      <Convite />
      <Pilares />
      <Projetos />
      <Cta />
    </>
  );
}
