/* eslint-disable max-len */
/* eslint-disable @next/next/no-img-element */
import styled from '@emotion/styled';
import Link from 'next/link';
import { Fragment } from 'react';
import ReactCompareImage from 'react-compare-image';

import { Image } from '~/new-components/atoms/simple';
import { Component, ComponentProps } from '~/types';

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
  margin-bottom: 1.2rem;

  & > div:first-child {
    background-color: #080f1e;
    border-radius: 8px;
    border: 2px solid var(--divider);
    & img {
      object-fit: contain !important;
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
        sliderLineColor={'rgb(235, 240, 251)'}
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
