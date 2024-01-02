import { Icon } from '@/components/atoms/icon';
import { Img } from '@/components/atoms/img';
import { Section } from '@/components/atoms/section';
import cx from '@/utils/cx';

import type { SponsorsListProps as TestimonialsProps } from '../sponsors-list';

import { SponsorName, TestimonialCard } from './testimonials.styles';

const getComponentForSponsor = (
  sponsor: ReadableSupporter,
  className?: string,
) => {
  if (!sponsor.message) return null;
  return (
    <li key={sponsor.name} className={cx('inline-block w-full', className)}>
      <TestimonialCard>
        <Icon
          path={'M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z'}
          className={'text-divider absolute -top-1 right-0 size-16'}
        />
        <p className={'transition-colors mr-7 balance'}>{sponsor.message}</p>
        <div className={'flex flex-row flex-wrap gap-2 items-center'}>
          <Img
            src={sponsor.photo || ''}
            alt={`Photo of ${sponsor.name}`}
            size={28}
            className={'rounded-half border border-divider'}
          />
          <SponsorName>{sponsor.name}&nbsp; –</SponsorName>
        </div>
      </TestimonialCard>
    </li>
  );
};

export const Testimonials = (props: TestimonialsProps) => {
  const { categories, unicorns } = props;

  const allSponsors = [...unicorns, ...categories.map((it) => it.sponsors)]
    .flat()
    .filter((it) => Boolean(it.message));

  return (
    <Section className={'my-3'} id={'testimonials'}>
      <h2 className={'text-xl'}>Don&apos;t just take my word for it</h2>
      <ul
        className={cx('columns-1 tablet-sm:columns-2', 'gap-4 space-y-4 my-2')}
      >
        {allSponsors.map((sponsor, index) =>
          getComponentForSponsor(
            sponsor,
            Math.ceil(allSponsors.length / 2) === index
              ? 'tablet-sm:[margin-top:0_!important]'
              : '',
          ),
        )}
      </ul>
    </Section>
  );
};
