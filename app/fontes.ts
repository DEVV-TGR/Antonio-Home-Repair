/*
  As fontes num ficheiro à parte porque o `next/font` tem de ser chamado no
  topo de um módulo, e o layout já tem que chegue. A variável CSS que sai
  daqui é a que o `globals.css` monta em `--font-sans`.
*/
import { Inter } from "next/font/google";

export const sans = Inter({
  subsets: ["latin"],
  variable: "--fonte-sans",
  display: "swap",
});
