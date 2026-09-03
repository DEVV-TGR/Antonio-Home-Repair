"use server";

/*
  O envio do formulário de contacto.

  ## Porque não há SDK do Resend

  A API do Resend para mandar um email é um POST com um objecto de quatro
  campos. O SDK oficial faz isso e traz dependências atrás. Um `fetch` faz o
  mesmo, sem nada para actualizar quando houver um CVE numa dependência
  transitiva que nunca ninguém pediu.

  ## O corpo vai em texto e não em HTML

  Tudo o que aqui entra foi escrito por um desconhecido na internet. Em `text`,
  o que ele escrever é o que se lê no Gmail do António e mais nada — não há
  marcação para injectar. Em `html`, uma mensagem com `<img src=x onerror=…>`
  passava a ser um problema do lado dele.

  ## O `reply_to`

  O remetente tem de ser um endereço do domínio verificado, senão o Resend
  recusa com 403. Mas quem responde no Gmail quer responder ao cliente e não ao
  próprio painel — daí o `reply_to` com o email de quem preencheu.

  ## Validação

  Feita aqui e não só no browser. O `required` do HTML é uma cortesia para quem
  preenche; quem manda um POST à mão nem o vê.
*/
import { site } from "@/lib/site";

export type Estado = {
  estado: "inerte" | "ok" | "erro";
  mensagem?: string;
  /* Que campos falharam, para o formulário os poder marcar. */
  campos?: string[];
};

export const ESTADO_INICIAL: Estado = { estado: "inerte" };

const LIMITES = {
  nome: [2, 100],
  telemovel: [9, 20],
  mensagem: [5, 2000],
} as const;

function texto(dados: FormData, campo: string) {
  const valor = dados.get(campo);
  return typeof valor === "string" ? valor.trim() : "";
}

export async function enviarPedido(
  _anterior: Estado,
  dados: FormData,
): Promise<Estado> {
  /*
    O campo-armadilha. Está escondido de quem vê a página e de quem a ouve; um
    robot que preencha tudo o que encontra preenche-o também. Não é uma defesa
    séria contra alguém determinado — é o suficiente para o ruído automático, e
    custa uma linha.
  */
  if (texto(dados, "morada_alternativa")) {
    return { estado: "ok" };
  }

  const nome = texto(dados, "nome");
  const email = texto(dados, "email");
  const telemovel = texto(dados, "telemovel");
  const mensagem = texto(dados, "mensagem");
  const termos = dados.get("termos");

  const falhas: string[] = [];

  if (nome.length < LIMITES.nome[0] || nome.length > LIMITES.nome[1]) {
    falhas.push("nome");
  }
  /* Não se valida um email a fundo com uma expressão: a única prova de que um
     endereço existe é mandar-lhe uma mensagem. Isto apanha o que está
     obviamente mal — sem arroba, sem ponto depois dela, com espaços. */
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    falhas.push("email");
  }
  const digitos = telemovel.replace(/\D/g, "");
  if (
    digitos.length < LIMITES.telemovel[0] ||
    digitos.length > LIMITES.telemovel[1]
  ) {
    falhas.push("telemovel");
  }
  if (
    mensagem.length < LIMITES.mensagem[0] ||
    mensagem.length > LIMITES.mensagem[1]
  ) {
    falhas.push("mensagem");
  }
  if (termos !== "on") {
    falhas.push("termos");
  }

  if (falhas.length > 0) {
    return {
      estado: "erro",
      mensagem: "Faltam dados no formulário. Confirme os campos assinalados.",
      campos: falhas,
    };
  }

  const chave = process.env.RESEND_API_KEY;
  const remetente = process.env.RESEND_REMETENTE;
  const destino = process.env.CONTACTO_DESTINO ?? site.email;

  /*
    Sem configuração, o formulário diz que não pode enviar em vez de fingir que
    enviou. Um formulário que engole pedidos em silêncio é pior do que não ter
    formulário: quem o preencheu vai ficar à espera de uma resposta que nunca
    foi pedida a ninguém.
  */
  if (!chave || !remetente) {
    console.error(
      "Formulário de contacto sem configuração: falta RESEND_API_KEY ou RESEND_REMETENTE.",
    );
    return {
      estado: "erro",
      mensagem: `Não foi possível enviar o pedido. Ligue para ${site.telefoneVisivel} ou escreva para ${site.email}.`,
    };
  }

  try {
    const resposta = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${chave}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: remetente,
        to: [destino],
        reply_to: email,
        subject: `Pedido de orçamento — ${nome}`,
        text: [
          `Nome: ${nome}`,
          `Email: ${email}`,
          `Telemóvel: ${telemovel}`,
          "",
          "Como podemos ajudar:",
          mensagem,
          "",
          "—",
          `Enviado pelo formulário de ${site.url}/contactos`,
        ].join("\n"),
      }),
    });

    if (!resposta.ok) {
      /* O corpo do erro do Resend diz o que está mal (domínio não verificado,
         chave inválida) e é para os registos, não para o ecrã de quem
         preencheu. */
      console.error("Resend recusou o envio:", resposta.status, await resposta.text());
      throw new Error(`Resend devolveu ${resposta.status}`);
    }
  } catch (erro) {
    console.error("Falha ao enviar o pedido de contacto:", erro);
    return {
      estado: "erro",
      mensagem: `Não foi possível enviar o pedido. Ligue para ${site.telefoneVisivel} ou escreva para ${site.email}.`,
    };
  }

  return {
    estado: "ok",
    mensagem: "Pedido enviado. O António entra em contacto em breve.",
  };
}
