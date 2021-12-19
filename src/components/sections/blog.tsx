import styled from '@emotion/styled';
import { mdiMagnify, mdiRss } from '@mdi/js';
import { useState, useMemo } from 'react';

import { SectionHeading } from '~/components/atoms/complex';
import { Field, Section, LinkButton } from '~/components/atoms/simple';
import { PostsGroup } from '~/components/elements';
import debounce from '~/lib/debounce';
import { Component, ComponentProps, Post, mediaQueries } from '~/types';
import { BlogPostGroup, sortBlogPosts } from '~/utils/format/sort-blog-posts';

const BlogHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 0.4rem;
  gap: 0.8rem;

  ${mediaQueries.tablet.sm} {
    margin: 0 0 0.2rem;
  }
`;

const RssLink = styled(LinkButton)`
  background-color: #f26522;
  &:hover,
  &:focus {
    background-color: #da5b1f;
  }
  .dark & {
    background-color: #f37438;
    &:hover,
    &:focus {
      background-color: #f26522;
    }
  }
`;

interface BlogGridProps extends ComponentProps {
  posts?: Post[];
}

export const Blog: Component<BlogGridProps> = (props) => {
  const { posts } = props;
  const [search, setSearch] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<Array<BlogPostGroup>>(
    sortBlogPosts(posts),
  );

  const filterPosts = debounce(() => {
    setFilteredPosts(sortBlogPosts(posts, search));
  }, 50);

  useMemo(() => {
    filterPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <Section id={'blog'}>
      <BlogHeader>
        <SectionHeading
          size={'3'}
          shadowColor={'yellow'}
          gradientColor={'yellow-to-orange'}
          emoji={'📝'}
        >
          Blog
        </SectionHeading>

        <RssLink href={'/feed.xml'} title={'Link to RSS feed'} icon={mdiRss}>
          RSS Feed
        </RssLink>
      </BlogHeader>

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
      {(filteredPosts.length || 0) <= 0 ? (
        <p style={{ padding: '1.2rem 0 2.4rem' }}>No blog posts found.</p>
      ) : null}

      {filteredPosts.map((group, i) => {
        return (
          <PostsGroup
            key={`${i}-${group.year}`}
            year={group.year}
            posts={group.posts}
          />
        );
      })}
    </Section>
  );
};
