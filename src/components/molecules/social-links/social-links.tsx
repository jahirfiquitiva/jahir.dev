import Icon from '@mdi/react';
import type { CSSProperties } from 'react';

import {
  gitHubOutline,
  linkedInOutline,
  twitterOutline,
} from '@/components/icons/icons';
import { mdiInstagram } from '@/components/icons/mdi';

import { BackToTopLink } from './back-to-top';
import {
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

const iconSize = 0.95;
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
          data-umami-event={'Social link'}
          data-umami-event-site={'GitHub'}
        >
          <Icon path={gitHubOutline} size={iconSize} />
        </GitHubLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <LinkedInLink
          title={'LinkedIn'}
          href={'https://linkedin.com/in/jahirfiquitiva'}
          data-umami-event={'Social link'}
          data-umami-event-site={'LinkedIn'}
        >
          <Icon path={linkedInOutline} size={iconSize} />
        </LinkedInLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <TwitterLink
          title={'Twitter'}
          href={'https://twitter.com/jahirfiquitiva'}
          data-umami-event={'Social link'}
          data-umami-event-site={'Twitter'}
        >
          <Icon path={twitterOutline} size={iconSize} />
        </TwitterLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <InstagramLink
          title={'Instagram'}
          href={'https://instagram.com/jahirfiquitiva'}
          data-umami-event={'Social link'}
          data-umami-event-site={'Instagram'}
        >
          <Icon path={mdiInstagram} size={iconSize} />
        </InstagramLink>
      </SocialLinkItem>
      {Boolean(withBackToTop) && <BackToTopLink />}
    </SocialLinksContainer>
  );
};
