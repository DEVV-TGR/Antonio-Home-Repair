"use client";

/*
  O formulário.

  `useActionState` em vez de estado à mão: o React trata do pendente, do
  resultado e de repovoar o formulário quando a acção falha. O que sobra para
  escrever é o aspecto e as mensagens.

  ## O que faz este formulário acessível, e não é a aparência

  - Cada campo tem um `<label>` a sério, ligado por `htmlFor`. Um `placeholder`
    não é uma etiqueta: desaparece quando se começa a escrever, que é
    precisamente quando é preciso.
  - Os campos que falharam levam `aria-invalid`, e o aviso vive numa região com
    `role="status"`, para ser anunciado sem roubar o foco.
  - O `autoComplete` está preenchido para o telemóvel e o email se poderem
    preencher sozinhos. Num telemóvel isto é a diferença entre enviar e desistir.
  - O `inputMode="tel"` traz o teclado numérico.

  ## O campo-armadilha

  `morada_alternativa` está escondido com posição absoluta e `aria-hidden`, e
  não com `display:none` — há robots que ignoram campos com `display:none`. Tem
  `tabIndex={-1}` para o teclado não lhe passar por cima.
*/
import { useActionState } from "react";
import Link from "next/link";
import { enviarPedido } from "@/app/contactos/accoes";
import { ESTADO_INICIAL } from "@/lib/contacto";

const CAMPO =
  "mt-2 w-full border border-linha bg-papel px-4 py-3 text-[0.9375rem] text-tinta outline-none transition-colors placeholder:text-cinza/50 focus:border-tinta";
const ERRADO = "border-red-700";

export function FormularioContacto() {
  const [estado, accao, pendente] = useActionState(enviarPedido, ESTADO_INICIAL);

  const falhou = (campo: string) => estado.campos?.includes(campo) ?? false;
  const marca = (campo: string) => `${CAMPO} ${falhou(campo) ? ERRADO : ""}`;

  if (estado.estado === "ok") {
    return (
      <div
        role="status"
        className="border-l-2 border-ambar bg-papel-fundo px-6 py-8"
      >
        <h3 className="font-display text-xl font-bold tracking-tight">
          Pedido enviado.
        </h3>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-cinza">
          {estado.mensagem} Se for urgente, ligue — é mais rápido do que
          esperar por um email.
        </p>
      </div>
    );
  }

  return (
    <form action={accao} className="flex flex-col gap-5">
      {estado.estado === "erro" && (
        <p
          role="status"
          className="border-l-2 border-red-700 bg-red-50 px-4 py-3 text-sm text-red-900"
        >
          {estado.mensagem}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="etiqueta text-tinta">
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            autoComplete="name"
            aria-invalid={falhou("nome") || undefined}
            className={marca("nome")}
          />
        </div>

        <div>
          <label htmlFor="telemovel" className="etiqueta text-tinta">
            Telemóvel
          </label>
          <input
            id="telemovel"
            name="telemovel"
            type="tel"
            inputMode="tel"
            required
            autoComplete="tel"
            aria-invalid={falhou("telemovel") || undefined}
            className={`${marca("telemovel")} numeros`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="etiqueta text-tinta">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-invalid={falhou("email") || undefined}
          className={marca("email")}
        />
      </div>

      <div>
        <label htmlFor="mensagem" className="etiqueta text-tinta">
          Como podemos ajudar?
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          maxLength={2000}
          aria-invalid={falhou("mensagem") || undefined}
          className={`${marca("mensagem")} resize-y`}
        />
      </div>

      <div
        aria-hidden
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="morada_alternativa">Morada alternativa</label>
        <input
          id="morada_alternativa"
          name="morada_alternativa"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="termos"
          name="termos"
          type="checkbox"
          required
          aria-invalid={falhou("termos") || undefined}
          className="mt-0.5 h-4 w-4 shrink-0 accent-ambar"
        />
        <label htmlFor="termos" className="text-sm leading-relaxed text-cinza">
          Declaro que aceito os{" "}
          <Link
            href="/termos-e-condicoes"
            className="text-tinta underline decoration-linha underline-offset-4 hover:decoration-tinta"
          >
            Termos e Condições
          </Link>{" "}
          e a{" "}
          <Link
            href="/politica-de-privacidade"
            className="text-tinta underline decoration-linha underline-offset-4 hover:decoration-tinta"
          >
            Política de Privacidade
          </Link>
          .
        </label>
      </div>

      <button
        type="submit"
        disabled={pendente}
        className="mt-1 inline-flex items-center justify-center bg-ambar px-6 py-3.5 font-display text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-tinta transition-colors hover:bg-tinta hover:text-papel disabled:cursor-progress disabled:opacity-60 disabled:hover:bg-ambar disabled:hover:text-tinta"
      >
        {pendente ? "A enviar…" : "Enviar pedido"}
      </button>
    </form>
  );
}
