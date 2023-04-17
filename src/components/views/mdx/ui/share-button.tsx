'use client';

import Icon from '@mdi/react';
import { useMemo } from 'react';

import { Button } from '@/components/core/button';
import { ButtonLink } from '@/components/core/link';
import { mdiShareVariantOutline } from '@/components/icons';
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
      <Icon path={mdiShareVariantOutline} size={0.9} /> Share
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
    >
      <Child />
    </Button>
  ) : (
    <ButtonLink title={buttonTitle} href={shareUrl(title, slug)}>
      <Child />
    </ButtonLink>
  );
};
