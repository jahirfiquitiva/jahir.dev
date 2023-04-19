import { db, type CountersReactions } from '@/lib/planetscale';

export const getPostsReactions = async () => {
  try {
    const data = await db
      .selectFrom('counters')
      .select(['slug', 'likes', 'loves', 'awards', 'bookmarks'])
      .execute();

    const counters: CountersReactions = data.reduce(
      (acc, curr) => ({
        likes: Number(acc.likes || 0) + Number(curr.likes || 0),
        loves: Number(acc.loves || 0) + Number(curr.loves || 0),
        awards: Number(acc.awards || 0) + Number(curr.awards || 0),
        bookmarks: Number(acc.bookmarks || 0) + Number(curr.bookmarks || 0),
      }),
      {} as CountersReactions,
    );

    return {
      counters,
      total: Object.keys(counters).reduce(
        (accumulator, key): number =>
          accumulator + (counters[key as keyof typeof counters] || 0),
        0,
      ),
    };
  } catch (err) {
    return { counters: {}, total: -1 };
  }
};
