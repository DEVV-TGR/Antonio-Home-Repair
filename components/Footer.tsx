/*
  O rodapé.

  Banda escura, o logo invertido, e as três colunas que um site de serviços
  precisa: como se fala com ele, onde estão as páginas, e os avisos legais.

  O `pb-28 md:pb-12` é para a BarraMovel não tapar a última linha em telemóvel.
*/
import Link from "next/link";
import { site, navegacao } from "@/lib/site";
import { Marca } from "./Marca";
import { Email, Facebook, Instagram, Telefone } from "./Icones";

const legais = [
  { href: "/politica-de-privacidade", texto: "Política de Privacidade" },
  { href: "/termos-e-condicoes", texto: "Termos e Condições" },
];

export function Footer() {
  return (
    <footer className="bg-tinta text-papel">
      <div className="mx-auto max-w-6xl px-5 pb-28 pt-16 sm:px-8 md:pb-12">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Marca invertido />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-papel/60">
              Reparações e pequenas obras em casa. {site.zona}.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border border-papel/20 transition-colors hover:border-papel hover:bg-papel hover:text-tinta"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border border-papel/20 transition-colors hover:border-papel hover:bg-papel hover:text-tinta"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="etiqueta text-papel/45">Contactos</h2>
            <ul className="mt-5 flex flex-col gap-4 text-sm">
              <li>
                <a
                  href={`tel:${site.telefone}`}
                  className="flex items-center gap-3 transition-colors hover:text-ambar"
                >
                  <Telefone className="h-4 w-4 shrink-0 text-papel/45" />
                  <span className="numeros">{site.telefoneCompleto}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 transition-colors hover:text-ambar"
                >
                  <Email className="mt-0.5 h-4 w-4 shrink-0 text-papel/45" />
                  <span className="break-all">{site.email}</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row md:flex-col">
            <div>
              <h2 className="etiqueta text-papel/45">Site</h2>
              <ul className="mt-5 flex flex-col gap-3 text-sm">
                {navegacao.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-papel/75 transition-colors hover:text-papel"
                    >
                      {item.texto}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="etiqueta text-papel/45">Avisos legais</h2>
              <ul className="mt-5 flex flex-col gap-3 text-sm">
                {legais.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-papel/75 transition-colors hover:text-papel"
                    >
                      {item.texto}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-papel/12 pt-6 text-xs text-papel/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.nome}
          </p>
          {/* TODO: o site antigo credita a XquisiteVision. Confirmar com o
              Tomás se passa a DevPlus antes de publicar. */}
          <p>
            Site por{" "}
            <a
              href="https://devplus.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-papel/25 underline-offset-4 transition-colors hover:text-papel"
            >
              DevPlus
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
