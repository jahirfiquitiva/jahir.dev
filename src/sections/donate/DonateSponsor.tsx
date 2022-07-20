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
  robot: '$lg',
  lightning: '$xl',
  diamond: '$2xl',
};

const sizesForTier: Record<SponsorsCategoryKey, number> = {
  unicorn: 24,
  ball: 28,
  rocket: 32,
  robot: 36,
  lightning: 48,
  diamond: 52,
};

const iconForTier: Record<SponsorsCategoryKey, string> = {
  unicorn: icons.unicorn,
  ball: mdiCrystalBall,
  rocket: icons.rocket,
  robot: icons.robot,
  lightning: icons.lightning,
  diamond: icons.diamond,
};

const cleanNameForTier: Record<SponsorsCategoryKey, string> = {
  unicorn: 'Unicorn',
  ball: 'Crystal Ball',
  rocket: 'Rocket',
  robot: 'Robot',
  lightning: 'Lightning',
  diamond: 'Diamond',
};

const buildPhotoLink = (
  tier: SponsorsCategoryKey,
  name: string,
  photo?: string,
  username?: string,
): string => {
  let photoLink = '';
  if (!photo) {
    photoLink = `https://source.boringavatars.com/beam/${
      sizesForTier[tier]
    }?name=${encodeURI(name)}`;
  }
  if (username) {
    photoLink = `https://unavatar.io/${username}?fallback=${photoLink}`;
  }
  if (photo) {
    if (photo.includes('unavatar.io') && !photo.includes('fallback')) {
      photoLink = `${photo}?fallback=${photoLink}`;
    } else photoLink = photo;
  }
  return photoLink;
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
            src={buildPhotoLink(
              tier,
              sponsor.name,
              sponsor.photo,
              sponsor.username,
            )}
            alt={sponsor.name}
            size={sizesForTier[tier]}
          />
          <span>{sponsor.name}</span>
        </NameContainer>
        <Tier as={'span'}>
          <Icon path={iconForTier[tier]} size={0.65} />
          <span>{cleanNameForTier[tier]}</span>
        </Tier>
      </Container>
    </li>
  );
};
