import { mdiHeartOutline, mdiCreditCardOutline, mdiPizza } from '@mdi/js';
import tw from 'twin.macro';

import { SocialLinkProps } from './social-links';

import { ButtonGroup } from '~/components/atoms/complex';
import { LinkButton } from '~/components/atoms/simple';
import { Component } from '~/types';

const BaseDonationLink = tw(LinkButton)`
  text-white
  hocus:(text-white no-underline)
`;

const BaseGitHubSponsorsLink = tw(BaseDonationLink)`
  background-color[#c94091]
  hocus:(background-color[#b43982])
`;

const BaseBmacLink = tw(BaseDonationLink)`
  background-color[#516cd9]
  hocus:(background-color[#485fc0])
`;

const BasePayPalLink = tw(BaseDonationLink)`
  background-color[#1a4593]
  hocus:(background-color[#002b7a])
`;

type DonationLinkProps = SocialLinkProps;

const GitHubSponsorsLink: Component<DonationLinkProps> = (props) => {
  return (
    <BaseGitHubSponsorsLink
      {...props}
      title={'Link to GitHub Sponsors'}
      icon={mdiHeartOutline}
      href={'https://github.com/sponsors/jahirfiquitiva'}
    />
  );
};

const BmacLink: Component<DonationLinkProps> = (props) => {
  return (
    <BaseBmacLink
      {...props}
      title={'Link to Buy me a Coffee'}
      icon={mdiPizza}
      href={'https://buymeacoff.ee/jahirfiquitiva'}
    />
  );
};

const PayPalLink: Component<DonationLinkProps> = (props) => {
  return (
    <BasePayPalLink
      {...props}
      title={'Link to PayPal Donations'}
      icon={mdiCreditCardOutline}
      href={'https://jahir.xyz/DonatePayPal'}
    />
  );
};

export const DonationLinks = () => {
  return (
    <ButtonGroup>
      <GitHubSponsorsLink>GitHub Sponsors</GitHubSponsorsLink>
      <BmacLink>Buy me a pizza</BmacLink>
      <PayPalLink>PayPal</PayPalLink>
    </ButtonGroup>
  );
};
