import { cache } from 'react';

const imagesAlts: Array<string> = [
  "At Festival Estéreo Picnic – Mar '23",
  "At The Angel of Independence in Mexico City – Oct '23",
  "In Valle de Bravo, México – Oct '23",
  "In Medellin, Colombia – Nov '23",
  "In Medellin, Colombia – Nov '23",
];

const randomBetween = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const getAboutImage = cache(async () => {
  const index = randomBetween(0, imagesAlts.length - 1);
  const src = await import(`../../assets/images/about/${index + 1}.jpeg`);
  return {
    src: JSON.parse(JSON.stringify(src)),
    alt: imagesAlts[index],
  };
});

export const revalidate = 86400;
