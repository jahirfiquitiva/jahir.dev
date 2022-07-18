import { Img, Link } from '@/components/atoms';
import type { FC } from '@/types';
import { styled, darkTheme } from '~/stitches';

const AppItemContainer = styled(Link, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$2',
  p: '$2',
  borderRadius: '$space$8',
  fontSize: '12px',
  transition: 'all .15s ease-in-out',
  color: darkTheme.colors['text-secondary']?.value,
  dark: { color: darkTheme.colors['text-secondary']?.value },
  hocus: {
    transform: 'translateY(-1px)',
    color: darkTheme.colors['text-primary']?.value,
    dark: { color: darkTheme.colors['text-primary']?.value },
  },
  '& > span': {
    display: 'block',
    ellipsize: true,
    maxWidth: 'calc(100% + $space$4)',
  },
  '@mobile-lg': {
    gap: '$4',
    p: '$4',
  },
});

const AppIcon = styled(Img, {
  border: 'none !important',
  filter: 'drop-shadow(0 0 4px $colors$img-drop-shadow)',
  maxWidth: 48,
  '@mobile-md': {
    maxWidth: 56,
  },
  '@mobile-lg': {
    maxWidth: 64,
  },
  '@tablet-sm': {
    maxWidth: 72,
  },
});

export interface AppItemProps {
  image: string;
  name: string;
  link?: string;
}

export const AppItem: FC<{ item: AppItemProps }> = ({ item }) => {
  return (
    <li>
      <AppItemContainer href={item.link || '#'} title={item.name}>
        <AppIcon
          src={`/static/images/${item.image}`}
          size={72}
          alt={item.name}
        />
        <span>{item.name}</span>
      </AppItemContainer>
    </li>
  );
};
