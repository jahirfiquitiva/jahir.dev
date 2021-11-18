import { mdiFileCodeOutline } from '@mdi/js';
import tw, { theme } from 'twin.macro';

import {
  MasonryGrid,
  MasonryBreakpoints,
  SectionHeading,
} from '~/components/atoms/complex';
import { Divider, LinkButton } from '~/components/atoms/simple';
import { GitHubStats, ProjectCard } from '~/components/elements';
import useHasMounted from '~/hooks/useHasMounted';
import { Component, projects } from '~/types';

const ProjectsHeader = tw.div`
  w-full
  flex
  flex-col
  items-start

  md:(flex-row items-center justify-between)
`;

const ProjectsHeaderLinksContainer = tw.div`
  mt-10
  flex
  items-center
  justify-start
  flex-wrap
  gap-10

  md:(mt-0 justify-end)
`;

const masonryBreakpoints: MasonryBreakpoints = {};
masonryBreakpoints['0'] = 1;
masonryBreakpoints[theme`screens.2xs`] = 1;
masonryBreakpoints[theme`screens.md`] = 2;

const FilledProjectsGrid: Component = () => {
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;
  return (
    <MasonryGrid
      breakpoints={masonryBreakpoints}
      gap={'1rem'}
      tw={'pt-16 pb-24'}
    >
      {projects.map((project, index) => {
        return (
          <ProjectCard
            key={`${project.title.toLowerCase().split(' ').join('-')}-${index}`}
            {...project}
          />
        );
      })}
    </MasonryGrid>
  );
};

export const Projects: Component = () => {
  return (
    <section id={'projects'}>
      <Divider gradientColor={'blue-to-green'} />

      <ProjectsHeader>
        <SectionHeading
          size={'3'}
          shadowColor={'green'}
          gradientColor={'green-to-yellow'}
          emoji={'👨‍💻'}
        >
          Projects
        </SectionHeading>

        <ProjectsHeaderLinksContainer>
          <GitHubStats />
          <LinkButton
            title={"Link to Jahir's resume pdf file"}
            href={'/resume'}
            icon={mdiFileCodeOutline}
          >
            View resume
          </LinkButton>
        </ProjectsHeaderLinksContainer>
      </ProjectsHeader>

      <FilledProjectsGrid />
    </section>
  );
};
