/* eslint-disable no-undef */
import { queryBuilder, type CountersReactions } from '@/old/lib/planetscale';
import { buildApiResponse } from '@/old/utils/response';

export const config = { runtime: 'edge' };

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
BigInt.prototype.toJSON = function () {
  return this.toString();
};

export default async function handler() {
  try {
    const data = await queryBuilder
      .selectFrom('counters')
      .select(['slug', 'likes', 'loves', 'awards', 'bookmarks'])
      .execute();

    const counters: CountersReactions = data.reduce(
      (acc, curr) => ({
        likes: BigInt(Number(acc.likes || 0) + Number(curr.likes || 0)),
        loves: BigInt(Number(acc.loves || 0) + Number(curr.loves || 0)),
        awards: BigInt(Number(acc.awards || 0) + Number(curr.awards || 0)),
        bookmarks: BigInt(
          Number(acc.bookmarks || 0) + Number(curr.bookmarks || 0),
        ),
      }),
      {} as CountersReactions,
    );

    return buildApiResponse(200, {
      success: true,
      counters,
      total: Object.keys(counters).reduce(
        // eslint-disable-next-line
        (accumulator: string, key: string): string => {
          return (
            Number(accumulator) +
            Number(counters[key as keyof typeof counters] || 0)
          ).toString();
        },
        '0',
      ),
    });
  } catch (err) {
    return buildApiResponse(500, {
      success: false,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      error: err?.message || err?.stackTrace.toString() || 'Unexpected error',
    });
  }
}
