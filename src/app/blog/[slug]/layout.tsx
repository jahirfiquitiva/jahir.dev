import type { PropsWithChildren } from 'react';

import { Link } from '@/components/core/link/link';
import { Section } from '@/components/core/section';
import { RequestContext } from '@/types/request';
import { getBlogPost } from 'config/blog/blog';

import Header from './header';
import Stats from './stats';

export default async function BlogPostLayout(
  props: PropsWithChildren & RequestContext<{ slug?: string }>,
) {
  const post = await getBlogPost(props.params.slug);
  return (
    <Section id={'blog-post'}>
      <Link
        href={'/blog'}
        title={'Navigate back to blog posts list page'}
        className={'inline-flex items-end gap-8 leading-none py-4'}
      >
        <span className={'font-manrope font-bold mb-1'}>{'<-'}</span>
        <span>Back to blog posts</span>
      </Link>
      {post ? (
        <>
          <Header title={post.title} color={post.color} />
          <Stats
            slug={post.slug}
            date={post.date}
            readingTime={post.readingTime}
            inProgress={post.inProgress}
          />
        </>
      ) : null}
      {props.children}
    </Section>
  );
}
