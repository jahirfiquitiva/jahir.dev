// eslint-disable-next-line no-unused-vars
export type UtilFunc<T> = (value: T) => Record<string, unknown>;

export type UtilsObject<T> = Record<string, UtilFunc<T>>;
