import styled from '@emotion/styled';
import { mdiGithub, mdiLinkedin, mdiInstagram, mdiTwitter, mdiTimelineTextOutline } from '@mdi/js';

import { LinkIconButton, LinkButtonProps } from '~/elements/button';
import { Component } from '~/elements/fc';

const BaseGitHubIconButton = styled(LinkIconButton)`
  background-color: #333;

  &:hover,
  &:focus {
    background-color: #292929;
  }
`;

export const GitHubIconButton: Component<LinkButtonProps> = (props) => {
  return (
    <BaseGitHubIconButton
      {...props}
      icon={mdiGithub}
      href={'https://github.com/jahirfiquitiva'}
    />
  );
};

const BaseLinkedInIconButton = styled(LinkIconButton)`
  background-color: #0077b5;

  &:hover,
  &:focus {
    background-color: #006ba3;
  }
`;

export const LinkedInIconButton: Component<LinkButtonProps> = (props) => {
  return (
    <BaseLinkedInIconButton
      {...props}
      icon={mdiLinkedin}
      href={'https://linkedin.com/in/jahirfiquitiva'}
    />
  );
};

const BaseTwitterIconButton = styled(LinkIconButton)`
  background-color: #1da1f2;

  &:hover,
  &:focus {
    background-color: #1a91da;
  }
`;

export const TwitterIconButton: Component<LinkButtonProps> = (props) => {
  return (
    <BaseTwitterIconButton
      {...props}
      icon={mdiTwitter}
      href={'https://twitter.com/in/jahirfiquitiva'}
    />
  );
};

const BaseInstagramIconButton = styled(LinkIconButton)`
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

export const InstagramIconButton: Component<LinkButtonProps> = (props) => {
  return (
    <BaseInstagramIconButton
      {...props}
      icon={mdiInstagram}
      href={'https://instagram.com/jahirfiquitiva'}
    />
  );
};

const BasePolyworkIconButton = styled(LinkIconButton)`
  background-color: #6959fc;

  &:hover,
  &:focus {
    background-color: #4f3fe3;
  }
`;

export const PolyworkIconButton: Component<LinkButtonProps> = (props) => {
  return (
    <BasePolyworkIconButton
      {...props}
      icon={mdiTimelineTextOutline}
      href={'https://timeline.jahir.dev'}
    />
  );
};
