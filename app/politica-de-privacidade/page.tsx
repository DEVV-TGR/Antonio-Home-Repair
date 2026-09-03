/*
  O slug mudou. O do site antigo era `/politivaprivacidade` — uma gralha de
  quem o escreveu ("politiva"), que ficou lá dois anos a ser o endereço público
  da política de privacidade de uma empresa. Aqui é `/politica-de-privacidade`,
  e o antigo responde 301 para este; ver next.config.ts.
*/
import type { Metadata } from "next";
import { privacidade } from "@/lib/legais";
import { TextoLegal } from "@/components/TextoLegal";

export const metadata: Metadata = {
  title: privacidade.titulo,
  description:
    "Como a António Home Repair Services recolhe, utiliza e protege os dados pessoais fornecidos através do website.",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function Pagina() {
  return <TextoLegal documento={privacidade} />;
}
