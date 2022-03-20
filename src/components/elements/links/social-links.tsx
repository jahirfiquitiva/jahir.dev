import styled from '@emotion/styled';
import { mdiInstagram } from '@mdi/js';

import { ButtonGroup } from '~/components/atoms/complex';
import { LinkButton, LinkButtonProps } from '~/components/atoms/simple';
import {
  Component,
  ComponentProps,
  mediaQueries,
  customIconPaths,
} from '~/types';

export type SocialLinkProps = Omit<
  LinkButtonProps,
  'title' | 'icon' | 'wrapChildrenInSpan' | 'href' | 'newTab'
>;

const SocialLinksGroup = styled(ButtonGroup)`
  gap: 0.2rem;
  ${mediaQueries.mobile.lg} {
    gap: 0.4rem;
  }
`;

const BaseSocialLink = styled(LinkButton)`
  padding: 0;
  gap: 0;
  min-height: 32px;
  min-width: 32px;
  background: none;
  color: var(--text-secondary);
  box-shadow: none;

  &:hover,
  &:focus {
    background: var(--toolbar-highlight);
    transform: none;
    box-shadow: none;
    color: #fff;
    text-decoration: none;
  }

  .dark & {
    color: var(--text-secondary);
  }
`;

const BaseGitHubLink = styled(BaseSocialLink)`
  &:hover,
  &:focus {
    color: #333;
  }
  .dark &:hover,
  .dark &:focus {
    color: #ebebeb;
  }
`;

const BaseLinkedInLink = styled(BaseSocialLink)`
  &:hover,
  &:focus,
  .dark &:hover,
  .dark &:focus {
    color: #0077b5;
  }
`;

const BaseTwitterLink = styled(BaseSocialLink)`
  &:hover,
  &:focus,
  .dark &:hover,
  .dark &:focus {
    color: #1da1f2;
  }
`;

const BaseInstagramLink = styled(BaseSocialLink)`
  &:hover,
  &:focus,
  .dark &:hover,
  .dark &:focus {
    color: #d6249f;
  }
`;

const BasePolyworkLink = styled(BaseSocialLink)`
  &:hover,
  &:focus,
  .dark &:hover,
  .dark &:focus {
    color: #6959fc;
  }
`;

const GitHubLink: Component<SocialLinkProps> = (props) => {
  return (
    <BaseGitHubLink
      {...props}
      title={'GitHub'}
      icon={customIconPaths.gitHubOutline}
      href={'https://github.com/jahirfiquitiva'}
    />
  );
};

const LinkedInLink: Component<SocialLinkProps> = (props) => {
  return (
    <BaseLinkedInLink
      {...props}
      title={'LinkedIn'}
      icon={customIconPaths.linkedInOutline}
      href={'https://linkedin.com/in/jahirfiquitiva'}
    />
  );
};

const TwitterLink: Component<SocialLinkProps> = (props) => {
  return (
    <BaseTwitterLink
      {...props}
      title={'Twitter'}
      icon={customIconPaths.twitterOutline}
      href={'https://twitter.com/jahirfiquitiva'}
    />
  );
};

const InstagramLink: Component<SocialLinkProps> = (props) => {
  return (
    <BaseInstagramLink
      {...props}
      title={'Instagram'}
      icon={mdiInstagram}
      href={'https://instagram.com/jahirfiquitiva'}
    />
  );
};

const PolyworkLink: Component<SocialLinkProps> = (props) => {
  return (
    <BasePolyworkLink
      {...props}
      title={'Polywork Timeline'}
      href={'https://timeline.jahir.dev'}
      icon={customIconPaths.polywork}
    />
  );
};

interface SocialLinksProps extends ComponentProps {
  iconSize?: number;
}

export const SocialLinks: Component<SocialLinksProps> = (props) => {
  const { iconSize = 1, className } = props;
  return (
    <SocialLinksGroup className={className}>
      <GitHubLink iconSize={iconSize} />
      <LinkedInLink iconSize={iconSize} />
      <TwitterLink iconSize={iconSize} />
      <InstagramLink iconSize={iconSize} />
      <PolyworkLink iconSize={iconSize} />
    </SocialLinksGroup>
  );
};
