'use client';

import { Children, useEffect, useState, type PropsWithChildren } from 'react';

import image from '@/assets/images/setup-2023.jpg';
import { Heading } from '@/components/core/heading';
import { Img } from '@/components/core/img';
import { NoPaddingSection } from '@/components/core/section';
import { useHasMounted } from '@/hooks/use-has-mounted';
import { ThemeContext, useTheme } from '@/providers/theme-provider';
import cx from '@/utils/cx';

import { TabButton, TabButtonText, TabPanel, TabsList } from './tabs.styles';

const getIdForName = (name: string) =>
  name.split(' ').join('-').toLowerCase().trim();

interface TabsProps {
  tabsNames: Array<string>;
}

export const Tabs = (props: PropsWithChildren<TabsProps>) => {
  const hasMounted = useHasMounted();
  const themeData = useTheme();
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
    <NoPaddingSection $as={'div'} className={'gap-32 my-12 flex-1'}>
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
              data-umami-event={'View uses page tab'}
              data-umami-event-tab={tabName}
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
        {currentTab === 0 && (
          <Img
            src={image}
            alt={"Jahir's desk setup in 2022"}
            className={cx(
              'h-auto rounded-8 w-full bg-[#C0BBB2]',
              'aspect-video object-top',
            )}
            quality={100}
            placeholder={'blur'}
            priority
          />
        )}
        {Children.map(children, (child, index) => {
          return (
            <TabPanel
              role={'tabpanel'}
              id={tabsIds[index + 1]}
              aria-labelledby={`tab-${tabsIds[index + 1]}`}
              aria-hidden={currentTab !== 0 && currentTab !== index + 1}
              hidden={currentTab !== 0 && currentTab !== index + 1}
            >
              <Heading $as={'h2'} className={'text-xl'}>
                {tabsNames[index + 1]}
              </Heading>
              <ThemeContext.Provider value={themeData}>
                {child}
              </ThemeContext.Provider>
            </TabPanel>
          );
        })}
      </div>
    </NoPaddingSection>
  );
};
