import styled from '@emotion/styled';
import { mdiHeartOutline, mdiCreditCardOutline, mdiPizza } from '@mdi/js';

import { LinkButton, LinkButtonProps } from '~/elements/button';
import { Component } from '~/elements/fc';

const BaseGitHubButton = styled(LinkButton)`
  background-color: #d34399;

  &:hover,
  &:focus {
    background-color: #a43477;
  }
`;

export const GitHubButton: Component<LinkButtonProps> = (props) => {
  return (
    <BaseGitHubButton
      {...props}
      icon={mdiHeartOutline}
      href={'https://github.com/sponsors/jahirfiquitiva'}
    />
  );
};

const BaseBmacButton = styled(LinkButton)`
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
      icon={mdiPizza}
      href={'https://buymeacoff.ee/jahirfiquitiva'}
    />
  );
};

const BasePayPalButton = styled(LinkButton)`
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
      icon={mdiCreditCardOutline}
      href={'https://jahir.xyz/DonatePayPal'}
    />
  );
};
