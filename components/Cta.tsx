/*
  O fecho: as três maneiras de falar com ele.

  ## O segundo, e último, painel de laranja cheio

  O outro é a faixa de confiança, logo a seguir ao hero. São dois, estão longe
  um do outro, e em nenhum deles há texto corrido por cima — só um título, uma
  linha de entrada e três contactos.

  É essa a diferença para o site antigo, que tinha seis painéis de laranja com
  parágrafos inteiros por cima, gravados em imagens. O problema nunca foi o
  laranja existir; foi a escala a que aparecia e o que lhe punham em cima.

  Este é o último bloco antes do rodapé, onde não há mais nada a competir e onde
  a cor faz o trabalho de dizer "é aqui que se age".

  O texto sobre laranja é tinta e não branco: dá 8,31:1, enquanto branco sobre
  este laranja não passa dos 2,3:1 e reprovava.

  As opacidades do texto secundário são 80% e não 70%. A 70% ainda passa —
  4,73:1 — mas num painel desta área a diferença entre passar e ler-se bem é
  visível, e é precisamente o texto esbatido sobre laranja que dá ao site antigo
  o ar que se quer evitar.

  A copy é a do site antigo, e os três títulos com ela.
*/
import { site } from "@/lib/site";
import { Email, Instagram, Telefone } from "./Icones";

const vias = [
  {
    Icone: Email,
    titulo: "Envie-nos um email",
    texto: "Qualquer dúvida que tenha, envie-nos um email.",
    valor: site.email,
    href: `mailto:${site.email}`,
    externo: false,
  },
  {
    Icone: Telefone,
    titulo: "Ligue-nos",
    texto: "Estamos aqui para o ajudar no que precisar.",
    valor: site.telefoneCompleto,
    href: `tel:${site.telefone}`,
    externo: false,
  },
  {
    Icone: Instagram,
    titulo: "Siga-nos",
    texto: "Siga as nossas redes sociais e acompanhe o nosso trabalho.",
    valor: "@antoniohomerepairservices",
    href: site.instagram,
    externo: true,
  },
];

export function Cta() {
  return (
    <section className="bg-laranja text-tinta">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <h2 className="titulo max-w-2xl text-[clamp(2rem,5.5vw,3.25rem)]">
          Mantenha-se em contacto connosco.
        </h2>
        <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-tinta/80">
          Tem uma reparação ou melhoria em mente para a sua casa? Estamos
          prontos para ajudar.
        </p>

        <ul className="mt-14 grid gap-y-10 sm:grid-cols-3 sm:gap-x-8">
          {vias.map(({ Icone, titulo, texto, valor, href, externo }) => (
            <li key={titulo} className="border-t border-tinta/20 pt-6">
              <Icone className="h-5 w-5" />
              <h3 className="mt-4 font-display text-base font-bold tracking-tight">
                {titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-tinta/80">{texto}</p>
              <a
                href={href}
                {...(externo
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="numeros mt-4 inline-block break-all border-b border-tinta/40 pb-0.5 text-sm font-medium transition-colors hover:border-tinta"
              >
                {valor}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
