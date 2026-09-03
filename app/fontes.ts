/*
  As fontes num ficheiro à parte porque o `next/font` tem de ser chamado no topo
  de um módulo, e o layout já tem que chegue. As variáveis CSS que saem daqui são
  as que o `globals.css` monta em `--font-display` e `--font-sans`.

  ## Porquê estas duas

  O wordmark do logo é maiúsculas desenhadas à mão, condensadas e um pouco
  tortas. A `Archivo` é o que mais perto chega disso sem ser um pastiche: grotesca
  variável, estreita, que aguenta pesos altos com o tracking apertado. É o
  registo industrial que a marca pede.

  A `Inter` fica para o corpo, onde o que interessa é ler. Os numerais tabulares
  são para o telefone não dançar entre estados.
*/
import { Archivo, Inter } from "next/font/google";

export const display = Archivo({
  subsets: ["latin"],
  variable: "--fonte-display",
  display: "swap",
  axes: ["wdth"],
});

export const sans = Inter({
  subsets: ["latin"],
  variable: "--fonte-sans",
  display: "swap",
});
