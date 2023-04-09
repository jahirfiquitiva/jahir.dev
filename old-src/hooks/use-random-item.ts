import { useState, useEffect } from 'react';

import { getRandomItem } from '@/old/utils/random';

export const useRandomItem = <T>(items: Array<T>): T | undefined => {
  const [randomItem, setRandomItem] = useState<T | undefined>(undefined);
  useEffect(() => {
    setRandomItem(getRandomItem(items));
  }, [items]);
  return randomItem;
};
