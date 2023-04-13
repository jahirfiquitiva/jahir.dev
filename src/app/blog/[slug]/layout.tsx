import type { PropsWithChildren } from 'react';

import { Link } from '@/components/core/link';
import { Section } from '@/components/core/section';

export default function BlogPostLayout(props: PropsWithChildren) {
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
      {props.children}
    </Section>
  );
}
