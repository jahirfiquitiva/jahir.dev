import { getPublicFeed } from './public';

const instagramApi = process.env.INSTA_API || '';
const instagramFeedKey = process.env.INSTA_FEED_KEY || '';
const instagramFeedBackupKey = process.env.INSTA_FEED_KEY_BKP || '';

interface RemoteInstagramPost {
  id?: string;
  mediaUrl?: string;
  permalink?: string;
  caption?: string;
  photo?: string;
  mediaType?: 'IMAGE' | 'CAROUSEL_ALBUM' | 'VIDEO';
  thumbnailUrl?: string;
}

const fetchSelfFeed = async () => {
  const response = await fetch(`${instagramApi}/posts`);
  const data: { posts?: Array<RemoteInstagramPost> } = await response.json();

  return (data.posts || []).map((post) => ({
    id: post.id,
    caption: post.caption,
    postUrl: post.permalink,
    photoUrl: `https://sroc.jahir.dev/${post.photo || post.mediaUrl}`,
  }));
};

const fetchFeedWithKey = async (
  key?: string,
): Promise<Array<InstagramPost>> => {
  if (!key) return [];

  try {
    const response = await fetch(`https://feeds.behold.so/${key}`);
    const data: Array<RemoteInstagramPost> = await response.json();

    return (data || []).map((post) => ({
      id: post.id,
      caption: post.caption,
      postUrl: post.permalink,
      photoUrl: post.thumbnailUrl || post.mediaUrl,
    }));
  } catch (e) {
    return [];
  }
};

export const fetchInstaFeed = async (): Promise<Array<InstagramPost>> => {
  try {
    const publicFeed = await getPublicFeed().catch(() => []);
    if (publicFeed && publicFeed.length) return publicFeed;

    const mainFeed = await fetchFeedWithKey(instagramFeedKey);
    if (mainFeed && mainFeed.length) return mainFeed;

    const backupFeed = await fetchFeedWithKey(instagramFeedBackupKey);
    if (backupFeed && backupFeed.length) return backupFeed;

    const selfFeed = await fetchSelfFeed().catch(() => []);
    if (selfFeed && selfFeed.length) return selfFeed;
    return [];
  } catch (e) {}
  return [];
};
