'use client';

import { cx } from 'classix';
import { Children, useEffect, useState } from 'react';

import { ButtonLink } from '@/components/core/link';
import { Section } from '@/components/core/section';
import { useHasMounted } from '@/hooks/use-has-mounted';
import type { FC } from '@/types';

import { TabPanel, TabsList } from './tabs.styles';
import { Heading } from '@/components/core/heading';

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
        setCurrentTab(tabsIds.indexOf(tabId));
      } catch (e) {}
    }
  }, [hasMounted, tabsIds]);

  return (
    <Section $as={'div'} className={'gap-32 my-12 flex-1'}>
      <TabsList role={'tablist'}>
        {tabsNames.map((tabName, index) => {
          return (
            <ButtonLink
              $as={'a'}
              role={'tab'}
              key={`tab-${tabsIds[index]}`}
              id={`tab-${tabsIds[index]}`}
              title={`Select tab: "${tabName}"`}
              href={`#${tabsIds[index]}`}
              outlined={!(currentTab === index)}
              aria-selected={currentTab === index}
              aria-controls={`tab-${tabsIds[index]}-content`}
              className={'px-16 min-w-fit block'}
              onClick={() => {
                setCurrentTab(index);
              }}
            >
              <span className={'block w-full'}>{tabName}</span>
            </ButtonLink>
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
              <a
                href={`#${tabsIds[index + 1]}`}
                onClick={() => {
                  setCurrentTab(index + 1);
                }}
              >
                <Heading $as={'h2'}>{tabsNames[index + 1]}</Heading>
              </a>
              {child}
            </TabPanel>
          );
        })}
      </div>
    </Section>
  );
};
