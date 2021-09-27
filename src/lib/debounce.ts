/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce = (
  fn: Function,
  ms?: number,
  immediate?: boolean,
): Function => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    const callNow = immediate && !ms;
    const next = () => fn.apply(this, args);

    clearTimeout(timeoutId);
    timeoutId = setTimeout(next, ms);
    if (callNow) next();
  };
};
