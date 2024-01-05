import { AsyncImg } from './async-img';

interface ImageComparisonProps {
  firstImage: string;
  firstImageAlt?: string;
  secondImage: string;
  secondImageAlt?: string;
  description?: string;
}

export const ImageComparison = (props: ImageComparisonProps) => {
  return (
    <figure>
      <div className={'grid grid-cols-2 gap-1 mobile-lg:gap-2'}>
        <AsyncImg
          src={props.firstImage}
          alt={props.firstImageAlt || ''}
          className={'rounded-0 object-contain'}
        />
        <AsyncImg
          src={props.firstImage}
          alt={props.firstImageAlt || ''}
          className={'rounded-0 object-contain'}
        />
      </div>
      <figcaption className={'mt-1'}>{props.description}</figcaption>
    </figure>
  );
};
