import { unstable_cache as cache } from 'next/cache';

const imagesAlts: Array<string> = [
  "At Festival Estéreo Picnic – Mar '23",
  "At The Angel of Independence in Mexico City – Oct '23",
  "In Valle de Bravo, México – Oct '23",
  "In Medellin, Colombia – Nov '23",
  "In Medellin, Colombia – Nov '23",
];
const index = Math.floor(Math.random() * imagesAlts.length);

export const getAboutImage = cache(
  async () => {
    const src = await import(`../../assets/images/about/${index}.jpeg`);
    return {
      src: JSON.parse(JSON.stringify(src)),
      alt: imagesAlts[index],
    };
  },
  ['about-image'],
  { revalidate: 86400 },
);
