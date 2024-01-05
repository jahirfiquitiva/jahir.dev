import type { CSSProperties } from 'react';

import { Link } from '@/components/atoms/link';
import { ViewsCounter } from '@/components/views/blog/views-counter';
import type { Blog } from '@/lib/blog';
import { getReadableColor, hexToRgb } from '@/utils/color';
import { formatDate } from '@/utils/date';

interface HeaderProps {
  post: Blog;
}

export const Header = (props: HeaderProps) => {
  const { title, color, slug, date, readingTime } = props.post;
  const readableColor = getReadableColor(color, true);
  const shadowColor = hexToRgb(readableColor, 0.85);
  const readableDate = formatDate(date);

  return (
    <div className={'flex flex-col gap-3'}>
      <Link
        title={'Go back to blog posts list'}
        href={'/blog'}
        className={'self-start no-underline hocus:underline py-1 mb-5'}
      >
        ← Back to blog posts
      </Link>
      <h1
        className={
          'text-shadow dark:text-shadow-none dark:text-[var(--title-color)] dark:saturate-150'
        }
        style={
          {
            '--tw-shadow-color': shadowColor,
            '--title-color': readableColor,
          } as CSSProperties
        }
      >
        {title}
      </h1>
      <p
        className={
          'flex flex-row items-center gap-2 text-2xs text-tertiary-txt tabular-nums line-clamp-1'
        }
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
              {Math.ceil(readingTime || 0)} minutes read
            </span>
          </>
        ) : null}
        <ViewsCounter slug={slug} write />
      </p>
    </div>
  );
};
