/*
  O logo com o nome ao lado, como aparece no cabeçalho e no rodapé.

  O ficheiro é um SVG de traço preto sobre transparente. No rodapé escuro é o
  **mesmo** ficheiro com `invert`: o traço passa a branco e o transparente
  continua transparente. Não há segundo ficheiro para manter em sincronia — e um
  logo que existe duas vezes acaba sempre por divergir.

  O `unoptimized` é porque o optimizador de imagem do Next não mexe em SVG; sem
  ele, pede-se-lhe um trabalho que ele não faz.
*/
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Marca({
  invertido = false,
  className = "",
}: {
  invertido?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 ${className}`}
      aria-label={`${site.nome} — página inicial`}
    >
      <Image
        src="/images/logo.svg"
        alt=""
        width={40}
        height={44}
        unoptimized
        priority
        className={`h-9 w-auto shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 ${
          invertido ? "invert" : ""
        }`}
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.9375rem] font-bold uppercase tracking-[0.2em]">
          António
        </span>
        <span
          className={`mt-1 font-display text-[0.5625rem] font-medium uppercase tracking-[0.16em] ${
            invertido ? "text-papel/55" : "text-cinza"
          }`}
        >
          Home Repair Services
        </span>
      </span>
    </Link>
  );
}
