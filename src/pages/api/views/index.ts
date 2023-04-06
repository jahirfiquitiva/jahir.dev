import { getDevToArticles } from '@/lib/devto';
import { queryBuilder } from '@/lib/planetscale';
import { buildApiResponse } from '@/utils/response';

export const config = { runtime: 'edge' };

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line no-undef
BigInt.prototype.toJSON = function () {
  return this.toString();
};

export default async function handler() {
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

    return buildApiResponse(200, {
      success: true,
      total: (views + devToViews).toString(),
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
