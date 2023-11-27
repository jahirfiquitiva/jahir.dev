import { getPublicFeed } from './public';
import type { RemoteInstagramPost, InstagramPost } from './types.d';

const instagramApi = process.env.INSTA_API || '';
const instagramFeedKey = process.env.INSTA_FEED_KEY || '';
const instagramFeedBackupKey = process.env.INSTA_FEED_KEY_BKP || '';

const fetchSelfFeed = async (): Promise<Array<InstagramPost>> => {
  try {
    const response = await fetch(`${instagramApi}/posts`);
    const data: { posts?: Array<RemoteInstagramPost> } = await response.json();
    return data.posts || [];
  } catch (e) {
    return [];
  }
};

const fetchBeholdFeed = async (key?: string): Promise<Array<InstagramPost>> => {
  if (!key) return [];
  try {
    const response = await fetch(`https://feeds.behold.so/${key}`);
    const data: Array<RemoteInstagramPost> = await response.json();
    return data;
  } catch (e) {
    return [];
  }
};

export const fetchInstaFeed = async (): Promise<Array<InstagramPost>> => {
  try {
    const mainFeed = await fetchBeholdFeed(instagramFeedKey);
    if (mainFeed && mainFeed.length) return mainFeed;

    const backupFeed = await fetchBeholdFeed(instagramFeedBackupKey);
    if (backupFeed && backupFeed.length) return backupFeed;

    const publicFeed = await getPublicFeed().catch(() => []);
    if (publicFeed && publicFeed.length) return publicFeed;

    const selfFeed = await fetchSelfFeed().catch(() => []);
    if (selfFeed && selfFeed.length) return selfFeed;
    return [];
  } catch (e) {}
  return [];
};
