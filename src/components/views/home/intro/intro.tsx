import Icon from '@mdi/react';

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
        <Heading $as={'h2'} shadow={'blue'}>
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
