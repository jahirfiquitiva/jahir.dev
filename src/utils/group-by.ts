export const groupBy = <T, K extends keyof never>(
  list: Array<T> | T[],
  getKey: (item: T) => K,
) =>
  list.reduce(
    (previous, currentItem) => {
      const group = getKey(currentItem);
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!previous[group]) previous[group] = [];
      previous[group].push(currentItem);
      return previous;
    },
    {} as Record<K, T[]>,
  );
