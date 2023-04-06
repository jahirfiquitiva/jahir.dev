import Icon from '@mdi/react';

import { useImmutableRequest } from '@/hooks/use-request';
import { mdiInstagram } from '@/icons';
import type { InstagramPost } from '@/lib/instagram';
import type { FC } from '@/types';

import { Figure, Grid, ImgContainer, InstaPhoto } from './insta-feed.styles';

export const InstaFeed: FC = () => {
  const { data, loading } = useImmutableRequest<{
    feed?: Array<InstagramPost>;
  }>('/api/insta-feed');
  if (loading || !data || !data.feed || !data.feed.length) return null;
  return (
    <Figure>
      <Grid>
        {(data.feed || []).map((post, index) => {
          return (
            <ImgContainer
              key={post.id || index}
              title={`View photo "${post.caption}" on Instagram`}
              href={post.postUrl || '#'}
              underline={false}
            >
              <InstaPhoto
                src={post.photoUrl || ''}
                alt={post.caption}
                loading={'lazy'}
                decoding={'async'}
                width={214}
                height={214}
                crossOrigin={'anonymous'}
              />
              <Icon path={mdiInstagram} size={1.5} />
            </ImgContainer>
          );
        })}
      </Grid>
      <figcaption>Latest Instagram posts</figcaption>
    </Figure>
  );
};