import type { CSSProperties } from 'react';

import { Link } from '@/components/atoms/link';
import { ViewsCounter } from '@/components/ui/blog/views-counter';
import type { Blog } from '@/lib/blog';
import { getReadableColor, hexToRgb } from '@/utils/color';
import cx from '@/utils/cx';
import { formatDate } from '@/utils/date';

interface HeaderProps {
  post: Blog;
}

export const Header = ({ post }: HeaderProps) => {
  const { color, readingTime } = post;
  const readableColor = getReadableColor(color, true);
  const shadowColor = hexToRgb(readableColor, 0.85);
  const readableDate = formatDate(post.date);

  return (
    <div className={'flex flex-col gap-3 text-shadow shadow-background -mt-2'}>
      <Link
        title={'Go back to blog posts list'}
        href={'/blog'}
        className={'self-start no-underline hocus:underline py-1 mb-2'}
      >
        ← Back to blog posts
      </Link>
      <h1
        className={cx(
          'text-shadow dark:text-[var(--title-color)] dark:saturate-150',
          'dark:!shadow-background',
        )}
        style={
          {
            '--tw-shadow-color': shadowColor,
            '--title-color': readableColor,
          } as CSSProperties
        }
      >
        {post.title}
      </h1>
      <p className={'text-secondary-txt'}>{post.summary}</p>
      <p
        className={cx(
          'flex flex-row items-center gap-2',
          'text-tertiary-txt tabular-nums',
          'flex-wrap',
          'text-3xs mobile-md:text-2xs',
        )}
      >
        <span
          title={`This blog post was published on ${readableDate}`}
          aria-label={`This blog post was published on ${readableDate}`}
        >
          <span className={'sr-only'}>Published on</span>
          <span>{readableDate}</span>
        </span>
        {Boolean(readingTime) ? (
          <>
            <span aria-hidden={'true'} className={'font-bold'}>
              ·
            </span>
            <span
              title={`It takes ${readingTime} minutes to read this blog post`}
              aria-label={`It takes ${readingTime} minutes to read this blog post`}
            >
              {Math.ceil(readingTime)} minutes read
            </span>
          </>
        ) : null}
        {!post.link ? (
          <ViewsCounter slug={post.slug} inProgress={post.inProgress} write />
        ) : null}
      </p>
    </div>
  );
};
