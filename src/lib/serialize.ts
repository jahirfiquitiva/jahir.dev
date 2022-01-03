/* eslint-disable @typescript-eslint/no-explicit-any */
export const serialize = (obj: { [key: string | number]: any }) => {
  const str = [];
  for (const p in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, p)) {
      str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
    }
  }
  return str.join('&');
};
