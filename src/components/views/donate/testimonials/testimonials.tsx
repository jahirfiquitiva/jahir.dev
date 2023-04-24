import Icon from '@mdi/react';
import { cx } from 'classix';
import Balancer from 'react-wrap-balancer';

import { Heading } from '@/components/core/heading';
import { Img } from '@/components/core/img';
import { NoPaddingSection } from '@/components/core/section';
import { mdiFormatQuoteClose } from '@/components/icons';

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
          path={mdiFormatQuoteClose}
          size={2}
          className={'text-divider absolute top-6 right-8'}
        />
        <p className={'transition-colors mr-28'}>
          <Balancer ratio={0.5}>{sponsor.message}</Balancer>
        </p>
        <div className={'flex flex-row flex-wrap gap-8 items-center'}>
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
    <NoPaddingSection $as={'div'} className={'my-12'} id={'testimonials'}>
      <Heading $as={'h2'} className={'text-xl'}>
        Don&apos;t just take my word for it
      </Heading>
      <ul
        className={cx(
          'columns-1 tablet-sm:columns-2',
          'gap-16 space-y-16 my-8',
        )}
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
    </NoPaddingSection>
  );
};
