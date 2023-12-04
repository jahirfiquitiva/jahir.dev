import Icon from '@mdi/react';
import cx from 'classix';

import { Heading } from '@/components/core/heading';
import { ButtonLink } from '@/components/core/link/button-link';
import { Link } from '@/components/core/link/link';
import { mdiAccountCircleOutline } from '@/components/icons/mdi';
import { SocialLinks } from '@/components/molecules/social-links/social-links';

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
    <IntroSection id={'intro'}>
      <TextsContainer>
        <TitlesContainer>
          <Heading
            shadow={'blue'}
            // look like h2
            className={'text-2xl'}
          >
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
          </Heading>
          <WavingHello />
        </TitlesContainer>
        <IntroParagraph>
          Passionate and creative full-stack software engineer from{' '}
          <Link
            title={'Colombia on Google Maps'}
            href={'https://www.google.com/maps/place/Colombia/@4,-72z/'}
          >
            Colombia 🇨🇴
          </Link>
        </IntroParagraph>
        <div className={'flex items-center gap-16 flex-wrap'}>
          <ButtonLink title={'About page'} href={'/about'}>
            <Icon path={mdiAccountCircleOutline} size={1} />
            More about me
          </ButtonLink>
          <div
            className={cx(
              'flex items-center transition-colors',
              'border border-divider rounded-6',
              'py-4 pl-12 pr-8 min-h-[2.625rem]',
              'hover:border-accent-dark',
            )}
          >
            <SocialLinks />
          </div>
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
  );
};
