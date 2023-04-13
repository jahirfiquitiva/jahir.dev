'use client';

import Icon from '@mdi/react';
import { useMemo, useState } from 'react';

import { Field } from '@/components/core/field';
import { Heading } from '@/components/core/heading';
import { ButtonLink } from '@/components/core/link';
import { Section } from '@/components/core/section';
import {
  mdiEyeOutline,
  mdiFileCodeOutline,
  mdiMagnify,
} from '@/components/icons';
import type { FC, Project } from '@/types';

import { ProjectCard } from './card';
import { ProjectsButtons, ProjectsHeader } from './projects.styles';

interface ProjectsProps {
  projects?: Array<Project>;
  withSearch?: boolean;
}

// eslint-disable-next-line max-lines-per-function
export const Projects: FC<ProjectsProps> = (props) => {
  const { projects, withSearch } = props;
  const [search, setSearch] = useState('');

  const filteredProjects = useMemo(() => {
    if (!withSearch) return projects;
    return projects?.filter(
      (project) =>
        project?.name.toLowerCase().includes(search.toLowerCase()) ||
        project?.description?.toLowerCase().includes(search.toLowerCase()),
    );
  }, [projects, search, withSearch]);

  const renderSearchComponents = () => {
    if (!withSearch) return null;
    return (
      <>
        <Field
          iconPath={mdiMagnify}
          type={'text'}
          name={'search-input'}
          label={'Search projects'}
          placeholder={'Search projects...'}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          hideLabel
        />

        {(filteredProjects?.length || 0) <= 0 ? (
          <p className={'mt-20 mb-36'}>No projects found.</p>
        ) : null}
      </>
    );
  };

  return (
    <Section id={'projects'}>
      <ProjectsHeader>
        <Heading
          shadow={'red'}
          from={'red'}
          to={'purple'}
          as={withSearch ? 'h1' : 'h2'}
          className={'w-[unset]'}
        >
          {!withSearch ? 'Featured ' : ''}Projects
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
          {!withSearch && (
            <ButtonLink title={'View all projects by Jahir'} href={'/projects'}>
              <Icon path={mdiEyeOutline} size={0.9} />
              View all
            </ButtonLink>
          )}
        </ProjectsButtons>
      </ProjectsHeader>
      {renderSearchComponents()}
      <ul className={'list-none flex flex-col gap-6'}>
        {(filteredProjects || []).map((project, index) => {
          return (
            <li
              key={
                // eslint-disable-next-line newline-per-chained-call
                `${project.name.toLowerCase().split(' ').join('-')}-${index}`
              }
            >
              <ProjectCard project={project} />
            </li>
          );
        })}
      </ul>
    </Section>
  );
};
