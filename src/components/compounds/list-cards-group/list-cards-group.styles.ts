import { styled } from '~/stitches';

export const GroupSection = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  marginInline: 0,
  marginBlock: 0,
  paddingInline: 0,
  gap: '$16',
});

export const GroupHeader = styled('li', {
  display: 'flex',
  alignItems: 'flex-end',
  gap: '$12',
  mt: '$6',
  mb: '$4',
  '& > h4': {
    lineHeight: 1,
  },
  '& > hr': {
    border: 'none',
    m: 0,
    height: 1,
    backgroundColor: '$divider',
    flex: 1,
  },
});

export const NothingFound = styled('p', {
  p: '$20 0 $36',
});
