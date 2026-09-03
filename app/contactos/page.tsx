/*
  Contactos.

  Duas colunas: à esquerda as vias directas, à direita o formulário. A ordem é
  de propósito — quem chega aqui com uma urgência liga, e o telefone tem de
  estar antes do formulário na leitura e no DOM.

  **Não há aqui "Perguntas frequentes".** O site antigo tinha o título e nenhuma
  pergunta debaixo dele. Entra quando o cliente trouxer as perguntas; ver
  docs/PLANO.md.
*/
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { TituloDeSeccao } from "@/components/TituloDeSeccao";
import { FormularioContacto } from "@/components/FormularioContacto";
import { Casa } from "@/components/Casa";
import { Email, Facebook, Instagram, Telefone, Whatsapp } from "@/components/Icones";

export const metadata: Metadata = {
  title: "Contactos",
  description: `Fale com a ${site.nome}: ${site.telefoneCompleto}, WhatsApp ou email. Maia e arredores.`,
  alternates: { canonical: "/contactos" },
};

const vias = [
  {
    Icone: Telefone,
    titulo: "Ligue-nos",
    texto: "Estamos aqui para o ajudar no que precisar.",
    valor: site.telefoneCompleto,
    href: `tel:${site.telefone}`,
    externo: false,
  },
  {
    Icone: Whatsapp,
    titulo: "Mande mensagem",
    texto: "Se for mais fácil, mande fotografia do que precisa.",
    valor: "WhatsApp",
    href: site.whatsapp,
    externo: true,
  },
  {
    Icone: Email,
    titulo: "Envie-nos um email",
    texto: "Qualquer dúvida que tenha, envie-nos um email.",
    valor: site.email,
    href: `mailto:${site.email}`,
    externo: false,
  },
];

export default function Pagina() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 pt-36 sm:px-8 md:pb-28 md:pt-44">
      <TituloDeSeccao
        nivel={1}
        etiqueta="Contactos"
        titulo="Tem perguntas ou um comentário?"
        texto="Tem uma reparação ou melhoria em mente para a sua casa? Estamos prontos para ajudar."
      />

      <div className="mt-14 grid gap-14 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
        <div>
          <ul className="flex flex-col">
            {vias.map(({ Icone, titulo, texto, valor, href, externo }) => (
              <li key={titulo} className="border-t border-linha py-6">
                <div className="flex items-center gap-3">
                  <Icone className="h-5 w-5 shrink-0 text-cinza" />
                  <h2 className="font-display text-base font-bold tracking-tight">
                    {titulo}
                  </h2>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-cinza">{texto}</p>
                <a
                  href={href}
                  {...(externo
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="numeros mt-3 inline-block break-all border-b border-linha pb-0.5 text-sm font-medium transition-colors hover:border-tinta"
                >
                  {valor}
                </a>
              </li>
            ))}

            <li className="border-y border-linha py-6">
              <div className="flex items-center gap-3">
                <Casa className="h-5 w-5 shrink-0 text-cinza" />
                <h2 className="font-display text-base font-bold tracking-tight">
                  Onde trabalhamos
                </h2>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-cinza">
                {site.zona}, e arredores. O trabalho é em casa de quem o pede —
                não há loja para visitar.
              </p>
            </li>
          </ul>

          <div className="mt-8 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center border border-linha transition-colors hover:border-tinta hover:bg-tinta hover:text-papel"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center border border-linha transition-colors hover:border-tinta hover:bg-tinta hover:text-papel"
            >
              <span className="sr-only">Facebook</span>
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="etiqueta text-ambar-texto">Deixe-nos a sua mensagem</h2>
          <div className="mt-6">
            <FormularioContacto />
          </div>
        </div>
      </div>
    </section>
  );
}
