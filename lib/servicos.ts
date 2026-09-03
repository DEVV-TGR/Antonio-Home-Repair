/*
  Os oito serviços, com as descrições tal e qual o cliente as escreveu no site
  antigo. Não foram reescritas de propósito: são as palavras dele e dizem o que
  ele faz, sem o vocabulário de agência que costuma entrar por cima.

  No site antigo esta lista aparecia duas vezes na mesma página, com ordens
  diferentes. Aqui existe uma vez, e a ordem é esta: primeiro o que traz mais
  gente à procura, no fim o mais específico.
*/
export type Servico = {
  nome: string;
  descricao: string;
};

export const servicos: Servico[] = [
  {
    nome: "Remodelações",
    descricao:
      "Arranjamos paredes, substituímos e instalamos peças sanitárias — sanitas, bidés, bases de duche, resguardos.",
  },
  {
    nome: "Canalização",
    descricao:
      "Substituição e instalação de torneiras, válvulas e bichas (mangueiras).",
  },
  {
    nome: "Eletricidade",
    descricao:
      "Pequenas instalações elétricas — persianas elétricas, candeeiros, focos.",
  },
  {
    nome: "Montagem",
    descricao: "Montamos mobiliário e cozinhas.",
  },
  {
    nome: "Colocação de pavimento",
    descricao: "Instalamos pavimentos vinílicos, flutuantes e tijoleira.",
  },
  {
    nome: "Consertos",
    descricao: "Fazemos pequenos e grandes consertos urgentes.",
  },
  {
    nome: "Bricolage",
    descricao: "Montamos calhas e varões, cortinas, prateleiras, quadros.",
  },
  {
    nome: "Papel de parede",
    descricao: "Colocamos papéis de parede.",
  },
];
