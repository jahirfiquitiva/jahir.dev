import { Heading } from '@/components/atoms';
import { Masonry, type MasonryBreakpoints } from '@/components/compounds';
import { Loading } from '@/components/compounds/Loading';
import { Section } from '@/components/elements';
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
    <Section
      id={'inspiration'}
      css={{ gap: 'calc($$verticalContentPadding / 1.5)' }}
      centered
    >
      <Heading as={'h3'} shadow={'brand'} gradient={'brand-to-blue'}>
        Inspiration
      </Heading>

      {loading ? (
        <Loading />
      ) : data && data.bookmarks.length && !error ? (
        <>
          <p>
            These are some sites that I like and that have somehow inspired part
            of my website and even some personal projects. 👏{' '}
            <em>(In no particular order).</em>
          </p>
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
          No inspiration found at this time.
          <br />
          Please come back later
        </p>
      )}
    </Section>
  );
};
