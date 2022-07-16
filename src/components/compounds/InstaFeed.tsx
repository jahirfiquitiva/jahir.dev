import { mdiInstagram } from '@mdi/js';
import Icon from '@mdi/react';

import { Img, Link } from '@/components/atoms';
import useRequest from '@/hooks/useRequest';
import type { InstagramPost } from '@/lib/instagram';
import type { FC } from '@/types';
import { styled } from '~/stitches';

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 222px))',
  gap: '12px',
  '@tablet-sm': {
    gridTemplateColumns: 'repeat(3, minmax(0, 222px))',
  },
});

const ImgContainer = styled(Link, {
  display: 'block',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '4px',
  hover: {
    '& > img': { transform: 'scale(1.05)' },
    '&::after': { opacity: 0.35 },
    '& > svg': { opacity: 1 },
  },
  '&::after': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: '$background',
    opacity: 0,
    transition: 'all ease-in-out .35s',
  },
  '& > svg': {
    color: '$text-primary',
    fill: '$text-primary',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    opacity: 0,
    zIndex: 2,
    transition: 'all ease-in-out .35s',
  },
});

export const InstaFeed: FC = () => {
  const { data, loading } = useRequest<{ feed?: Array<InstagramPost> }>(
    '/api/insta-feed',
  );
  if (loading || !data || !data.feed || !data.feed.length) return null;
  return (
    <Grid>
      {(data.feed || []).map((post, index) => {
        return (
          <ImgContainer
            key={post.id || index}
            title={`View photo "${post.caption}" on Instagram`}
            href={post.postUrl || '#'}
          >
            <Img
              src={post.photoUrl || ''}
              alt={post.caption}
              size={214}
              css={{ transition: 'all ease-in-out .35s' }}
            />
            <Icon path={mdiInstagram} size={1.5} />
          </ImgContainer>
        );
      })}
    </Grid>
  );
};
