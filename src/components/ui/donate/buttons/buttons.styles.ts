import { OutlinedLinkButton as LinkButton } from '@/components/atoms/link-button';
import { tw } from '@/utils/cx';

const DonationLink = tw(LinkButton)`
  pr-3.5
  hocus:!bg-tint-bg
  hocus:!ring-tint-border
`;

export const GitHubSponsorsLink = tw(DonationLink)`
  [--tint:201_64_145]
  dark:[--tint:236_108_185]
`;

export const BuyMeACoffeeLink = tw(DonationLink)`
  [--tint:255_221_0]
  dark:[--tint:255_224_26]
`;

export const PayPalLink = tw(DonationLink)`
  [--tint:0_48_135]
  dark:[--tint:77_186_232]
`;

export const AmazonLink = tw(DonationLink)`
  [--tint:20_110_180]
  dark:[--tint:255_153_0]
`;
