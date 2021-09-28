import styled from '@emotion/styled';
import { mdiHeartOutline, mdiCreditCardOutline, mdiPizza } from '@mdi/js';

import { Component } from '~/elements/base/fc';
import { LinkButton, LinkButtonProps } from '~/elements/simple/button';

const BaseGitHubButton = styled(LinkButton)`
  background-color: #d34399;
  color: #fff !important;

  &:hover,
  &:focus {
    background-color: #a43477;
    color: #fff !important;
  }
`;

export const GitHubButton: Component<LinkButtonProps> = (props) => {
  return (
    <BaseGitHubButton
      {...props}
      title={'Link to GitHub Sponsors'}
      icon={mdiHeartOutline}
      to={'https://github.com/sponsors/jahirfiquitiva'}
    />
  );
};

const BaseBmacButton = styled(BaseGitHubButton)`
  background-color: #5f7fff;

  &:hover,
  &:focus {
    background-color: #4c66cc;
  }
`;

export const BmacButton: Component<LinkButtonProps> = (props) => {
  return (
    <BaseBmacButton
      {...props}
      title={'Link to Buy me a Coffee'}
      icon={mdiPizza}
      to={'https://buymeacoff.ee/jahirfiquitiva'}
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

export const PayPalButton: Component<LinkButtonProps> = (props) => {
  return (
    <BasePayPalButton
      {...props}
      title={'Link to PayPal Donations'}
      icon={mdiCreditCardOutline}
      to={'https://jahir.xyz/DonatePayPal'}
    />
  );
};
