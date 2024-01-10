import { unstable_noStore as noStore } from 'next/cache';
import { cache } from 'react';

const gitHubApiUrl = 'https://api.github.com';
const { GITHUB_API_TOKEN: githubApiToken = '' } = process.env;
const authHeaders =
  githubApiToken && githubApiToken.length > 0
    ? { headers: { Authorization: `token ${githubApiToken}` } }
    : {};

const oneMillion = 1000000;
const oneThousand = 1000;

export const getRepoStars = cache(
  async (repo: string, owner?: string): Promise<string | undefined> => {
    if (!repo || !repo.length) return undefined;
    noStore();
    try {
      const repoRequest = await fetch(
        `${gitHubApiUrl}/repos/${owner || 'jahirfiquitiva'}/${repo}`,
        authHeaders,
      );

      if (!repoRequest.ok) return undefined;
      const repository = await repoRequest.json();
      const { stargazers_count: stargazers = 0 } = repository;
      if (stargazers <= 0) return undefined;

      let starsAsText = '';
      if (stargazers >= oneMillion) {
        starsAsText = `${Math.floor(stargazers / oneMillion)}M+`;
      } else if (stargazers >= oneThousand) {
        starsAsText = `${Math.floor(stargazers / oneThousand)}K+`;
      } else starsAsText = `${stargazers}`;
      return starsAsText;
    } catch (e) {
      return undefined;
    }
  },
);
