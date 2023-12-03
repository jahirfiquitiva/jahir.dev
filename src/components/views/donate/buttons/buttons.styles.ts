import tw from 'tailwind-styled-components';

import { ButtonLink } from '@/components/core/link/button-link';

export const GitHubSponsorsLink = tw(ButtonLink)`
  bg-[#c94091]
  hocus:bg-[#b43982]
  dark:bg-[#ec6cb9]
  dark:hocus:bg-[#f089c7]
`;

export const PayPalLink = tw(ButtonLink)`
  bg-[#003087]
  hocus:bg-[#00266c]
  dark:bg-[#4dbae8]
  dark:hocus:bg-[#80ceef]
`;

export const AmazonLink = tw(ButtonLink)`
  bg-[#146eb4]
  hocus:bg-[#105890]
  dark:bg-[#ff9900]
  dark:hocus:bg-[#ffad33]
`;
