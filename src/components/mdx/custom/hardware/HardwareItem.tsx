import { Img, Link } from '@/components/core';
import type { FC } from '@/types';
import { styled } from '~/stitches';

const HardwareItemContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  border: '1px solid $divider',
  borderRadius: '$space$10',
  gap: '$space$6',
  backgroundColor: 'rgba(9 17 34 / 0.006)',
  dark: { backgroundColor: 'rgba(235 240 251 / 0.008)' },
  overflow: 'hidden',
  '@tablet-sm': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 0,
  },
});

const HardwareImage = styled(Img, {
  maxWidth: 72,
  height: 'auto',
  aspectRatio: '1 / 1',
  border: 'none !important',
  overflow: 'hidden',
  objectFit: 'contain',
  p: '$8',
  filter: 'drop-shadow(0 0 4px $colors$img-drop-shadow)',
  '@mobile-md': {
    maxWidth: 84,
  },
  '@mobile-lg': {
    maxWidth: 96,
  },
  '@tablet-sm': {
    aspectRatio: '4 / 3',
    maxWidth: '100%',
    p: '$8',
    transform: 'scale(1.025)',
  },
  '@tablet-md': {
    p: '$12',
    transform: 'scale(1.075)',
  },
});

const TextsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: '$space$4',
  p: '$12 $16',
  pl: 0,
  justifyContent: 'center',
  '@tablet-sm': {
    p: '0 $14 $12',
  },
  '@tablet-md': {
    p: '0 $12 $10',
  },
});

const HardwareName = styled(Link, {
  fontWeight: 600,
  fontSize: '$xs',
  useFont: 'manrope',
  color: '$text-primary',
  m: '0 !important',
  alignSelf: 'flex-start',
});

const HardwareDescription = styled('p', {
  color: '$text-secondary',
  fontSize: '$3xs',
  m: '0 !important',
});

export interface HardwareItemProps {
  image: string;
  name: string;
  description?: string;
  link?: string;
}

export const HardwareItem: FC<{ item: HardwareItemProps }> = ({ item }) => {
  return (
    <HardwareItemContainer>
      <HardwareImage
        src={`/static/images/${item.image}`}
        size={222}
        alt={item.name}
      />
      <TextsContainer>
        <HardwareName href={item.link || '#'} title={item.name}>
          {item.name}
        </HardwareName>
        {!!item.description && (
          <HardwareDescription>{item.description}</HardwareDescription>
        )}
      </TextsContainer>
    </HardwareItemContainer>
  );
};
