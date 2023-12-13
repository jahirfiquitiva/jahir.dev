import { SocialLinks } from '@/components/molecules/social-links/social-links';
import cx from '@/utils/cx';

export const LetsConnect = () => {
  return (
    <section id={'contact'} className={cx('flex flex-col gap-6 -mt-20')}>
      <p className={'text-2xs font-manrope font-bold'}>Let&apos;s connect!</p>
      <SocialLinks className={'justify-start'} />
    </section>
  );
};
