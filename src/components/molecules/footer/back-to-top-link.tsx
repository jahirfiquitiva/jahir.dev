'use client';

import type { MouseEventHandler } from 'react';

import { scrollToTop } from '../back-to-top';

import { FooterLink } from './footer.styles';

interface BackToTopLinkProps {
  title: string;
  href: string;
  a11yTitle?: string;
  className?: string;
  props?: Record<string, unknown>;
}

export const BackToTopLink = (link: BackToTopLinkProps) => (
  <FooterLink
    title={link.a11yTitle || link.title}
    href={link.href}
    className={link.className}
    onClick={
      link.href === '#'
        ? (((e) => {
            e.preventDefault();
            scrollToTop();
          }) as MouseEventHandler<HTMLAnchorElement>)
        : undefined
    }
    {...link.props}
    prefetch={false}
  >
    {link.title}
  </FooterLink>
);
