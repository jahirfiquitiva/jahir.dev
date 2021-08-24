import styled from '@emotion/styled';
import Image from 'next/image';

import { Card } from '~/elements/card';

const BaseBlogPostCard = styled(Card)`
  min-height: 144px;
  position: relative;

  & > img {
    min-height: 144px;
    height: 100%;
    width: 100%;
  }

  .overlay {
    position: absolute;
  }
`;

export const BlogPostCard = () => {
  return (
    <BaseBlogPostCard>
      <Image
        alt={'Hola'}
        src={'https://jahir.dev/assets/images/posts/react-package.jpg'}
        layout={'fill'}
        objectFit={'cover'}
        objectPosition={'center'}
      />
    </BaseBlogPostCard>
  );
};
