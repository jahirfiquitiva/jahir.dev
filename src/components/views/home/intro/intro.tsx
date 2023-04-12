import Icon from '@mdi/react';
import { cx } from 'classix';

import { Heading } from '@/components/core/heading';
import { ButtonLink, Link } from '@/components/core/link';
import { mdiAccountCircleOutline } from '@/components/icons';

import {
  IntroSection,
  TextsContainer,
  IntroParagraph,
  PhotoContainer,
  Photo,
} from './intro.styles';
import { WavingHello } from './waving-hello';

export const Intro = () => {
  return (
    <IntroSection id={'intro'}>
      <TextsContainer>
        <WavingHello />
        <h2
          className={cx(
            'inline-flex items-center gap-8',
            '[text-shadow:0.125rem_0.125rem_0_var(--color-shadow-blue)]',
            'dark:[text-shadow:none]',
          )}
        >
          <span>I am </span>
          <Heading
            as={'span'}
            shadow={'blue'}
            from={'brand'}
            to={'blue'}
            className={'[&>span]:w-[unset]'}
          >
            Jahir Fiquitiva
          </Heading>
        </h2>
        <IntroParagraph>
          Passionate and creative full-stack software engineer based in{' '}
          <Link
            title={'Colombia on Google Maps'}
            href={'https://www.google.com/maps/place/Colombia/@4,-72z/'}
          >
            Colombia 🇨🇴
          </Link>
        </IntroParagraph>
        <ButtonLink title={'About page'} href={'/about'}>
          <Icon path={mdiAccountCircleOutline} size={1} />
          More about me
        </ButtonLink>
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
