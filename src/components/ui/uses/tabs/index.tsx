'use client';

import {
  Children,
  useState,
  useEffect,
  type PropsWithChildren,
  type ReactNode,
} from 'react';

import { Link } from '@/components/atoms/link';
import { useHasMounted } from '@/hooks/use-has-mounted';
import cx from '@/utils/cx';

import { TabButton, TabButtonText, TabPanel, TabsList } from './tabs.styles';

type TabKey =
  | 'all'
  | 'everyday'
  | 'software'
  | 'browser'
  | 'coding'
  | 'website';

const tabs: Array<{ id: TabKey; title: string }> = [
  { id: 'all', title: 'All' },
  { id: 'everyday', title: 'Everyday' },
  { id: 'software', title: 'Software' },
  { id: 'browser', title: 'Browser' },
  { id: 'coding', title: 'Coding' },
  { id: 'website', title: 'Website' },
] as const;

interface TabsProps extends PropsWithChildren {
  heroImage: ReactNode;
}

export const Tabs = (props: TabsProps) => {
  const hasMounted = useHasMounted();
  const [currentTab, setCurrentTab] = useState<TabKey>('all');

  useEffect(() => {
    if (hasMounted) {
      try {
        const tabId = (window.location.hash || '#').substring(1);
        if (!tabId) return;
        setCurrentTab(tabId as TabKey);
      } catch (e) {}
    }
  }, [hasMounted]);

  return (
    <div className={'flex flex-col gap-8 mb-3 flex-1'}>
      <TabsList role={'tablist'}>
        {tabs.map((tab) => {
          return (
            <TabButton
              role={'tab'}
              key={`tab-${tab.id}`}
              id={`tab-${tab.id}`}
              title={`Select tab: "${tab.title}"`}
              href={tab.id === 'all' ? '#' : `#${tab.id}`}
              aria-selected={currentTab === tab.id}
              aria-controls={
                tab.id === 'all' ? undefined : `tab-${tab.id}-content`
              }
              data-umami-event={'View uses page tab'}
              data-umami-event-tab={tab.title}
              onClick={() => {
                setCurrentTab(tab.id);
              }}
            >
              <TabButtonText>{tab.title}</TabButtonText>
            </TabButton>
          );
        })}
      </TabsList>
      <div
        className={cx(
          'flex flex-col',
          currentTab === 'all' ? 'gap-8' : 'gap-0',
        )}
      >
        {currentTab === 'all' && (
          <figure
            className={
              'my-2 motion-safe:animate-fade-in motion-safe:[animation-delay:0ms]'
            }
          >
            <div
              className={cx(
                'aspect-video',
                'tablet-md:rounded-4',
                'overflow-hidden',
                '-mx-3 tablet-md:-mx-4',
              )}
            >
              {props.heroImage}
            </div>
            <figcaption>Jahir&apos;s desk setup in early 2023</figcaption>
          </figure>
        )}
        {Children.map(props.children, (child, index) => {
          return (
            <TabPanel
              id={`tab-${tabs[index + 1].id}-content`}
              aria-labelledby={`tab-${tabs[index + 1].id}`}
              aria-hidden={
                currentTab !== 'all' && currentTab !== tabs[index + 1].id
              }
              hidden={currentTab !== 'all' && currentTab !== tabs[index + 1].id}
            >
              <h2 className={'text-xl'}>{tabs[index + 1].title}</h2>
              {child}
            </TabPanel>
          );
        })}
        {currentTab === 'all' && (
          <blockquote
            className={cx(
              'bg-brand-500/[0.024] dark:bg-brand-100/5',
              'border border-dashed border-divider',
              'p-4 rounded-3 my-1',
              'motion-safe:animate-fade-in motion-safe:[animation-delay:0ms]',
            )}
          >
            <span role={'img'} aria-label={'lightning emoji'}>
              ⚡
            </span>{' '}
            Make sure to check out{' '}
            <Link href={'https://uses.tech'} title={'uses.tech'}>
              uses.tech
            </Link>{' '}
            for a list of everyone&apos;s /uses pages!
          </blockquote>
        )}
      </div>
    </div>
  );
};
