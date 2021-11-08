import styled from '@emotion/styled';
import { mdiHeartOutline, mdiCreditCardOutline, mdiPizza } from '@mdi/js';

import { Component } from '~/elements/base/fc';
import LinkButton, {
  LinkButtonProps,
} from '~/new-components/elements/simple/link-button';

const BaseGitHubButton = styled(LinkButton)`
  background-color: #c94091;
  color: #fff !important;

  &:hover,
  &:focus {
    background-color: #b43982;
    color: #fff !important;
  }
`;

export const GitHubButton: Component<Omit<LinkButtonProps, 'href'>> = (
  props,
) => {
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

export const BmacButton: Component<Omit<LinkButtonProps, 'href'>> = (props) => {
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

export const PayPalButton: Component<Omit<LinkButtonProps, 'href'>> = (
  props,
) => {
  return (
    <BasePayPalButton
      {...props}
      title={'Link to PayPal Donations'}
      icon={mdiCreditCardOutline}
      href={'https://jahir.xyz/DonatePayPal'}
    />
  );
};
