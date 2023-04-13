/* eslint-disable no-undef */
import { NextResponse } from 'next/server';

import {
  queryBuilder,
  reactionsNames,
  type ReactionName,
} from '@/lib/planetscale';
import type { RequestData } from '@/types/request';

export const runtime = 'edge';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
BigInt.prototype.toJSON = function () {
  return this.toString();
};

const getData = (slug: string) =>
  queryBuilder
    .selectFrom('counters')
    .where('slug', '=', slug)
    .select(['slug', 'likes', 'loves', 'awards', 'bookmarks'])
    .execute();

export async function GET(
  req: Request,
  reqData?: RequestData<{ slug?: string }>,
) {
  try {
    const slug = reqData?.params?.slug;
    if (!slug) {
      return NextResponse.json({
        counters: {},
        total: '-1',
      });
    }

    const data = await getData(slug);
    const [counters] = data;
    if (!counters) {
      return NextResponse.json({
        counters: {},
        total: '-1',
      });
    }

    const total: bigint = Object.keys(counters).reduce(
      (accumulator: bigint, key: string): bigint => {
        if (!reactionsNames.includes(key as ReactionName)) return BigInt(0);
        return BigInt(
          (
            Number(accumulator) +
            Number(counters[key as keyof typeof counters] || 0)
          ).toString(),
        );
      },
      BigInt(0),
    );

    return NextResponse.json({
      counters,
      total: total.toString(),
    });
  } catch (err) {
    return NextResponse.json({
      counters: {},
      total: '-1',
    });
  }
}

export async function POST(
  req: Request,
  reqData?: RequestData<{ slug?: string }>,
) {
  try {
    const slug = reqData?.params?.slug;
    if (!slug) {
      return NextResponse.json({
        counters: {},
        total: '-1',
      });
    }

    const data = await getData(slug);
    const body = await req.json();
    const reaction = body?.reaction as ReactionName;
    if (!reaction) {
      return NextResponse.json({
        counters: {},
        total: '-1',
      });
    }

    const reactionCount: number = !data.length
      ? 0
      : Number(data[0]?.[reaction] || 0);

    await queryBuilder
      .insertInto('counters')
      .values({ slug, [reaction as string]: 1 })
      .onDuplicateKeyUpdate({
        [reaction as string]: reactionCount + 1,
      })
      .execute();

    return NextResponse.json({
      counters: {
        ...data,
        [reaction as string]: reactionCount + 1,
      },
    });
  } catch (err) {
    return NextResponse.json({
      counters: {},
      total: '-1',
    });
  }
}
