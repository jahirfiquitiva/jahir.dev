import { Fragment } from 'react';
import ReactCompareImage from 'react-compare-image';

import type { FC } from '@/old/types';
import { styled } from '~/stitches';

interface ImageComparisonProps {
  firstImage: string;
  firstImageAlt?: string;
  secondImage: string;
  secondImageAlt?: string;
  sliderPosition?: number;
  description?: string;
  hover?: boolean;
  vertical?: boolean;
}

const ImageComparisonContainer = styled('figure', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  mb: '$20',
  minHeight: '$space$52',
  '& > div:first-of-type': {
    borderRadius: '$space$8',
    border: '1px solid $divider',
    '& img': {
      borderRadius: '$space$8',
      objectFit: 'contain !important',
      m: 0,
    },
  },
  '& > figcaption': {
    display: 'inline-flex',
    fontSize: '$3xs',
  },
});

export const ImageComparison: FC<ImageComparisonProps> = (props) => {
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
          // eslint-disable-next-line @next/next/no-img-element
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
