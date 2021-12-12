import styled from '@emotion/styled';
import { mdiFileCodeOutline } from '@mdi/js';

import { SectionHeading } from '~/components/atoms/complex';
import { Divider, LinkButton } from '~/components/atoms/simple';
import {
  GitHubStats,
  ProjectCard,
  Masonry,
  MasonryBreakpoints,
} from '~/components/elements';
import {
  Component,
  ComponentProps,
  mediaQueries,
  ProjectProps,
  viewports,
} from '~/types';

const ProjectsHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${mediaQueries.tablet.sm} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const ProjectsHeaderLinksContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;

  ${mediaQueries.tablet.sm} {
    margin-top: 0;
    justify-content: flex-end;
  }
`;

const ProjectsMasonry = styled(Masonry)`
  padding: 1.2rem 0 2.4rem;
`;

const masonryBreakpoints: MasonryBreakpoints = {};
masonryBreakpoints['0'] = 1;
masonryBreakpoints[viewports.mobile.sm] = 1;
masonryBreakpoints[viewports.tablet.sm] = 2;

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
          <LinkButton
            title={"Link to Jahir's resume pdf file"}
            href={'/resume'}
            icon={mdiFileCodeOutline}
          >
            View resume
          </LinkButton>
        </ProjectsHeaderLinksContainer>
      </ProjectsHeader>

      <ProjectsMasonry breakpoints={masonryBreakpoints} gap={'1rem'}>
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
      </ProjectsMasonry>
    </section>
  );
};
