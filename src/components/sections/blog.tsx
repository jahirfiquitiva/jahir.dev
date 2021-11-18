import { mdiMagnify } from '@mdi/js';
import { useState, useMemo } from 'react';
import { theme } from 'twin.macro';

import { SectionHeading } from '~/components/atoms/complex';
import { Field, Section, Link } from '~/components/atoms/simple';
import { BlogPostCard } from '~/components/elements';
import { Masonry, MasonryBreakpoints } from '~/components/masonry';
import debounce from '~/lib/debounce';
import { Component, ComponentProps, Post } from '~/types';

interface BlogGridProps extends ComponentProps {
  posts?: Post[];
}

const masonryBreakpoints: MasonryBreakpoints = {};
masonryBreakpoints['0'] = 1;
masonryBreakpoints[theme`screens.md`] = 2;

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
      <Masonry breakpoints={masonryBreakpoints} gap={'1rem'} tw={'my-12'}>
        {(filteredPosts || []).map((post, i) => {
          return <BlogPostCard key={i} {...post} />;
        })}
      </Masonry>
      <Link
        href={'/feed.xml'}
        title={'Link to RSS feed'}
        tw={'mb-16 inline-flex self-start'}
      >
        RSS Feed
      </Link>
    </Section>
  );
};
