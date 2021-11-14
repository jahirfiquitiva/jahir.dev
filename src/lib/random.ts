const getRandomItem = <T>(items: T[]): T =>
  items[Math.floor(Math.random() * items.length)];

export default getRandomItem;
