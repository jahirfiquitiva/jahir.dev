import { cx } from 'classix';

import { Heading } from '@/components/core/heading';
import { InstaPhoto } from '@/components/views/dashboard/insta-photo';
import { fetchInstaFeed } from '@/lib/instagram';

// Update data once every 12 hours
export const revalidate = 43200;

export const InstagramFeed = async () => {
  const instagramPosts = await fetchInstaFeed().catch(() => []);
  return (
    <div className={cx('flex flex-col gap-16')}>
      <Heading $as={'h2'} className={cx('text-xl')}>
        📸&nbsp;&nbsp;Instagram
      </Heading>
      <div className={cx('grid grid-cols-3 grid-rows-3 gap-2')}>
        {instagramPosts.map((post) => (
          <InstaPhoto key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
