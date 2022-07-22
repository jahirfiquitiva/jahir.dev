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

  return (
    <>
      <Masonry
        breakpoints={masonryBreakpoints}
        gap={data?.bookmarks.length ? theme.space['24'].value : 0}
        css={data?.bookmarks.length ? { my: '$4' } : {}}
      >
        {(data?.bookmarks || []).map((bookmark, index) => {
          return <InspirationItem item={bookmark} key={index} />;
        })}
      </Masonry>
      {loading ? <Loading /> : null}
      {!loading && (!data?.bookmarks.length || error) ? (
        <p>
          <Heading as={'span'} gradient={'red-to-purple'}>
            Oops!
          </Heading>{' '}
          No inspiration found at this time.
          <br />
          Please come back later 😬
        </p>
      ) : null}
    </>
  );
};
