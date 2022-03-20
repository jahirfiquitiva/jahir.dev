import styled from '@emotion/styled';

import { ImageComparison } from './image-comparison';
import { MdxLink } from './mdx-link';
import { SimpleGrid, SimpleGridColumn } from './simple-grid';

import { Image, ImageProps } from '~/components/atoms/simple';
import { Masonry, Reactions } from '~/components/elements';
import { mediaQueries } from '~/types';

const ImageWrapper = styled.div`
  --max-img-height: 448px;
  position: relative;
  margin: 0 !important;
  max-height: var(--max-img-height);

  ${mediaQueries.floating} {
    margin: 0 var(--negative-margin) !important;
  }

  & img {
    border-radius: 8px;
    object-fit: cover;
    object-position: center;
  }

  & * {
    max-height: var(--max-img-height);
  }
`;

export const mdxComponents = {
  a: MdxLink,
  img: (props: ImageProps) => (
    <ImageWrapper>
      <Image {...props} layout={'responsive'} quality={90} />
    </ImageWrapper>
  ),
  Image: (props: ImageProps) => (
    <ImageWrapper>
      <Image {...props} />
    </ImageWrapper>
  ),
  ImageComparison,
  SimpleGrid,
  SimpleGridColumn,
  Masonry,
  Reactions,
};
