import styled from '@emotion/styled';
import { mdiGithub, mdiLinkedin, mdiInstagram, mdiTwitter } from '@mdi/js';

import {
  Image,
  LinkButton,
  LinkButtonProps,
} from '~/new-components/atoms/simple';
import { Component } from '~/types';

const BaseGitHubIconButton = styled(LinkButton)`
  padding: 0.4rem;
  min-height: 36px;
  min-width: 36px;
  color: #fff;
  background-color: #333;
  gap: 0;

  &:hover,
  &:focus {
  min-height: 36px;
  min-width: 36px;
    color: #fff !important;
    background-color: #292929;
  }
`;

type SocialIconButtonProps = Omit<LinkButtonProps, 'href' | 'title'>;

export const GitHubIconButton: Component<SocialIconButtonProps> = (props) => {
  return (
    <BaseGitHubIconButton
      {...props}
      title={'Link to GitHub'}
      icon={mdiGithub}
      href={'https://github.com/jahirfiquitiva'}
    />
  );
};

const BaseLinkedInIconButton = styled(LinkButton)`
  background-color: #0077b5;

  &:hover,
  &:focus {
    background-color: #006ba3;
  }
`;

export const LinkedInIconButton: Component<SocialIconButtonProps> = (props) => {
  return (
    <BaseLinkedInIconButton
      {...props}
      title={'Link to LinkedIn'}
      icon={mdiLinkedin}
      href={'https://linkedin.com/in/jahirfiquitiva'}
    />
  );
};

const BaseTwitterIconButton = styled(LinkButton)`
  background-color: #1da1f2;

  &:hover,
  &:focus {
    background-color: #1a91da;
  }
`;

export const TwitterIconButton: Component<SocialIconButtonProps> = (props) => {
  return (
    <BaseTwitterIconButton
      {...props}
      title={'Link to Twitter'}
      icon={mdiTwitter}
      href={'https://twitter.com/jahirfiquitiva'}
    />
  );
};

const BaseInstagramIconButton = styled(LinkButton)`
  background-color: #833ab4;
  background-color: #d6249f;
  background: radial-gradient(
    circle at 28% 110%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );

  &:hover,
  &:focus {
    background-color: #7634a2;
    background-color: #ab1d7f;
    background: radial-gradient(
      circle at 28% 110%,
      #cac379 0%,
      #cac379 5%,
      #ca473a 45%,
      #ab1d7f 60%,
      #1c3fa5 90%
    );
  }
`;

export const InstagramIconButton: Component<SocialIconButtonProps> = (
  props,
) => {
  return (
    <BaseInstagramIconButton
      {...props}
      title={'Link to Instagram'}
      icon={mdiInstagram}
      href={'https://instagram.com/jahirfiquitiva'}
    />
  );
};

const BasePolyworkIconButton = styled(LinkButton)`
  background-color: #6959fc;

  &:hover,
  &:focus {
    background-color: #4f3fe3;
  }
`;

export const PolyworkIconButton: Component<SocialIconButtonProps> = (props) => {
  return (
    <BasePolyworkIconButton
      {...props}
      title={'Link to Polywork Timeline'}
      href={'https://timeline.jahir.dev'}
    >
      <Image
        src={'/static/images/signature/polywork.svg'}
        alt={'Polywork logo'}
        size={21}
      />
    </BasePolyworkIconButton>
  );
};
