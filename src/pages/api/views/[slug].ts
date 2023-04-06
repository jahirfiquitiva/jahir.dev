import type { NextRequest } from 'next/server';

import { getDevToArticles } from '@/lib/devto';
import { queryBuilder } from '@/lib/planetscale';
import { buildApiResponse } from '@/utils/response';

export const config = { runtime: 'edge' };

export default async function handler(req: NextRequest) {
  try {
    const { searchParams, pathname } = new URL(req.nextUrl || '');
    const slug = pathname.substring(pathname.lastIndexOf('/') + 1);
    if (!slug) {
      return buildApiResponse(400, {
        success: false,
        error: 'Slug is required.',
      });
    }

    const data = await queryBuilder
      .selectFrom('counters')
      .where('slug', '=', slug)
      .select(['views'])
      .execute();

    const views = !data.length ? 0 : Number(data[0].views);

    if (req.method === 'POST') {
      await queryBuilder
        .insertInto('counters')
        .values({ slug, views: 1 })
        .onDuplicateKeyUpdate({ views: views + 1 })
        .execute();

      return buildApiResponse(200, {
        success: true,
        total: (views + 1).toString(),
      });
    }

    if (req.method === 'GET') {
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

      return buildApiResponse(200, {
        success: true,
        total: (views + devToCount).toString(),
      });
    }

    return buildApiResponse(405, {
      success: false,
      error: 'Method not allowed!',
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
