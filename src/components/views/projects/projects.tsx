import Icon from '@mdi/react';
import cx from 'classix';
import type { Route } from 'next';
import { Suspense } from 'react';

import Loading from '@/app/loading';
import { Heading } from '@/components/core/heading';
import { ButtonLink } from '@/components/core/link/button-link';
import { Section } from '@/components/core/section';
import { mdiEyeOutline, mdiFileCodeOutline } from '@/components/icons/mdi';
import projects from '@/data/projects.json';

import { ProjectCard } from './card/card';
import { ProjectsButtons, ProjectsHeader } from './projects.styles';

const getSortedProjects = async (hide?: boolean) => {
  const sortedProjects = projects.sort((a, b) => a.order - b.order);
  if (hide) return sortedProjects.filter((it) => !it.hide);
  return sortedProjects;
};

interface ProjectsProps {
  full?: boolean;
}

const AsyncProjectsList = async (props: ProjectsProps) => {
  const projects = await getSortedProjects(!props.full);
  return (
    <ul className={'list-none flex flex-col gap-6'}>
      {(projects || []).map((project, index) => {
        return (
          <li
            key={`${project.name.toLowerCase().split(' ').join('-')}-${index}`}
          >
            <ProjectCard project={project} />
          </li>
        );
      })}
    </ul>
  );
};

export const Projects = async (props: ProjectsProps) => {
  const { full } = props;
  return (
    <Section id={'projects'}>
      <ProjectsHeader>
        <Heading
          shadow={'red'}
          from={'red'}
          to={'purple'}
          $as={full ? 'h1' : 'h2'}
          className={cx(
            'w-[unset]',
            full ? '' : 'text-xl [line-height:inherit]',
          )}
        >
          {!full ? 'Featured ' : ''}Projects
        </Heading>
        <ProjectsButtons>
          <ButtonLink
            title={"Jahir's resume pdf file"}
            href={'/resume' as Route}
            openInNewTab
            outlined
          >
            <Icon path={mdiFileCodeOutline} size={0.9} />
            <span>Resume</span>
          </ButtonLink>
          {!full && (
            <ButtonLink title={'View all projects by Jahir'} href={'/projects'}>
              <Icon path={mdiEyeOutline} size={0.9} />
              <span>View all</span>
            </ButtonLink>
          )}
        </ProjectsButtons>
      </ProjectsHeader>
      <Suspense fallback={<Loading />}>
        <AsyncProjectsList full={full} />
      </Suspense>
    </Section>
  );
};
