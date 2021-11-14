import { mdiGithub, mdiLinkedin, mdiInstagram, mdiTwitter } from '@mdi/js';
import tw from 'twin.macro';

import { ButtonGroup } from '~/components/atoms/complex';
import {
  Image,
  LinkButton,
  LinkButtonProps,
} from '~/components/atoms/simple';
import { Component, ComponentProps } from '~/types';

export type SocialLinkProps = Omit<
  LinkButtonProps,
  'title' | 'icon' | 'wrapChildrenInSpan' | 'href' | 'newTab'
>;

const BaseSocialLink = tw(LinkButton)`
  p-4 gap-0
  min-h-social
  min-w-social
  text-white
  hocus:(min-h-social min-w-social text-white no-underline)
`;

const BaseGitHubLink = tw(BaseSocialLink)`
  background-color[#333]
  hocus:(background-color[#292929])
`;

const BaseLinkedInLink = tw(BaseSocialLink)`
  background-color[#0077b5]
  hocus:(background-color[#006ba3])
`;

const BaseTwitterLink = tw(BaseSocialLink)`
  background-color[#1da1f2]
  hocus:(background-color[#1a91da])
`;

const BaseInstagramLink = tw(BaseSocialLink)`
  background-color[#d6249f]
  background[radial-gradient(
    circle at 28% 110%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  )]

  hocus:(
    background-color[#ab1d7f]
    background[radial-gradient(
      circle at 28% 110%,
      #cac379 0%,
      #cac379 5%,
      #ca473a 45%,
      #ab1d7f 60%,
      #1c3fa5 90%
    )]  
  )
`;

const BasePolyworkLink = tw(BaseSocialLink)`
  background-color[#6959fc]
  all-child:(mx-auto! transition-all)
  hocus:(background-color[#4f3fe3])
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
    <ButtonGroup tw={'gap-6 sm:(gap-8)'} className={className}>
      <GitHubLink iconSize={iconSize} />
      <LinkedInLink iconSize={iconSize} />
      <TwitterLink iconSize={iconSize} />
      <InstagramLink iconSize={iconSize} />
      <PolyworkLink iconSize={iconSize} />
    </ButtonGroup>
  );
};
