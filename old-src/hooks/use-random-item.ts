import { useState, useEffect } from 'react';

import { getRandomItem } from '@/utils/random';

export const useRandomItem = <T>(items: Array<T>): T | undefined => {
  const [randomItem, setRandomItem] = useState<T | undefined>(undefined);
  useEffect(() => {
    setRandomItem(getRandomItem(items));
  }, [items]);
  return randomItem;
};
