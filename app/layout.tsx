import type { Metadata } from "next";
import { display, sans } from "./fontes";
import { site } from "@/lib/site";
import { servicos } from "@/lib/servicos";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BarraMovel } from "@/components/BarraMovel";
import { Perguntas } from "@/components/Perguntas";
import { MascaraDaCasa } from "@/components/Casa";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nome} — Reparações e pequenas obras na Maia`,
    template: `%s | ${site.nome}`,
  },
  description: site.descricao,
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: site.nome,
    title: `${site.nome} — Reparações e pequenas obras na Maia`,
    description: site.descricao,
    /* JPEG e não webp: o WhatsApp e o Facebook ainda deixam cair partilhas com
       webp, e uma partilha sem imagem parece um link morto. Gerada por
       `npm run imagens`. */
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `Ferramentas alinhadas com o logótipo da ${site.nome}.`,
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  /* Sem `alternates.canonical` aqui: cada página declara o seu. Um canónico
     herdado do layout aponta a página toda para a raiz. */
};

/*
  Os dados estruturados de negócio local.

  É o que faz o Google mostrar o telefone e a zona directamente nos resultados,
  e para um negócio de bairro vale mais do que qualquer palavra-chave metida no
  texto. `HomeAndConstructionBusiness` é o tipo certo — mais específico do que
  `LocalBusiness` e reconhecido pelo Google.

  A morada só tem a localidade porque é só isso que o cliente publica: não há
  loja, o trabalho é em casa de quem contrata.
*/
function dadosEstruturados() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.nome,
    description: site.descricao,
    url: site.url,
    telephone: site.telefone,
    email: site.email,
    image: `${site.url}/images/ferramentas-alinhadas.webp`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Maia",
      addressCountry: "PT",
    },
    areaServed: { "@type": "City", name: "Maia" },
    sameAs: [site.instagram, site.facebook],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços",
      itemListElement: servicos.map((servico) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: servico.nome },
      })),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT">
      <body className={`${display.variable} ${sans.variable}`}>
        <script
          type="application/ld+json"
          /* O objecto é escrito neste ficheiro, a partir do lib/site.ts. Não
             entra nada de fora — não há aqui superfície de injecção. */
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados()) }}
        />
        <MascaraDaCasa />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-tinta focus:px-4 focus:py-2 focus:text-sm focus:text-papel"
        >
          Saltar para o conteúdo
        </a>
        <Nav />
        <main id="conteudo">{children}</main>
        <Footer />
        <Perguntas />
        <BarraMovel />
      </body>
    </html>
  );
}
