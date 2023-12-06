import Icon from '@mdi/react';
import cx from 'classix';
import tw from 'tailwind-styled-components';

import { Heading } from '@/components/core/heading';
import { ButtonLink } from '@/components/core/link/button-link';
import { mdiRss } from '@/components/icons/mdi';

const BlogHeader = tw.div`
  w-full
  flex
  flex-col
  items-start
  gap-16
  tablet-sm:flex-row
  tablet-sm:items-center
  tablet-sm:justify-between
`;

export const Header = () => (
  <BlogHeader>
    <Heading shadow={'yellow'} from={'yellow'} to={'orange'}>
      Blog
    </Heading>
    <ButtonLink
      title={'RSS feed'}
      href={'/feed.xml'}
      openInNewTab
      className={cx(
        'bg-[#f26522] dark:bg-[#f37438]',
        'hocus:bg-[#da5b1f] dark:hocus:bg-[#f26522]',
      )}
      data-umami-event={'RSS feed'}
    >
      <Icon path={mdiRss} size={0.9} />
      <span>RSS Feed</span>
    </ButtonLink>
  </BlogHeader>
);
