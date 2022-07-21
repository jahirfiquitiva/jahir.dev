import { mdiEyeOutline, mdiFileCodeOutline, mdiMagnify } from '@mdi/js';
import Icon from '@mdi/react';
import { useMemo, useState } from 'react';

import { Field, Heading, LinkButton } from '@/components/atoms';
import { Masonry, type MasonryBreakpoints } from '@/components/compounds';
import { Section } from '@/components/elements';
import { breakpointsValues } from '@/stitches';
import type { FC, Project } from '@/types';
import { styled, theme } from '~/stitches';

import { ProjectCard } from './ProjectCard';

const ProjectsHeader = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$16',
  '@tablet-sm': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const ProjectsButtons = styled('div', {
  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  gap: '$16',
  '@tablet-sm': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

const NothingFound = styled('p', {
  p: '$20 0 $36',
});

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
      <Masonry breakpoints={masonryBreakpoints} gap={theme.space['18'].value}>
        {(filteredProjects || []).map((project, index) => {
          return (
            <ProjectCard
              key={
                project.slug ||
                // eslint-disable-next-line newline-per-chained-call
                `${project.name.toLowerCase().split(' ').join('-')}-${index}`
              }
              project={project}
            />
          );
        })}
      </Masonry>
    </Section>
  );
};
