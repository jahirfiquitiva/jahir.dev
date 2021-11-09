import styled from '@emotion/styled';
import { mdiHeartOutline, mdiCreditCardOutline, mdiPizza } from '@mdi/js';

import LinkButton, {
  LinkButtonProps,
} from '~/new-components/atoms/simple/link-button';
import { Component } from '~/types';

const BaseGitHubButton = styled(LinkButton)`
  background-color: #c94091;
  color: #fff !important;

  &:hover,
  &:focus {
    background-color: #b43982;
    color: #fff !important;
  }
`;

type DonationButtonProps = Omit<LinkButtonProps, 'href' | 'title'>;

export const GitHubButton: Component<DonationButtonProps> = (props) => {
  return (
    <BaseGitHubButton
      {...props}
      title={'Link to GitHub Sponsors'}
      icon={mdiHeartOutline}
      href={'https://github.com/sponsors/jahirfiquitiva'}
    />
  );
};

const BaseBmacButton = styled(BaseGitHubButton)`
  background-color: #516cd9;

  &:hover,
  &:focus {
    background-color: #485fc0;
  }
`;

export const BmacButton: Component<DonationButtonProps> = (props) => {
  return (
    <BaseBmacButton
      {...props}
      title={'Link to Buy me a Coffee'}
      icon={mdiPizza}
      href={'https://buymeacoff.ee/jahirfiquitiva'}
    />
  );
};

const BasePayPalButton = styled(BaseGitHubButton)`
  background-color: #1a4593;

  &:hover,
  &:focus {
    background-color: #002b7a;
  }
`;

export const PayPalButton: Component<DonationButtonProps> = (props) => {
  return (
    <BasePayPalButton
      {...props}
      title={'Link to PayPal Donations'}
      icon={mdiCreditCardOutline}
      href={'https://jahir.xyz/DonatePayPal'}
    />
  );
};
