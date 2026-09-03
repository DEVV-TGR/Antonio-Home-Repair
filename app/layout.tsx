import type { Metadata } from "next";
import { sans } from "./fontes";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.nome,
    template: `%s | ${site.nome}`,
  },
  description: site.descricao,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt">
      <body className={`${sans.variable} antialiased`}>{children}</body>
    </html>
  );
}
