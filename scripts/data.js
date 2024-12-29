/**
 * @param {number} num
 * @param {number} numberOfZeros
 * @returns {string}
 */
const padZerosLeft = (num, numberOfZeros) => {
  const numStr = num.toString();
  const zeros = "0".repeat(numberOfZeros);
  return zeros.substring(numStr.length) + numStr;
};

/**
 * @param {string} path
 * @param {number} min
 * @param {number} max
 * @returns {[]string}
 */
const loadImages = (path, min, max) => {
  const imgs = [];

  for (let i = min; i <= max; i++) {
    imgs.push(`${path}/${padZerosLeft(i, 2)}.jpg`);
  }

  return imgs;
};

/**
 * Array containing figure data.
 * @type {Object{string: {id: string, title: string, date: string, presentation: string, images: string[]}}}
 */
export const data = {
  "01-hatsune-miku-wonderland": {
    title: "Hatsune Miku Wonderland",
    date: "08 Feb. 2022",
    presentation: "images/01-hatsune-miku-wonderland/01.jpg",
    images: loadImages("images/01-hatsune-miku-wonderland", 1, 18),
  },
  "02-odette-and-odile": {
    title: "Odette & Odile",
    date: "08 Feb. 2022",
    presentation: "images/02-odette-and-odile/78.jpg",
    images: loadImages("images/02-odette-and-odile", 1, 87),
  },
  "03-hatsune-miku-summer": {
    title: "Hatsune Miku Summer",
    date: "08 Feb. 2022",
    presentation: "images/03-hatsune-miku-summer/06.jpg",
    images: loadImages("images/03-hatsune-miku-summer", 1, 28),
  },
  "04-raita-misae": {
    title: "Raita Misae Nohara Magic Girl",
    date: "30 Abr. 2022",
    presentation: "images/04-raita-misae/01.jpg",
    images: loadImages("images/04-raita-misae", 1, 17),
  },
  "05-shiraki-meiko": {
    title: "Shiraki Meiko",
    date: "30 Abr. 2022",
    presentation: "images/05-shiraki-meiko/01.jpg",
    images: loadImages("images/05-shiraki-meiko", 1, 29),
  },
  "06-akiko-kamimura": {
    title: "Natsu No Saigo No Hi- Akiko Kamimura 1/5",
    date: "30 Abr. 2022",
    presentation: "images/06-akiko-kamimura/06.jpg",
    images: loadImages("images/06-akiko-kamimura", 1, 39),
  },
  "07-suguri-hiromi": {
    title: "Suguri Hiromi",
    date: "30 Abr. 2022",
    presentation: "images/07-suguri-hiromi/06.jpg",
    images: loadImages("images/07-suguri-hiromi", 1, 18),
  },
  "08-kuwajima-yuko": {
    title: "Kuwajima Yuko",
    date: "30 Abr. 2022",
    presentation: "images/08-kuwajima-yuko/01.jpg",
    images: loadImages("images/08-kuwajima-yuko", 1, 23),
  },
  "09-asuka-langley": {
    title: "Asuka Langley",
    date: "10 Nov. 2024",
    presentation: "images/09-asuka-langley/01.jpg",
    images: loadImages("images/09-asuka-langley", 1, 19),
  },
  "10-hatsune-miku-noodle-stopper": {
    title: "Hatsune Miku Noodle Stopper",
    date: "10 Nov. 2024",
    presentation: "images/10-hatsune-miku-noodle-stopper/01.jpg",
    images: loadImages("images/10-hatsune-miku-noodle-stopper", 1, 33),
  },
  "11-racing-miku-2022-tropical": {
    title: "Racing Miku 2022 - Tropical Ver.",
    date: "10 Nov. 2024",
    presentation: "images/11-racing-miku-2022-tropical/01.jpg",
    images: loadImages("images/11-racing-miku-2022-tropical", 1, 49),
  },
  "12-cc-bare-leg-bunny-ver-14-b-style-freeing": {
    title:
      "Code Geass: Lelouch of the Rebellion - C.C. -Bare Leg Bunny Ver.- 1/4 B-style (FREEing)",
    date: "28 Dic. 2024",
    presentation: "images/12-cc-bare-leg-bunny-ver-14-b-style-freeing/150.jpg",
    images: loadImages(
      "images/12-cc-bare-leg-bunny-ver-14-b-style-freeing",
      1,
      150
    ),
  },
  "13-tonys-bunny-sisters-miio-usami-14-binding": {
    title: "Tony’s Bunny Sisters - Mio Usami 1/4 (BINDing)",
    date: "28 Dic. 2024",
    presentation: "images/13-tonys-bunny-sisters-miio-usami-14-binding/51.jpg",
    images: loadImages(
      "images/13-tonys-bunny-sisters-miio-usami-14-binding",
      1,
      212
    ),
  },
  "14-skytube-alphamax-oppai-no-egakikata-ohmune-hazumi": {
    title: "Skytube Alphamax Oppai no Egakikata Ohmune Hazumi Anime 1/6",
    date: "(INCOMING)",
    presentation:
      "images/14-skytube-alphamax-oppai-no-egakikata-ohmune-hazumi/01.jpg",
    images: loadImages(
      "images/14-skytube-alphamax-oppai-no-egakikata-ohmune-hazumi",
      1,
      1
    ),
  },
  "15-zettai-junpaku-mahou-shoujo-kuramoto-erika-bunny-ver": {
    title: "Zettai Junpaku Mahou Shoujo Kuramoto Erika 1/4 Bunny Ver",
    date: "(INCOMING)",
    presentation:
      "images/15-zettai-junpaku-mahou-shoujo-kuramoto-erika-bunny-ver/01.jpg",
    images: loadImages(
      "images/15-zettai-junpaku-mahou-shoujo-kuramoto-erika-bunny-ver",
      1,
      1
    ),
  },
  "16-q-six-sisters-natsu-no-saigo-no-hi-akiko-kamimura": {
    title: "Q-six SISTERS Natsu No Saigo No Hi Akiko Kamimura 1/5",
    date: "(INCOMING)",
    presentation:
      "images/16-q-six-sisters-natsu-no-saigo-no-hi-akiko-kamimura/01.jpg",
    images: loadImages(
      "images/16-q-six-sisters-natsu-no-saigo-no-hi-akiko-kamimura",
      1,
      1
    ),
  },
  "17-hataraku-onna-no-ureta-ase-otome-kurosawa": {
    title: "A-Plus Hataraku Onna No Ureta Ase Otome Kurosawa 1/6 (A)",
    date: "(INCOMING)",
    presentation: "images/17-hataraku-onna-no-ureta-ase-otome-kurosawa/01.jpg",
    images: loadImages(
      "images/17-hataraku-onna-no-ureta-ase-otome-kurosawa",
      1,
      1
    ),
  },
  "18-creators-opinion-momoko-uzuki-binding": {
    title: "BINDing Creator's Opinion - Momoko Uzuki 1/4 (BINDing)",
    date: "(INCOMING)",
    presentation: "images/18-creators-opinion-momoko-uzuki-binding/01.jpg",
    images: loadImages("images/18-creators-opinion-momoko-uzuki-binding", 1, 1),
  },
  "19-native-binding-kasumi-bunny-ver": {
    title: "Native BINDing Kasumi Bunny Ver. 1/4",
    date: "(INCOMING)",
    presentation: "images/19-native-binding-kasumi-bunny-ver/01.jpg",
    images: loadImages("images/19-native-binding-kasumi-bunny-ver", 1, 1),
  },
  "20-alphamax-gal-sniper-illustration-nidy-2d": {
    title: "Alphamax Gal Sniper Illustration by Nidy-2D- STD 12",
    date: "(INCOMING)",
    presentation: "images/20-alphamax-gal-sniper-illustration-nidy-2d/01.jpg",
    images: loadImages(
      "images/20-alphamax-gal-sniper-illustration-nidy-2d",
      1,
      1
    ),
  },
  "21-nasu-yurina": {
    title: "Nasu Yurina 1/4",
    date: "(INCOMING)",
    presentation: "images/21-nasu-yurina/01.jpg",
    images: loadImages("images/21-nasu-yurina", 1, 1),
  },
  "22-moehime-union-yuri-and-stella": {
    title: "Moehime Union - Yuri & Stella",
    date: "(INCOMING)",
    presentation: "images/22-moehime-union-yuri-and-stella/01.jpg",
    images: loadImages("images/22-moehime-union-yuri-and-stella", 1, 1),
  },
};
