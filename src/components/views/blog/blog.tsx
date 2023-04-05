import Icon from '@mdi/react';
import { useMemo, useState } from 'react';

import { ListCardsGroup } from '@/components/compounds';
import { NothingFound } from '@/components/compounds/list-cards-group/list-cards-group.styles';
import { Field, Heading, Section } from '@/components/core';
import { mdiMagnify, mdiRss } from '@/icons';
import type { FC, Post } from '@/types';
import { groupBlogPosts } from '@/utils/posts/group-posts';
import type { BlogGroup as BlogGroupProps } from '@/utils/posts/group-posts';

import {
  BlogButtons,
  BlogHeader,
  BlogsContainer,
  RssLink,
} from './blog.styles';
import { BlogCard } from './card';

const BlogGroup: FC<BlogGroupProps> = (props) => {
  const { year, posts } = props;

  return (
    <ListCardsGroup
      id={`posts-from-${year}`}
      title={`Posts from ${year}`}
      header={year.toFixed()}
    >
      {(posts || []).map((post, index) => {
        return (
          <li
            key={
              post.slug ||
              // eslint-disable-next-line newline-per-chained-call
              `${post.title.toLowerCase().split(' ').join('-')}-${index}`
            }
          >
            <BlogCard post={post} />
          </li>
        );
      })}
    </ListCardsGroup>
  );
};

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
