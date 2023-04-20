/* eslint-disable operator-linebreak */
export const unique = <T, Key extends keyof T>(
  array: Array<T> | T[],
  property?: Key,
): Array<T> => {
  if (!property) {
    return Array.from(new Set([...array]));
  }

  const set = new Set();
  return array.filter((o: T) => {
    return !set.has(o[property]) && set.add(o[property]);
  });
};
