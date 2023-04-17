'use client';

import { useEffect } from 'react';

interface ViewTrackerProps {
  slug: string;
  trackView?: (slug: string) => Promise<unknown>;
}

export const ViewTracker = (props: ViewTrackerProps) => {
  const { slug, trackView } = props;
  useEffect(() => {
    trackView?.(slug);
  }, [slug, trackView]);
  return null;
};
