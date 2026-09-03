/*
  O tipo e o estado inicial do formulário de contacto.

  ## Porque é que isto não vive no accoes.ts, ao lado da acção

  Porque um ficheiro `"use server"` só pode exportar funções assíncronas. Tudo o
  que ele exporta passa a ser chamável por um POST de fora, e por isso o Next
  recusa-se a exportar de lá qualquer outra coisa:

      A "use server" file can only export async functions, found object.

  O tipo `Estado` até sobreviveria — os tipos desaparecem na compilação —, mas o
  `ESTADO_INICIAL` é um objecto a sério e rebentava a página no primeiro envio,
  não no build. Os dois ficam aqui, num módulo comum que o servidor e o cliente
  podem importar à vontade.
*/
export type Estado = {
  estado: "inerte" | "ok" | "erro";
  mensagem?: string;
  /* Que campos falharam, para o formulário os poder marcar. */
  campos?: string[];
};

export const ESTADO_INICIAL: Estado = { estado: "inerte" };
