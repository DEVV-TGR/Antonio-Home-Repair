/*
  Os dados da casa num sítio só.
 
  Tudo o que aparece em mais do que um lado — o nome, a morada, o telefone,
  o endereço do site — vive aqui e não espalhado pelos componentes. Quando o
  cliente mudar o número de telefone, muda-se numa linha.
 
  O `url` é o que alimenta o sitemap, o robots.txt e as metadata do Open
  Graph. TODO: confirmar o domínio final com o cliente antes do primeiro
  deploy — até lá é o placeholder abaixo.
*/
export const site = {
  nome: "Antonio Home Repair Services",
  descricao:
    "Serviços de reparação e manutenção doméstica — pequenas obras, canalização, electricidade e acabamentos.",
  url: "https://antoniohomerepair.pt",
  telefone: "",
  email: "",
  morada: "",
} as const;
