import Icon from '@mdi/react';
import type { CSSProperties } from 'react';

import { gitHub, linkedIn } from '@/components/icons/icons';
import { mdiEmail, mdiInstagram } from '@/components/icons/mdi';
import cx from '@/utils/cx';

import { BackToTopLink } from './back-to-top';
import {
  EmailLink,
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
          data-umami-event={'Social link'}
          data-umami-event-site={'GitHub'}
        >
          <Icon path={gitHub} size={iconSize} />
        </GitHubLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <LinkedInLink
          title={'LinkedIn'}
          href={'https://linkedin.com/in/jahirfiquitiva'}
          data-umami-event={'Social link'}
          data-umami-event-site={'LinkedIn'}
        >
          <Icon path={linkedIn} size={iconSize} />
        </LinkedInLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <TwitterLink
          title={'𝕏 or Twitter'}
          href={'https://twitter.com/jahirfiquitiva'}
          data-umami-event={'Social link'}
          data-umami-event-site={'𝕏 or Twitter'}
        >
          <span
            className={cx(
              'font-manrope font-bold',
              'w-[18px] h-[18px]',
              'flex items-center justify-center',
              'leading-none text-lg',
            )}
          >
            𝕏
          </span>
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
      <SocialLinkItem>
        <EmailLink
          title={'Email'}
          href={'mailto:hola@jahir.dev?subject=Hi%20Jahir!'}
          data-umami-event={'Social link'}
          data-umami-event-site={'Email'}
        >
          <Icon path={mdiEmail} size={iconSize} />
        </EmailLink>
      </SocialLinkItem>
      {Boolean(withBackToTop) && <BackToTopLink />}
    </SocialLinksContainer>
  );
};
