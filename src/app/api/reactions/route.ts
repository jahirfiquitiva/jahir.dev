/* eslint-disable no-undef */
import { NextResponse } from 'next/server';

import { db as queryBuilder, type CountersReactions } from '@/lib/planetscale';

export const runtime = 'edge';

export async function GET() {
  try {
    const data = await queryBuilder
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

    return NextResponse.json({
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
    return NextResponse.json({
      counters: {},
      total: '-1',
    });
  }
}
