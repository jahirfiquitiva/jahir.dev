import Icon from '@mdi/react';
import cx from 'classix';
import type { Route } from 'next';
import type { CSSProperties } from 'react';

import { Img } from '@/components/core/img';
import { mdiCrystalBall } from '@/components/icons/mdi';
import { diamond, rocket, star, unicorn } from '@/components/icons/paths';
import { hexToRgb } from '@/utils/color';

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
  unicorn: 'text-2xs',
  star: 'text-xs',
  ball: 'text-sm',
  rocket: 'text-md',
  diamond: 'text-lg',
};

const iconForTier: Record<AllCategoriesKey, string> = {
  unicorn,
  ball: mdiCrystalBall,
  rocket,
  diamond,
  star,
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
      <Container title={sponsor.name} href={(sponsor.link || '#') as Route}>
        <NameAndPhotoContainer>
          <Img
            src={
              sponsor.photo ||
              `https://source.boringavatars.com/beam/${imgSizesForTier[tier]}/`
            }
            alt={sponsor.name}
            size={imgSizesForTier[tier]}
            className={'rounded-half h-full'}
            style={{ minHeight: imgSizesForTier[tier] }}
          />
          <span className={fontSizesForTier[tier]}>{sponsor.name}</span>
        </NameAndPhotoContainer>
        <Tier
          className={cx(
            'bg-[rgba(var(--sponsor-color)/0.06)]',
            'group-hocus/sponsor:bg-[rgba(var(--sponsor-color)/0.12)]',
            'dark:bg-[rgba(var(--sponsor-color)/0.12)]',
            'dark:group-hocus/sponsor:bg-[rgba(var(--sponsor-color)/0.18)]',
            'group-hocus/sponsor:border-[rgba(var(--sponsor-color)/0.56)]',
          )}
          style={{ '--sponsor-color': color } as CSSProperties}
        >
          <Icon path={iconForTier[tier]} size={0.65} />
          <span>{category}</span>
        </Tier>
      </Container>
    </ListItem>
  );
};
