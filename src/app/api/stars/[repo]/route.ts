import { NextResponse } from 'next/server';

import type { RequestContext } from '@/types/request';

export const runtime = 'edge';

const gitHubReposApiUrl = 'https://api.github.com/repos';
const { GITHUB_API_TOKEN: githubApiToken = '' } = process.env;
const authHeaders =
  githubApiToken && githubApiToken.length > 0
    ? { headers: { Authorization: `token ${githubApiToken}` } }
    : {};

const oneMillion = 1000000;
const oneThousand = 1000;

export async function GET(
  req: Request,
  context?: RequestContext<{ repo?: string }>,
) {
  try {
    const { searchParams } = new URL(req.url);
    const repo = context?.params.repo;
    if (!repo) return NextResponse.json({ stars: null });

    const owner = searchParams.get('owner') || 'jahirfiquitiva';
    const repoRequest = await fetch(
      `${gitHubReposApiUrl}/${owner || 'jahirfiquitiva'}/${repo}`,
      { ...authHeaders, next: { revalidate: 43200 } },
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

    return NextResponse.json({ stars: starsAsText });
  } catch (err) {
    return NextResponse.json({ stars: null });
  }
}
