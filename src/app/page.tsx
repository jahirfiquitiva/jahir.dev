import { BlogPostCard } from '@/components/views/blog/card/card';
import { LatestBlogPost } from '@/components/views/blog/latest-blog';
import { Intro } from '@/components/views/home/intro/intro';
import { LetsConnect } from '@/components/views/home/lets-connect';
import { ViewsCounter } from '@/components/views/mdx/ui/views/counter';
import { Projects } from '@/components/views/projects/projects';
import { allReadableBlogs } from '@/utils/blog';

const allowInProgress = process.env.NODE_ENV === 'development';
const [latestBlogPost, latestBlogPostB] = allReadableBlogs
  .filter((it) => allowInProgress || !it.inProgress)
  .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

export default function Home() {
  return (
    <>
      <Intro />
      <LetsConnect />
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
        <BlogPostCard
          post={latestBlogPostB}
          viewsCounter={
            <ViewsCounter
              slug={`blog--${latestBlogPostB.slug}`}
              inProgress={latestBlogPostB.inProgress}
              $sm
            />
          }
          showYear
        />
      </LatestBlogPost>
      <Projects />
    </>
  );
}
