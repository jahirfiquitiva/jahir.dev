import Icon from '@mdi/react';

import { calendarOutline, mdiClockOutline } from '@/components/icons';
import { Stat } from '@/components/views/mdx/ui/stat';
import { ViewsCounter } from '@/components/views/mdx/ui/views';
import { formatDate } from '@/utils/date';
import type { Blog } from 'contentlayer/generated';

interface StatsProps {
  slug: Blog['slug'];
  date?: Blog['date'];
  readingTime?: Blog['readingTime'];
  inProgress?: Blog['inProgress'];
}

const Stats = (props: StatsProps) => {
  const { slug, date, readingTime, inProgress } = props;
  const readableDate = formatDate(date);
  return (
    <div className={'flex flex-wrap items-center gap-12 mt-8 mb-20 text-3xs'}>
      {Boolean(readableDate) && (
        <Stat
          title={`This blog post was published on ${readableDate}`}
          aria-label={`This blog post was published on ${readableDate}`}
        >
          <Icon path={calendarOutline} size={0.625} />
          {readableDate}
        </Stat>
      )}
      {Boolean(readingTime?.text?.length) && (
        <Stat
          title={`It takes ${readingTime?.minutes} minutes to read this blog post`}
          aria-label={`It takes ${readingTime?.minutes} minutes to read this blog post`}
        >
          <Icon path={mdiClockOutline} size={0.625} />
          {readingTime?.text}
        </Stat>
      )}
      <ViewsCounter slug={`blog--${slug}`} inProgress={inProgress} trackView />
    </div>
  );
};

export default Stats;
