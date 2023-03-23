import { getFollowers } from '@/lib/twitter';
import { buildApiResponse } from '@/utils/response';

export const config = { runtime: 'edge' };

export default async function handler() {
  const { status, error, count } = await getFollowers();

  if (error) {
    return buildApiResponse(status, {
      success: false,
      error,
    });
  }

  return buildApiResponse(
    status,
    {
      success: status >= 200 && status < 300,
      followers: count,
      error,
    },
    {
      'cache-control': 'public, s-maxage=3600, stale-while-revalidate=1800',
    },
  );
}
