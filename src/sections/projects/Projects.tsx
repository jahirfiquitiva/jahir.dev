import { mdiMagnify } from '@mdi/js';
import { useMemo, useState } from 'react';

import { Field } from '@/components/atoms';
import { Masonry, type MasonryBreakpoints } from '@/components/compounds';
import { Section } from '@/components/elements';
import { breakpointsValues } from '@/stitches';
import type { FC, Project } from '@/types';

import { ProjectCard } from './ProjectCard';

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
          <p style={{ padding: '1.2rem 0 2.4rem' }}>No projects found.</p>
        ) : null}
      </>
    );
  };

  return (
    <Section css={{ gap: '$$verticalContentPadding' }}>
      {renderSearchComponents()}
      <Masonry breakpoints={masonryBreakpoints} gap={'1.1rem'}>
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
