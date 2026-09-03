/*
  Converte os originais de `originais/` para webp em `public/images/`.

  Os originais não vão para o repositório: são PNGs de 1 a 2 MB descarregados do
  WordPress antigo (as fotografias de obra) ou fotografia de stock que já lá
  estava. O `.gitignore` ignora a pasta; o `public/images/README.md` diz de onde
  veio cada um, para se poderem ir buscar outra vez.

  Correr com `npm run imagens`. É um passo manual — não corre no build, porque o
  que interessa ao build são os webp, e esses estão versionados.

  ## Porque não há corte

  Os quatro pares antes/depois têm proporções diferentes entre si (0.75, 0.97,
  0.74) mas iguais dentro de cada par, que é o que o slider exige. Cortar tudo
  para uma proporção comum estragava a cozinha, que é quase quadrada. Cada
  projecto guarda a sua proporção em `lib/projectos.ts` e o slider adopta-a.
*/
import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";

const ORIGEM = "originais";
const DESTINO = "public/images";

/* As fotografias de obra são vistas no máximo a meia largura de um ecrã
   grande; 1200px de largura chegam e sobram. As duas de ferramentas atravessam
   o ecrã todo em banda, e por isso vão maiores. */
const LARGURAS = { ferramentas: 2000, obra: 1200 };

await mkdir(DESTINO, { recursive: true });

const ficheiros = (await readdir(ORIGEM)).filter((f) => /\.(png|jpe?g)$/i.test(f));

for (const ficheiro of ficheiros) {
  const nome = ficheiro.replace(/\.(png|jpe?g)$/i, "");
  const largura = nome.startsWith("ferramentas")
    ? LARGURAS.ferramentas
    : LARGURAS.obra;

  const info = await sharp(`${ORIGEM}/${ficheiro}`)
    .resize({ width: largura, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(`${DESTINO}/${nome}.webp`);

  console.log(
    `${nome}.webp  ${info.width}×${info.height}  ${(info.size / 1024).toFixed(0)} kB`,
  );
}
