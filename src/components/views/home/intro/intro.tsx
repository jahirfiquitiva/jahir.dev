import Icon from '@mdi/react';

import { Heading, Link, LinkButton } from '@/components/core';
import { mdiAccountCircleOutline } from '@/icons';
import type { FC } from '@/types';

import {
  IntroSection,
  TextsContainer,
  IntroParagraph,
  PhotoContainer,
  Photo,
} from './intro.styles';
import { WavingHello } from './waving-hello';

export const Intro: FC = () => {
  return (
    <IntroSection id={'intro'}>
      <TextsContainer>
        <WavingHello />
        <Heading as={'h2'} shadow={'blue'}>
          I am&nbsp;
          <Heading as={'span'} gradient={'brand-to-blue'}>
            Jahir Fiquitiva
          </Heading>
        </Heading>
        <IntroParagraph>
          Passionate and creative full-stack software engineer based in{' '}
          <Link
            title={'Colombia on Google Maps'}
            href={'https://www.google.com/maps/place/Colombia/@4,-72z/'}
          >
            Colombia 🇨🇴
          </Link>
        </IntroParagraph>
        <LinkButton title={'About page'} href={'/about'} withShadow>
          <Icon path={mdiAccountCircleOutline} size={1} />
          More about me
        </LinkButton>
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
