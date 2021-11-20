import { mdiFileCodeOutline } from '@mdi/js';
import tw, { theme } from 'twin.macro';

import { SectionHeading } from '~/components/atoms/complex';
import { Divider, LinkButton } from '~/components/atoms/simple';
import {
  GitHubStats,
  ProjectCard,
  Masonry,
  MasonryBreakpoints,
} from '~/components/elements';
import { Component, ComponentProps, ProjectProps } from '~/types';

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

interface ProjectsProps extends ComponentProps {
  projects?: Array<ProjectProps>;
  full?: boolean;
}

export const Projects: Component<ProjectsProps> = (props) => {
  const { projects, full } = props;

  return (
    <section id={'projects'}>
      {!full && <Divider gradientColor={'blue-to-green'} />}

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

      <Masonry breakpoints={masonryBreakpoints} gap={'1rem'} tw={'pt-12 pb-24'}>
        {(projects || []).map((project, index) => {
          return (
            <ProjectCard
              key={
                project.slug ||
                `${project.name.toLowerCase().split(' ').join('-')}-${index}`
              }
              {...project}
              link={full ? `/projects/${project.slug}` : project.link}
            />
          );
        })}
      </Masonry>
    </section>
  );
};
