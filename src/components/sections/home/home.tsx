import styled from '@emotion/styled';
import { mdiAccountCircleOutline } from '@mdi/js';

import { Hello } from './hello';
import { Skills } from './skills';

import { LinkButton } from '~/components/atoms/simple';
import { Component } from '~/types';

const LearnMoreButton = styled(LinkButton)`
  margin: 0.8rem 0 0.2rem;
`;

export const Home: Component = () => {
  return (
    <>
      <section id={'about'}>
        <Hello />
        <LearnMoreButton
          icon={mdiAccountCircleOutline}
          title={'Link to about page'}
          href={'/about'}
        >
          More about me
        </LearnMoreButton>
      </section>
      <Skills />
    </>
  );
};
