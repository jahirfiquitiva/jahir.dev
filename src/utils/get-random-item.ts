const getRandomItemFrom = <T extends unknown>(items: T[]): T => {
  return items[Math.floor(Math.random() * items.length)];
};

export default getRandomItemFrom;
