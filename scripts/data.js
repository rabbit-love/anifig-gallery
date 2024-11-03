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
 * @type {Array<{title: string, date: string, presentation: string, images: string[]}>}
 */
export const data = [
  {
    title: "Hatsune Miku Wonderland",
    date: "08 Feb. 2022",
    presentation: "images/01-hatsune-miku-wonderland/01.jpg",
    images: loadImages("images/01-hatsune-miku-wonderland", 1, 18),
  },
  {
    title: "Odette & Odile",
    date: "08 Feb. 2022",
    presentation: "images/02-odette-and-odile/78.jpg",
    images: loadImages("images/02-odette-and-odile", 1, 87),
  },
  {
    title: "Hatsune Miku Summer",
    date: "08 Feb. 2022",
    presentation: "images/03-hatsune-miku-summer/06.jpg",
    images: loadImages("images/03-hatsune-miku-summer", 1, 28),
  },
  {
    title: "Raita Misae Nohara Magic Girl",
    date: "30 Abr. 2022",
    presentation: "images/04-raita-misae/01.jpg",
    images: loadImages("images/04-raita-misae", 1, 17),
  },
  {
    title: "Shiraki Meiko",
    date: "30 Abr. 2022",
    presentation: "images/05-shiraki-meiko/01.jpg",
    images: loadImages("images/05-shiraki-meiko", 1, 29),
  },
  {
    title: "Natsu No Saigo No Hi- Akiko Kamimura 1/5",
    date: "30 Abr. 2022",
    presentation: "images/06-akiko-kamimura/06.jpg",
    images: loadImages("images/06-akiko-kamimura", 1, 39),
  },
  {
    title: "Suguri Hiromi",
    date: "30 Abr. 2022",
    presentation: "images/07-suguri-hiromi/06.jpg",
    images: loadImages("images/07-suguri-hiromi", 1, 18),
  },
  {
    title: "Kuwajima Yuko",
    date: "30 Abr. 2022",
    presentation: "images/08-kuwajima-yuko/01.jpg",
    images: loadImages("images/08-kuwajima-yuko", 1, 23),
  },
];
