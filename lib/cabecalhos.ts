/*
  Os cabeçalhos de segurança das respostas.

  ## O que esta CSP trava, e o que não trava

  Trava o que se pode travar num site inteiramente estático: nada carrega de
  fora — nem script, nem folha de estilo, nem tipo de letra, nem imagem —, o
  site não pode ser posto dentro de uma moldura noutro domínio, e o formulário
  só pode submeter para aqui.

  O que **não** trava é injecção de script inline, porque `script-src` leva
  `'unsafe-inline'`. E leva-o por uma razão concreta: o Next põe na página
  scripts inline com os dados de hidratação. Fechá-los exige um nonce por
  resposta, um nonce exige gerar a resposta no momento, e isso torna dinâmicas
  oito páginas que hoje são ficheiros estáticos — mais lentas para todos, para
  proteger de um vector que num site sem base de dados e sem conteúdo de
  utilizador não tem por onde entrar. Se um dia houver conteúdo submetido a
  aparecer numa página, esta decisão muda e o comentário tem de mudar com ela.

  As fontes são `'self'` porque o `next/font` descarrega-as no build e serve-as
  daqui. Se alguém trocar isso por um `<link>` para o fonts.googleapis.com, as
  fontes deixam de carregar — e o sítio de o corrigir é aqui, não no `<head>`.
*/
/*
  ## O `unsafe-eval` em desenvolvimento

  Sem ele, o `npm run dev` enche a consola de "eval() is not supported in this
  environment" e perdem-se as stack traces do React — ele usa `eval` para
  reconstruir a pilha de quem chamou um componente. Em produção não usa: o
  próprio aviso o diz, "React will never use eval() in production mode".

  Por isso a permissão existe **só** em desenvolvimento. Pô-la nas duas era
  abrir em produção um buraco por uma comodidade que em produção não existe.
*/
const EVAL = process.env.NODE_ENV === "production" ? "" : " 'unsafe-eval'";

const POLITICA = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${EVAL}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "frame-src 'none'",
  "base-uri 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

export const cabecalhos = [
  { key: "Content-Security-Policy", value: POLITICA },
  /* Redundante com o `frame-ancestors` acima para browsers actuais, e a única
     protecção nos que ainda não o leem. */
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  /* Este site não precisa de nenhuma delas. Negá-las por omissão evita que um
     script de terceiros que venha a entrar as possa pedir. */
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
];
