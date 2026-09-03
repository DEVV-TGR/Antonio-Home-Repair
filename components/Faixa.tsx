/*
  A tira de três promessas, entre o hero e os serviços.

  Existe porque são as três perguntas que alguém faz antes de ligar a um
  desconhecido para lhe entrar em casa: vem até aqui? quanto custa saber? o que
  é que faz? Três respostas curtas valem mais do que um parágrafo sobre
  qualidade.

  ## Porquê laranja cheio aqui, e não noutro sítio

  É a cor do cliente e tem de se ver. Uma tira de uma linha é o sítio certo para
  ela atravessar a página: dá presença sem nunca ficar atrás de texto corrido,
  que é o que estragava o site antigo — lá o laranja vinha em painéis inteiros,
  com parágrafos por cima, gravados em imagens.

  O texto e os glifos são preto-tinta e não brancos: sobre este laranja o preto
  dá 8,31:1 e o branco não passa de 2,3:1.
*/
import { Casa } from "./Casa";

const promessas = [
  "Maia e arredores",
  "Orçamento sem compromisso",
  "Pequenas e grandes reparações",
];

export function Faixa() {
  return (
    <section className="bg-laranja text-tinta">
      <ul className="mx-auto flex max-w-6xl flex-col divide-y divide-tinta/15 px-5 sm:px-8 md:flex-row md:divide-x md:divide-y-0">
        {promessas.map((promessa) => (
          <li
            key={promessa}
            className="flex items-center gap-3 py-5 md:flex-1 md:justify-center md:py-6"
          >
            <Casa className="h-3.5 w-3.5 shrink-0" cheia />
            <span className="etiqueta">{promessa}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
