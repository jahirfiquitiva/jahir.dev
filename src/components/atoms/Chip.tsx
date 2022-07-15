import { hexToRGB } from '@/utils';
import { styled, type StitchesCSS } from '~/stitches';

export const Chip = styled('span', {
  $$bg: '$divider',
  $$border: '$divider',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  p: '0.4rem 0.7rem 0.4rem 0.6rem',
  fontSize: '$3xs',
  borderRadius: '9999px',
  border: '1px solid $$border',
  background: 'none',
  color: '$text-secondary',
  transition: 'all .2s ease-in-out',
  lineHeight: '1.65',
  gap: '.4rem',
  hocus: {
    textDecoration: 'none',
    color: '$text-primary',
    backgroundColor: '$$bg',
    transform: 'scale(1.025)',
  },
});

export const ImageChip = styled(Chip, {
  lineHeight: 'inherit',
  p: '0.4rem 0.8rem 0.4rem 0.4rem',
  '& img': {
    borderRadius: '50%',
  },
});

export const ChipGroup = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  listStyle: 'none',
  py: '1rem',
  gap: '.6rem',
  marginInline: 0,
  marginBlock: 0,
  paddingInline: 0,
});

export const buildChipStyles = (color?: string | null): StitchesCSS => {
  if (!color) return {};
  return {
    $$bg: hexToRGB(color, 0.12),
    $$border: hexToRGB(color, 0.5),
  };
};
