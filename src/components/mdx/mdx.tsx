/* eslint-disable max-len */
/* eslint-disable @next/next/no-img-element */
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import ReactCompareImage from 'react-compare-image';

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
  hover?: boolean;
}

const ImageComparisonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.4rem;

  & > div:first-child {
    border-radius: 8px;
    border: 2px solid var(--divider);
    & img {
      object-fit: contain !important;
    }
    & > div {
      & div {
        background-color: rgb(var(--divider-opaque)) !important;
        background-repeat: no-repeat !important;
        background-position: center 100% !important;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==') !important;
      }
      & div:last-child {
        background-position: center 0 !important;
      }
    }
  }

  & p {
    display: inline-flex;
    font-size: var(--font-size-xxs);
    font-style: italic;
  }
`;

const CustomImageComparison: Component<CustomSplitProps> = (props) => {
  if (!window || !document) return null;
  return (
    <ImageComparisonContainer>
      <ReactCompareImage
        hover
        leftImage={props.firstImage}
        leftImageAlt={props.firstImageAlt}
        rightImage={props.secondImage}
        rightImageAlt={props.secondImageAlt}
        aspectRatio={'taller'}
        handle={<Fragment />}
        sliderLineWidth={8}
        sliderPositionPercentage={props.sliderPosition || 0.5}
        skeleton={
          <img
            src={
              'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
            }
            alt={'Image comparison loading'}
            height={'100%'}
            width={'100%'}
            loading={'lazy'}
            decoding={'async'}
            style={{ minHeight: 48 }}
          />
        }
      />
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
