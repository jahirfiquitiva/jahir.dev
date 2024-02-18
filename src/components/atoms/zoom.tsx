'use client';

import mediumZoom from 'medium-zoom';
import { useEffect } from 'react';

import { useHasMounted } from '@/hooks/use-has-mounted';

const Zoom = () => {
  const hasMounted = useHasMounted();
  useEffect(() => {
    if (!hasMounted) return;
    const zoom = mediumZoom(
      'img:not([data-nozoom]):not(a img):not(.image-comparison img)',
    );
    return () => {
      zoom.detach();
    };
  });
  return null;
};

export default Zoom;
