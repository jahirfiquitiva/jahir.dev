'use client';

import dynamic from 'next/dynamic';

import { Icon } from '@/components/atoms/icon';
import { loading } from '@/components/icons';

const DynamicFooterNowPlaying = dynamic(() => import('./now-playing'), {
  ssr: false,
  loading: () => <Icon path={loading} className={'size-5 animate-spin'} />,
});

export const FooterNowPlaying = () => <DynamicFooterNowPlaying />;
