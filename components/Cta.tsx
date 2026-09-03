/*
  O fecho: as três maneiras de falar com ele.

  ## O único painel âmbar do site

  A regra do globals.css diz que o âmbar não é cor de fundo de secção. Esta é a
  excepção, e é uma só: o último bloco antes do rodapé, onde não há mais nada a
  competir e onde a cor faz o trabalho de dizer "é aqui que se age". O que
  estragava o site antigo não era o laranja existir — era existir em seis
  painéis, com corpo de texto por cima, gravado em imagens.

  O texto sobre âmbar é tinta e não branco: dá 8,4:1, enquanto branco sobre
  âmbar não passa dos 2,3:1 e reprovava.

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
    <section className="bg-ambar text-tinta">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <h2 className="titulo max-w-2xl text-[clamp(2rem,5.5vw,3.25rem)]">
          Mantenha-se em contacto connosco.
        </h2>
        <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-tinta/75">
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
              <p className="mt-2 text-sm leading-relaxed text-tinta/70">{texto}</p>
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
