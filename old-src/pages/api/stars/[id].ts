import type { NextRequest } from 'next/server';

import { buildApiResponse } from '@/old/utils/response';

const repoApiUrl = 'https://api.github.com/repos';
const { GITHUB_API_TOKEN: githubApiToken = '' } = process.env;
const authHeaders =
  githubApiToken && githubApiToken.length > 0
    ? { headers: { Authorization: `token ${githubApiToken}` } }
    : {};

const oneMillion = 1000000;
const oneThousand = 1000;

export const config = { runtime: 'edge' };

export default async function handler(req: NextRequest) {
  try {
    const { searchParams, pathname } = new URL(req.nextUrl || '');
    const repo = pathname.substring(pathname.lastIndexOf('/') + 1);
    const owner = searchParams.get('owner') || 'jahirfiquitiva';

    if (!repo) {
      return buildApiResponse(400, {
        success: false,
        error: 'Missing repo name',
      });
    }

    const repoRequest = await fetch(
      `${repoApiUrl}/${owner}/${repo}`,
      authHeaders,
    );

    const repository = await repoRequest.json();
    const { stargazers_count: stargazers = 0 } = repository;

    let starsAsText = '';
    if (stargazers > 0) {
      if (stargazers >= oneMillion) {
        starsAsText = `${Math.floor(stargazers / oneMillion)}M+`;
      } else if (stargazers >= oneThousand) {
        starsAsText = `${Math.floor(stargazers / oneThousand)}K+`;
      } else starsAsText = `${stargazers}`;
    }

    return buildApiResponse(
      200,
      {
        success: true,
        stars: starsAsText,
      },
      {
        'cache-control': 'public, s-maxage=3600, stale-while-revalidate=1800',
      },
    );
  } catch (err) {
    return buildApiResponse(400, {
      success: false,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      error: err?.message || err?.stackTrace.toString() || 'Unexpected error',
    });
  }
}
