import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/*
  As prioridades não são um pedido ao Google, são uma dica — e ele ignora-as com
  frequência. Estão aqui porque custam nada e porque dizem, a quem ler este
  ficheiro, qual é a hierarquia real do site: a inicial e o portfolio são o que
  vende, as legais existem por obrigação.
*/
const paginas = [
  { caminho: "", prioridade: 1 },
  { caminho: "/portfolio", prioridade: 0.9 },
  { caminho: "/sobrenos", prioridade: 0.7 },
  { caminho: "/contactos", prioridade: 0.8 },
  { caminho: "/politica-de-privacidade", prioridade: 0.2 },
  { caminho: "/termos-e-condicoes", prioridade: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();

  return paginas.map(({ caminho, prioridade }) => ({
    url: `${site.url}${caminho}`,
    lastModified: agora,
    priority: prioridade,
  }));
}
