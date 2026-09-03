/*
  Os botões do site, em três variantes e num sítio só.

  `ambar` é a acção principal e aparece **uma vez por ecrã**. Um segundo botão
  âmbar ao lado do primeiro faz com que nenhum dos dois seja o principal.
  `contorno` é o secundário sobre papel; `claro`, o secundário sobre a banda
  escura.

  Tudo isto sai como <a>, porque nenhuma destas acções é um <button>: são links
  para uma página, um `tel:` ou o WhatsApp. O único <button> a sério no site é o
  de submeter o formulário, e esse vive no formulário.
*/
import Link from "next/link";
import type { ReactNode } from "react";

const BASE =
  "inline-flex items-center justify-center gap-2.5 px-6 py-3.5 font-display text-[0.8125rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-200";

const VARIANTES = {
  ambar: "bg-ambar text-tinta hover:bg-tinta hover:text-papel",
  contorno:
    "border border-tinta/25 text-tinta hover:border-tinta hover:bg-tinta hover:text-papel",
  claro:
    "border border-papel/30 text-papel hover:border-papel hover:bg-papel hover:text-tinta",
} as const;

export function Botao({
  href,
  children,
  variante = "ambar",
  className = "",
  externo = false,
}: {
  href: string;
  children: ReactNode;
  variante?: keyof typeof VARIANTES;
  className?: string;
  /* WhatsApp e redes sociais abrem noutro separador; o resto do site não. */
  externo?: boolean;
}) {
  const classes = `${BASE} ${VARIANTES[variante]} ${className}`;

  /* `tel:`, `mailto:` e o WhatsApp não são rotas do Next e não beneficiam do
     <Link> — passar-lhos só lhe dá trabalho de prefetch para nada. */
  if (externo || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
