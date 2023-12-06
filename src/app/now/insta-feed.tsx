import cx from 'classix';
import { Suspense } from 'react';

import { Heading } from '@/components/core/heading';
import { InstaPhoto } from '@/components/views/dashboard/insta-photo/insta-photo';
import { fetchInstaFeed } from '@/lib/instagram/instagram';

// Update data once every 12 hours
export const revalidate = 43200;

const LoadingInstagramFeed = () => (
  <div
    className={cx(
      'grid grid-cols-3 gap-2',
      'grid-rows-[min-content] auto-rows-min',
      'motion-safe:animate-pulse',
    )}
  >
    {[...Array(6)].map((_, index) => (
      <div
        key={`placeholder-${index}`}
        className={cx('block w-full h-full bg-divider aspect-square')}
      />
    ))}
  </div>
);

const AsyncInstagramFeed = async () => {
  const instagramPosts = await fetchInstaFeed().catch(() => []);
  return (
    <div
      className={cx(
        'grid grid-cols-3 gap-4',
        'grid-rows-[min-content] auto-rows-min',
      )}
    >
      {instagramPosts.map((post) => (
        <InstaPhoto key={post.id} post={post} />
      ))}
    </div>
  );
};

export const InstagramFeed = () => (
  <article id={'instagram'} className={cx('flex flex-col gap-16')}>
    <Heading $as={'h2'} className={cx('text-xl')}>
      Instagram
    </Heading>
    <Suspense fallback={<LoadingInstagramFeed />}>
      <AsyncInstagramFeed />
    </Suspense>
  </article>
);
