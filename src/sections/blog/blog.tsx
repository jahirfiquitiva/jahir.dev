import styled from '@emotion/styled';
import { mdiMagnify } from '@mdi/js';
import { useState, useMemo } from 'react';

import { BlogIdeas } from '~/blocks/blog-ideas';
import { debounce } from '~/lib/debounce';
import {
  MasonryGrid,
  MasonryBreakpoints,
  SectionHeading,
} from '~/new-components/atoms/complex';
import { Field, Section } from '~/new-components/atoms/simple';
import { BlogPostCard } from '~/new-components/elements';
import { Component, ComponentProps, Post, viewports } from '~/types';

interface BlogGridProps extends ComponentProps {
  posts?: Post[];
}

const BlogsMasonry = styled(MasonryGrid)`
  margin: 1.6rem 0;
`;

const masonryBreakpoints: MasonryBreakpoints = {};
masonryBreakpoints[viewports.default] = 1;
masonryBreakpoints[viewports.mobile.lg] = 2;

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
  }, 150);

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
      <BlogsMasonry breakpoints={masonryBreakpoints} gap={'1rem'}>
        {(filteredPosts || []).map((post, i) => {
          return <BlogPostCard key={i} {...post} />;
        })}
      </BlogsMasonry>
      <BlogIdeas />
    </Section>
  );
};
