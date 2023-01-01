import Icon from '@mdi/react';

import { Heading, LinkButton } from '@/components/atoms';
import { mdiCreditCardChipOutline, mdiHeartOutline } from '@/icons';
import {
  styled,
  darkTheme as theme,
  type StitchesCSS as CSS,
} from '~/stitches';

const ButtonsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 'calc($$verticalContentPadding / 4)',
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
        Donate using...
      </Heading>
      <ButtonsGroup>
        <GitHubSponsorsButton
          href={'https://github.com/sponsors/jahirfiquitiva'}
          title={"Jahir Fiquitiva's GitHub Sponsors Page"}
        >
          <Icon path={mdiHeartOutline} size={0.9} />
          GitHub Sponsors
        </GitHubSponsorsButton>
        <PayPalButton
          href={'https://jahir.xyz/DonatePayPal'}
          title={"Jahir Fiquitiva's PayPal Donate Page"}
        >
          <Icon path={mdiCreditCardChipOutline} size={0.9} />
          PayPal
        </PayPalButton>
      </ButtonsGroup>
      <small>
        <sup>*</sup> Both options allow custom amounts and one-time or monthly
        donations
      </small>
    </ButtonsContainer>
  );
};
