import { Fragment } from 'react';

import monaGifFile from '@/assets/images/donate/pixel-mona-heart.gif';
import { Section } from '@/components/atoms/section';
import { getColoredTextClasses } from '@/utils/colored-text';

import { SponsorItem } from '../sponsor';

import { Header, MonaGif, StyledList } from './sponsors-list.styles';

export interface SponsorsListProps {
  categories: Array<SponsorsCategory>;
  unicorns: Array<ReadableSupporter>;
}

export const SponsorsList = (props: SponsorsListProps) => {
  const { categories, unicorns } = props;
  return (
    <Section id={'thanks'}>
      <Header>
        <div className={'flex flex-col flex-1 gap-2'}>
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
          <p>
            I&apos;m forever grateful to all the awesome people that support my
            work
          </p>
        </div>
        <MonaGif
          src={monaGifFile}
          alt={'GitHub Mona pixelated animation with hearts'}
          size={72}
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
        {unicorns.map((sponsor) => {
          return (
            <SponsorItem
              key={sponsor.name}
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
