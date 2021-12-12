import styled from '@emotion/styled';
import { mdiMagnify } from '@mdi/js';
import { useState, useMemo } from 'react';

import { SectionHeading } from '~/components/atoms/complex';
import { Field, Section, Link } from '~/components/atoms/simple';
import {
  BlogPostCard,
  Masonry,
  MasonryBreakpoints,
} from '~/components/elements';
import debounce from '~/lib/debounce';
import { Component, ComponentProps, Post, viewports } from '~/types';

const BlogMasonry = styled(Masonry)`
  margin: 1.2rem 0;
`;

const RssLink = styled(Link)`
  display: inline-flex;
  align-self: flex-start;
  margin-bottom: 1.6rem;
`;

interface BlogGridProps extends ComponentProps {
  posts?: Post[];
}

const masonryBreakpoints: MasonryBreakpoints = {};
masonryBreakpoints['0'] = 1;
masonryBreakpoints[viewports.tablet.sm] = 2;

export const Blog: Component<BlogGridProps> = (props) => {
  const { posts } = props;
  const [search, setSearch] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const filterPosts = debounce(() => {
    setFilteredPosts(
      posts?.filter(
        (post) =>
          post?.title.toLowerCase().includes(search.toLowerCase()) ||
          post?.excerpt?.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  }, 100);

  useMemo(() => {
    filterPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <Section id={'blog'}>
      <SectionHeading
        size={'3'}
        shadowColor={'blue'}
        gradientColor={'blue-to-green'}
        emoji={'📝'}
      >
        Blog
      </SectionHeading>
      <Field
        tag={'input'}
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
      <BlogMasonry breakpoints={masonryBreakpoints} gap={'1rem'}>
        {(filteredPosts || []).map((post, i) => {
          return <BlogPostCard key={i} {...post} />;
        })}
      </BlogMasonry>
      <RssLink href={'/feed.xml'} title={'Link to RSS feed'}>
        RSS Feed
      </RssLink>
    </Section>
  );
};
