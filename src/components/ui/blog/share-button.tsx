'use client';

import type { Route } from 'next';
import { useMemo } from 'react';

import { Button } from '@/components/atoms/button';
import { Icon } from '@/components/atoms/icon';
import { LinkButton } from '@/components/atoms/link-button';
import { useHasMounted } from '@/hooks/use-has-mounted';

const shareUrl = (title: string, slug: string) =>
  `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${title}" by @jahirfiquitiva\nhttps://jahir.dev/blog/${slug}`,
  )}`;

interface ShareButtonProps {
  title: string;
  slug: string;
}

const buttonTitle = 'Share blog post';

const Child = () => {
  return (
    <>
      <Icon
        className={'size-5'}
        path={
          // eslint-disable-next-line max-len
          'M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z'
        }
      />
      <span>Share</span>
    </>
  );
};

export const ShareButton = (props: ShareButtonProps) => {
  const hasMounted = useHasMounted();
  const { title, slug } = props;

  const shareData = useMemo(() => {
    return {
      title,
      text: `"${title}" by @jahirfiquitiva`,
      url: `https://jahir.dev/blog/${slug}`,
    };
  }, [title, slug]);

  const canShare = useMemo<boolean>(() => {
    try {
      if (!hasMounted) return false;
      return navigator.canShare(shareData);
    } catch (e) {
      return false;
    }
  }, [hasMounted, shareData]);

  return canShare ? (
    <Button
      title={buttonTitle}
      onClick={async () => {
        try {
          await navigator.share(shareData);
        } catch (err) {}
      }}
      data-umami-event={'Share blog post'}
      data-umami-event-title={title}
      className={'pr-3.5'}
    >
      <Child />
    </Button>
  ) : (
    <LinkButton
      title={buttonTitle}
      href={shareUrl(title, slug) as Route}
      data-umami-event={'Share blog post link'}
      data-umami-event-title={title}
      className={'pr-3.5 no-underline hocus:text-on-accent'}
    >
      <Child />
    </LinkButton>
  );
};
