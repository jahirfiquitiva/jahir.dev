'use client';

import {
  Children,
  useState,
  useEffect,
  type PropsWithChildren,
  type ReactNode,
} from 'react';

import { useHasMounted } from '@/hooks/use-has-mounted';

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
  heroComponent: ReactNode;
  noticeComponent: ReactNode;
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
          const selected = currentTab === tab.id;
          return (
            <TabButton
              role={'tab'}
              key={`tab-${tab.id}`}
              id={`tab-${tab.id}`}
              title={`Select tab: "${tab.title}"`}
              href={tab.id === 'all' ? '#' : `#${tab.id}`}
              aria-selected={selected}
              aria-controls={
                tab.id === 'all' ? undefined : `tab-${tab.id}-content`
              }
              data-umami-event={'View uses page tab'}
              data-umami-event-tab={tab.title}
              onClick={() => {
                setCurrentTab(tab.id);
              }}
              className={selected ? 'text-accent' : ''}
            >
              <TabButtonText className={selected ? 'after:bg-accent' : ''}>
                {tab.title}
              </TabButtonText>
            </TabButton>
          );
        })}
      </TabsList>
      <div className={'flex flex-col gap-8'}>
        {currentTab === 'all' && props.heroComponent}
        {Children.map(props.children, (child, index) => {
          const hidden =
            currentTab !== 'all' && currentTab !== tabs[index + 1].id;
          return (
            <TabPanel
              id={`tab-${tabs[index + 1].id}-content`}
              aria-labelledby={`tab-${tabs[index + 1].id}`}
              aria-hidden={hidden}
              hidden={hidden}
              className={
                hidden
                  ? 'hidden opacity-0 invisible pointer-events-none select-none'
                  : ''
              }
            >
              <h2 className={'text-xl'}>{tabs[index + 1].title}</h2>
              {child}
            </TabPanel>
          );
        })}
        {currentTab === 'all' && props.noticeComponent}
      </div>
    </div>
  );
};
