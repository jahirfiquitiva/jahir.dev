import { buildApiResponse } from '@/utils';

const instagramApi = process.env.INSTA_API || '';

export const config = {
  runtime: 'experimental-edge',
};

interface OfficialResponse {
  graphql: {
    user: {
      edge_followed_by: {
        count: number;
      };
    };
  };
}

export default async function handler() {
  try {
    const offResponse = await fetch(
      'https://www.instagram.com/jahirfiquitiva/?__a=1&__d=1',
    );
    let responseStatus = offResponse.status;
    let followers = 0;
    if (responseStatus >= 200 && responseStatus < 300) {
      const { graphql } = (await offResponse.json()) as OfficialResponse;
      followers = graphql.user.edge_followed_by.count;
    }

    if (followers <= 0) {
      const response = await fetch(`${instagramApi}/followers`);
      responseStatus = response.status;
      const data = await response.json();
      followers = data.followers || 0;
    }

    return buildApiResponse(
      responseStatus || 500,
      {
        followers,
      },
      {
        'cache-control': 'public, s-maxage=86400, stale-while-revalidate=43200',
      },
    );
  } catch (err) {
    return buildApiResponse(400, {
      followers: 0,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      error: err?.message || err?.stackTrace.toString() || 'Unexpected error',
    });
  }
}
