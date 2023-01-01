import { buildApiResponse } from '@/utils/response';

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

const getFollowers = async (): Promise<number> => {
  let responseContent = '';
  try {
    const offResponse = await fetch(
      'https://www.instagram.com/jahirfiquitiva/?__a=1&__d=1',
    );
    responseContent = await offResponse.text();
    const { graphql } = JSON.parse(responseContent) as OfficialResponse;
    return graphql.user.edge_followed_by.count;
  } catch (e) {
    // eslint-disable-next-line
    console.error('insta-followers', responseContent);
    // eslint-disable-next-line
    console.error('insta-followers', e);
    return 0;
  }
};

export default async function handler() {
  try {
    let responseStatus = 200;
    let followers = await getFollowers();
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
