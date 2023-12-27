/* eslint-disable no-undef */
import { NextResponse } from 'next/server';

import {
  db,
  type ReactionName,
  type CountersReactions,
} from '@/lib/planetscale';
import type { RequestContext } from '@/types/request';

export const runtime = 'edge';
export const revalidate = 3600;

const getData = (slug: string) =>
  db
    .selectFrom('counters')
    .where('slug', '=', slug)
    .select(['likes', 'loves', 'awards', 'bookmarks', 'views'])
    .execute();

export async function GET(
  req: Request,
  context?: RequestContext<{ slug?: string }>,
) {
  try {
    const slug = context?.params?.slug;
    if (!slug) return NextResponse.json({ counters: {}, total: -1 });

    const data = await getData(slug);
    const [counters] = data;
    if (!counters) return NextResponse.json({ counters: {}, total: -1 });

    const total = Object.keys(counters).reduce(
      (accumulator, key): number =>
        accumulator +
        (key !== 'views'
          ? Number(counters[key as keyof typeof counters] || 0)
          : 0),
      0,
    );

    return NextResponse.json({ counters, total });
  } catch (err) {
    return NextResponse.json({ counters: {}, total: -1 });
  }
}

export async function POST(
  req: Request,
  reqData?: RequestContext<{ slug?: string }>,
) {
  try {
    const slug = reqData?.params?.slug;
    if (!slug) return NextResponse.json({ counters: {} });

    const body = await req.json();
    const reaction = body?.reaction as ReactionName;
    if (!reaction) return NextResponse.json({ counters: {} });

    const data = await getData(slug).catch(() => [{} as CountersReactions]);
    const [counters] = data;
    const reactionCount = Number(counters?.[reaction] || 0);

    await db
      .insertInto('counters')
      .values({ slug, [reaction]: 1 })
      .onDuplicateKeyUpdate({
        [reaction]: reactionCount + 1,
      })
      .execute();

    return NextResponse.json({
      counters: { ...counters, [reaction]: reactionCount + 1 },
    });
  } catch (err) {
    return NextResponse.json({ counters: {} });
  }
}
