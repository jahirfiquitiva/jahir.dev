/* eslint-disable max-len */
/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import ReactCompareImage from 'react-compare-image';
import tw from 'twin.macro';

import { Component, ComponentProps } from '~/types';

interface ImageComparisonProps extends ComponentProps {
  firstImage: string;
  firstImageAlt?: string;
  secondImage: string;
  secondImageAlt?: string;
  sliderPosition?: number;
  description?: string;
  hover?: boolean;
}

const ImageComparisonContainer = tw.div`
  flex
  flex-col
  items-center
  mb-12

  [>div:first-child]:(
    background-color[#080f1e]
    rounded-md
    border
    border-2
    border-divider

    [img]:(object-contain!)
  )

  [p]:(inline-flex text-tiny italic)
`;

export const ImageComparison: Component<ImageComparisonProps> = (props) => {
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
            tw={'min-height[48px]'}
          />
        }
      />
      {props.description && <p>{props.description}</p>}
    </ImageComparisonContainer>
  );
};
