/* eslint-disable no-undef */
import { NextResponse } from 'next/server';

import { getDevToArticles } from '@/lib/devto';
import { queryBuilder } from '@/lib/planetscale';

export const runtime = 'edge';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
BigInt.prototype.toJSON = function () {
  return this.toString();
};

export async function GET() {
  try {
    const data = await queryBuilder
      .selectFrom('counters')
      .select(['slug', 'views'])
      .execute();

    const views: number = data.reduce(
      (acc, item) => acc + Number(item.views || 0),
      0,
    );

    let devToViews = 0;
    const devArticlesRequest = await getDevToArticles();
    if (devArticlesRequest.ok) {
      const devArticles = await devArticlesRequest.json().catch(() => []);

      devToViews = devArticles
        .filter((it: { published?: boolean }) => it.published)
        .reduce(
          (accumulator: number, article: { page_views_count: number }) => {
            const { page_views_count: views = 0 } = article;
            return accumulator + views;
          },
          0,
        );
    }

    return NextResponse.json({ total: (views + devToViews).toString() });
  } catch (err) {
    return NextResponse.json({ total: '-1' });
  }
}
