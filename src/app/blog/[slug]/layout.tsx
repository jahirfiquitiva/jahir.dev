import { notFound, redirect } from 'next/navigation';
import type { PropsWithChildren } from 'react';

import { Link } from '@/components/core/link';
import { Section } from '@/components/core/section';
import { RequestData } from '@/types/request';
import { allBlogs as generatedBlogs } from 'contentlayer/generated';

import Header from './header';
import Stats from './stats';

const allBlogs = generatedBlogs.filter((it) => it.slug !== 'about');

export default function BlogPostLayout(
  props: PropsWithChildren & RequestData<{ slug?: string }>,
) {
  const post = allBlogs.find((post) => post.slug === props.params.slug);
  if (!post) return notFound();
  if (post.link) return redirect(post.link);

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
      <Header title={post.title} color={post.color} />
      <Stats
        slug={post.slug}
        date={post.date}
        readingTime={post.readingTime}
        devToId={post.devToId}
        inProgress={post.inProgress}
      />
      {props.children}
    </Section>
  );
}
