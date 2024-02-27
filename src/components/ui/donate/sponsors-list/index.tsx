import { Fragment } from 'react';

import { Section } from '@/components/atoms/section';
import { getColoredTextClasses } from '@/utils/colored-text';

import { SponsorItem } from '../sponsor';

import { Header, MonaGif, StyledList } from './sponsors-list.styles';

export interface SponsorsListProps {
  categories: Array<SponsorsCategory>;
  unicorns: Array<ReadableSupporter>;
  sponsorsCount?: number;
  totalEarningsPerMonth?: number;
}

export const SponsorsList = (props: SponsorsListProps) => {
  const { categories, unicorns, sponsorsCount, totalEarningsPerMonth } = props;
  return (
    <Section id={'thanks'}>
      <Header>
        <div className={'flex flex-col flex-1 gap-2.5'}>
          <h2
            className={getColoredTextClasses(
              'brand',
              'brand',
              'blue',
              'text-xl self-start',
            )}
          >
            Sponsors
          </h2>
          <div className={'max-w-nice'}>
            <p>
              I currently have{' '}
              <span className={'tabular-nums font-medium'}>
                {sponsorsCount}
              </span>{' '}
              active sponsors helping me earn{' '}
              <span className={'tabular-nums font-medium'}>
                ${totalEarningsPerMonth} USD
              </span>{' '}
              per month.
            </p>
            <p>
              I&apos;m forever grateful to all the awesome people that support
              my work!{' '}
              <span role={'img'} aria-label={'heart hands'}>
                🫶
              </span>
            </p>
          </div>
        </div>
        <MonaGif
          src={'/media/site/pixel-mona-heart.gif'}
          alt={'GitHub Mona pixelated animation with hearts'}
          width={72}
          height={72}
          style={{ filter: 'drop-shadow(0 0 2px #fff)' }}
          loading={'lazy'}
          decoding={'async'}
        />
      </Header>
      <StyledList>
        {categories.map((category) => {
          const { name, key, sponsors } = category;
          return (
            <Fragment key={key}>
              {sponsors.map((sponsor) => {
                return (
                  <SponsorItem
                    key={sponsor.name}
                    sponsor={sponsor}
                    category={name}
                    tier={key}
                  />
                );
              })}
            </Fragment>
          );
        })}
        {unicorns.map((sponsor, index) => {
          return (
            <SponsorItem
              key={`${index}-${sponsor.name}`}
              sponsor={sponsor}
              category={'Unicorn'}
              tier={'unicorn'}
            />
          );
        })}
      </StyledList>
      <small className={'block text-3xs'}>
        <sup>*</sup> Unicorn sponsors are special one-time supporters
      </small>
    </Section>
  );
};
