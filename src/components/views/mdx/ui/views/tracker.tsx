'use client';

import { useEffect } from 'react';

import { useHasMounted } from '@/hooks/use-has-mounted';

interface ViewTrackerProps {
  slug: string;
  trackView?: (slug: string) => Promise<unknown>;
}

export const ViewTracker = (props: ViewTrackerProps) => {
  const hasMounted = useHasMounted();
  const { slug } = props;
  useEffect(() => {
    if (!hasMounted) return;
    const hostname = window?.location?.hostname || 'localhost';
    if (hostname === 'jahir.dev')
      fetch(`/api/views/${slug}`, { method: 'POST' }).catch();
    // trackView?.(slug);
    // TODO: Update to use the function above and delete route
  }, [hasMounted, slug]);
  return null;
};
