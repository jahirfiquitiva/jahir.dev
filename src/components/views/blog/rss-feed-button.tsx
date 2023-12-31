import { Icon } from '@/components/atoms/icon';
import { LinkButton } from '@/components/atoms/link-button';
import cx from '@/utils/cx';

export const RSSFeedButton = (props: { className?: string }) => {
  return (
    <LinkButton
      title={'Resume'}
      href={'/feed.xml'}
      openInNewTab
      className={cx(
        'self-start pr-4',
        'bg-orange-600 dark:bg-orange-500',
        'hocus:bg-orange-700 dark:hocus:bg-orange-400',
        'ring-orange-700 dark:ring-orange-600',
        'hocus:ring-orange-800 dark:hocus:ring-orange-500',
        props.className,
      )}
      data-umami-event={'RSS feed'}
    >
      <Icon
        className={'size-5'}
        path={
          // eslint-disable-next-line max-len
          'M6.18,15.64A2.18,2.18 0 0,1 8.36,17.82C8.36,19 7.38,20 6.18,20C5,20 4,19 4,17.82A2.18,2.18 0 0,1 6.18,15.64M4,4.44A15.56,15.56 0 0,1 19.56,20H16.73A12.73,12.73 0 0,0 4,7.27V4.44M4,10.1A9.9,9.9 0 0,1 13.9,20H11.07A7.07,7.07 0 0,0 4,12.93V10.1Z'
        }
      />
      <span>RSS Feed</span>
    </LinkButton>
  );
};
