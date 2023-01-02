import type { NextRequest } from 'next/server';

import { buildApiResponse } from '@/utils/response';

const { GITHUB_API_TOKEN: githubApiToken = '' } = process.env;
const authHeaders =
  githubApiToken && githubApiToken.length > 0
    ? { headers: { Authorization: `token ${githubApiToken}` } }
    : {};

export const config = { runtime: 'edge' };

const fetchRepoData = async (name?: string) => {
  if (!name || !name.length) return null;
  const dataRequest = await fetch(
    `https://api.github.com/repos/jahirfiquitiva/${name}/releases/latest`,
    authHeaders,
  );
  const data = await dataRequest.json();
  const { assets = [] } = data;
  const extraRepoData = {
    success: false,
    url: `https://github.com/jahirfiquitiva/${name}`,
  };
  const defaultDownloadLink = `https://github.com/jahirfiquitiva/${name}/releases/latest/`;
  let downloadLink = defaultDownloadLink;
  if (assets) {
    const [apk] = assets;
    if (apk) {
      extraRepoData.success = true;
      downloadLink = apk.browser_download_url || defaultDownloadLink;
    }
  }
  return { ...extraRepoData, download: downloadLink };
};

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.nextUrl || '');
    const repo = searchParams.get('repo') || '';
    if (!repo) {
      return buildApiResponse(400, {
        success: false,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        error: 'Missing repo name',
      });
    }
    return fetchRepoData(repo)
      .then((result) => {
        return buildApiResponse(200, { ...result });
      })
      .catch((err) => {
        return buildApiResponse(400, {
          success: false,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          error:
            err?.message || err?.stackTrace.toString() || 'Unexpected error',
        });
      });
  } catch (err) {
    return buildApiResponse(400, {
      success: false,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      error: err?.message || err?.stackTrace.toString() || 'Unexpected error',
    });
  }
}
