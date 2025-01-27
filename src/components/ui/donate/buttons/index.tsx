/* eslint-disable @stylistic/max-len */
import { Icon } from '@/components/atoms/icon';

import {
  AmazonLink,
  BuyMeACoffeeLink,
  GitHubSponsorsLink,
  PayPalLink,
} from './buttons.styles';

export const DonateButtons = () => {
  return (
    <div className={'flex flex-col gap-3 mt-4 mb-6'}>
      <h2 className={'text-lg'}>Donate via</h2>
      <div className={'flex flex-row items-center gap-4 flex-wrap'}>
        <GitHubSponsorsLink
          href={'https://github.com/sponsors/jahirfiquitiva'}
          title={'Sponsor Jahir on GitHub'}
          data-umami-event={'Donate'}
          data-umami-event-via={'GitHub Sponsors'}
        >
          <Icon
            path={
              'M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z'
            }
            className={'size-5'}
          />
          <span>GitHub Sponsors</span>
        </GitHubSponsorsLink>
        <BuyMeACoffeeLink
          href={'https://buymeacoffee.com/jahirfiquitiva'}
          title={'Buy Jahir a Coffee'}
          data-umami-event={'Donate'}
          data-umami-event-via={'Buy me a Coffee'}
        >
          <Icon
            path={
              'M1 12c0 2.8 2.2 5 5 5 0 2.8 2.2 5 5 5h6c2.8 0 5-2.2 5-5V8c0-.6-.4-1-1-1H6c-2.8 0-5 2.2-5 5zm7-3h12v8c0 1.7-1.3 3-3 3h-6c-1.7 0-3-1.3-3-3V9zm-5 3c0-1.7 1.3-3 3-3v6c-1.7 0-3-1.3-3-3zm15-7c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1s1 .4 1 1v2c0 .6-.4 1-1 1zm-4 0c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1s1 .4 1 1v2c0 .6-.4 1-1 1zm-4 0c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1s1 .4 1 1v2c0 .6-.4 1-1 1z'
            }
            className={'size-5'}
          />
          <span>Buy me a Coffee</span>
        </BuyMeACoffeeLink>
        <PayPalLink
          href={'https://jahir.xyz/DonatePayPal'}
          title={'Donate to Jahir via PayPal'}
          data-umami-event={'Donate'}
          data-umami-event-via={'PayPal'}
        >
          <Icon
            path={
              'M20 6L20 18L4 18L4 6H20M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4M11 10H6V14H11V10Z'
            }
            className={'size-5'}
          />
          <span>PayPal</span>
        </PayPalLink>
        <AmazonLink
          href={
            'https://www.amazon.com/hz/wishlist/ls/IEAGJXCWA83F?ref_=wl_share'
          }
          title={'Buy Jahir a gift from his Amazon Wishlist'}
          data-umami-event={'Donate'}
          data-umami-event-via={'buying an Amazon gift'}
        >
          <Icon
            path={
              'M21.1 6.5H19c.2-.4.3-.9.3-1.4 0-1.8-1.4-3.2-3.2-3.2-2.1.1-3.4 1.6-4.1 3C11.3 3.5 10 2 7.9 2 6.2 2 4.7 3.4 4.7 5.2c0 .5.1.9.3 1.4H2.9c-.5-.1-.9.4-.9.9V12c0 .5.4.9.9.9h.9v8.2c0 .5.4.9.9.9h14.5c.5 0 .9-.4.9-.9v-8.2h.9c.5 0 .9-.4.9-.9V7.5c.1-.5-.3-1-.8-1zm-5-2.7c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4h-2.9c.5-1.2 1.3-2.8 2.9-2.8zM6.5 5.2c0-.8.6-1.4 1.4-1.4 1.6 0 2.4 1.6 2.9 2.7H7.9c-.7 0-1.4-.6-1.4-1.3zM3.8 8.4h7.3v2.7H3.8V8.4zm1.8 4.5h5.5v7.3H5.6v-7.3zm12.8 7.3h-5.5v-7.3h5.5v7.3zm1.8-9.1h-7.3V8.4h7.3v2.7z'
            }
            className={'size-5'}
          />
          <span>Buy gift</span>
        </AmazonLink>
      </div>
    </div>
  );
};
