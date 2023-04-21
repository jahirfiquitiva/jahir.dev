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
      href={post.postUrl || '#'}
    >
      <StyledPhoto
        src={post.photoUrl || ''}
        alt={post.caption || ''}
        loading={'lazy'}
        decoding={'async'}
        width={214}
        height={214}
        crossOrigin={'anonymous'}
        style={{ objectPosition: 'bottom' }}
      />
      <InstaIcon path={mdiInstagram} size={1.5} />
    </InstaPhotoContainer>
  );
};
