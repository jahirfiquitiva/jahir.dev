import Icon from '@mdi/react';
import type { CSSProperties } from 'react';

// import { calendarOutline } from '@/components/icons/icons';
// import { mdiClockOutline } from '@/components/icons/mdi';
// import { PostStat } from '@/components/views/blog/card/card.styles';
// import { ViewsCounter } from '@/components/views/mdx/ui/views/counter';
import type { Blog } from '@/lib/blog';
import cx from '@/utils/cx';
import { formatDate } from '@/utils/date';

interface StatsProps {
  slug: Blog['slug'];
  date?: Blog['date'];
  readingTime?: Blog['readingTime'];
  inProgress?: Blog['inProgress'];
  className?: string;
  style?: CSSProperties;
}

export const Stats = (props: StatsProps) => {
  const { slug, date, readingTime, inProgress, className, style } = props;
  const readableDate = formatDate(date);
  return (
    <div
      className={cx(
        'flex flex-wrap items-center',
        'gap-16 mt-8 mb-16 text-3xs',
        className,
      )}
      style={style}
    >
      {/* {Boolean(readableDate) && (
        <PostStat
          title={`This blog post was published on ${readableDate}`}
          aria-label={`This blog post was published on ${readableDate}`}
        >
          <Icon path={calendarOutline} size={0.625} />
          {readableDate}
        </PostStat>
      )}
      {Boolean(readingTime?.text?.length) && (
        <PostStat
          title={`It takes ${readingTime?.minutes} minutes to read this blog post`}
          aria-label={`It takes ${readingTime?.minutes} minutes to read this blog post`}
        >
          <Icon path={mdiClockOutline} size={0.625} />
          {readingTime?.text}
        </PostStat>
      )}
      <ViewsCounter slug={`blog--${slug}`} inProgress={inProgress} trackView /> */}
    </div>
  );
};
