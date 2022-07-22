import { buildApiResponse } from '@/utils';

const userApiUrl = 'https://api.github.com/users/jahirfiquitiva';
const { GITHUB_API_TOKEN: githubApiToken = '' } = process.env;
const authHeaders =
  githubApiToken && githubApiToken.length > 0
    ? { headers: { Authorization: `token ${githubApiToken}` } }
    : {};

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler() {
  try {
    const userRequest = await fetch(userApiUrl, authHeaders);
    const userReposRequest = await fetch(`${userApiUrl}/repos`, authHeaders);

    const user = await userRequest.json();
    const repositories = await userReposRequest.json();

    const mine = repositories.filter((repo: { fork: boolean }) => !repo.fork);
    const stars = mine.reduce(
      // eslint-disable-next-line
      (accumulator: number, repository: { stargazers_count: number }) => {
        const { stargazers_count: stargazers = 0 } = repository;
        return accumulator + stargazers;
      },
      0,
    );

    return buildApiResponse(
      200,
      {
        success: true,
        followers: user.followers,
        stars,
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
