/*
  Os dados da casa num sítio só.

  Tudo o que aparece em mais do que um lado — nome, telefone, email, redes —
  vive aqui e não espalhado pelos componentes. Quando o António mudar de número,
  muda-se numa linha.
*/

/* O número em duas formas porque servem dois fins: o `tel:` e o WhatsApp querem
   o formato internacional sem espaços; quem lê o ecrã quer o número como se diz
   ao telefone. */
const TELEFONE = "+351913307445";

export const site = {
  nome: "António Home Repair Services",
  /* Para títulos onde o nome completo não cabe e a frase pede o primeiro nome. */
  nomeCurto: "António",
  descricao:
    "Reparações e pequenas obras em casa, na Maia e arredores. Remodelações, eletricidade, canalização, montagem de mobiliário e cozinhas, pavimentos e papel de parede.",

  /* TODO: confirmar o domínio final antes do primeiro deploy. Alimenta o
     sitemap, o robots.txt e as metadata de partilha. */
  url: "https://antoniohomerepairservices.pt",

  telefone: TELEFONE,
  telefoneVisivel: "913 307 445",
  telefoneCompleto: "(+351) 913 307 445",
  email: "antoniohomerepairservices@gmail.com",
  zona: "Maia, Portugal",

  /* A mensagem já escrita poupa ao cliente ter de explicar de onde veio, e
     ao António perguntá-lo. */
  whatsapp: `https://wa.me/${TELEFONE.replace("+", "")}?text=${encodeURIComponent(
    "Olá! Vi o site e queria pedir um orçamento.",
  )}`,

  instagram: "https://www.instagram.com/antoniohomerepairservices/",
  facebook: "https://www.facebook.com/antoniohomerepairservices",
} as const;

/* A navegação. Os slugs são os do site em WordPress, de propósito: mudá-los
   deitava fora o que o Google já tem indexado. Ver os redirects no
   next.config.ts para os dois que valeu a pena corrigir. */
export const navegacao = [
  { href: "/portfolio", texto: "Portfolio" },
  { href: "/sobrenos", texto: "Sobre Nós" },
  { href: "/contactos", texto: "Contactos" },
] as const;
