'use client';

import Icon from '@mdi/react';
import { useMemo, useState } from 'react';

import { Masonry } from '@/components/compounds/masonry';
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

import { ProjectsButtons, ProjectsHeader } from './projects.styles';

interface ProjectsProps {
  projects?: Array<Project>;
  showFullList?: boolean;
}

// eslint-disable-next-line max-lines-per-function
export const Projects: FC<ProjectsProps> = (props) => {
  const { projects, showFullList } = props;
  const [search, setSearch] = useState('');

  const filteredProjects = useMemo(() => {
    if (!showFullList) return projects;
    return projects?.filter(
      (project) =>
        project?.name.toLowerCase().includes(search.toLowerCase()) ||
        project?.description?.toLowerCase().includes(search.toLowerCase()),
    );
  }, [projects, search, showFullList]);

  const renderSearchComponents = () => {
    if (!showFullList) return null;
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
    <Section
      id={'projects'}
      className={'gap-[calc(var(--verticalContentPadding)/1.5)]'}
    >
      <ProjectsHeader>
        <Heading shadow={'red'} from={'red'} to={'purple'}>
          {!showFullList ? 'Featured ' : ''}Projects
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
          {!showFullList && (
            <ButtonLink title={'View all projects by Jahir'} href={'/projects'}>
              <Icon path={mdiEyeOutline} size={0.9} />
              View all
            </ButtonLink>
          )}
        </ProjectsButtons>
      </ProjectsHeader>
      {renderSearchComponents()}
      <Masonry key={'projects'} gap={18}>
        {(filteredProjects || []).map((project, index) => {
          return (
            <div
              key={
                // eslint-disable-next-line newline-per-chained-call
                `${project.name.toLowerCase().split(' ').join('-')}-${index}`
              }
            >
              {project.name}
            </div>
          );
        })}
      </Masonry>
    </Section>
  );
};
