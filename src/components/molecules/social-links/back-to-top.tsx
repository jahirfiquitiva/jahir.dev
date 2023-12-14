'use client';

import Icon from '@mdi/react';

import { squaredChevronUp } from '@/components/icons/icons';
import { scrollToTop } from '@/components/molecules/back-to-top/back-to-top';

import { SocialLink, SocialLinkItem } from './social-links.styles';

export const BackToTopLink = () => {
  return (
    <SocialLinkItem>
      {/* @ts-expect-error Renders a button, not a link */}
      <SocialLink
        $as={'button'}
        title={'Scroll back to top'}
        aria-label={'Scroll back to top'}
        onClick={scrollToTop}
        className={'hocus:text-accent'}
        data-umami-event={'Back to top'}
        data-umami-event-src={'Footer'}
      >
        <Icon path={squaredChevronUp} size={0.9} />
        <span className={'sr-only'}>Back to Top</span>
      </SocialLink>
    </SocialLinkItem>
  );
};
