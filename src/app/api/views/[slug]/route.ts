/* eslint-disable no-undef */
import { NextResponse } from 'next/server';

import { db, type Counters } from '@/lib/planetscale';
import type { RequestContext } from '@/types/request';

export const runtime = 'edge';
export const revalidate = 3600;

const getData = (slug: string): Promise<Array<Counters>> =>
  db.selectFrom('counters').where('slug', '=', slug).select('views').execute();

export async function GET(
  req: Request,
  context?: RequestContext<{ slug?: string }>,
) {
  try {
    const slug = context?.params.slug;
    if (!slug) return NextResponse.json({});
    const [counters] = await getData(slug);
    return NextResponse.json(counters);
  } catch (e) {
    console.error(e);
    return NextResponse.json({});
  }
}

export async function POST(
  req: Request,
  reqData?: RequestContext<{ slug?: string }>,
) {
  try {
    const slug = reqData?.params.slug;
    if (!slug) return NextResponse.json({});

    const [counters] = await getData(slug);
    const counterCount = Number(counters['views'] || 0);
    await db
      .insertInto('counters')
      .values({ slug, views: 1 })
      .onDuplicateKeyUpdate({
        views: counterCount + 1,
      })
      .execute();

    return NextResponse.json({ views: counterCount + 1 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({});
  }
}
