import { tw } from '@/utils/cx';

import { ButtonLink } from '@/components/core/link/button-link';

export const GitHubSponsorsLink = tw(ButtonLink)`
  hocus:bg-[rgba(201,64,145,0.12)]
  hocus:border-[#c94091]
  dark:hocus:bg-[rgba(236,108,185,0.18)]
  dark:hocus:border-[#ec6cb9]
`;

export const BuyMeACoffeeLink = tw(ButtonLink)`
  hocus:bg-[rgb(255,221,0,0.12)]
  hocus:border-[#ffdd00]
  dark:hocus:bg-[rgba(255,224,26,0.18)]
  dark:hocus:border-[#ffe01a]
`;

export const PayPalLink = tw(ButtonLink)`
  hocus:bg-[rgba(0,48,135,0.12)]
  hocus:border-[#003087]
  dark:hocus:bg-[rgba(77,186,232,0.18)]
  dark:hocus:border-[#4dbae8]
`;

export const AmazonLink = tw(ButtonLink)`
  hocus:bg-[rgba(20,110,180,0.12)]
  hocus:border-[#146eb4]
  dark:hocus:bg-[rgba(255,153,0,0.18)]
  dark:hocus:border-[#ff9900]
`;
