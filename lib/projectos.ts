/*
  Os quatro trabalhos com fotografia antes/depois.

  A lista de `trabalhos` de cada projecto não foi inventada: está escrita nas
  bolinhas gravadas na própria fotografia do "depois", que vieram assim do
  cliente. Repeti-la aqui como texto serve dois fins — quem usa leitor de ecrã
  não vê o que está pintado numa imagem, e o Google também não.

  ## A proporção

  Cada par tem a sua, e é preciso que seja a mesma nas duas metades ou o slider
  faz o antes saltar em relação ao depois. Guarda-se aqui em vez de se cortar
  tudo para uma medida comum: a cozinha é quase quadrada e cortá-la para o
  retrato dos outros três tirava-lhe metade da bancada.

  ## As legendas

  Escritas a partir do que se vê nas fotografias, não ditadas pelo cliente.
  Estão por confirmar com ele — ver docs/PLANO.md.
*/
export type Projecto = {
  chave: string;
  titulo: string;
  legenda: string;
  trabalhos: string[];
  largura: number;
  altura: number;
  altAntes: string;
  altDepois: string;
  /* Os três primeiros aparecem também na página inicial. */
  destaque: boolean;
};

export const projectos: Projecto[] = [
  {
    chave: "casa-de-banho",
    titulo: "Casa de banho",
    legenda:
      "Um quarto de banho interior de azulejo antigo e loiça azul, refeito de cima a baixo em cerâmica clara.",
    trabalhos: [
      "Instalação de sanita",
      "Instalação de móvel, lavatório e torneira",
      "Instalação de espelho",
      "Pintura do teto",
    ],
    largura: 832,
    altura: 1128,
    altAntes:
      "Casa de banho antiga, com azulejo branco de risca azul, sanita e base de duche azul-escuras e torneiras de cruzeta.",
    altDepois:
      "A mesma casa de banho depois da obra: cerâmica clara imitação de mármore, sanita branca suspensa, móvel com lavatório oval e espelho redondo.",
    destaque: true,
  },
  {
    chave: "cozinha",
    titulo: "Cozinha",
    legenda:
      "Cozinha dos anos oitenta, com armários verdes e tijoleira, substituída por uma cozinha branca de bancada escura.",
    trabalhos: [
      "Montagem da cozinha",
      "Instalação de eletrodomésticos",
      "Instalação de candeeiro",
      "Pintura de paredes e tetos",
    ],
    largura: 980,
    altura: 1006,
    altAntes:
      "Cozinha antiga com armários verde-claros de puxadores de madeira, azulejo florido, bancada de inox e chão de tijoleira vermelha.",
    altDepois:
      "A mesma cozinha depois da obra: armários brancos sem puxadores até ao teto, bancada escura, placa de indução, forno e micro-ondas encastrados e pavimento cinza.",
    destaque: true,
  },
  {
    chave: "marquise",
    titulo: "Marquise",
    legenda:
      "Uma marquise de serviço fechada com caixilharia velha, transformada em varanda de estar com ripado e ervas.",
    trabalhos: [
      "Montagem de rolos",
      "Instalação de candeeiro",
      "Montagem de móvel",
      "Pintura de paredes e tetos",
      "Colocação de tijoleira",
    ],
    largura: 1200,
    altura: 1604,
    altAntes:
      "Marquise estreita com caixilharia de alumínio castanho e vidro martelado, tanque de pedra, chão de tijoleira antiga e uma lâmpada nua no teto.",
    altDepois:
      "A mesma marquise depois da obra: paredes e teto pintados de branco, cortinas de rolo, painel de ripado de madeira com vasos de ervas, pavimento cinza e candeeiro de parede novo.",
    destaque: true,
  },
  {
    chave: "corredor",
    titulo: "Corredor",
    legenda:
      "O fundo de um corredor em obra, fechado com um painel de ripado de madeira e um quadro.",
    trabalhos: [
      "Instalação de ripado",
      "Colocação de quadro",
      "Pintura de paredes e teto",
    ],
    largura: 832,
    altura: 1128,
    altAntes:
      "Corredor em obra, paredes acabadas de rebocar, chão coberto de jornais e cartão, com uma lâmpada suspensa.",
    altDepois:
      "O mesmo corredor depois da obra: painel de ripado de madeira do chão ao teto no fundo, com um quadro de relevo branco e um vaso de plantas.",
    destaque: false,
  },
];

export const destaques = projectos.filter((p) => p.destaque);
