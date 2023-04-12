'use client';

import Icon from '@mdi/react';

import { squaredChevronUp } from '@/components/icons';
import { scrollToTop } from '@/components/molecules/back-to-top';

import { SocialLinkItem, SocialLink } from './social-links.styles';

export const BackToTopLink = () => {
  return (
    <SocialLinkItem className={'self-end ml-auto'}>
      {/* @ts-expect-error Renders a button, not a link */}
      <SocialLink
        $as={'button'}
        title={'Scroll back to top'}
        aria-label={'Scroll back to top'}
        onClick={scrollToTop}
      >
        <Icon path={squaredChevronUp} size={0.9} />
      </SocialLink>
    </SocialLinkItem>
  );
};
