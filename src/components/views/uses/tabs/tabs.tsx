'use client';

import { Children, useState } from 'react';

import { ButtonLink } from '@/components/core/link';
import { Section } from '@/components/core/section';
import type { FC } from '@/types';

import { TabPanel, TabsList } from './tabs.styles';

const getIdForName = (name: string) =>
  name.split(' ').join('-').toLowerCase().trim();

export interface TabsProps {
  tabsNames: Array<string>;
}

export const Tabs: FC<TabsProps> = (props) => {
  const [currentTab, setCurrentTab] = useState(0);
  const { tabsNames: extraTabsNames, children } = props;
  const tabsNames = ['All', ...extraTabsNames];
  const tabsIds = tabsNames.map(getIdForName);

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
      <div>
        {Children.map(children, (child, index) => {
          return (
            <TabPanel
              role={'tabpanel'}
              id={`tab-${tabsIds[index + 1]}-content`}
              aria-labelledby={`tab-${tabsIds[index + 1]}`}
              aria-hidden={currentTab !== 0 && currentTab !== index + 1}
              hidden={currentTab !== 0 && currentTab !== index + 1}
            >
              {child}
            </TabPanel>
          );
        })}
      </div>
    </Section>
  );
};
