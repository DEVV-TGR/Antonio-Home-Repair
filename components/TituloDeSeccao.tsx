/*
  O cabeçalho de uma secção: etiqueta pequena, título grande, e um texto de
  entrada opcional. Está aqui num componente porque se repete cinco vezes e
  quando se repete cinco vezes acaba sempre por ficar diferente em duas.
*/
import { Casa } from "./Casa";

export function TituloDeSeccao({
  etiqueta,
  titulo,
  texto,
  claro = false,
  nivel = 2,
}: {
  etiqueta: string;
  titulo: string;
  texto?: string;
  /* Sobre a banda escura as cores invertem-se. */
  claro?: boolean;
  /* A página inicial já gastou o <h1> no hero; nas outras páginas o título da
     secção de topo é que é o <h1>. */
  nivel?: 1 | 2;
}) {
  const Titulo = nivel === 1 ? "h1" : "h2";

  return (
    <div className="max-w-2xl">
      <p
        className={`etiqueta flex items-center gap-2.5 ${
          claro ? "text-ambar" : "text-ambar-texto"
        }`}
      >
        <Casa className="h-3.5 w-3.5" cheia />
        {etiqueta}
      </p>
      <Titulo
        className={`titulo mt-5 text-[clamp(2rem,5.5vw,3.25rem)] ${
          claro ? "text-papel" : "text-tinta"
        }`}
      >
        {titulo}
      </Titulo>
      {texto && (
        <p
          className={`mt-6 text-[1.0625rem] leading-relaxed ${
            claro ? "text-papel/70" : "text-cinza"
          }`}
        >
          {texto}
        </p>
      )}
    </div>
  );
}
