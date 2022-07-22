const instagramApi = process.env.INSTA_API || '';
const instagramFeedKey = process.env.INSTA_FEED_KEY || '';
const instagramFeedBackupKey = process.env.INSTA_FEED_KEY_BKP || '';

interface RemoteInstagramPost {
  id?: string;
  mediaUrl?: string;
  permalink?: string;
  caption?: string;
  photo?: string;
}

export interface InstagramPost {
  id?: string;
  photoUrl?: string;
  postUrl?: string;
  caption?: string;
}

const fetchSecondaryFeed = async () => {
  const response = await fetch(`${instagramApi}/posts`);
  const data: { posts?: Array<RemoteInstagramPost> } = await response.json();

  return (data.posts || []).map((post) => ({
    id: post.id,
    caption: post.caption,
    postUrl: post.permalink,
    photoUrl: post.photo || post.mediaUrl,
  }));
};

const fetchFeedWithKey = async (
  key?: string,
): Promise<Array<InstagramPost>> => {
  if (!key) return [];

  const response = await fetch(`https://feeds.behold.so/${key}`);
  const data: Array<RemoteInstagramPost> = await response.json();

  return (data || []).map((post) => ({
    id: post.id,
    caption: post.caption,
    postUrl: post.permalink,
    photoUrl: post.mediaUrl,
  }));
};

export const fetchInstaFeed = async (): Promise<Array<InstagramPost>> => {
  try {
    const selfFeed = await fetchSecondaryFeed();
    if (selfFeed && selfFeed.length) return selfFeed || [];

    const mainFeed = await fetchFeedWithKey(instagramFeedKey);
    if (mainFeed && mainFeed.length) return mainFeed;

    const backupFeed = await fetchFeedWithKey(instagramFeedBackupKey);
    if (backupFeed && backupFeed.length) return backupFeed;
  } catch (e) {}
  return [];
};
