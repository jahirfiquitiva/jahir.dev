import { Link, gradientEnabledCss } from '@/components/atoms';
import {
  gradientVariants,
  type GradientOption,
} from '@/stitches/utils/gradient';
import type { FC } from '@/types';
import { styled } from '~/stitches';

import { FooterNowPlaying } from './FooterNowPlaying';

const List = styled('ul', {
  minWidth: '130px',
  maxWidth: '100%',
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '.8rem',
  marginInline: 0,
  marginBlock: 0,
  paddingInline: 0,
  '@mobile-md': {
    minWidth: '164px',
  },
  '@tablet-sm': {
    minWidth: '172px',
  },
  variants: {
    meta: {
      true: {
        flexDirection: 'row',
        marginTop: '.8rem',
        '@tablet-sm': {
          flexDirection: 'column',
          marginTop: 0,
        },
      },
    },
  },
});

export const FooterLink = styled(Link, {
  display: 'inline-flex',
  alignItems: 'center',
  alignSelf: 'flex-start',
  color: '$text-tertiary',

  hocus: {
    '& > span': gradientEnabledCss,
    textDecorationColor: '$$gradientStart !important',
  },

  variants: {
    gradient: gradientVariants(),
    forceGradient: {
      true: {
        '& > span': gradientEnabledCss,
      },
    },
  },
});

export interface FooterLinkProps {
  title: string;
  href: string;
  gradient?: GradientOption;
}

interface FooterLinksGroupProps {
  title?: string;
  links?: Array<FooterLinkProps>;
  meta?: boolean;
}

export const FooterLinksGroup: FC<FooterLinksGroupProps> = (props) => {
  const { title, links, meta } = props;
  return (
    <List aria-label={title} meta={meta}>
      {links?.map((link) => {
        return (
          <li key={link.title}>
            <FooterLink
              href={link.href}
              title={`${link.title} page`}
              gradient={link.gradient}
            >
              <span>{link.title}</span>
            </FooterLink>
          </li>
        );
      })}
      {meta && <FooterNowPlaying />}
    </List>
  );
};
