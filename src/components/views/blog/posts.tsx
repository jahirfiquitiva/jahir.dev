'use client';

import { useMemo, useState } from 'react';

import { Field } from '@/components/core/field';
import { mdiMagnify } from '@/components/icons';
import type { FC, Post } from '@/types';

import { BlogPostCard } from './card';
import { groupBlogPosts } from './posts.utils';

interface BlogPostsProps {
  posts?: Array<Post>;
}

// eslint-disable-next-line max-lines-per-function
export const BlogPosts: FC<BlogPostsProps> = (props) => {
  const { posts } = props;
  const [search, setSearch] = useState('');

  const groupedPosts = useMemo(() => {
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
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          hideLabel
        />

        {(groupedPosts?.length || 0) <= 0 ? (
          <p className={'mt-20 mb-36'}>No blog posts found.</p>
        ) : null}
      </>
    );
  };

  return (
    <>
      {renderSearchComponents()}
      {groupedPosts.map((group) => {
        return (
          <div key={`posts-for-${group.year}`}>
            <p>{group.year}</p>
            <ul className={'list-none flex flex-col gap-6'}>
              {(group.posts || []).map((post, index) => {
                return (
                  <li
                    key={
                      post.slug ||
                      // eslint-disable-next-line newline-per-chained-call
                      `${post.title
                        .toLowerCase()
                        .split(' ')
                        .join('-')}-${index}`
                    }
                  >
                    <BlogPostCard post={post} />
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};
