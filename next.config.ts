import type { NextConfig } from "next";
import { cabecalhos } from "./lib/cabecalhos";

/*
  Sem `images.remotePatterns`: toda a fotografia é local, em /public/images. Se
  alguma vez voltar a haver imagem remota, é sinal de que algo correu mal.

  ## Os redirects

  Os slugs do WordPress ficaram todos — `/portfolio`, `/sobrenos`,
  `/contactos` — porque estão indexados e trocá-los deitava fora o que o Google
  já tem. As duas excepções são as páginas legais, cujos endereços antigos eram
  `politivaprivacidade` (com a gralha lá dentro) e `termosecondicoes`, tudo
  colado. Essas mudaram, e os antigos respondem em permanente para os novos:
  quem tem o link antigo continua a chegar, e os motores de busca transferem
  para o novo o que o antigo tinha acumulado.

  `permanent: true` e não `false`, de propósito: só um redirect permanente faz o
  Google substituir o endereço no índice em vez de manter os dois.

  O código que sai é **308** e não 301 — é o que o Next emite para
  `permanent: true`, porque o 308 preserva o método do pedido e o 301 não. Para
  efeitos de indexação o Google trata os dois da mesma maneira; quem for
  verificar isto à mão com `curl -I` vai ver 308 e não se deve assustar.
*/
const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:caminho*", headers: cabecalhos }];
  },

  async redirects() {
    return [
      {
        source: "/politivaprivacidade",
        destination: "/politica-de-privacidade",
        permanent: true,
      },
      {
        source: "/termosecondicoes",
        destination: "/termos-e-condicoes",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
