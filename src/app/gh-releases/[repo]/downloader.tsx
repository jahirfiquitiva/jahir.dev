'use client';

import { useEffect } from 'react';

import { useHasMounted } from '@/hooks/use-has-mounted';

export const Downloader = (props: { url?: string | null }) => {
  const { url } = props;
  const hasMounted = useHasMounted();
  useEffect(() => {
    if (!hasMounted || !url) return;
    try {
      window.location.href = url;
    } catch (e) {}
  }, [hasMounted, url]);
  return null;
};
