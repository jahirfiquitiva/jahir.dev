import { scrollToTop } from '@/components/molecules/back-to-top/back-to-top';
import cx from '@/utils/cx';

import { FooterLink, FooterLinkSpan } from './links-list/links-list.styles';

export const BackToTopLink = () => {
  return (
    <li>
      <FooterLink
        href={'#'}
        title={'Scroll back to top'}
        aria-label={'Scroll back to top'}
        onClick={scrollToTop}
        className={cx('hocus:text-accent hocus:decoration-gradient-blue')}
        data-umami-event={'Back to top'}
        data-umami-event-src={'Footer'}
      >
        <FooterLinkSpan
          className={cx(
            'group-hocus/link:from-gradient-brand group-hocus/link:to-gradient-blue',
          )}
        >
          Back to Top
        </FooterLinkSpan>
      </FooterLink>
    </li>
  );
};
