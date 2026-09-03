/*
  O sublinhado do hero: um traço laranja por baixo de duas palavras do título.

  É desenhado à mão de propósito — a curva não é recta e as pontas são
  redondas, como um marcador. É a única coisa no site que puxa pelo lado
  desenhado do wordmark do logo; se fosse um `border-bottom` recto, o título
  ficava a dizer o mesmo mas sem a mão de ninguém.

  O `preserveAspectRatio="none"` faz o traço esticar até à largura exacta das
  palavras que sublinha, em vez de manter a proporção e sobrar de um lado.
*/
export function Sublinhado({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      {children}
      <svg
        aria-hidden
        viewBox="0 0 300 14"
        preserveAspectRatio="none"
        className="absolute -bottom-[0.12em] left-0 h-[0.16em] w-full text-laranja-forte"
      >
        <path
          d="M3 9C55 4 108 11 160 6c40-4 78 3 137-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
