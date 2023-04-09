import { Ring } from '@uiball/loaders';

import type { FC } from '@/old/types';
import { styled } from '~/stitches';

const StyledContainer = styled('div', {
  my: '$48',
  mx: 'auto',
  textAlign: 'center',
});

export const Loading: FC = (props) => (
  <StyledContainer {...props}>
    <Ring size={56} lineWeight={5} speed={2} color={'var(--colors-accent)'} />
  </StyledContainer>
  );