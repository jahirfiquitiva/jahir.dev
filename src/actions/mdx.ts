import { unstable_noStore as noStore } from 'next/cache';
import type { TweetProps } from 'react-tweet';
import { getTweet as getTweetFromApi } from 'react-tweet/api';

export const getTweet = async (
  id?: TweetProps['id'],
  onError?: TweetProps['onError'],
) => {
  if (!id) return { error: 'Missing tweet id' };
  noStore();
  try {
    let error;
    const tweet = id
      ? await getTweetFromApi(id).catch((err: unknown) => {
          if (onError) {
            error = onError(err);
          } else {
            error = err;
          }
        })
      : undefined;
    return { tweet, error };
  } catch (e) {
    return { error: (e as Error).message };
  }
};

interface SiteMetadata {
  title: string;
  description?: string;
  image?: string;
}

export const getMetadata = async (url: string) => {
  if (!url) return null;
  noStore();
  try {
    const req = await fetch(`https://api.dub.co/metatags?url=${url}`).catch(
      null,
    );
    if (!req.ok) return null;
    const data = await req.json();
    return data as SiteMetadata;
  } catch (e) {
    return null;
  }
};
