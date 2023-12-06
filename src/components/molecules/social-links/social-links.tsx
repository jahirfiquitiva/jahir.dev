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
          data-umami-event={'github-link'}
        >
          <Icon path={gitHubOutline} size={iconSize} />
        </GitHubLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <LinkedInLink
          title={'LinkedIn'}
          href={'https://linkedin.com/in/jahirfiquitiva'}
          data-umami-event={'linkedin-link'}
        >
          <Icon path={linkedInOutline} size={iconSize} />
        </LinkedInLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <BlueskyLink
          title={'Bluesky'}
          href={'https://bsky.jahir.dev'}
          data-umami-event={'bsky-link'}
        >
          <Icon path={bluesky} size={iconSize} />
        </BlueskyLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <TwitterLink
          title={'Twitter'}
          href={'https://twitter.com/jahirfiquitiva'}
          data-umami-event={'twitter-link'}
        >
          <Icon path={twitterOutline} size={iconSize} />
        </TwitterLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <InstagramLink
          title={'Instagram'}
          href={'https://instagram.com/jahirfiquitiva'}
          data-umami-event={'instagram-link'}
        >
          <Icon path={mdiInstagram} size={iconSize} />
        </InstagramLink>
      </SocialLinkItem>
      {Boolean(withBackToTop) && <BackToTopLink />}
    </SocialLinksContainer>
  );
};
