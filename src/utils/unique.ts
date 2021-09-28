/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable operator-linebreak */
export const unique = <T>(
  array: Array<T> | T[],
  property?: string,
): Array<T> => {
  if (!property || !property.length) {
    return Array.from(new Set([...array]));
  }

  const compare =
    typeof property === 'function'
      ? property
      : // @ts-ignore
        (left: T, right: T) => left[property] === right[property];

  // eslint-disable-next-line no-array-constructor
  const newArray = new Array<T>();

  array.forEach((right) => {
    const run = (left: T) => compare.call(this, left, right);
    const i = newArray.findIndex(run);
    if (i === -1) newArray.push(right);
  });

  return newArray;
};
