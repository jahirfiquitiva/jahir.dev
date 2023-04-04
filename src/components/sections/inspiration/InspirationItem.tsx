import { Img, Link } from '@/components/core';
import type { FC } from '@/types';
import { styled } from '~/stitches';

const ItemLink = styled(Link, {
  display: 'inline-flex',
  alignItems: 'center',
  alignSelf: 'flex-start',
  gap: '$12',
  p: '$8',
  m: '-$8',
  ellipsize: true,
  borderRadius: '$space$8',
  transition: 'all .15s ease-in-out',
  color: '$text-secondary',
  dark: { color: '$text-secondary' },
  hocus: {
    backgroundColor: 'rgba($colors$toolbar-glow / .1)',
  },
});

const ItemImage = styled(Img, {
  filter: 'drop-shadow(0 0 1px $colors$img-drop-shadow)',
});

interface InspoItemType {
  title: string;
  link: string;
  domain?: string;
}

export const InspirationItem: FC<{ item: InspoItemType }> = ({ item }) => {
  const { title, link, domain } = item;
  return (
    <ItemLink title={title || domain || ''} href={link || '#'}>
      <ItemImage
        size={24}
        alt={title || `Favicon for ${title} website`}
        src={
          `https://unavatar.io/microlink/${domain}` +
          `?fallback=https://unavatar.io/duckduckgo/${domain}` +
          `?fallback=https://source.boringavatars.com/beam/24?name=${encodeURI(
            title || domain || '',
          )}`
        }
      />
      <span>{title}</span>
    </ItemLink>
  );
};
