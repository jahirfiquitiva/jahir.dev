import type { RandomPageImage } from '@/types';

const getRandomItem = <T>(items: T[]): T =>
  items[Math.floor(Math.random() * items.length)];

export const useRandomImage = (
  images: Array<RandomPageImage>,
): RandomPageImage => getRandomItem(images);
