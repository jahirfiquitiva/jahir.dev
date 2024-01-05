import { Section } from '@/components/atoms/section';
import { BlogPostItem } from '@/components/views/blog/item';
import { getBlogPosts, type Blog } from '@/lib/blog';
import { sortBlogPostsByDate } from '@/utils/blog';
import { getDate } from '@/utils/date';

const allowInProgress = process.env.NODE_ENV === 'development';

export const GroupedBlogPosts = () => {
  const blogPostsByYear = getBlogPosts()
    .filter((it) => allowInProgress || !it.inProgress)
    .reduce<Record<number, Array<Blog>>>((acc, post) => {
      const year = (getDate(post.date) || new Date()).getFullYear();
      return { ...acc, [year]: [...(acc[year] || []), post] };
    }, {});

  return (
    <ol className={'flex flex-col gap-6'}>
      {Object.entries(blogPostsByYear)
        .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
        .map(([year, posts]) => (
          <li className={'block'} key={year}>
            <Section
              id={`posts-from-${year}`}
              title={`Posts from ${year}`}
              aria-label={`Posts from ${year}`}
            >
              <div className={'flex items-end gap-3 mt-3 w-full'}>
                <h2 className={'text-lg font-manrope font-bold leading-none'}>
                  {year}
                </h2>
                <hr
                  className={
                    'w-full border-none m-0 -mt-0.5 h-px bg-divider flex-1'
                  }
                />
              </div>
              <ol className={'flex flex-col gap-1.5'}>
                {posts.sort(sortBlogPostsByDate).map((post) => (
                  <li className={'block'} key={post.slug}>
                    <BlogPostItem post={post} />
                  </li>
                ))}
              </ol>
            </Section>
          </li>
        ))}
    </ol>
  );
};
