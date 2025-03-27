/* eslint-disable @stylistic/max-len */
'use client';

import { useEffect, useState, type PropsWithChildren } from 'react';

import { Icon } from '@/components/atoms/icon';
import { Link } from '@/components/atoms/link';
import { formatDate } from '@/utils/date';

import { Doing } from './doing';

const paths: Record<number, string> = {
  1: 'M12 20C16.42 20 20 16.42 20 12S16.42 4 12 4 4 7.58 4 12 7.58 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.47 22 2 17.5 2 12C2 6.5 6.5 2 12 2M15.3 7.8L12.3 13H11V7H12.5V9.65L14 7.05L15.3 7.8Z',
  2: 'M12 20C16.42 20 20 16.42 20 12S16.42 4 12 4 4 7.58 4 12 7.58 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.47 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12.5 13V13H11V7H12.5V11.26L16.2 9.13L16.95 10.43L12.5 13Z',
  3: 'M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M17 11.5V13H11V7H12.5V11.5H17Z',
  4: 'M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M17 13.9L16.3 15.2L11 12.3V7H12.5V11.4L17 13.9Z',
  5: 'M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M15.3 16.2L14 17L11 11.8V7H12.5V11.4L15.3 16.2Z',
  6: 'M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12.5 7V17H11V7H12.5Z',
  7: 'M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12.5 7V12.2L9.8 17L8.5 16.2L11 11.8V7H12.5Z',
  8: 'M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12.5 12.8L7.7 15.6L7 14.2L11 11.9V7H12.5V12.8Z',
  9: 'M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12.5 7V13H7V11.5H11V7H12.5Z',
  10: 'M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12.5 13H11L7 10.7L7.8 9.4L11.1 11.3V7H12.6V13Z',
  11: 'M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12.5 7V13H11L8.5 8.6L9.8 7.8L11 10V7H12.5Z',
  12: 'M12 20C16.42 20 20 16.42 20 12S16.42 4 12 4 4 7.58 4 12 7.58 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.47 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12.5 13.03H11V7H12.5V13.03Z',
};

const getIconPath = (time: string): string => {
  try {
    let hours = Number(time.split(':')[0]) || 4;
    if (hours > 12) hours -= 12;
    return paths[hours];
  } catch (e) {
    return paths[4];
  }
};

export const Clock = (props: PropsWithChildren<{ longFormat?: boolean }>) => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timeId = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(timeId);
    };
  });

  const [day, ...timeText] = formatDate(time, true, { weekday: 'long' })
    .toUpperCase()
    .split(' ');
  const [hours, minutes] = timeText.join(' ').split(':');

  if (props.longFormat) {
    return (
      <div className={'flex flex-col gap-1.5'}>
        <p>
          It&apos;s currently
          <Icon
            className={'size-5 inline-block mx-1 mb-0.5'}
            path={getIconPath(hours)}
            aria-hidden
          />
          <span className={'tabular-nums'}>
            {hours}
            <span className={'animate-pulse'}>:</span>
            {minutes} in{' '}
            <Link
              title={'Colombia'}
              href={'https://www.google.com/maps/place/Colombia/@4,-72z/'}
              data-umami-event={'Link to Colombia map'}
            >
              Colombia{' '}
              <span role={'img'} aria-label={'Colombia flag'}>
                🇨🇴
              </span>
            </Link>
          </span>{' '}
          and{' '}
          <Doing
            time={hours}
            isPm={minutes.includes('PM')}
            isWeekend={day.includes('SATURDAY') || day.includes('SUNDAY')}
          />
          .
        </p>
        {props.children}
      </div>
    );
  }
  return (
    <p
      title={`It's currently ${hours}:${minutes} in Colombia`}
      className={
        'flex flex-row items-center gap-1.5 text-tertiary-txt text-3xs font-medium uppercase'
      }
    >
      <Icon className={'size-5'} path={getIconPath(hours)} />
      <span className={'tabular-nums'}>
        {hours}
        <span className={'animate-pulse'}>:</span>
        {minutes} COL.
      </span>
    </p>
  );
};
