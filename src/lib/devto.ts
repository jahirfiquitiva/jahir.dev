import 'server-only';

const devToEndpoint = 'https://dev.to/api/articles/me';
const { DEV_TO_API_KEY: devToApiKey = '' } = process.env;
const authHeaders =
  devToApiKey && devToApiKey.length > 0
    ? { headers: { 'api-key': devToApiKey } }
    : {};

const getDevToArticles = async () => {
  return fetch(devToEndpoint, authHeaders);
};

export const getSingleDevToArticleViews = async (
  devToArticleId?: string,
): Promise<number> => {
  if (!devToArticleId) return 0;
  try {
    const devArticlesRequest = await getDevToArticles();
    if (devArticlesRequest.ok) {
      const devArticles = await devArticlesRequest.json().catch(() => []);
      const article = devArticles.filter(
        (it: { id: number }) => it.id.toString() === devToArticleId,
      )?.[0];
      return Number(article.page_views_count || 0);
    }
    return 0;
  } catch (e) {
    return 0;
  }
};

export const getTotalDevToArticleViews = async (): Promise<number> => {
  try {
    const devArticlesRequest = await getDevToArticles();
    if (devArticlesRequest.ok) {
      const devArticles = await devArticlesRequest.json().catch(() => []);
      return devArticles
        .filter((it: { published?: boolean }) => it.published)
        .reduce(
          (accumulator: number, article: { page_views_count: number }) => {
            const { page_views_count: views = 0 } = article;
            return accumulator + views;
          },
          0,
        );
    }
    return 0;
  } catch (e) {
    return 0;
  }
};
