import Icon from '@mdi/react';

import { Heading } from '@/components/atoms';
import { Link, LinkButton } from '@/components/core';
import { mdiCreditCardChipOutline, mdiHeartOutline, mdiPizza } from '@/icons';
import {
  styled,
  darkTheme as theme,
  type StitchesCSS as CSS,
} from '~/stitches';

const ButtonsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 'calc($$verticalContentPadding / 2)',
});

const ButtonsGroup = styled(ButtonsContainer, {
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
});

const ghSponsorsButtonStyles: CSS = {
  color: theme.colors['text-primary']?.value,
  backgroundColor: '#c94091',
  hocus: {
    color: theme.colors['text-primary']?.value,
    backgroundColor: '#b43982',
  },
};

const GitHubSponsorsButton = styled(LinkButton, {
  ...ghSponsorsButtonStyles,
  dark: ghSponsorsButtonStyles,
});

const paypalButtonStyles: CSS = {
  color: theme.colors['text-primary']?.value,
  backgroundColor: '#1a4593',
  hocus: {
    color: theme.colors['text-primary']?.value,
    backgroundColor: '#002b7a',
  },
};

const PayPalButton = styled(LinkButton, {
  ...paypalButtonStyles,
  dark: paypalButtonStyles,
});

export const DonateButtons = () => {
  return (
    <ButtonsContainer>
      <Heading as={'h4'} css={{ fontSize: '$md' }}>
        Donate via...
      </Heading>
      <ButtonsGroup>
        <GitHubSponsorsButton
          href={'https://github.com/sponsors/jahirfiquitiva'}
          title={"Jahir Fiquitiva's GitHub Sponsors Page"}
        >
          <Icon path={mdiHeartOutline} size={0.9} />
          GitHub Sponsors
        </GitHubSponsorsButton>
        <LinkButton
          href={'https://buymeacoffee.com/jahirfiquitiva'}
          title={"Jahir Fiquitiva's Buy me a pizza or coffee Page"}
        >
          <Icon path={mdiPizza} size={0.9} />
          <span>Buy me a pizza</span>
        </LinkButton>
        <PayPalButton
          href={'https://jahir.xyz/DonatePayPal'}
          title={"Jahir Fiquitiva's PayPal Donate Page"}
        >
          <Icon path={mdiCreditCardChipOutline} size={0.9} />
          PayPal
        </PayPalButton>
      </ButtonsGroup>
      <small>
        ... or gift me{' '}
        <Link
          href={
            'https://www.amazon.com/hz/wishlist/ls/IEAGJXCWA83F?ref_=wl_share'
          }
          title={"Jahir Fiquitiva's Amazon Wishlist"}
        >
          something from my Amazon wishlist
        </Link>
      </small>
    </ButtonsContainer>
  );
};
