'use client';

import { cx } from 'classix';
import { Children, useEffect, useState } from 'react';

import { Heading } from '@/components/core/heading';
import { Section } from '@/components/core/section';
import { useHasMounted } from '@/hooks/use-has-mounted';
import type { FC } from '@/types';

import { TabPanel, TabsList, TabButton, TabButtonText } from './tabs.styles';

const getIdForName = (name: string) =>
  name.split(' ').join('-').toLowerCase().trim();

export interface TabsProps {
  tabsNames: Array<string>;
}

export const Tabs: FC<TabsProps> = (props) => {
  const hasMounted = useHasMounted();
  const [currentTab, setCurrentTab] = useState(0);
  const { tabsNames: extraTabsNames, children } = props;
  const tabsNames = ['All', ...extraTabsNames];
  const tabsIds = tabsNames.map(getIdForName);

  useEffect(() => {
    if (hasMounted) {
      try {
        const tabId = (window?.location?.hash || '#').substring(1);
        if (!tabId) return;
        const index = tabsIds.indexOf(tabId);
        setCurrentTab(index < 0 ? 0 : index);
      } catch (e) {}
    }
  }, [hasMounted, tabsIds]);

  return (
    <Section $as={'div'} className={'gap-32 my-12 flex-1 px-0 mobile-lg:px-0'}>
      <TabsList role={'tablist'}>
        {tabsNames.map((tabName, index) => {
          return (
            <TabButton
              role={'tab'}
              key={`tab-${tabsIds[index]}`}
              id={`tab-${tabsIds[index]}`}
              title={`Select tab: "${tabName}"`}
              href={`#${tabsIds[index]}`}
              aria-selected={currentTab === index}
              aria-controls={`tab-${tabsIds[index]}-content`}
              onClick={() => {
                setCurrentTab(index);
              }}
            >
              <TabButtonText>{tabName}</TabButtonText>
            </TabButton>
          );
        })}
      </TabsList>
      <div
        className={cx('flex flex-col', currentTab === 0 ? 'gap-32' : 'gap-0')}
      >
        {Children.map(children, (child, index) => {
          return (
            <TabPanel
              role={'tabpanel'}
              id={`tab-${tabsIds[index + 1]}-content`}
              aria-labelledby={`tab-${tabsIds[index + 1]}`}
              aria-hidden={currentTab !== 0 && currentTab !== index + 1}
              hidden={currentTab !== 0 && currentTab !== index + 1}
            >
              <Heading $as={'h2'}>{tabsNames[index + 1]}</Heading>
              {child}
            </TabPanel>
          );
        })}
      </div>
    </Section>
  );
};
