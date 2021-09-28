import styled from '@emotion/styled';
import Image from 'next/image';

import { SectionHeading } from '~/components/section-heading';
import { Component } from '~/elements/base/fc';
import { Divider } from '~/elements/simple/divider';
import { mediaQueries } from '~/types';

const DonateSupportersHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
  overflow: hidden;
  align-items: center;

  & p {
    margin: 0.8rem 0;
  }

  ${mediaQueries.tablet.sm} {
    margin-top: 0.6rem;
    flex-direction: row;
  }
`;

const TitleContainer = styled.div`
  flex: 1;
`;

const ThanksGifContainer = styled.div`
  position: relative;
  height: 170px;
  width: auto;
  max-width: 300px;
  margin: 0 auto;
  width: 100%;
  min-width: 256px;
  text-align: end;
`;

export const DonateSupporters: Component = () => {
  return (
    <section id={'thanks'}>
      <Divider gradientColor={'red-to-purple'} />
      <DonateSupportersHeader>
        <TitleContainer>
          <SectionHeading
            size={'3'}
            emoji={'🙌'}
            shadowColor={'purple'}
            gradientColor={'purple-to-brand'}
          >
            Thanks!
          </SectionHeading>
          <p>
            I&apos;m really grateful to all the awesome people that support my
            work.
          </p>
        </TitleContainer>
        <ThanksGifContainer>
          <Image
            layout={'fill'}
            objectFit={'contain'}
            loading={'lazy'}
            decoding={'async'}
            src={'/static/gifs/thanks.gif'}
            alt={
              'Adventure Time characters hugging each other and saying thanks'
            }
          />
        </ThanksGifContainer>
      </DonateSupportersHeader>
    </section>
  );
};
