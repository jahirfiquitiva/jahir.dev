import { allBlogs, type Blog } from 'contentlayer/generated';

type ConvertUndefined<T> = OrUndefined<{
  [K in keyof T as undefined extends T[K] ? K : never]-?: T[K];
}>;
type OrUndefined<T> = { [K in keyof T]: T[K] | undefined };
type PickRequired<T> = {
  [K in keyof T as undefined extends T[K] ? never : K]: T[K];
};
type ConvertPick<T> = ConvertUndefined<T> & PickRequired<T>;

export const pick = <Obj, Keys extends keyof Obj>(
  obj: Obj,
  keys: Keys[],
): ConvertPick<{ [K in Keys]: Obj[K] }> => {
  return keys.reduce((acc, key) => {
    acc[key] = obj[key] || null;
    return acc;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {} as any);
};

export const getAllPosts = (
  fields: (keyof Blog)[] = [],
  allowInProgress: boolean = false,
): Array<Blog> => {
  const filteredPosts = allBlogs
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .filter(
      (it: Blog) =>
        it.title?.length > 0 &&
        it.slug?.length > 0 &&
        (allowInProgress || !it.inProgress),
    );
  return fields && fields.length
    ? filteredPosts.map((post: Blog) => pick(post, fields))
    : filteredPosts;
};
