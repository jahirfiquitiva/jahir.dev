'use client';

import Icon from '@mdi/react';

import { squaredChevronUp } from '@/components/icons/icons';
import { scrollToTop } from '@/components/molecules/back-to-top/back-to-top';

import { SocialLink, SocialLinkItem } from './social-links.styles';

export const BackToTopLink = () => {
  return (
    <SocialLinkItem
      className={'self-end ml-auto mobile-lg:ml-0'}
      data-umami-event={'Back to top'}
    >
      {/* @ts-expect-error Renders a button, not a link */}
      <SocialLink
        $as={'button'}
        title={'Scroll back to top'}
        aria-label={'Scroll back to top'}
        onClick={scrollToTop}
        className={'hocus:text-accent'}
      >
        <Icon path={squaredChevronUp} size={0.9} />
      </SocialLink>
    </SocialLinkItem>
  );
};
