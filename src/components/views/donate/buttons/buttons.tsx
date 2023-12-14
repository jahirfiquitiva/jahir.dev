import Icon from '@mdi/react';

import { Heading } from '@/components/core/heading';
import { gift } from '@/components/icons/icons';
import { coffee } from '@/components/icons/icons';
import {
  mdiCreditCardChipOutline,
  mdiHeartOutline,
} from '@/components/icons/mdi';

import {
  AmazonLink,
  GitHubSponsorsLink,
  PayPalLink,
  BuyMeACoffeeLink,
} from './buttons.styles';

export const DonateButtons = () => {
  return (
    <div className={'flex flex-col gap-12 mt-16 mb-24'}>
      <Heading $as={'h2'} className={'text-lg'}>
        Donate via
      </Heading>
      <div className={'flex flex-row items-center gap-16 flex-wrap'}>
        <GitHubSponsorsLink
          href={'https://github.com/sponsors/jahirfiquitiva'}
          title={'Sponsor Jahir on GitHub'}
          data-umami-event={'Donate'}
          data-umami-event-via={'GitHub Sponsors'}
          outlined
        >
          <Icon path={mdiHeartOutline} size={0.9} />
          <span>GitHub Sponsors</span>
        </GitHubSponsorsLink>
        <BuyMeACoffeeLink
          href={'https://buymeacoffee.com/jahirfiquitiva'}
          title={'Buy Jahir a Coffee'}
          data-umami-event={'Donate'}
          data-umami-event-via={'Buy me a Coffee'}
          outlined
        >
          <Icon path={coffee} size={0.9} />
          <span>Buy me a Coffee</span>
        </BuyMeACoffeeLink>
        <PayPalLink
          href={'https://jahir.xyz/DonatePayPal'}
          title={'Donate to Jahir via PayPal'}
          data-umami-event={'Donate'}
          data-umami-event-via={'PayPal'}
          outlined
        >
          <Icon path={mdiCreditCardChipOutline} size={0.9} />
          <span>PayPal</span>
        </PayPalLink>
        <AmazonLink
          href={
            'https://www.amazon.com/hz/wishlist/ls/IEAGJXCWA83F?ref_=wl_share'
          }
          title={'Buy Jahir a gift from his Amazon Wishlist'}
          data-umami-event={'Donate'}
          data-umami-event-via={'buying an Amazon gift'}
          outlined
        >
          <Icon path={gift} size={0.85} />
          <span>Buy gift</span>
        </AmazonLink>
      </div>
    </div>
  );
};
