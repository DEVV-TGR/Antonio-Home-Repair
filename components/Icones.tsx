/*
  Os ícones, desenhados à mão em vez de vir uma biblioteca inteira.

  São seis. Uma biblioteca de ícones traz milhares e a conta do bundle vem
  toda — e nenhuma delas tem o WhatsApp com o traço certo para casar com o
  contorno do logo.

  Todos herdam `currentColor` e todos são `aria-hidden`: o significado está
  sempre no texto ao lado ou num `sr-only`, nunca no desenho.
*/
type Props = { className?: string };

const traco = {
  fill: "none" as const,
  stroke: "currentColor" as const,
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Telefone({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...traco}>
      <path d="M6.5 3h3l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function Whatsapp({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...traco}>
      <path d="M3.5 20.5l1.3-4A8.2 8.2 0 1 1 8 19.2l-4.5 1.3Z" />
      <path d="M8.8 8.2c-.3.7-.2 1.7.6 2.8a7.5 7.5 0 0 0 2.9 2.5c1 .4 1.9.4 2.4 0l.6-.6-1.6-1.3-.9.6a5.6 5.6 0 0 1-1.9-1.9l.7-.9-1.3-1.6-.6.4Z" />
    </svg>
  );
}

export function Email({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...traco}>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function Instagram({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...traco}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r=".9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Facebook({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...traco}>
      <path d="M14.8 8.5h2.4M14.8 8.5V6.8a1.8 1.8 0 0 1 1.8-1.8h1.1" />
      <path d="M14.8 8.5V21" />
      <path d="M11 12.2h6.5" />
    </svg>
  );
}

/* A seta dos links "ver tudo". Aponta a 45° porque é sempre para diante e
   nunca para fora do site. */
export function Seta({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...traco}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
