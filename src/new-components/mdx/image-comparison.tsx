/* eslint-disable max-len */
/* eslint-disable @next/next/no-img-element */
import { Fragment, memo } from 'react';
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
    border-2
    border-divider

    [img]:(object-contain!)
  )

  [p]:(inline-flex text-tiny italic)
`;

const BaseImageComparison: Component<ImageComparisonProps> = (props) => {
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
      />
      {props.description && <p>{props.description}</p>}
    </ImageComparisonContainer>
  );
};

export const ImageComparison = memo(BaseImageComparison);
