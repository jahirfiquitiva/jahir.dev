import { KBarSearch } from 'kbar';

import { styled } from '~/stitches';

import { Kbd } from './Kbd';

const SearchContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  p: '.4rem',
});

const StyledSearch = styled(KBarSearch, {
  background: 'none',
  border: 'none',
  flex: 1,
  minHeight: '32px',
  borderRadius: '6px',
  borderBottomLeftRadius: '0px',
  borderBottomRightRadius: '0px',
  py: '.4rem',
  px: '.8rem',
  pr: '48px',
});

const StyledKbd = styled(Kbd, {
  position: 'absolute',
  top: '50%',
  right: '0',
  transform: 'translateX(-12px) translateY(-50%)',
});

export const SpotlightSearch = () => {
  return (
    <SearchContainer>
      <StyledSearch placeholder={'Search pages or commands'} />
      <StyledKbd>esc</StyledKbd>
    </SearchContainer>
  );
};
