import styled from '@emotion/styled';
import { mdiAccountCircleOutline } from '@mdi/js';

import { LinkButton } from '~/components/atoms/simple';
import { SocialLinks } from '~/components/elements';
import { Component } from '~/types';

const Content = styled.div`
  margin: 0.6rem 0;

  & > p:last-of-type {
    margin-top: 1rem;

    & + div {
      margin-top: 0.6rem;
    }
  }
`;

export const Intro: Component = () => {
  return (
    <Content>
      <LinkButton
        icon={mdiAccountCircleOutline}
        title={'Link to about page'}
        href={'/about'}
      >
        Learn more
      </LinkButton>
    </Content>
  );
};
