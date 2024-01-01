'use client';

import mediumZoom from 'medium-zoom';
import { useEffect } from 'react';

export const Zoom = () => {
  useEffect(() => {
    const zoom = mediumZoom('img:not([data-nozoom]):not(a img)');
    return () => {
      zoom.detach();
    };
  });
  return null;
};
