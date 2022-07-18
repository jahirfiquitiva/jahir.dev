import { Ring } from '@uiball/loaders';

import { styled } from '~/stitches';

const StyledContainer = styled('div', {
  m: 'auto',
  textAlign: 'center',
});

export const Loading = () => {
  return (
    <StyledContainer>
      <Ring size={56} lineWeight={5} speed={2} color={'var(--colors-accent)'} />
    </StyledContainer>
  );
};
