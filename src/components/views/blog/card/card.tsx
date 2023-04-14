import { Img } from '@/components/core/img';
import type { Post } from '@/types';

import { BlogCard } from './card.styles';

interface PostCardProps {
  post: Post;
}

export const BlogPostCard = (props: PostCardProps) => {
  const { post } = props;
  const { link, slug, devToId } = post;
  const rightLink = link && link.length > 0 ? link : `/blog/${slug}`;

  return (
    <BlogCard title={`Blog post: ${post?.title}`} href={rightLink}>
      <Img
        src={post.hero || ''}
        alt={`Cover image for blog "${post.title}"`}
        width={post?.heroMeta?.size?.width || 144}
        height={post?.heroMeta?.size?.height || 72}
      />
      <div>
        <p>{post.title}</p>
        <p>{post.excerpt}</p>
      </div>
    </BlogCard>
  );
};
