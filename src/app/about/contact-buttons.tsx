import Icon from '@mdi/react';
import { cx } from 'classix';

import { ButtonLink } from '@/components/core/link';
import { mdiEmail, telegram, twitterOutline } from '@/components/icons';

const getButtonClasses = async (color: string, darkColor: string) => {
  const twColor = color.split(' ').join('_');
  const twDarkColor = darkColor.split(' ').join('_');
  return cx(
    `hocus:bg-[rgba(${twColor}/0.08)]`,
    `hocus:border-[rgba(${twColor}/1)]`,
    `dark:hocus:bg-[rgba(${twDarkColor}/0.16)]`,
    `dark:hocus:border-[rgba(${twDarkColor}/1)]`,
  );
};

export default async function ContactButtons() {
  const emailButtonClasses = await getButtonClasses('211 60 48', '236 86 73');
  const twitterButtonClasses = await getButtonClasses(
    '26 145 218',
    '29 161 242',
  );
  const telegramButtonClasses = await getButtonClasses(
    '0 122 184',
    '51 160 214',
  );

  return (
    <div className={cx('flex flex-wrap items-center gap-16')}>
      <ButtonLink
        title={'Compose an email to Jahir'}
        href={'mailto:hola@jahir.dev?subject=Hi%20Jahir!'}
        outlined
        className={emailButtonClasses}
      >
        <Icon path={mdiEmail} size={0.95} />
        <span>Email</span>
      </ButtonLink>
      <ButtonLink
        title={'Compose a Twitter direct message for Jahir'}
        href={'https://jahir.xyz/twitterdm'}
        outlined
        className={twitterButtonClasses}
      >
        <Icon path={twitterOutline} size={0.9} />
        <span>Twitter</span>
      </ButtonLink>
      <ButtonLink
        title={"Jahir's Telegram profile"}
        href={'https://jahir.xyz/tlgrm'}
        outlined
        className={telegramButtonClasses}
      >
        <Icon path={telegram} size={0.85} />
        <span>Telegram</span>
      </ButtonLink>
    </div>
  );
}
