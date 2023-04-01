import Icon from '@mdi/react';

import { Link } from '@/components/atoms';
import {
  nextJs,
  stitches,
  mdiLanguageTypescript,
  mdiTriangle,
} from '@/icons';
import { styled } from '~/stitches';

const DotsContainer = styled('ul', {
  '$$dot-space': '20px',
  '$$dot-size': '2px',
  overflow: 'hidden',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  p: '$$verticalContentPadding calc($$verticalContentPadding / 2)',
  rowGap: 'calc($$verticalContentPadding / 1.25)',
  alignItems: 'center',
  justifyContent: 'center',
  background:
    // eslint-disable-next-line max-len
    'linear-gradient(90deg, $background calc($$dot-space - $$dot-size), $transparent 1%) center, linear-gradient($background calc($$dot-space - $$dot-size), $transparent 1%) center, $text-tertiary',
  backgroundSize: '$$dot-space $$dot-space',
  backgroundRepeat: 'repeat',
  listStyle: 'none',
  '& > li': {
    m: 'auto',
  },
  '@mobile-lg': {
    '$$dot-space': '20px',
    rowGap: 'calc($$verticalContentPadding / 1.5)',
  },
  '@tablet-sm': {
    '$$dot-space': '24px',
    rowGap: '$$verticalContentPadding',
  },
});

const IconContainer = styled('li', {
  $$iconSize: 3,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$background',
  borderRadius: '50%',
  maxWidth: 'calc(calc(1.5rem * $$iconSize) - calc($space$8 * 2))',
  maxHeight: 'calc(calc(1.5rem * $$iconSize) - calc($space$8 * 2))',
  p: '$8',
  '@tablet-md': {
    $$iconSize: 4,
  },
  '& > a': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    lineHeight: 1,
    maxWidth: 'calc(calc(1.5rem * $$iconSize) - calc($space$8 * 4))',
    maxHeight: 'calc(calc(1.5rem * $$iconSize) - calc($space$8 * 4))',
    overflow: 'hidden',
  },
  '& svg': {
    mx: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    width: 'calc(1.5rem * $$iconSize)',
    height: 'calc(1.5rem * $$iconSize)',
    color: '$text-secondary',
    hocus: {
      color: '$text-primary',
    },
    '& path': {
      background: '$background',
    },
  },
  variants: {
    mdx: {
      true: {
        p: 0,
        $$iconSize: 3.25,
        '@tablet-md': {
          $$iconSize: 4.25,
        },
      },
    },
  },
});

export const Colophon = () => {
  return (
    <DotsContainer className={'colophon'}>
      <IconContainer>
        <Link title={'NextJS'} href={'https://nextjs.org/'}>
          <Icon path={nextJs} />
        </Link>
      </IconContainer>
      <IconContainer>
        <Link title={'Stitches'} href={'https://www.stitches.dev/'}>
          <Icon path={stitches} />
        </Link>
      </IconContainer>
      <IconContainer mdx>
        <Link title={'TypeScript'} href={'https://www.typescriptlang.org/'}>
          <Icon path={mdiLanguageTypescript} />
        </Link>
      </IconContainer>
      <IconContainer>
        <Link title={'Vercel'} href={'https://vercel.com/'}>
          <Icon path={mdiTriangle} />
        </Link>
      </IconContainer>
    </DotsContainer>
  );
};
