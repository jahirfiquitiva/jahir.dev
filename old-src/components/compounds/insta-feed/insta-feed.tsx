import Icon from '@mdi/react';

import { mdiInstagram } from '@/old/components/icons';
import { useImmutableRequest } from '@/old/hooks/use-request';
import type { InstagramPost } from '@/old/lib/instagram';
import type { FC } from '@/old/types';

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