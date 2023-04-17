/* eslint-disable no-undef */
import { NextResponse } from 'next/server';

import { db, type CountersReactions } from '@/lib/planetscale';

export const runtime = 'edge';

export async function GET() {
  try {
    const data = await db
      .selectFrom('counters')
      .select(['slug', 'likes', 'loves', 'awards', 'bookmarks'])
      .execute();

    const counters: CountersReactions = data.reduce(
      (acc, curr) => ({
        likes: (acc.likes || 0) + (curr.likes || 0),
        loves: (acc.loves || 0) + (curr.loves || 0),
        awards: (acc.awards || 0) + (curr.awards || 0),
        bookmarks: (acc.bookmarks || 0) + (curr.bookmarks || 0),
      }),
      {} as CountersReactions,
    );

    return NextResponse.json({
      counters,
      total: Object.keys(counters).reduce(
        (accumulator, key): number =>
          accumulator + (counters[key as keyof typeof counters] || 0),
        0,
      ),
    });
  } catch (err) {
    return NextResponse.json({ counters: {}, total: -1 });
  }
}
