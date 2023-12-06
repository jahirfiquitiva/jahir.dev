import Icon from '@mdi/react';
import cx from 'classix';

import { ButtonLink } from '@/components/core/link/button-link';
import { telegram, twitterOutline } from '@/components/icons/icons';
import { mdiEmail } from '@/components/icons/mdi';

const emailButtonClasses = cx(
  'hocus:bg-[rgba(211_60_48/0.08)]',
  'hocus:border-[rgba(211_60_48/1)]',
  'dark:hocus:bg-[rgba(236_86_73/0.16)]',
  'dark:hocus:border-[rgba(236_86_73/1)]',
);

const twitterButtonClasses = cx(
  'hocus:bg-[rgba(26_145_218/0.08)]',
  'hocus:border-[rgba(26_145_218/1)]',
  'dark:hocus:bg-[rgba(29_161_242/0.16)]',
  'dark:hocus:border-[rgba(29_161_242/1)]',
);

const telegramButtonClasses = cx(
  'hocus:bg-[rgba(0_122_184/0.08)]',
  'hocus:border-[rgba(0_122_184/1)]',
  'dark:hocus:bg-[rgba(51_160_214/0.16)]',
  'dark:hocus:border-[rgba(51_160_214/1)]',
);

export default function ContactButtons() {
  return (
    <div className={'flex flex-wrap items-center gap-16'}>
      <ButtonLink
        title={'Compose an email to Jahir'}
        href={'mailto:hola@jahir.dev?subject=Hi%20Jahir!'}
        outlined
        className={emailButtonClasses}
        data-umami-event={'contact-via-email'}
      >
        <Icon path={mdiEmail} size={0.95} />
        <span>Email</span>
      </ButtonLink>
      <ButtonLink
        title={'Compose a Twitter direct message for Jahir'}
        href={'https://jahir.xyz/twitterdm'}
        outlined
        className={twitterButtonClasses}
        data-umami-event={'contact-via-twitter'}
      >
        <Icon path={twitterOutline} size={0.9} />
        <span>Twitter</span>
      </ButtonLink>
      <ButtonLink
        title={"Jahir's Telegram profile"}
        href={'https://jahir.xyz/tlgrm'}
        outlined
        className={telegramButtonClasses}
        data-umami-event={'contact-via-telegram'}
      >
        <Icon path={telegram} size={0.85} />
        <span>Telegram</span>
      </ButtonLink>
    </div>
  );
}
