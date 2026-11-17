import { Icon } from '@/components/atoms/icon';
import { OutlinedLinkButton } from '@/components/atoms/link-button';
import { Section } from '@/components/atoms/section';
import { StaggerItem, StaggerList } from '@/components/motion/reveal';
import { projects as allProjects } from '@/content';
import { getColoredTextClasses } from '@/utils/colored-text';

import { ProjectCard } from './project-card';

const FEATURED_COUNT = 4;

const featuredProjects = allProjects
  .filter((it) => !it.hide)
  .sort((a, b) => a.order - b.order)
  .slice(0, FEATURED_COUNT);

export const FeaturedProjects = () => {
  return (
    <Section id={'projects'} className={'gap-6'}>
      <div className={'flex flex-row gap-4 items-center justify-between'}>
        <div className={'flex flex-col gap-1'}>
          <h2 className={getColoredTextClasses('purple')}>Featured projects</h2>
          <p className={'text-2xs text-tertiary-txt'}>
            A few things I&apos;ve built recently.
          </p>
        </div>
        <OutlinedLinkButton
          title={'View all'}
          href={'/projects'}
          className={'self-start pr-3.5'}
          data-umami-event={'View all projects'}
        >
          <Icon
            className={'size-5'}
            path={
              'M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z'
            }
          />
          <span>View all</span>
        </OutlinedLinkButton>
      </div>
      <StaggerList className={'grid grid-cols-1 gap-3 mobile-lg:grid-cols-2'}>
        {featuredProjects.map((project) => (
          <StaggerItem key={project.name}>
            <ProjectCard project={project} compact />
          </StaggerItem>
        ))}
      </StaggerList>
    </Section>
  );
};
