import { site } from "@/lib/site";

export default function Pagina() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-2 p-8 text-center">
      <h1 className="text-2xl font-semibold">{site.nome}</h1>
      <p className="text-sm opacity-70">{site.descricao}</p>
    </main>
  );
}
