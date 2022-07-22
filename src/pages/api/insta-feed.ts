import { buildApiResponse } from '@/utils';

export const config = {
  runtime: 'experimental-edge',
};

const instagramApi = process.env.INSTA_FEED_API || '';

interface RemoteInstagramPost {
  id?: string;
  mediaUrl?: string;
  photo?: string;
  permalink?: string;
  caption?: string;
}

export default async function handler() {
  try {
    const response = await fetch(`${instagramApi}/posts`);
    const data: { posts?: Array<RemoteInstagramPost> } = await response.json();
    return buildApiResponse(
      200,
      {
        feed: (data.posts || [])
          .map((post) => ({
            id: post.id,
            caption: post.caption,
            postUrl: post.permalink,
            photoUrl: post.mediaUrl || post.photo,
          }))
          .slice(0, 6),
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
