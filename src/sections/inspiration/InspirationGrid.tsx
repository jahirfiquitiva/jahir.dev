import { Heading } from '@/components/atoms';
import {
  Loading,
  Masonry,
  type MasonryBreakpoints,
} from '@/components/compounds';
import { useRequest } from '@/hooks';
import { InspirationItem as InspirationItemType } from '@/lib/notion';
import { breakpointsValues } from '@/stitches';
import type { FC } from '@/types';
import { theme } from '~/stitches';

import { InspirationItem } from './InspirationItem';

const masonryBreakpoints: MasonryBreakpoints = {};
masonryBreakpoints['0'] = 1;
masonryBreakpoints[(breakpointsValues['mobile-lg'] || 0).toString()] = 2;
masonryBreakpoints[(breakpointsValues['tablet-md'] || 0).toString()] = 3;

export const InspirationGrid: FC = () => {
  const { data, loading, error } = useRequest<{
    success: boolean;
    bookmarks: Array<InspirationItemType>;
  }>('/api/bookmarks');

  if (loading) return <Loading />;
  return (
    <>
      {data && data.bookmarks.length && !error ? (
        <>
          <Masonry
            breakpoints={masonryBreakpoints}
            gap={theme.space['24'].value}
            css={{ my: '$4' }}
          >
            {(data?.bookmarks || []).map((bookmark, index) => {
              return <InspirationItem item={bookmark} key={index} />;
            })}
          </Masonry>
        </>
      ) : (
        <p>
          <Heading as={'span'} gradient={'red-to-purple'}>
            Oops!
          </Heading>{' '}
          No inspiration found at this time.
          <br />
          Please come back later 😬
        </p>
      )}
    </>
  );
};
