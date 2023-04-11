import Icon from '@mdi/react';

import {
  gitHubOutline,
  linkedInOutline,
  twitterOutline,
  mdiInstagram,
  polywork,
  mastodon,
} from '@/components/icons';

import {
  SocialLinksContainer,
  SocialLinkItem,
  GitHubLink,
  LinkedInLink,
  TwitterLink,
  MastodonLink,
  InstagramLink,
  PolyworkLink,
} from './social-links.styles';

const iconSize = 0.9;
export const SocialLinks = () => {
  return (
    <SocialLinksContainer aria-label={'Social links'}>
      <SocialLinkItem>
        <GitHubLink title={'GitHub'} href={'https://github.com/jahirfiquitiva'}>
          <Icon path={gitHubOutline} size={iconSize} />
        </GitHubLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <LinkedInLink
          title={'LinkedIn'}
          href={'https://linkedin.com/in/jahirfiquitiva'}
        >
          <Icon path={linkedInOutline} size={iconSize} />
        </LinkedInLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <TwitterLink
          title={'Twitter'}
          href={'https://twitter.com/jahirfiquitiva'}
        >
          <Icon path={twitterOutline} size={iconSize} />
        </TwitterLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <MastodonLink
          title={'Mastodon'}
          href={'https://mastodon.social/@jahirfiquitiva'}
          rel={'me'}
        >
          <Icon path={mastodon} size={iconSize} />
        </MastodonLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <InstagramLink
          title={'Instagram'}
          href={'https://instagram.com/jahirfiquitiva'}
        >
          <Icon path={mdiInstagram} size={iconSize} />
        </InstagramLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <PolyworkLink
          title={'Polywork Timeline'}
          href={'https://timeline.jahir.dev'}
        >
          <Icon path={polywork} size={iconSize} />
        </PolyworkLink>
      </SocialLinkItem>
    </SocialLinksContainer>
  );
};
