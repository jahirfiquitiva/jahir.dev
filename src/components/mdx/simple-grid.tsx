import styled from '@emotion/styled';

import { mediaQueries } from '~/types';

export const SimpleGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);

  ${mediaQueries.tablet.sm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
`;

export const SimpleGridColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
