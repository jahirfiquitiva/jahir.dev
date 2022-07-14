import { styled } from '~/stitches';

export const Divider = styled('hr', {
  my: '1.2rem',
  mx: 0,
  height: '1px',
  border: 'none',
  backgroundColor: '$divider',
  '@desktop': {
    my: '2rem',
  },
});

export const DotsDivider = styled('hr', {
  my: '$$verticalContentPadding',
  mx: 0,
  height: '24px',
  border: 'none',
  backgroundImage: "url('/static/images/site/dots-divider.svg')",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  color: '$divider',
  filter: 'opacity(0.24)',
  '& > svg': {
    color: '$divider',
    fill: '$divider',
  },
  dark: {
    filter: 'opacity(0.24) invert(1)',
  },
});
