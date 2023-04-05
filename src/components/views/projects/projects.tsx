import Icon from '@mdi/react';
import { useMemo, useState } from 'react';

import {
  ListCardsGroup,
  type MasonryBreakpoints,
} from '@/components/compounds';
import { NothingFound } from '@/components/compounds/list-cards-group/list-cards-group.styles';
import { Field, Heading, Section, LinkButton } from '@/components/core';
import { mdiEyeOutline, mdiFileCodeOutline, mdiMagnify } from '@/icons';
import { breakpointsValues } from '@/stitches';
import type { FC, Project } from '@/types';

import { ProjectCard } from './card';
import { ProjectsButtons, ProjectsHeader } from './projects.styled';

interface ProjectsProps {
  projects?: Array<Project>;
  showFullList?: boolean;
}

const masonryBreakpoints: MasonryBreakpoints = {};
masonryBreakpoints['0'] = 1;
masonryBreakpoints[(breakpointsValues['mobile-sm'] || 0).toString()] = 1;
masonryBreakpoints[(breakpointsValues['tablet-sm'] || 0).toString()] = 2;

// eslint-disable-next-line max-lines-per-function
export const Projects: FC<ProjectsProps> = (props) => {
  const { projects, showFullList } = props;
  const [search, setSearch] = useState('');

  const filteredProjects = useMemo(() => {
    return projects?.filter(
      (project) =>
        project?.name.toLowerCase().includes(search.toLowerCase()) ||
        project?.description?.toLowerCase().includes(search.toLowerCase()),
    );
  }, [projects, search]);

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
          onChange={setSearch}
          hideLabel
        />

        {(filteredProjects?.length || 0) <= 0 ? (
          <NothingFound>No projects found.</NothingFound>
        ) : null}
      </>
    );
  };

  return (
    <Section
      id={'projects'}
      css={{ gap: 'calc($$verticalContentPadding / 1.5)' }}
    >
      <ProjectsHeader>
        <Heading as={'h2'} shadow={'red'} gradient={'red-to-purple'}>
          {!showFullList ? 'Featured ' : ''}Projects
        </Heading>
        <ProjectsButtons>
          <LinkButton
            title={"Jahir's resume pdf file"}
            href={'/resume'}
            openInNewTab
            outlined
          >
            <Icon path={mdiFileCodeOutline} size={0.9} />
            Resume
          </LinkButton>
          {!showFullList && (
            <LinkButton
              title={'View all projects by Jahir'}
              href={'/projects'}
              withShadow
            >
              <Icon path={mdiEyeOutline} size={0.9} />
              View all
            </LinkButton>
          )}
        </ProjectsButtons>
      </ProjectsHeader>
      {renderSearchComponents()}
      <ListCardsGroup
        id={'projects-list'}
        title={`${!showFullList ? 'Featured ' : ''}Projects List`}
      >
        {(filteredProjects || []).map((project, index) => {
          return (
            <ProjectCard
              key={
                // eslint-disable-next-line newline-per-chained-call
                `${project.name.toLowerCase().split(' ').join('-')}-${index}`
              }
              project={project}
            />
          );
        })}
      </ListCardsGroup>
    </Section>
  );
};
