import styled from '@emotion/styled';
import Icon from '@mdi/react';
import { mdiCreditCard, mdiGithub, mdiInstagram, mdiLinkedin } from '@mdi/js';
import { Component, ComponentProps } from '~/components/fc';
import { IconButtonProps, BaseButton } from '~/components/button';

export const BaseIconButton: Component<IconButtonProps> = (props) => {
  const { icon, iconSize = 1, className } = props;
  return (
    <BaseButton className={className}>
      {icon && <Icon path={icon} size={iconSize} />}
    </BaseButton>
  );
};

const IconButton = styled(BaseIconButton)`
  padding: 0.375rem 0.4rem 0.425rem;
`;

const BaseGitHubIconButton = styled(IconButton)`
  background-color: #333;

  &:hover,
  &:focus {
    background-color: #292929;
  }
`;

export const GitHubIconButton: Component<IconButtonProps> = (props) => {
  return <BaseGitHubIconButton {...props} icon={mdiGithub} />;
};

const BaseLinkedInIconButton = styled(IconButton)`
  background-color: #0077b5;

  &:hover,
  &:focus {
    background-color: #006ba3;
  }
`;

export const LinkedInIconButton: Component<IconButtonProps> = (props) => {
  return <BaseLinkedInIconButton {...props} icon={mdiLinkedin} />;
};

const BaseInstagramIconButton = styled(IconButton)`
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

export const InstagramIconButton: Component<IconButtonProps> = (props) => {
  return (
    <BaseInstagramIconButton
      {...props}
      icon={mdiInstagram}
      as={'a'}
      href={'https://instagram.com/jahirfiquitiva'}
      target={'_blank'}
      rel={'noopener noreferrer'}
    />
  );
};
