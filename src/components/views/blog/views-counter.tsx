import 'server-only';

import { Suspense } from 'react';

import { getViews, recordView } from '@/actions/views';
import { LineWobble } from '@/components/atoms/loaders/line-wobble';

interface ViewsCounterProps {
  slug: string;
  write?: boolean;
}

export const ViewsCounter = async (props: ViewsCounterProps) => {
  const dbSlug = `blog--${props.slug}`;
  const views = await getViews(dbSlug).catch(() => 0);
  if (props.write) recordView(dbSlug);

  return (
    <Suspense
      fallback={
        <LineWobble
          size={52}
          lineWeight={4}
          speed={1.75}
          color={'var(--color-accent, #88a4e6)'}
          className={'ml-1.5'}
        />
      }
    >
      {views > 0 ? (
        <>
          <span aria-hidden={'true'} className={'font-bold'}>
            ·
          </span>
          <span>{views} views</span>
        </>
      ) : null}
    </Suspense>
  );
};
