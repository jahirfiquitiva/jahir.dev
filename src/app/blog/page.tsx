import { Section } from '@/components/atoms/section';
import { RSSFeedButton } from '@/components/views/blog/rss-feed-button';
import { getColoredTextClasses } from '@/utils/colored-text';
import { createMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

import { GroupedBlogPosts } from './grouped-blog-posts';

export default function BlogPage() {
  return (
    <Section id={'blog'} className={'gap-6'}>
      <div className={'flex flex-row gap-4 items-center justify-between'}>
        <h1 className={getColoredTextClasses('orange', 'yellow', 'orange')}>
          Blog
        </h1>
        <RSSFeedButton />
      </div>
      <GroupedBlogPosts />
    </Section>
  );
}

export const metadata = createMetadata({
  title: 'Blog – Jahir Fiquitiva',
  description:
    // eslint-disable-next-line max-len
    'Blog posts by Jahir Fiquitiva. Here I share some thoughts, stories, information and more about software development, programming, tech or my personal life',
  exactUrl: 'https://jahir.dev/blog',
  keywords: [
    'tech',
    'software',
    'development',
    'thoughts',
    'opinions',
    'blog',
    'content',
    'story',
    'storytelling',
    'news',
  ],
  image: buildOgImageUrl('blog'),
});
