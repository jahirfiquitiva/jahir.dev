import Icon from '@mdi/react';

import { Heading } from '@/components/core/heading';
import { ButtonLink } from '@/components/core/link';
import { Section } from '@/components/core/section';
import { mdiEyeOutline, mdiFileCodeOutline } from '@/components/icons';
import type { Project } from '@/types/project';

import { ProjectCard } from './card';
import { ProjectsButtons, ProjectsHeader } from './projects.styles';

interface ProjectsProps {
  projects: Array<Project>;
  full?: boolean;
}

export const Projects = (props: ProjectsProps) => {
  const { projects, full } = props;

  return (
    <Section id={'projects'}>
      <ProjectsHeader>
        <Heading
          shadow={'red'}
          from={'red'}
          to={'purple'}
          $as={full ? 'h1' : 'h2'}
          className={'w-[unset]'}
        >
          {!full ? 'Featured ' : ''}Projects
        </Heading>
        <ProjectsButtons>
          <ButtonLink
            title={"Jahir's resume pdf file"}
            href={'/resume'}
            openInNewTab
            outlined
          >
            <Icon path={mdiFileCodeOutline} size={0.9} />
            Resume
          </ButtonLink>
          {!full && (
            <ButtonLink title={'View all projects by Jahir'} href={'/projects'}>
              <Icon path={mdiEyeOutline} size={0.9} />
              View all
            </ButtonLink>
          )}
        </ProjectsButtons>
      </ProjectsHeader>
      <ul className={'list-none flex flex-col gap-6'}>
        {(projects || []).map((project, index) => {
          return (
            <li
              key={`${project.name
                .toLowerCase()
                .split(' ')
                .join('-')}-${index}`}
            >
              <ProjectCard project={project} />
            </li>
          );
        })}
      </ul>
    </Section>
  );
};
