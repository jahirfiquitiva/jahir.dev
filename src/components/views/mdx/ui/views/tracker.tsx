'use client';

import { useEffect } from 'react';

import { useHasMounted } from '@/hooks/use-has-mounted';

interface ViewTrackerProps {
  slug: string;
  trackView?: (slug: string) => Promise<unknown>;
}

export const ViewTracker = (props: ViewTrackerProps) => {
  const hasMounted = useHasMounted();
  const { slug, trackView } = props;
  useEffect(() => {
    if (!hasMounted) return;
    const hostname = window?.location?.hostname || 'localhost';
    if (hostname === 'jahir.dev') trackView?.(slug);
  }, [hasMounted, slug, trackView]);
  return null;
};
