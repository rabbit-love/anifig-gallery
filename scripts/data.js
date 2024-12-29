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
};
