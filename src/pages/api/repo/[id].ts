/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextApiRequest, NextApiResponse } from 'next';

import { NextApiFunc } from '~/types';

const repoApiUrl = 'https://api.github.com/repos';
const { GITHUB_API_TOKEN: githubApiToken = '' } = process.env;
const authHeaders =
  githubApiToken && githubApiToken.length > 0
    ? { headers: { Authorization: `token ${githubApiToken}` } }
    : {};

const oneMillion = 1000000;
const oneThousand = 1000;

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiFunc> => {
  try {
    const { id: repo, owner = 'jahirfiquitiva' } = req.query;

    if (!repo) {
      return res.status(400).json({
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

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=3600, stale-while-revalidate=1800',
    );

    return res.status(200).json({
      success: true,
      stars: starsAsText,
    });
  } catch (err) {
    return res.status(400).send({
      success: false,
      // @ts-ignore
      error: err?.message || err?.stackTrace.toString() || 'Unexpected error',
    });
  }
};
