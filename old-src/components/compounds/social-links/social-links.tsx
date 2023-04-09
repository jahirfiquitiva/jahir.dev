import Icon from '@mdi/react';

import {
  gitHubOutline,
  linkedInOutline,
  twitterOutline,
  mdiInstagram,
  polywork,
  mastodon,
} from '@/old/components/icons';

import {
  SocialLinksContainer,
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
      <li>
        <GitHubLink title={'GitHub'} href={'https://github.com/jahirfiquitiva'}>
          <Icon path={gitHubOutline} size={iconSize} />
        </GitHubLink>
      </li>
      <li>
        <LinkedInLink
          title={'LinkedIn'}
          href={'https://linkedin.com/in/jahirfiquitiva'}
        >
          <Icon path={linkedInOutline} size={iconSize} />
        </LinkedInLink>
      </li>
      <li>
        <TwitterLink
          title={'Twitter'}
          href={'https://twitter.com/jahirfiquitiva'}
        >
          <Icon path={twitterOutline} size={iconSize} />
        </TwitterLink>
      </li>
      <li>
        <MastodonLink
          title={'Mastodon'}
          href={'https://mastodon.social/@jahirfiquitiva'}
          rel={'me'}
        >
          <Icon path={mastodon} size={iconSize} />
        </MastodonLink>
      </li>
      <li>
        <InstagramLink
          title={'Instagram'}
          href={'https://instagram.com/jahirfiquitiva'}
        >
          <Icon path={mdiInstagram} size={iconSize} />
        </InstagramLink>
      </li>
      <li>
        <PolyworkLink
          title={'Polywork Timeline'}
          href={'https://timeline.jahir.dev'}
        >
          <Icon path={polywork} size={iconSize} />
        </PolyworkLink>
      </li>
    </SocialLinksContainer>
  );
};
