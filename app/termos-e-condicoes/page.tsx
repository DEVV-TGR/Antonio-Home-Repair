import type { Metadata } from "next";
import { termos } from "@/lib/legais";
import { TextoLegal } from "@/components/TextoLegal";

export const metadata: Metadata = {
  title: termos.titulo,
  description:
    "Termos e Condições de utilização do website da António Home Repair Services.",
  alternates: { canonical: "/termos-e-condicoes" },
};

export default function Pagina() {
  return <TextoLegal documento={termos} />;
}
