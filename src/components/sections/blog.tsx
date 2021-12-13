import styled from '@emotion/styled';
import { mdiMagnify, mdiRss } from '@mdi/js';
import { useState, useMemo } from 'react';

import { SectionHeading } from '~/components/atoms/complex';
import { Field, Section, LinkButton } from '~/components/atoms/simple';
import {
  BlogPostCard,
  Masonry,
  MasonryBreakpoints,
} from '~/components/elements';
import debounce from '~/lib/debounce';
import {
  Component,
  ComponentProps,
  Post,
  viewports,
  mediaQueries,
} from '~/types';

const BlogMasonry = styled(Masonry)`
  margin: 1.2rem 0;
`;

const BlogHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${mediaQueries.tablet.sm} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
      {(filteredPosts?.length || 0) <= 0 ? (
        <p style={{ padding: '1.2rem 0 2.4rem' }}>No blog posts found.</p>
      ) : null}
      <BlogMasonry breakpoints={masonryBreakpoints} gap={'1rem'}>
        {(filteredPosts || []).map((post, i) => {
          return <BlogPostCard key={i} {...post} />;
        })}
      </BlogMasonry>
    </Section>
  );
};
