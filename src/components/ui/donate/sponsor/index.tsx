/* eslint-disable @stylistic/max-len */

import type { CSSProperties } from 'react';

import { Icon } from '@/components/atoms/icon';
import { Img } from '@/components/atoms/img';
import { buildBoringAvatarUrl } from '@/utils/boring-avatars';
import { hexToRgb } from '@/utils/color';
import cx from '@/utils/cx';

import {
  Container,
  ListItem,
  NameAndPhotoContainer,
  Tier,
} from './sponsor.styles';

type AllCategoriesKey = CategoryKey | 'unicorn';

const imgSizesForTier: Record<AllCategoriesKey, number> = {
  unicorn: 24,
  star: 28,
  ball: 32,
  rocket: 40,
  diamond: 48,
};

const fontSizesForTier: Record<AllCategoriesKey, string> = {
  unicorn: 'text-3xs',
  star: 'text-2xs',
  ball: 'text-xs',
  rocket: '',
  diamond: 'text-md',
};

const iconForTier: Record<AllCategoriesKey, string> = {
  unicorn:
    'M17.7 14.1 14 12l3.7-2.1c.5-.3.6-.9.4-1.4-.3-.5-.9-.6-1.4-.4L13 10.3V6c0-.6-.4-1-1-1s-1 .4-1 1v4.3L7.3 8.1c-.5-.2-1.1-.1-1.4.4-.2.5-.1 1.1.4 1.4L10 12l-3.7 2.1c-.5.3-.6.9-.4 1.4.2.3.6.5.9.5.2 0 .3 0 .5-.1l3.7-2.1V18c0 .6.4 1 1 1s1-.4 1-1v-4.3l3.7 2.1c.2.2.3.2.5.2.3 0 .7-.2.9-.5.2-.5.1-1.1-.4-1.4z',
  ball: 'M9.38,8.38L11.5,9.34L13.62,8.38L12.66,10.5L13.62,12.62L11.5,11.66L9.38,12.62L10.34,10.5L9.38,8.38M16.5,2.5L17.59,5.41L20.5,6.5L17.59,7.59L16.5,10.5L15.41,7.59L12.5,6.5L15.41,5.41L16.5,2.5M6,19H7V18A1,1 0 0,1 8,17H8.26C6,15.7 4.5,13.28 4.5,10.5A7.5,7.5 0 0,1 12,3C13.05,3 14.05,3.22 14.96,3.61L14.59,4.59L13.17,5.12C12.79,5.04 12.4,5 12,5A5.5,5.5 0 0,0 6.5,10.5A5.5,5.5 0 0,0 12,16C14.91,16 17.3,13.73 17.5,10.87L18.41,8.41L19.12,8.14C19.37,8.88 19.5,9.68 19.5,10.5C19.5,13.28 18,15.7 15.74,17H16A1,1 0 0,1 17,18V19H18A2,2 0 0,1 20,21V22H4V21A2,2 0 0,1 6,19Z',
  rocket:
    'M3.9 15.7c-1.7 1.5-2.3 5.2-2.3 5.6 0 .3.1.6.3.8.2.2.4.3.7.3h.1c.4-.1 4.2-.6 5.6-2.3 1.1-1.3 1-3.1-.2-4.3-1.2-1.1-3-1.1-4.2-.1zm2.8 3.2c-.5.6-1.8 1.1-3 1.4.3-1.2.8-2.5 1.4-3 .3-.2.5-.3.8-.3.3 0 .6.1.8.3.4.4.4 1.1 0 1.6zM23 2c0-.5-.4-1-1-1h-.1c-4.6 0-8.7 2.2-11.3 5.9-1.2-.3-3.6-.7-5.2.3-1.7 1.1-2.3 4.3-2.4 4.6s0 .6.2.8c.2.3.5.4.8.4h4.6l2.4 2.4V20c0 .3.1.6.4.8.2.2.4.2.6.2h.2c.4-.1 3.5-.7 4.7-2.4 1-1.5.6-3.9.3-5.2C22.2 9.7 23 4.7 23 2zM8.4 11H5.3c.3-.9.7-1.8 1.3-2.2.6-.4 1.9-.3 2.9-.2-.4.8-.8 1.6-1.1 2.4zm6.8 6.4c-.4.5-1.3 1-2.2 1.3v-3.1c.8-.3 1.6-.7 2.3-1.1.2 1.1.3 2.3-.1 2.9zm.3-5.2c-1 .6-2.1 1.2-3.2 1.7l-2.1-2.1c.5-1.1 1-2.2 1.7-3.2 2-3.2 5.4-5.2 9.1-5.5-.3 2.8-1.5 6.3-5.5 9.1z',
  diamond:
    'M23 9c0-.2 0-.3-.1-.4 0 0 0-.1-.1-.1v-.1l-4-6c-.2-.2-.5-.4-.8-.4H6c-.3 0-.6.2-.8.4l-4 6v.1s0 .1-.1.1c-.1.2-.1.2-.1.3V9c0 .1 0 .2.1.3 0 0 0 .1.1.1 0 .1 0 .1.1.2l10 13 .1.1s0 .1.1.1l.1.1h1s.1 0 .1-.1l.1-.1.1-.1 10-13s.1-.1.1-.2V9zM7.3 10l2.2 7L4 10h3.3zm5.1-6 2 4H9.6l2-4h.8zm2.2 6L12 18.6 9.4 10h5.2zm2.1 0H20l-5.4 7 2.1-7zm3.4-2h-3.5l-2-4h2.8l2.7 4zM6.5 4h2.8l-2 4H3.9l2.6-4z',
  star: 'M18.2 22c-.2 0-.3 0-.5-.1l-5.7-3-5.7 3c-.3.2-.7.1-1.1-.1-.3-.2-.5-.6-.4-1l1.1-6.4L1.3 10C1 9.7.9 9.3 1 9c.1-.4.4-.6.8-.7l6.4-.9 2.9-5.8c.3-.7 1.5-.7 1.8 0l2.9 5.8 6.4.9c.3 0 .6.3.8.7.1.4 0 .8-.3 1l-4.6 4.5 1.1 6.4c.1.4-.1.8-.4 1-.2.1-.4.1-.6.1zM4.1 10l3.5 3.5c.3.2.4.5.4.8l-.8 4.9 4.4-2.3c.3-.2.6-.2.9 0l4.4 2.3-.9-4.9c-.1-.3.1-.7.3-.9l3.5-3.5-4.9-.7c-.3 0-.6-.3-.8-.5L12 4.3 9.8 8.7c-.1.3-.4.5-.7.5l-5 .8z',
};

const colorForTier: Record<AllCategoriesKey, string> = {
  unicorn: '#f368e0',
  star: '#f7b731',
  ball: '#a55eea',
  rocket: '#eb3b5a',
  diamond: '#00d2d3',
};

interface SponsorProps {
  sponsor: ReadableSupporter;
  tier: AllCategoriesKey;
  category: string;
}

export const SponsorItem = (props: SponsorProps) => {
  const { sponsor, tier, category } = props;
  const color = hexToRgb(colorForTier[tier], 1, true);
  return (
    <ListItem>
      <Container title={sponsor.name} href={sponsor.link || '#'}>
        <NameAndPhotoContainer>
          <Img
            src={
              sponsor.photo || buildBoringAvatarUrl('', imgSizesForTier[tier])
            }
            alt={sponsor.name}
            width={imgSizesForTier[tier]}
            height={imgSizesForTier[tier]}
            className={'rounded-half h-full bg-accent'}
            style={{ minHeight: imgSizesForTier[tier] }}
          />
          <span
            className={cx(fontSizesForTier[tier], 'font-medium')}
            style={{ fontSize: tier === 'rocket' ? '1rem' : undefined }}
          >
            {sponsor.name}
          </span>
        </NameAndPhotoContainer>
        <Tier style={{ '--tint': color } as CSSProperties}>
          <Icon
            path={iconForTier[tier]}
            className={tier === 'unicorn' ? 'size-4' : 'size-3'}
          />
          <span>{category}</span>
        </Tier>
      </Container>
    </ListItem>
  );
};
