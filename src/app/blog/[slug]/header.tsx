import type { CSSProperties } from 'react';

import { Heading } from '@/components/core/heading';
import { getReadableColor, hexToRgb } from '@/utils/color';
import type { Blog } from 'contentlayer/generated';

import { Stats } from './stats';

interface HeaderProps {
  post: Blog;
}

export const Header = (props: HeaderProps) => {
  const { title, color, slug, date, readingTime, inProgress } = props.post;
  const readableColor = getReadableColor(color, true);
  const shadowColor = hexToRgb(readableColor, 0.56);
  const statColor = hexToRgb(readableColor, 1, true);

  return (
    <>
      <Heading
        className={'mt-12 dark:text-[var(--text-color)]'}
        style={
          {
            '--text-color': readableColor || 'var(--color-primary-txt)',
            '--text-shadow-color': shadowColor || 'var(--color-shadow-brand)',
          } as CSSProperties
        }
      >
        {title}
      </Heading>
      <Stats
        slug={slug}
        date={date}
        readingTime={readingTime}
        inProgress={inProgress}
        style={
          {
            '--post-text-color': statColor || 'var(--color-accent-dark)',
          } as CSSProperties
        }
      />
    </>
  );
};
