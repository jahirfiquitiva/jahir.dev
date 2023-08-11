import type { Route } from 'next';

import { mdiInstagram } from '@/components/icons';
import type { InstagramPost } from '@/lib/instagram/types.d';

import {
  InstaIcon,
  InstaPhotoContainer,
  StyledPhoto,
} from './insta-photo.styles';

interface InstaPhotoProps {
  post: InstagramPost;
}

export const InstaPhoto = (props: InstaPhotoProps) => {
  const { post } = props;

  return (
    <InstaPhotoContainer
      title={`View photo "${post.caption}" on Instagram`}
      href={(post.postUrl || '#') as Route}
      style={{
        backgroundColor: `rgb(${
          post.colorPalette?.muted || post.colorPalette?.vibrant
        })`,
      }}
    >
      <StyledPhoto
        src={post.photoUrl || ''}
        alt={post.caption || ''}
        loading={'lazy'}
        decoding={'async'}
        width={post.dimensions?.width || 214}
        height={post.dimensions?.height || 214}
        crossOrigin={'anonymous'}
        style={{ objectPosition: 'bottom' }}
      />
      <InstaIcon path={mdiInstagram} size={1.5} />
    </InstaPhotoContainer>
  );
};
