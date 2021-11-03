/* eslint-disable max-len */
/* eslint-disable @next/next/no-img-element */
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';

import { Component, ComponentProps } from '~/elements/base/fc';

const CustomLink: Component<ComponentProps & { href: string }> = (props) => {
  const { href } = props;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target={'_blank'} rel={'noopener noreferrer'} {...props} />;
};

interface CustomSplitProps extends ComponentProps {
  firstImage: string;
  firstImageAlt?: string;
  secondImage: string;
  secondImageAlt?: string;
  sliderPosition?: number;
  description?: string;
}

const StyledImageComparison = styled(ImgComparisonSlider)`
  --divider-width: 8px;
  --divider-color: var(--text-tertiary);
  --divider-shadow: 0px 0px 6px var(--divider);
  --divider-opacity: 0;
  --default-handle-opacity: 0;
  --default-handle-width: 12px;
  border-radius: 8px;
  border: 2px solid var(--divider);

  & .handle-container {
    cursor: col-resize !important;
  }
  & .handle-container .divider {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==') !important;
  }
`;

const ImageComparisonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.4rem;

  & div,
  & div[slot],
  & .first,
  &  .first .first-overlay,
  & .first .first-overlay-container {
  height: 100% !important;
  min-height: 100% !important;
  margin: auto 0 !important;
  object-fit: contain;
  background-color: var(--primary);
  }

  & p {
    display: inline-flex;
    font-size: var(--font-size-xxs);
    font-style: italic;
  }
`;

const ComparisonImage = styled.img`
  height: 100% !important;
  min-height: 100% !important;
  margin: auto 0 !important;
  object-fit: contain;
  background-color: var(--primary);
`;

const CustomImageComparison: Component<CustomSplitProps> = (props) => {
  if (!window || !document) return null;
  return (
    <ImageComparisonContainer>
      <StyledImageComparison value={props.sliderPosition || 50} hover>
        <div 
          slot={'first'}>
          <ComparisonImage
          loading={'lazy'}
          decoding={'async'}
          src={props.firstImage}
          alt={props.firstImageAlt}
        />
        </div>
        <ComparisonImage
          slot={'second'}
          loading={'lazy'}
          decoding={'async'}
          src={props.secondImage}
          alt={props.secondImageAlt}
        />
      </StyledImageComparison>
      {props.description && <p>{props.description}</p>}
    </ImageComparisonContainer>
  );
};

export const MDXComponents = {
  Image,
  ImageComparison: CustomImageComparison,
  a: CustomLink,
};

export default MDXComponents;
