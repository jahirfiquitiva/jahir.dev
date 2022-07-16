import { mdiShareVariantOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { useMemo } from 'react';

import { Button, LinkButton } from '@/components/atoms';
import { useHasMounted } from '@/hooks';
import type { FC } from '@/types';

const shareUrl = (title: string, slug: string) =>
  `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${title}" by @jahirfiquitiva\nhttps://jahir.dev/${slug}`,
  )}`;

interface ShareButtonProps {
  title: string;
  slug: string;
}

export const ShareButton: FC<ShareButtonProps> = (props) => {
  const hasMounted = useHasMounted();
  const { title, slug } = props;

  const shareData = useMemo(() => {
    return {
      title,
      text: `"${title}" by @jahirfiquitiva`,
      url: `https://jahir.dev/${slug}`,
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
      title={'Share blog post'}
      onClick={async () => {
        try {
          await navigator.share(shareData);
        } catch (err) {}
      }}
      withShadow
    >
      <Icon path={mdiShareVariantOutline} size={0.9} /> Share
    </Button>
  ) : (
    <LinkButton
      title={'Share blog post on Twitter'}
      href={shareUrl(title, slug)}
      withShadow
    >
      <Icon path={mdiShareVariantOutline} size={0.9} /> Share on Twitter
    </LinkButton>
  );
};
