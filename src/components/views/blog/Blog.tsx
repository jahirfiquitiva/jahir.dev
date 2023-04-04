import Icon from '@mdi/react';
import { useMemo, useState } from 'react';

import { Field, Heading, Section, LinkButton } from '@/components/core';
import { mdiMagnify, mdiRss } from '@/icons';
import type { FC, Post } from '@/types';
import { groupBlogPosts } from '@/utils/posts/group-posts';
import { styled } from '~/stitches';

import { BlogGroup } from './BlogGroup';

const BlogsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$12',
  '@tablet-md': {
    gap: '$16',
  },
});

const BlogHeader = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$16',
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
  gap: '$16',
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

const NothingFound = styled('p', {
  p: '$20 0 $36',
});

interface BlogProps {
  posts?: Array<Post>;
}

// eslint-disable-next-line max-lines-per-function
export const Blog: FC<BlogProps> = (props) => {
  const { posts } = props;
  const [search, setSearch] = useState('');

  const filteredPosts = useMemo(() => {
    return groupBlogPosts(posts, search);
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
          <NothingFound>No blog posts found.</NothingFound>
        ) : null}
      </>
    );
  };

  return (
    <Section id={'blog'} css={{ gap: 'calc($$verticalContentPadding / 1.5)' }}>
      <BlogHeader>
        <Heading as={'h2'} shadow={'yellow'} gradient={'yellow-to-orange'}>
          Blog
        </Heading>
        <BlogButtons>
          <RssLink
            title={'RSS feed'}
            href={'/feed.xml'}
            withShadow
            openInNewTab
          >
            <Icon path={mdiRss} size={0.9} />
            RSS Feed
          </RssLink>
        </BlogButtons>
      </BlogHeader>
      {renderSearchComponents()}
      <BlogsContainer>
        {(filteredPosts || []).map((group, index) => {
          return (
            <BlogGroup
              key={`${index}-${group.year}`}
              year={group.year}
              posts={group.posts}
            />
          );
        })}
      </BlogsContainer>
    </Section>
  );
};
