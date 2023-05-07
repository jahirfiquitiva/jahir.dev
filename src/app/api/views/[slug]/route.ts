/* eslint-disable no-undef */
import { NextResponse } from 'next/server';

import { db } from '@/lib/planetscale';
import type { RequestContext } from '@/types/request';

export const runtime = 'edge';

export async function POST(
  req: Request,
  reqData?: RequestContext<{ slug?: string }>,
) {
  try {
    const slug = reqData?.params?.slug;
    if (!slug) return NextResponse.json({ counters: {} });

    const data = await db
      .selectFrom('counters')
      .where('slug', '=', slug)
      .select(['views'])
      .execute();

    const views = !data.length ? 0 : Number(data[0].views);
    db.insertInto('counters')
      .values({ slug, views: 1 })
      .onDuplicateKeyUpdate({ views: views + 1 })
      .execute();

    return NextResponse.json({ views: views + 1 });
  } catch (err) {
    return NextResponse.json({ views: -1 });
  }
}
