/* eslint-disable no-undef */
import { NextResponse } from 'next/server';

import { getDevToArticles } from '@/lib/devto';
import { queryBuilder } from '@/lib/planetscale';
import type { RequestContext } from '@/types/request';

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
    .select(['views'])
    .execute();

export async function GET(req: Request, context?: RequestContext<{ slug?: string }>) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = context?.params?.slug;
    if (!slug) {
      return NextResponse.json({ total: '-1' });
    }

    const data = await getData(slug);
    const views = !data.length ? 0 : Number(data[0].views);

    let devToCount = 0;
    const devToId = searchParams.get('devToId');
    if (devToId) {
      const devArticlesRequest = await getDevToArticles();
      if (devArticlesRequest.ok) {
        const devArticles = await devArticlesRequest.json().catch(() => []);
        const article = devArticles.filter(
          (it: { id: number }) => it.id.toString() === devToId,
        )?.[0];
        // eslint-disable-next-line max-depth
        if (article) devToCount = Number(article.page_views_count || 0);
      }
    }

    return NextResponse.json({ total: (views + devToCount).toString() });
  } catch (err) {
    return NextResponse.json({ total: '-1' });
  }
}

export async function POST(req: Request, reqData?: RequestContext<{ slug?: string }>) {
  try {
    const slug = reqData?.params?.slug;
    if (!slug) {
      return NextResponse.json({ total: '-1' });
    }

    const data = await getData(slug);
    const views = !data.length ? 0 : Number(data[0].views);

    await queryBuilder
      .insertInto('counters')
      .values({ slug, views: BigInt(1) })
      .onDuplicateKeyUpdate({ views: BigInt(views + 1) })
      .execute();

    return NextResponse.json({ total: (views + 1).toString() });
  } catch (err) {
    return NextResponse.json({ total: '-1' });
  }
}
