import Icon from '@mdi/react';
import type { CSSProperties } from 'react';

import { gitHub, linkedIn } from '@/components/icons/icons';
import { mdiEmail, mdiInstagram } from '@/components/icons/mdi';
import cx from '@/utils/cx';

import {
  EmailLink,
  GitHubLink,
  InstagramLink,
  LinkedInLink,
  TwitterLink,
  SocialLinksContainer,
  SocialLinkText,
} from './social-links.styles';

interface SocialLinksProps {
  textOnly?: boolean;
  className?: string;
  style?: CSSProperties;
}

const iconSize = 0.9;
export const SocialLinks = (props: SocialLinksProps) => {
  const { textOnly, className, style } = props;

  const itemClassName = cx(
    textOnly
      ? 'tablet-sm:min-h-[34px] tablet-sm:min-w-[34px]'
      : 'min-h-[34px] min-w-[34px]',
  );

  const iconClassName = cx(
    'select-none',
    textOnly ? 'hidden invisible' : '',
    textOnly ? 'tablet-sm:block tablet-sm:visible' : '',
  );

  const linkClassName = cx(
    textOnly ? 'tablet-sm:min-h-[34px]' : 'min-h-[34px]',
    textOnly
      ? 'tablet-sm:hocus:bg-accent-dark/[0.06] '
      : 'hocus:bg-accent-dark/[0.06]',
    textOnly
      ? 'tablet-sm:dark:hocus:bg-accent-dark/[0.24]'
      : 'dark:hocus:bg-accent-dark/[0.24]',
  );

  const linkTextClassName = cx(textOnly ? 'tablet-sm:sr-only' : 'sr-only');

  return (
    <SocialLinksContainer
      aria-label={'Social links'}
      className={className}
      style={style}
    >
      <li className={itemClassName}>
        <GitHubLink
          title={'GitHub'}
          href={'https://github.com/jahirfiquitiva'}
          data-umami-event={'Social link'}
          data-umami-event-site={'GitHub'}
          className={linkClassName}
        >
          <Icon path={gitHub} size={iconSize} className={iconClassName} />
          <SocialLinkText className={linkTextClassName}>GitHub</SocialLinkText>
        </GitHubLink>
      </li>
      <li className={itemClassName}>
        <LinkedInLink
          title={'LinkedIn'}
          href={'https://linkedin.com/in/jahirfiquitiva'}
          data-umami-event={'Social link'}
          data-umami-event-site={'LinkedIn'}
          className={linkClassName}
        >
          <Icon path={linkedIn} size={iconSize} className={iconClassName} />
          <SocialLinkText className={linkTextClassName}>
            LinkedIn
          </SocialLinkText>
        </LinkedInLink>
      </li>
      <li className={itemClassName}>
        <TwitterLink
          title={'𝕏 or Twitter'}
          href={'https://twitter.com/jahirfiquitiva'}
          data-umami-event={'Social link'}
          data-umami-event-site={'𝕏 or Twitter'}
          className={cx(linkClassName, 'leading-none')}
        >
          <span
            className={cx(
              'font-manrope font-bold',
              'w-[20px] h-[20px] select-none',
              'flex items-center justify-center',
              'leading-none text-lg text-center',
              iconClassName,
            )}
          >
            𝕏
          </span>
          <SocialLinkText className={linkTextClassName}>Twitter</SocialLinkText>
        </TwitterLink>
      </li>
      <li className={itemClassName}>
        <InstagramLink
          title={'Instagram'}
          href={'https://instagram.com/jahirfiquitiva'}
          data-umami-event={'Social link'}
          data-umami-event-site={'Instagram'}
          className={linkClassName}
        >
          <Icon path={mdiInstagram} size={iconSize} className={iconClassName} />
          <SocialLinkText className={linkTextClassName}>
            Instagram
          </SocialLinkText>
        </InstagramLink>
      </li>
      <li className={itemClassName}>
        <EmailLink
          title={'Email'}
          href={'mailto:hola@jahir.dev?subject=Hi%20Jahir!'}
          data-umami-event={'Social link'}
          data-umami-event-site={'Email'}
          className={linkClassName}
        >
          <Icon path={mdiEmail} size={iconSize} className={iconClassName} />
          <SocialLinkText className={linkTextClassName}>Email</SocialLinkText>
        </EmailLink>
      </li>
    </SocialLinksContainer>
  );
};
