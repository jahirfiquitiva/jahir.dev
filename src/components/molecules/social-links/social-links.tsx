import Icon from '@mdi/react';
import type { CSSProperties } from 'react';

import {
  bluesky,
  gitHubOutline,
  linkedInOutline,
  twitterOutline,
} from '@/components/icons/icons';
import { mdiInstagram } from '@/components/icons/mdi';

import { BackToTopLink } from './back-to-top';
import {
  BlueskyLink,
  GitHubLink,
  InstagramLink,
  LinkedInLink,
  SocialLinkItem,
  SocialLinksContainer,
  TwitterLink,
} from './social-links.styles';

interface SocialLinksProps {
  withBackToTop?: boolean;
  className?: string;
  style?: CSSProperties;
}

const iconSize = 0.9;
export const SocialLinks = (props: SocialLinksProps) => {
  const { withBackToTop, className, style } = props;
  return (
    <SocialLinksContainer
      aria-label={'Social links'}
      className={className}
      style={style}
    >
      <SocialLinkItem>
        <GitHubLink
          title={'GitHub'}
          href={'https://github.com/jahirfiquitiva'}
          data-umami-event={'GitHub social link'}
        >
          <Icon path={gitHubOutline} size={iconSize} />
        </GitHubLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <LinkedInLink
          title={'LinkedIn'}
          href={'https://linkedin.com/in/jahirfiquitiva'}
          data-umami-event={'LinkedIn social link'}
        >
          <Icon path={linkedInOutline} size={iconSize} />
        </LinkedInLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <BlueskyLink
          title={'Bluesky'}
          href={'https://bsky.jahir.dev'}
          data-umami-event={'Bluesky social link'}
        >
          <Icon path={bluesky} size={iconSize} />
        </BlueskyLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <TwitterLink
          title={'Twitter'}
          href={'https://twitter.com/jahirfiquitiva'}
          data-umami-event={'Twitter social link'}
        >
          <Icon path={twitterOutline} size={iconSize} />
        </TwitterLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <InstagramLink
          title={'Instagram'}
          href={'https://instagram.com/jahirfiquitiva'}
          data-umami-event={'Instagram social link'}
        >
          <Icon path={mdiInstagram} size={iconSize} />
        </InstagramLink>
      </SocialLinkItem>
      {Boolean(withBackToTop) && <BackToTopLink />}
    </SocialLinksContainer>
  );
};
