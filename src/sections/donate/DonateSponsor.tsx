import {
  mdiCrystalBall,
  mdiDiamondOutline,
  mdiLightFloodDown,
  mdiRocket,
  mdiUnicornVariant,
} from '@mdi/js';
import Icon from '@mdi/react';

import { Img, Link } from '@/components/atoms';
import type { SponsorsCategoryKey } from '@/lib/manual-sponsors';
import type { Sponsor } from '@/lib/sponsors';
import type { FC } from '@/types';
import { icons } from '@/utils';
import { styled } from '~/stitches';

const Container = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$12',
  px: '$14',
  py: '$12',
  hocus: { backgroundColor: 'rgba($colors$toolbar-glow / .1)' },
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
});

const Tier = styled(NameContainer, {
  gap: '$6',
  fontSize: '$2xs',
  fontWeight: 500,
  '& > span': {
    useFont: 'inter',
  },
});

const fontSizesForTier: Record<SponsorsCategoryKey, string> = {
  unicorn: '$2xs',
  ball: '$xs',
  rocket: '$sm',
  lightning: '$lg',
  diamond: '$xl',
};

const sizesForTier: Record<SponsorsCategoryKey, number> = {
  unicorn: 24,
  ball: 28,
  rocket: 32,
  lightning: 36,
  diamond: 48,
};

const iconForTier: Record<SponsorsCategoryKey, string> = {
  unicorn: icons.unicorn,
  ball: mdiCrystalBall,
  rocket: icons.rocket,
  lightning: icons.lightning,
  diamond: icons.diamond,
};

interface DonateSponsorProps {
  sponsor?: Sponsor;
  tier?: SponsorsCategoryKey;
  tierName?: string;
}

export const DonateSponsor: FC<DonateSponsorProps> = (props) => {
  const { sponsor, tier, tierName } = props;
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
            src={
              sponsor.photo || sponsor.username
                ? `https://unavatar.io/${sponsor.username}` +
                  `?fallback=https://source.boringavatars.com/beam/${
                    sizesForTier[tier]
                  }?name=${encodeURI(sponsor.name)}`
                : 'https://source.boringavatars.com/beam'
            }
            alt={sponsor.name}
            size={sizesForTier[tier]}
          />
          <span>{sponsor.name}</span>
        </NameContainer>
        <Tier as={'span'}>
          <Icon path={iconForTier[tier]} size={0.65} />
          <span>{tierName}</span>
        </Tier>
      </Container>
    </li>
  );
};
