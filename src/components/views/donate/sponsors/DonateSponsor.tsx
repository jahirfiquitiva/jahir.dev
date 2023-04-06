import Icon from '@mdi/react';

import { buildChipStyles, Chip, Img, Link } from '@/components/core';
import {
  mdiCrystalBall,
  unicorn,
  rocket,
  diamond,
} from '@/components/icons';
import { sizesForTier, Sponsor, SponsorsCategoryKey } from '@/lib/sponsors';
import type { ThemeColorValue } from '@/stitches';
import type { FC } from '@/types';
import { styled } from '~/stitches';

const Container = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$12',
  pl: '$14',
  pr: '$12',
  py: '$12',
  color: '$text-secondary',
  dark: { color: '$text-secondary' },
  hocus: {
    backgroundColor: 'rgba($colors$accent-shadow / .08)',
    color: '$text-primary',
    dark: { color: '$text-primary' },
    '& > div:first-of-type > span': {
      textDecoration: 'underline',
    },
  },
});

const NameContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$10',
  useFont: 'manrope',
  fontWeight: 700,
  '& > img': {
    borderRadius: '50%',
  },
  '& > span': { ellipsize: true },
});

const Tier = styled(Chip, {
  fontSize: '$3xs',
  fontWeight: 500,
  backgroundColor: '$$bg',
  color: 'inherit',
  p: '$4 $8',
  '& > span': {
    useFont: 'inter',
  },
  hocus: {
    color: 'inherit',
    transform: 'none',
  },
});

const fontSizesForTier: Record<SponsorsCategoryKey, string> = {
  unicorn: '$2xs',
  ball: '$xs',
  rocket: '$sm',
  diamond: '$xl',
};

const iconForTier: Record<SponsorsCategoryKey, string> = {
  unicorn,
  ball: mdiCrystalBall,
  rocket,
  diamond,
};

const cleanNameForTier: Record<SponsorsCategoryKey, string> = {
  unicorn: 'Unicorn',
  ball: 'Crystal Ball',
  rocket: 'Rocket',
  diamond: 'Diamond',
};

const colorForTier: Record<SponsorsCategoryKey, ThemeColorValue> = {
  unicorn: '#f368e0',
  ball: '#a55eea',
  rocket: '#eb3b5a',
  diamond: '#00d2d3',
};

interface DonateSponsorProps {
  sponsor?: Sponsor;
  tier?: SponsorsCategoryKey;
}

export const DonateSponsor: FC<DonateSponsorProps> = (props) => {
  const { sponsor, tier } = props;
  if (!sponsor || !tier) return null;
  return (
    <li>
      <Container
        title={sponsor.name}
        href={sponsor.link || '#'}
        css={{ fontSize: fontSizesForTier[tier] }}
        underline={false}
      >
        <NameContainer>
          <Img
            src={sponsor.photo}
            alt={sponsor.name}
            size={sizesForTier[tier]}
            css={{ backgroundColor: '$accent' }}
          />
          <span>{sponsor.name}</span>
        </NameContainer>
        <Tier css={buildChipStyles(colorForTier[tier])}>
          <Icon path={iconForTier[tier]} size={0.65} />
          <span>{cleanNameForTier[tier]}</span>
        </Tier>
      </Container>
    </li>
  );
};
