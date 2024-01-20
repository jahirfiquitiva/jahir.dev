import { OutlinedLinkButton as LinkButton } from '@/components/atoms/link-button';
import { tw } from '@/utils/cx';

export const GitHubSponsorsLink = tw(LinkButton)`
  pr-3.5
  hocus:bg-[rgba(201,64,145,0.12)]
  hocus:ring-[#c94091]
  dark:hocus:bg-[rgba(236,108,185,0.24)]
  dark:hocus:ring-[#ec6cb9]
`;

export const BuyMeACoffeeLink = tw(LinkButton)`
  pr-3.5
  hocus:bg-[rgb(255,221,0,0.12)]
  hocus:ring-[#ffdd00]
  dark:hocus:bg-[rgba(255,224,26,0.24)]
  dark:hocus:ring-[#ffe01a]
`;

export const PayPalLink = tw(LinkButton)`
  pr-3.5
  hocus:bg-[rgba(0,48,135,0.12)]
  hocus:ring-[#003087]
  dark:hocus:bg-[rgba(77,186,232,0.24)]
  dark:hocus:ring-[#4dbae8]
`;

export const AmazonLink = tw(LinkButton)`
  pr-3.5
  hocus:bg-[rgba(20,110,180,0.12)]
  hocus:ring-[#146eb4]
  dark:hocus:bg-[rgba(255,153,0,0.24)]
  dark:hocus:ring-[#ff9900]
`;
