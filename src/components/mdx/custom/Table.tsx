import { ComponentProps } from 'react';

import type { FC } from '@/types';
import { styled } from '~/stitches';

const TableContainer = styled('div', {
  WebkitOverflowScrolling: 'touch',
  overflow: 'auto',
  overflowY: 'hidden',
  maxWidth: '100%',
});

const RealTable = styled('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,

  '& td, & th': {
    p: '$4 $8',
    border: '1px solid $divider',
    verticalAlign: 'middle',
  },
  '& td:not([align]), & th:not([align])': { textAlign: 'inherit' },
  '& th:not([align])': { textAlign: 'start' },
  '& tr:last-child td, & tr:last-child th': {
    borderBottomWidth: 1,
  },

  '& tbody tr:nth-child(2n)': {
    backgroundColor: '$primary',
    dark: { $colors$primary: '#0b152b' },
  },

  variants: {
    fullWidth: {
      true: { width: '100%' },
    },
  },
});

export const Table: FC<ComponentProps<typeof RealTable>> = (props) => {
  return (
    <TableContainer>
      <Table {...props} />
    </TableContainer>
  );
};
