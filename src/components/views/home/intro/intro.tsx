import Icon from '@mdi/react';

import { Heading } from '@/components/core/heading';
import { ButtonLink } from '@/components/core/link/button-link';
import { Link } from '@/components/core/link/link';
import { mdiAccountCircleOutline } from '@/components/icons/mdi';
import { VerifiedIcon } from '@/components/icons/verified';
import { SocialLinks } from '@/components/molecules/social-links/social-links';
import cx from '@/utils/cx';

import {
  IntroParagraph,
  IntroSection,
  Photo,
  PhotoContainer,
  TextsContainer,
  TitlesContainer,
} from './intro.styles';
import { WavingHello } from './waving-hello';

export const Intro = () => {
  return (
    <>
      <IntroSection id={'intro'}>
        <TextsContainer>
          <TitlesContainer>
            <Heading
              shadow={'blue'}
              // look like h2
              className={'text-2xl flex gap-8 items-center'}
            >
              <span>
                I am&nbsp;
                <Heading
                  $as={'span'}
                  shadow={'blue'}
                  from={'brand'}
                  to={'blue'}
                  className={'[&>span]:w-[unset]'}
                >
                  Jahir Fiquitiva
                </Heading>
              </span>
              <VerifiedIcon className={'w-24 h-24 mt-2'} />
            </Heading>
            <WavingHello />
          </TitlesContainer>
          <IntroParagraph>
            Passionate and creative full-stack software engineer from{' '}
            <Link
              title={'Colombia on Google Maps'}
              href={'https://www.google.com/maps/place/Colombia/@4,-72z/'}
              data-umami-event={'Link to Colombia map'}
            >
              Colombia 🇨🇴
            </Link>
          </IntroParagraph>
          <div
            className={cx(
              'flex flex-row flex-wrap items-center',
              'gap-x-8 mobile-lg:gap-x-28',
              'gap-y-20',
            )}
          >
            <ButtonLink
              title={'More about me'}
              href={'/about'}
              data-umami-event={'More about me'}
            >
              <Icon path={mdiAccountCircleOutline} size={1} />
              <span>More about me</span>
            </ButtonLink>
            <SocialLinks className={'justify-start'} />
          </div>
        </TextsContainer>
        <PhotoContainer>
          <Photo
            src={'/static/images/jahir/jahir.jpg'}
            alt={"Jahir's Photo"}
            size={168}
            priority
          />
        </PhotoContainer>
      </IntroSection>
    </>
  );
};
