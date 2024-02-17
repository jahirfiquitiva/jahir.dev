import { Suspense } from 'react';
import { TweetNotFound, type TweetProps } from 'react-tweet';

import { getTweet } from '@/actions/mdx';

import { CustomTweet } from './custom-tweet';

import './tweet.scss';

const TweetContent = async ({ id, components, onError }: TweetProps) => {
  const { tweet, error } = await getTweet(id, onError);
  if (!tweet) {
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound error={error} />;
  }
  return <CustomTweet tweet={tweet} components={components} />;
};

export const ReactTweet = (props: TweetProps) => (
  <Suspense fallback={<div className={'min-w-11 min-h-11'} />}>
    <TweetContent {...props} />
  </Suspense>
);
