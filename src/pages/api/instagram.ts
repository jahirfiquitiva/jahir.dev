import { buildApiResponse } from '@/utils';

const instagramApi = process.env.INSTA_FEED_API || '';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler() {
  try {
    const response = await fetch(`${instagramApi}/followers`);
    const { followers = 0 } = await response.json();

    return buildApiResponse(
      response.status || 500,
      {
        followers,
      },
      {
        'cache-control': 'public, s-maxage=86400, stale-while-revalidate=43200',
      },
    );
  } catch (err) {
    return buildApiResponse(400, {
      feed: [],
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      error: err?.message || err?.stackTrace.toString() || 'Unexpected error',
    });
  }
}
