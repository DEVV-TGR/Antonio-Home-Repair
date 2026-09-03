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

/*
  A imagem de partilha.

  1200×630 e JPEG, que é o que o Facebook e o WhatsApp aceitam sem discutir —
  webp continua a falhar em alguns clientes, e uma partilha sem imagem parece um
  link morto.

  Não é gerada com o `next/og`: o `ImageResponse` desenha texto e para desenhar
  texto precisa de receber o ficheiro da fonte, e isso é uma peça a mais para
  manter. Aqui é a fotografia das ferramentas com o logo por cima, e mais nada.

  ## Nem véu escuro, nem logo invertido

  A primeira tentativa levava as duas coisas: um véu preto a 62% e o logo
  passado a branco com `negate`. As duas anulavam-se — o `negate` de um traço
  preto sobre transparente devolve um selo de fundo preto, e um selo preto sobre
  um véu preto não se lê.

  A fotografia é clara, de fundo quase branco. Logo preto sobre ela chega, e as
  ferramentas continuam a ver-se, que é metade do que a imagem tem para dizer. O
  filete âmbar em baixo é a única marca de cor.
*/
const LOGO = 260;

const logo = await sharp("public/images/logo.svg", { density: 300 })
  .resize({ width: LOGO })
  .png()
  .toBuffer();

const filete = Buffer.from(
  `<svg width="1200" height="630">
     <rect x="0" y="610" width="1200" height="20" fill="#e8a317"/>
   </svg>`,
);

const og = await sharp("originais/ferramentas-alinhadas.png")
  .resize({ width: 1200, height: 630, fit: "cover", position: "centre" })
  .composite([
    { input: logo, gravity: "centre" },
    { input: filete, top: 0, left: 0 },
  ])
  .jpeg({ quality: 86 })
  .toFile("public/og.jpg");

console.log(`og.jpg  ${og.width}×${og.height}  ${(og.size / 1024).toFixed(0)} kB`);
