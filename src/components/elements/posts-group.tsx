import styled from '@emotion/styled';

import { BlogPostCard } from '~/components/elements';
import { Component, ComponentProps } from '~/types';
import { BlogPostGroup } from '~/utils/format/sort-blog-posts';

const PostsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.2rem 0;

  &:first-of-type {
    margin-top: 2.4rem;
  }

  &:last-of-type {
    margin-bottom: 3rem;
  }
`;

const PostsHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 0.4rem 0;
  gap: 0.6rem;

  & > h4 {
    line-height: 1;
  }

  & > hr {
    margin: 0;
    height: 1px;
    border: none;
    background-color: var(--divider);
    flex: 1;
  }
`;

const PostsSectionHeader = ({ year }: { year: number }) => {
  return (
    <PostsHeader>
      <h4>{year}</h4>
      <hr />
    </PostsHeader>
  );
};

interface PostsGroupProps extends ComponentProps, BlogPostGroup {}

export const PostsGroup: Component<PostsGroupProps> = (props) => {
  const { year, posts } = props;

  return (
    <PostsSection id={`${year}-posts`}>
      <PostsSectionHeader year={year} />
      {(posts || []).map((post, j) => {
        return <BlogPostCard key={`${j}`} {...post} />;
      })}
    </PostsSection>
  );
};
