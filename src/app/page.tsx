import { BlogPostCard } from '@/components/views/blog/card/card';
import { Intro } from '@/components/views/home/intro/intro';
import { Skills } from '@/components/views/home/skills/skills';
import { ViewsCounter } from '@/components/views/mdx/ui/views/counter';
import { LatestBlogPost } from '@/components/views/projects/latest-blog';
import { Projects } from '@/components/views/projects/projects';
import { allReadableBlogs } from '@/utils/blog';

const allowInProgress = process.env.NODE_ENV === 'development';
const [latestBlogPost] = allReadableBlogs
  .filter((it) => allowInProgress || !it.inProgress)
  .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

export default function Home() {
  return (
    <>
      <Intro />
      <Projects />
      <Skills />
      <LatestBlogPost>
        <BlogPostCard
          post={latestBlogPost}
          viewsCounter={
            <ViewsCounter
              slug={`blog--${latestBlogPost.slug}`}
              inProgress={latestBlogPost.inProgress}
              $sm
            />
          }
          showYear
        />
      </LatestBlogPost>
    </>
  );
}
