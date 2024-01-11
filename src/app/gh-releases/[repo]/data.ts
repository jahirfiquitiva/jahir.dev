import { unstable_noStore as noStore } from 'next/cache';

const { GITHUB_API_TOKEN: githubApiToken = '' } = process.env;
const authHeaders =
  githubApiToken && githubApiToken.length > 0
    ? { headers: { Authorization: `token ${githubApiToken}` } }
    : {};

export const getRepoReleaseData = async (name?: string) => {
  if (!name || !name.length) return null;
  noStore();
  try {
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
  } catch (e) {
    return null;
  }
};
