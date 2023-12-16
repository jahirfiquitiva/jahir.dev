import type { Route } from 'next';
import type { CSSProperties, PropsWithChildren } from 'react';

import type { GradientClass, RainbowColor } from '@/types/gradient';
import cx from '@/utils/cx';

import { FooterLink, FooterLinkSpan, List } from './links-list.styles';

export interface FooterLinkProps {
  title: string;
  href: string;
  a11yTitle?: string;
  openInNewTab?: boolean;
  className?: GradientClass | string;
  underlineColor?: RainbowColor;
}

interface FooterLinksListProps extends PropsWithChildren {
  title?: string;
  links?: Array<FooterLinkProps>;
  className?: string;
  style?: CSSProperties;
}

export const FooterLinksList = (props: FooterLinksListProps) => {
  const { title, links, className, style, children } = props;
  return (
    <List aria-label={title} className={className} style={style}>
      {links?.map((link) => {
        return (
          <li key={link.title}>
            <FooterLink
              href={link.href as Route}
              title={link.a11yTitle ? link.a11yTitle : `${link.title} page`}
              openInNewTab={link.openInNewTab}
              className={`hocus:decoration-gradient-${link.underlineColor}`}
            >
              <FooterLinkSpan
                className={cx(
                  (link.className || '')
                    .split(' ')
                    .map((it) => `group-hocus/link:${it}`)
                    .join(' ') as string,
                )}
              >
                {link.title}
              </FooterLinkSpan>
            </FooterLink>
          </li>
        );
      })}
      {children}
    </List>
  );
};
