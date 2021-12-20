/* eslint-disable max-len */
/* eslint-disable @next/next/no-img-element */
import styled from '@emotion/styled';
import { Fragment } from 'react';
import ReactCompareImage from 'react-compare-image';

import { Component, ComponentProps } from '~/types';

interface ImageComparisonProps extends ComponentProps {
  firstImage: string;
  firstImageAlt?: string;
  secondImage: string;
  secondImageAlt?: string;
  sliderPosition?: number;
  description?: string;
  hover?: boolean;
  vertical?: boolean;
}

const ImageComparisonContainer = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.2rem;
  min-height: 3.2rem;

  & > div:first-of-type {
    background-color: #080f1e;
    border-radius: 8px;
    border: 2px solid var(--divider);

    & img {
      object-fit: contain !important;
      margin: 0;
    }
  }

  & > figcaption {
    display: inline-flex;
    font-size: var(--font-3xs);
    font-style: italic;
  }
`;

export const ImageComparison: Component<ImageComparisonProps> = (props) => {
  const { hover = true, vertical = false } = props;

  return (
    <ImageComparisonContainer>
      <ReactCompareImage
        hover={hover}
        vertical={vertical}
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
      {props.description && <figcaption>{props.description}</figcaption>}
    </ImageComparisonContainer>
  );
};
