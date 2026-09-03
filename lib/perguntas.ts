/*
  As perguntas frequentes do painel de conversa.

  ## A regra que governa este ficheiro

  **Só entra aqui uma resposta que já esteja no conteúdo do cliente.** Isto não
  é um assistente que raciocina: é um conjunto de respostas escritas, e cada uma
  delas é a empresa a comprometer-se com uma coisa perante quem lê.

  Inventar aqui "respondemos em 24 horas" ou "a deslocação é grátis" não é
  escrever copy — é assumir uma obrigação em nome de um senhor que não foi
  consultado, e que vai ter alguém à porta a cobrá-la.

  Por isso ficaram **deliberadamente de fora**, e estão listadas no
  docs/PLANO.md para o cliente responder:

  - preços, ou sequer ordens de grandeza;
  - prazos de resposta e de execução;
  - garantia sobre o trabalho feito;
  - horário e trabalho ao fim-de-semana;
  - formas de pagamento e se passa factura;
  - raio exacto de deslocação para lá da Maia.

  São as seis perguntas que qualquer pessoa faz a um homem das obras. A ausência
  delas é o buraco maior deste painel — e é um buraco que se tapa com uma
  conversa de dez minutos com o António, não com código.

  As que aqui estão vêm todas do site: dos serviços que ele lista, da zona que
  declara, da copy do "Sobre Nós" e da política de privacidade.
*/
import { servicos } from "./servicos";
import { site } from "./site";

export type Pergunta = {
  chave: string;
  /* Como aparece no botão. Curta — é para caber num chip. */
  pergunta: string;
  /* A resposta, em parágrafos. */
  resposta: string[];
  lista?: string[];
  ligacao?: { href: string; texto: string };
};

export const perguntas: Pergunta[] = [
  {
    chave: "servicos",
    pergunta: "Que trabalhos fazem?",
    resposta: ["Estes são os oito que o António faz com mais frequência:"],
    lista: servicos.map((s) => s.nome),
    ligacao: { href: "/#servicos", texto: "Ver o que cada um inclui" },
  },
  {
    chave: "zona",
    pergunta: "Trabalham na minha zona?",
    resposta: [
      `A base é na ${site.zona.replace(", Portugal", "")} e o trabalho é feito em casa de quem o pede — não há loja para visitar.`,
      "Se mora um pouco mais longe, pergunte à mesma. É uma chamada.",
    ],
  },
  {
    chave: "pequeno-ou-grande",
    pergunta: "Só fazem reparações pequenas?",
    resposta: [
      "Não. Desde pequenas reparações até projetos de renovação completa — um estore que não sobe, uma parede a precisar de pintura, ou uma cozinha montada de raiz.",
    ],
    ligacao: { href: "/portfolio", texto: "Ver trabalhos já feitos" },
  },
  {
    chave: "orcamento",
    pergunta: "Como peço um orçamento?",
    resposta: ["Como lhe der mais jeito. Há três maneiras:"],
    lista: [
      "Pelo formulário, aqui no site",
      `Por telefone, ${site.telefoneVisivel}`,
      "Por WhatsApp",
    ],
    ligacao: { href: "/contactos", texto: "Ir para o formulário" },
  },
  {
    chave: "fotografias",
    pergunta: "Posso mandar fotografias do que preciso?",
    resposta: [
      "Pode, e ajuda muito. Pelo WhatsApp é o mais simples — manda a fotografia do que está avariado e explica em duas linhas.",
    ],
    ligacao: { href: site.whatsapp, texto: "Abrir o WhatsApp" },
  },
  {
    chave: "dados",
    pergunta: "Que dados guardam do formulário?",
    resposta: [
      "Só o nome, o email e o telemóvel, e apenas para responder ao seu pedido. Não são vendidos nem partilhados com ninguém, salvo quando a lei o exigir.",
    ],
    ligacao: {
      href: "/politica-de-privacidade",
      texto: "Ler a política de privacidade",
    },
  },
];

/* A primeira coisa que aparece no painel, antes de qualquer pergunta. */
export const saudacao = [
  "Olá! Aqui não está ninguém a escrever — são respostas já preparadas às perguntas mais frequentes.",
  "Escolha uma. Se não for nenhuma destas, ligue ou mande mensagem, que aí fala mesmo com o António.",
];
