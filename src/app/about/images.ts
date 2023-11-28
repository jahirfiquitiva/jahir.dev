const imagesAlts: Array<string> = [
  "Hanging out with friends in Playa Blanca, Boyacá, Colombia – Jul '21",
  "Visiting Sativa Norte, Boyacá, Colombia – Jan '22",
  "Hanging out with friends at a cafe – Feb '22",
  "In a neon room at Graffiti Tour in Medellin – Jun '22",
  "Visiting Medellin – Jun '22",
  "At Festival Estéreo Picnic – Mar '23",
  "At Festival Estéreo Picnic – Mar '23",
  "Next to a waterfall in my hometown – Jun '23",
  "At The Angel of Independence in Mexico City – Oct '23",
  "At The Angel of Independence in Mexico City – Oct '23",
  "At Museo Torres Bicentenario, Toluca, México – Oct '23",
  "In Valle de Bravo, México – Oct '23",
  "In Medellin, Colombia – Nov '23",
  "In Medellin, Colombia – Nov '23",
  "In Medellin, Colombia – Nov '23",
];

const randomBetween = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const getAboutImage = async () => {
  const index = randomBetween(0, imagesAlts.length);
  const src = await import(`../../assets/images/about/${index}.jpeg`);
  return {
    src: JSON.parse(JSON.stringify(src)),
    alt: imagesAlts[index],
  };
};
