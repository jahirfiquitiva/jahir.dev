import { mdiEyeOutline, mdiFileCodeOutline, mdiMagnify, mdiRss } from '@mdi/js';
import Icon from '@mdi/react';
import { useMemo, useState } from 'react';

import { Field, Heading, LinkButton } from '@/components/atoms';
import { Masonry, type MasonryBreakpoints } from '@/components/compounds';
import { Section } from '@/components/elements';
import { breakpointsValues } from '@/stitches';
import type { FC, Post } from '@/types';
import { styled } from '~/stitches';

import { BlogCard } from './BlogCard';

const BlogHeader = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem',
  '@tablet-sm': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const BlogButtons = styled('div', {
  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  gap: '1rem',
  '@tablet-sm': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

const RssLink = styled(LinkButton, {
  backgroundColor: '#f26522',
  dark: { backgroundColor: '#f37438' },
  hocus: {
    backgroundColor: '#da5b1f',
    dark: { backgroundColor: '#f26522' },
  },
});

interface BlogProps {
  posts?: Array<Post>;
}

const masonryBreakpoints: MasonryBreakpoints = {};
masonryBreakpoints['0'] = 1;
masonryBreakpoints[(breakpointsValues['mobile-sm'] || 0).toString()] = 1;
masonryBreakpoints[(breakpointsValues['tablet-sm'] || 0).toString()] = 2;

// eslint-disable-next-line max-lines-per-function
export const Blog: FC<BlogProps> = (props) => {
  const { posts } = props;
  const [search, setSearch] = useState('');

  const filteredPosts = useMemo(() => {
    return posts?.filter(
      (post) =>
        post?.title.toLowerCase().includes(search.toLowerCase()) ||
        post?.excerpt?.toLowerCase().includes(search.toLowerCase()),
    );
  }, [posts, search]);

  const renderSearchComponents = () => {
    return (
      <>
        <Field
          iconPath={mdiMagnify}
          type={'text'}
          name={'search-input'}
          label={'Search blog posts'}
          placeholder={'Search blog posts...'}
          value={search}
          onChange={setSearch}
          hideLabel
        />

        {(filteredPosts?.length || 0) <= 0 ? (
          <p style={{ padding: '1.2rem 0 2.4rem' }}>No blog posts found.</p>
        ) : null}
      </>
    );
  };

  return (
    <Section id={'blog'} css={{ gap: 'calc($$verticalContentPadding / 1.5)' }}>
      <BlogHeader>
        <Heading as={'h3'} shadow={'yellow'} gradient={'yellow-to-orange'}>
          Blog
        </Heading>
        <BlogButtons>
          <RssLink title={'RSS feed'} href={'/feed.xml'} withShadow>
            <Icon path={mdiRss} size={0.9} />
            RSS Feed
          </RssLink>
        </BlogButtons>
      </BlogHeader>
      {renderSearchComponents()}
      <Masonry breakpoints={masonryBreakpoints} gap={'1.1rem'}>
        {(filteredPosts || []).map((post, index) => {
          return (
            <BlogCard
              key={
                post.slug ||
                // eslint-disable-next-line newline-per-chained-call
                `${post.title.toLowerCase().split(' ').join('-')}-${index}`
              }
              post={post}
            />
          );
        })}
      </Masonry>
    </Section>
  );
};
