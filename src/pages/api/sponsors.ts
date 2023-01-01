/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable camelcase */
import { fetchSponsors } from '@/lib/sponsors';
import { buildApiResponse } from '@/utils/response';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler() {
  try {
    const response = await fetchSponsors().catch((err) => ({
      error: err?.message || err?.stackTrace.toString() || 'Unexpected error',
    }));
    return buildApiResponse(200, response, {
      'cache-control': 'public, s-maxage=3600, stale-while-revalidate=1800',
    });
  } catch (err) {
    return buildApiResponse(400, {
      // @ts-ignore
      error: err?.message || err?.stackTrace.toString() || 'Unexpected error',
    });
  }
}
