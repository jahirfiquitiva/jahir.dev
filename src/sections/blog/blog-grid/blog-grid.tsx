import { BlogPostCard } from '~/components/cards';
import { Component, ComponentProps } from '~/elements/fc';
import { MasonryGrid } from '~/elements/masonry-grid';
import { SimpleBlogPost } from '~/types';

interface BlogGridProps extends ComponentProps {
  posts?: SimpleBlogPost[];
}

export const BlogGrid: Component<BlogGridProps> = (props) => {
  const { posts } = props;
  return (
    <MasonryGrid gap={'1rem'}>
      {(posts || []).map((post, i) => {
        return <BlogPostCard key={i} {...post} />;
      })}
    </MasonryGrid>
  );
};
