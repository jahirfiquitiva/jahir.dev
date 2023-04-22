'use client';

import { Fragment } from 'react';
import ReactCompareImage from 'react-compare-image';

import styles from './image-comparison.module.scss';

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

export const ImageComparison = (props: ImageComparisonProps) => {
  const { hover = true, vertical = false } = props;

  return (
    <figure className={styles.imgComparison}>
      <ReactCompareImage
        hover={hover}
        vertical={vertical}
        leftImage={props.firstImage}
        leftImageAlt={props.firstImageAlt}
        leftImageCss={{ objectFit: 'contain !important' }}
        rightImage={props.secondImage}
        rightImageAlt={props.secondImageAlt}
        rightImageCss={{ objectFit: 'contain !important' }}
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
    </figure>
  );
};
