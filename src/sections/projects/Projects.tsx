import { Masonry, type MasonryBreakpoints } from '@/components/compounds';
import { Section } from '@/components/elements';
import { breakpointsValues } from '@/stitches';
import type { FC, Project } from '@/types';
import { styled } from '~/stitches';

import { ProjectCard } from './ProjectCard';

interface ProjectsProps {
  projects?: Array<Project>;
}

const masonryBreakpoints: MasonryBreakpoints = {};
masonryBreakpoints['0'] = 1;
masonryBreakpoints[(breakpointsValues['mobile-sm'] || 0).toString()] = 1;
masonryBreakpoints[(breakpointsValues['tablet-sm'] || 0).toString()] = 2;

export const Projects: FC<ProjectsProps> = (props) => {
  const { projects } = props;
  return (
    <Section>
      <Masonry breakpoints={masonryBreakpoints} gap={'1.1rem'}>
        {(projects || []).map((project) => {
          return <ProjectCard project={project} key={project.slug} />;
        })}
      </Masonry>
    </Section>
  );
};
