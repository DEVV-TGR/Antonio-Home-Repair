/*
  A tira de três promessas, entre o hero e os serviços.

  Existe porque são as três perguntas que alguém faz antes de ligar a um
  desconhecido para lhe entrar em casa: vem até aqui? quanto custa saber? quando
  responde? Três respostas curtas valem mais do que um parágrafo sobre
  qualidade.
*/
import { Casa } from "./Casa";

const promessas = [
  "Maia e arredores",
  "Orçamento sem compromisso",
  "Pequenas e grandes reparações",
];

export function Faixa() {
  return (
    <section className="border-y border-linha bg-papel-fundo">
      <ul className="mx-auto flex max-w-6xl flex-col divide-y divide-linha px-5 sm:px-8 md:flex-row md:divide-x md:divide-y-0">
        {promessas.map((promessa) => (
          <li
            key={promessa}
            className="flex items-center gap-3 py-5 md:flex-1 md:justify-center md:py-6"
          >
            <Casa className="h-3.5 w-3.5 shrink-0 text-ambar" cheia />
            <span className="etiqueta text-tinta">{promessa}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
