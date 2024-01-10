import { LineWobble } from '@/components/atoms/loaders/line-wobble';

interface ViewsCounterProps {
  views: number;
}

export const ViewsCounter = ({ views }: ViewsCounterProps) => {
  if (views <= 0) return null;
  return (
    <>
      <span aria-hidden={'true'} className={'font-bold'}>
        ·
      </span>
      <span>{views} views</span>
    </>
  );
};

export const ViewsCounterFallback = () => (
  <LineWobble
    size={52}
    lineWeight={4}
    speed={1.75}
    color={'var(--color-accent, #88a4e6)'}
    className={'ml-1.5'}
  />
);
