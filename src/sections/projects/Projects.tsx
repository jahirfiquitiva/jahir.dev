import { Masonry } from '@/components/compounds';
import { Section } from '@/components/elements';
import type { FC, Project } from '@/types';
import { styled } from '~/stitches';

import { ProjectCard } from './ProjectCard';

interface ProjectsProps {
  projects?: Array<Project>;
}

export const Projects: FC<ProjectsProps> = (props) => {
  const { projects } = props;
  return (
    <Section>
      <Masonry>
        {(projects || []).map((project) => {
          return <ProjectCard project={project} key={project.slug} />;
        })}
      </Masonry>
    </Section>
  );
};
