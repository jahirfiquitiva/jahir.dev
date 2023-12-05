import { LineWobble } from '@/components/core/loaders/line-wobble/line-wobble';

export const NowPlayingLoading = () => (
  <div className={'mx-6 tablet-sm:mx-2'}>
    <LineWobble
      size={84}
      lineWeight={5}
      speed={1.75}
      color={'var(--color-accent, #88a4e6)'}
    />
  </div>
);
