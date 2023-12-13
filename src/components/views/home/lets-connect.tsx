import { Section } from '@/components/core/section';
import { SocialLinks } from '@/components/molecules/social-links/social-links';
import cx from '@/utils/cx';

export const LetsConnect = () => {
  return (
    <Section id={'contact'} className={cx('gap-6 -mt-20')}>
      <p className={'text-2xs font-manrope font-bold'}>Let&apos;s connect!</p>
      <SocialLinks className={'justify-start'} />
    </Section>
  );
};
