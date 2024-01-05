import { Icon } from '@/components/atoms/icon';
import { LinkButton } from '@/components/atoms/link-button';
import { Section } from '@/components/atoms/section';
import allProjects from '@/data/projects.json';
import { getColoredTextClasses } from '@/utils/colored-text';
import cx from '@/utils/cx';

import { ProjectItem } from './item';

interface ProjectsListProps {
  title: string;
  featuredOnly?: boolean;
}

const projects = allProjects.sort((a, b) => a.order - b.order);
export const ProjectsList = (props: ProjectsListProps) => {
  const filteredProjects = props.featuredOnly
    ? projects.filter((it) => !it.hide)
    : projects;
  const Heading = props.featuredOnly ? 'h2' : 'h1';
  return (
    <Section id={'projects'} className={'gap-6'}>
      <div className={'flex flex-row gap-4 items-center justify-between'}>
        <Heading className={getColoredTextClasses('red', 'red', 'purple')}>
          {props.title}
        </Heading>
        {props.featuredOnly ? (
          <LinkButton
            title={'View all'}
            href={'/projects'}
            className={cx(
              'pr-3.5',
              'justify-center max-mobile-lg:flex-1',
              'mobile-lg:self-start mobile-lg:justify-start',
            )}
            data-umami-event={'View all projects'}
          >
            <Icon
              className={'size-5'}
              path={
                'M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z'
              }
            />
            <span>View all</span>
          </LinkButton>
        ) : null}
      </div>
      <ul>
        {filteredProjects.map((project) => (
          <li key={project.name}>
            <ProjectItem project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
};
