import styled from '@emotion/styled';
import { mdiFileCodeOutline } from '@mdi/js';

import {
  MasonryGrid,
  MasonryBreakpoints,
  SectionHeading,
} from '~/new-components/atoms/complex';
import { Divider, LinkButton } from '~/new-components/atoms/simple';
import { GitHubStats, ProjectCard } from '~/new-components/elements';
import {
  Component,
  projects as allProjects,
  mediaQueries,
  viewports,
  buildMediaQuery,
} from '~/types';

const projects = allProjects.filter((project) => !project.hide);

export const ProjectsGrid = styled(MasonryGrid)`
  padding: 1.6rem 0 var(--content-bottom-margin);
`;

const ProjectsHeader = styled.div`
  margin-top: 2.4rem;
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
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  & a:not(:first-of-type) {
    margin-top: 0.8rem;
  }

  ${buildMediaQuery(385)} {
    & a:not(:first-of-type) {
      margin-top: 0;
    }
  }

  ${mediaQueries.tablet.sm} {
    margin-top: 0;
    justify-content: flex-end;
  }
`;

const masonryBreakpoints: MasonryBreakpoints = {};
masonryBreakpoints[viewports.default] = 1;
masonryBreakpoints[viewports.mobile.sm] = 1;
masonryBreakpoints[viewports.tablet.sm] = 2;

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

      <ProjectsGrid breakpoints={masonryBreakpoints} gap={'1rem'}>
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={`${project.title
                .toLowerCase()
                .split(' ')
                .join('-')}-${index}`}
              {...project}
            />
          );
        })}
      </ProjectsGrid>
    </section>
  );
};
