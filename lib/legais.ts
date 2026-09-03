/*
  As duas páginas legais.

  O texto é o do site antigo, palavra por palavra. **Não foi reescrito nem
  melhorado de propósito**: é texto jurídico que o cliente publicou e assumiu, e
  reescrevê-lo por iniciativa própria muda aquilo a que ele se comprometeu
  perante quem lhe entrega dados. O que se corrigiu foi só a marcação — as
  listas eram parágrafos com hífenes à frente, e havia um `- -` de um dos
  plugins.

  A data de actualização também é a original. Passa a ser outra quando o texto
  mudar, e não quando o site for refeito.

  Duas notas para o cliente, em docs/PLANO.md: falta a identificação da entidade
  (nome fiscal, NIF, sede) que o RGPD pede ao responsável pelo tratamento, e a
  política de cookies diz "pode utilizar cookies" quando este site não põe
  nenhum.
*/
export type SeccaoLegal = {
  numero: number;
  titulo: string;
  texto?: string;
  lista?: string[];
  /* O que vem depois da lista, quando há. */
  remate?: string;
};

export type Legal = {
  titulo: string;
  actualizacao: string;
  introducao: string[];
  seccoes: SeccaoLegal[];
  fecho: string;
};

export const privacidade: Legal = {
  titulo: "Política de Privacidade",
  actualizacao: "30/03/2025",
  introducao: [
    "A António Home Repair Services valoriza a privacidade dos seus utilizadores e está comprometida em proteger os dados pessoais fornecidos através do nosso website. Esta Política de Privacidade explica como recolhemos, utilizamos e protegemos as informações dos nossos utilizadores.",
  ],
  seccoes: [
    {
      numero: 1,
      titulo: "Dados Recolhidos",
      texto:
        "O nosso website apenas recolhe os seguintes dados pessoais quando preenchidos voluntariamente pelo utilizador:",
      lista: ["Nome", "Endereço de e-mail", "Número de telemóvel"],
    },
    {
      numero: 2,
      titulo: "Finalidade da Recolha de Dados",
      texto: "Os dados recolhidos são utilizados exclusivamente para os seguintes fins:",
      lista: [
        "Responder a pedidos de informação e contacto por parte do utilizador;",
        "Marcação de serviços;",
        "Comunicação sobre os nossos serviços.",
      ],
    },
    {
      numero: 3,
      titulo: "Partilha de Dados",
      texto:
        "A António Home Repair Services não vende, aluga ou partilha os dados pessoais dos utilizadores com terceiros, salvo quando exigido por lei.",
    },
    {
      numero: 4,
      titulo: "Segurança dos Dados",
      texto:
        "Implementamos medidas de segurança para proteger os dados dos utilizadores contra acessos não autorizados, alterações, divulgação ou destruição.",
    },
    {
      numero: 5,
      titulo: "Direitos dos Utilizadores",
      texto: "Os utilizadores têm o direito de:",
      lista: [
        "Aceder aos seus dados pessoais;",
        "Solicitar a correção ou eliminação dos seus dados;",
        "Retirar o consentimento para o tratamento dos seus dados.",
      ],
      remate:
        "Para exercer estes direitos, pode contactar-nos através do nosso e-mail: antoniohomerepairservices@gmail.com.",
    },
    {
      numero: 6,
      titulo: "Cookies",
      texto:
        "O nosso website pode utilizar cookies para melhorar a experiência do utilizador. Os utilizadores podem configurar o seu navegador para bloquear ou eliminar cookies.",
    },
    {
      numero: 7,
      titulo: "Alterações à Política de Privacidade",
      texto:
        "Reservamo-nos o direito de atualizar esta Política de Privacidade. Qualquer alteração será comunicada no nosso website.",
    },
    {
      numero: 8,
      titulo: "Contacto",
      texto:
        "Para qualquer questão relacionada com esta Política de Privacidade, pode contactar-nos através de:",
      lista: [
        "E-mail: antoniohomerepairservices@gmail.com",
        "Telefone: (+351) 913 307 445 (chamadas para as redes móveis nacionais)",
      ],
    },
  ],
  fecho: "A utilização do nosso website implica a aceitação desta Política de Privacidade.",
};

export const termos: Legal = {
  titulo: "Termos e Condições",
  actualizacao: "30/03/2025",
  introducao: [
    "Ao aceder e utilizar o website da António Home Repair Services, o utilizador concorda em cumprir os presentes Termos e Condições. Caso não concorde com os mesmos, deve abster-se de utilizar este website.",
  ],
  seccoes: [
    {
      numero: 1,
      titulo: "Utilização do Website",
      texto:
        "O website destina-se apenas a fornecer informações sobre os serviços prestados pela António Home Repair Services. Os utilizadores podem preencher formulários para solicitar informações ou marcar serviços.",
    },
    {
      numero: 2,
      titulo: "Dados Pessoais",
      texto:
        "Ao fornecer os seus dados (nome, e-mail, número de telemóvel), o utilizador declara que as informações são verdadeiras e completas. O tratamento dos dados rege-se pela nossa Política de Privacidade.",
    },
    {
      numero: 3,
      titulo: "Propriedade Intelectual",
      texto:
        "Todos os conteúdos deste website, incluindo textos, imagens, logótipos e design, são propriedade da António Home Repair Services ou licenciados para o seu uso. É proibida a reprodução, distribuição ou modificação sem autorização prévia.",
    },
    {
      numero: 4,
      titulo: "Limitação de Responsabilidade",
      texto:
        "A António Home Repair Services não se responsabiliza por eventuais erros, interrupções ou falhas no funcionamento do website, bem como por qualquer dano resultante da utilização das informações disponibilizadas.",
    },
    {
      numero: 5,
      titulo: "Ligações a Terceiros",
      texto:
        "O website pode conter ligações para websites externos. A António Home Repair Services não se responsabiliza pelo conteúdo ou práticas de privacidade desses websites.",
    },
    {
      numero: 6,
      titulo: "Alterações aos Termos e Condições",
      texto:
        "A António Home Repair Services reserva-se o direito de modificar estes Termos e Condições a qualquer momento. As alterações entrarão em vigor após a sua publicação no website.",
    },
    {
      numero: 7,
      titulo: "Contacto",
      texto:
        "Para qualquer questão sobre estes Termos e Condições, pode contactar-nos através de:",
      lista: [
        "E-mail: antoniohomerepairservices@gmail.com",
        "Telefone: (+351) 913 307 445",
      ],
    },
  ],
  fecho: "A utilização deste website implica a aceitação destes Termos e Condições.",
};
