/* eslint-disable max-len */
import { Link } from '@/components/link';
import { LinkButton } from '@/components/link-button';
import { Section } from '@/components/section';
import { SocialLinks } from '@/components/social-links';
import cx from '@/utils/cx';

import { Name, Photo, SubHeader, WavingSpan } from './intro.styles';
import photo from './photo.jpg';
import { Verified } from './verified';
import { WavingHello } from './waving-hello';

export const Intro = () => {
  return (
    <Section id={'intro'} className={'gap-6'}>
      <div
        className={'flex flex-col gap-5 tablet-sm:block tablet-sm:space-y-4'}
      >
        <div
          className={cx(
            'rounded-full aspect-square tablet-sm:float-right',
            'max-w-24 mobile-lg:max-w-28 tablet-sm:max-w-36 tablet-md:max-w-40',
            'bg-brand-700 overflow-hidden',
          )}
        >
          <Photo
            src={photo}
            width={photo.width}
            height={photo.height}
            alt={'Photo of Jahir Fiquitiva'}
          />
        </div>

        <h1 className={'flex flex-col gap-1 tablet-sm:!-mt-4'}>
          <p
            className={
              'flex flex-row items-center gap-1 text-shadow shadow-yellow-300 dark:text-shadow-none min-h-8'
            }
          >
            <WavingSpan role={'img'} aria-label={'waving hand'}>
              👋
            </WavingSpan>
            <WavingHello />
          </p>
          <SubHeader>
            <span>
              I am <Name>Jahir Fiquitiva</Name>
            </span>
            <Verified />
          </SubHeader>
        </h1>

        <p className={'text-pretty flex flex-col gap-2 text-xs'}>
          <span className={'max-w-[42ch]'}>
            Passionate and creative full-stack software engineer from{' '}
            <Link
              title={'Colombia on Google Maps'}
              href={'https://www.google.com/maps/place/Colombia/@4,-72z/'}
            >
              Colombia 🇨🇴
            </Link>
          </span>
          <span className={'max-w-[48ch]'}>
            Detail-driven, I strive to build great-looking, user-friendly
            software while enhancing my skills along the way
          </span>
        </p>
      </div>

      <div
        className={cx(
          'flex flex-col gap-3 items-center',
          'mobile-lg:flex-row mobile-lg:flex-wrap',
        )}
      >
        <LinkButton
          title={'More about me'}
          href={'/about'}
          className={cx(
            'pr-4',
            'justify-center max-mobile-lg:w-full',
            'mobile-lg:self-start mobile-lg:justify-start',
          )}
        >
          <svg
            viewBox={'0 0 24 24'}
            role={'presentation'}
            className={'size-6'}
            aria-hidden={'true'}
          >
            <path
              className={'fill-current'}
              d={
                'M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z'
              }
            ></path>
          </svg>
          <span>More about me</span>
        </LinkButton>
        <SocialLinks />
      </div>
    </Section>
  );
};
