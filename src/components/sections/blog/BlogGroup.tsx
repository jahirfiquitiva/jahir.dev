import type { FC } from '@/types';
import type { BlogGroup as BlogGroupProps } from '@/utils/posts/group-posts';
import { styled } from '~/stitches';

import { BlogCard } from './BlogCard';

const GroupSection = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  marginInline: 0,
  marginBlock: 0,
  paddingInline: 0,
  gap: '$16',
});

const GroupHeader = styled('li', {
  display: 'flex',
  alignItems: 'flex-end',
  gap: '$12',
  mt: '$6',
  mb: '$4',
  '& > h4': {
    lineHeight: 1,
  },
  '& > hr': {
    border: 'none',
    m: 0,
    height: 1,
    backgroundColor: '$divider',
    flex: 1,
  },
});

const GroupSectionHeader: FC<{ year: number }> = ({ year }) => {
  return (
    <GroupHeader>
      <h4>{year}</h4>
      <hr />
    </GroupHeader>
  );
};

export const BlogGroup: FC<BlogGroupProps> = (props) => {
  const { year, posts } = props;

  return (
    <GroupSection
      id={`posts-from-${year}`}
      aria-label={`Posts from ${year}`}
      title={`Posts from ${year}`}
    >
      <GroupSectionHeader year={year} />
      {(posts || []).map((post, index) => {
        return (
          <li
            key={
              // eslint-disable-next-line newline-per-chained-call
              `${post.title.toLowerCase().split(' ').join('-')}-${index}`
            }
          >
            <BlogCard post={post} />
          </li>
        );
      })}
    </GroupSection>
  );
};
