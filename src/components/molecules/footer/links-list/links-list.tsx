import cx from 'classix';
import type { Route } from 'next';

import type { GradientClass, RainbowColor } from '@/types/gradient';

import { FooterNowPlaying } from '../now-playing/now-playing';

import {
  FooterLink,
  FooterLinkSpan,
  List,
  MetaList,
} from './links-list.styles';

export interface FooterLinkProps {
  title: string;
  href: string;
  a11yTitle?: string;
  openInNewTab?: boolean;
  className?: GradientClass;
  underlineColor?: RainbowColor;
}

interface FooterLinksListProps {
  title?: string;
  links?: Array<FooterLinkProps>;
  meta?: boolean;
}

export const FooterLinksList = (props: FooterLinksListProps) => {
  const { title, links, meta } = props;
  const ListComponent = meta ? MetaList : List;
  return (
    <ListComponent aria-label={title}>
      {links?.map((link) => {
        return (
          <li key={link.title}>
            <FooterLink
              href={link.href as Route}
              title={link.a11yTitle ? link.a11yTitle : `${link.title} page`}
              openInNewTab={link.openInNewTab}
              className={`hocus:decoration-gradient-${link.underlineColor}`}
              data-umami-event={`${link.title}-from-footer`}
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
      {meta && <FooterNowPlaying />}
    </ListComponent>
  );
};
