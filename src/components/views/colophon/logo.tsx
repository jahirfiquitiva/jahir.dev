import { Link } from '@/components/atoms/link';
import { Logo as LogoSVG } from '@/components/atoms/logo';
import { Section } from '@/components/atoms/section';
import cx, { tw } from '@/utils/cx';

const LogoPreview = tw.div`
  flex flex-col
  items-center
  justify-center
  border
  border-divider
  border-dashed
  p-6
  w-full
  text-center
`;

export const Logo = () => (
  <Section id={'logo'}>
    <h2 className={'text-lg'}>Logo</h2>
    <p className={'max-w-nice'}>
      My personal logo is designed by{' '}
      <Link title={"Eduardo Pratti's portfolio"} href={'https://pratti.design'}>
        Eduardo Pratti
      </Link>
      .
    </p>
    <div
      className={cx(
        'grid grid-cols-1 tablet-sm:grid-cols-2 items-center place-items-center',
        'border border-divider border-dashed border-collapse',
      )}
    >
      <LogoPreview className={'bg-light dark:bg-dark'}>
        <LogoSVG className={'size-12'} />
      </LogoPreview>
      <LogoPreview className={'bg-dark dark:bg-light'}>
        <LogoSVG
          className={'size-12'}
          bgClassName={'fill-brand-300 dark:fill-brand-500'}
          fgClassName={'fill-dark dark:fill-light'}
        />
      </LogoPreview>
    </div>
  </Section>
);
