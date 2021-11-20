import styled from '@emotion/styled';
import { mdiGithub, mdiLinkedin, mdiInstagram, mdiTwitter } from '@mdi/js';

import { ButtonGroup } from '~/components/atoms/complex';
import { Image, LinkButton, LinkButtonProps } from '~/components/atoms/simple';
import { Component, ComponentProps, mediaQueries } from '~/types';

export type SocialLinkProps = Omit<
  LinkButtonProps,
  'title' | 'icon' | 'wrapChildrenInSpan' | 'href' | 'newTab'
>;

const BaseSocialLink = styled(LinkButton)`
  padding: 0.4rem;
  gap: 0;
  min-height: 36px;
  min-width: 36px;
  color: #ffffff;

  &:hover,
  &:focus {
    color: #ffffff;
    text-decoration: none;
  }
`;

const BaseGitHubLink = styled(BaseSocialLink)`
  background-color: #333;
  &:hover,
  &:focus {
    background-color: #292929;
  }
  .dark & {
    background-color: #ebebeb;
    color: #1f1f1f;
    &:hover,
    &:focus {
      background-color: #fff;
      color: #141414;
    }
  }
`;

const BaseLinkedInLink = styled(BaseSocialLink)`
  background-color: #0077b5;
  &:hover,
  &:focus {
    background-color: #006ba3;
  }
`;

const BaseTwitterLink = styled(BaseSocialLink)`
  background-color: #1da1f2;
  &:hover,
  &:focus {
    background-color: #1a91da;
  }
`;

const BaseInstagramLink = styled(BaseSocialLink)`
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

<<<<<<< HEAD:src/components/elements/links/social-links.tsx
const BasePolyworkLink = tw(BaseSocialLink)`
  background-color[#6959fc]
  hocus:(background-color[#4f3fe3])
=======
const BasePolyworkLink = styled(BaseSocialLink)`
  background-color: #6959fc;
  &:hover,
  &:focus {
    background-color: #4f3fe3;
  }
>>>>>>> 266271c (Convert social links from twin to styled):src/components/elements/social-links.tsx
`;

const SocialLinksGroup = styled(ButtonGroup)`
  gap: 0.6rem;
  ${mediaQueries.mobile.lg} {
    gap: 0.8rem;
  }
`;

const GitHubLink: Component<SocialLinkProps> = (props) => {
  return (
    <BaseGitHubLink
      {...props}
      title={'GitHub'}
      icon={mdiGithub}
      href={'https://github.com/jahirfiquitiva'}
    />
  );
};

const LinkedInLink: Component<SocialLinkProps> = (props) => {
  return (
    <BaseLinkedInLink
      {...props}
      title={'LinkedIn'}
      icon={mdiLinkedin}
      href={'https://linkedin.com/in/jahirfiquitiva'}
    />
  );
};

const TwitterLink: Component<SocialLinkProps> = (props) => {
  return (
    <BaseTwitterLink
      {...props}
      title={'Twitter'}
      icon={mdiTwitter}
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
      wrapChildrenInSpan={false}
    >
      <Image
        src={'/static/images/signature/polywork.svg'}
        alt={'Polywork logo'}
        size={21}
      />
    </BasePolyworkLink>
  );
};

interface SocialLinksProps extends ComponentProps {
  iconSize?: number;
}

export const SocialLinks: Component<SocialLinksProps> = (props) => {
  const { iconSize = 0.9, className } = props;
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
