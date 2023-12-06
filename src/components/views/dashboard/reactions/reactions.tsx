'use client';

import { useEffect, useState } from 'react';

import { awardOutline } from '@/components/icons/icons';
import {
  mdiBookmarkOutline,
  mdiHeartOutline,
  mdiThumbUpOutline,
} from '@/components/icons/mdi';

import { StatCard, StatCardProps } from '../stat-card/stat-card';

const icons = [
  mdiThumbUpOutline,
  mdiHeartOutline,
  awardOutline,
  mdiBookmarkOutline,
];
const colors = ['#20BF6B', '#EB3B5A', '#F7B731', '#A076D9'];

export const ReactionsStats = (
  props: Omit<StatCardProps, 'iconPath' | 'color'>,
) => {
  const [currentIcon, setCurrentIcon] = useState(0);

  useEffect(() => {
    const changeIcon = setInterval(() => {
      setCurrentIcon((cIcon) => (cIcon >= icons.length - 1 ? 0 : cIcon + 1));
    }, 1000);
    return () => clearInterval(changeIcon);
  }, []);

  return (
    <StatCard
      {...props}
      iconPath={icons[currentIcon]}
      color={colors[currentIcon]}
    />
  );
};
