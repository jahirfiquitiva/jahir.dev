import { fetchInstaFeed } from '@/lib/instagram';
import { buildApiResponse } from '@/utils';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler() {
  const feed = await fetchInstaFeed();
  return buildApiResponse(
    200,
    { feed },
    {
      'cache-control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  );
}