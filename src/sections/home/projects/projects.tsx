import styled from '@emotion/styled';
import { mdiFileCodeOutline } from '@mdi/js';

import { ProjectCard } from '~/components/cards';
import { GitHubStats } from '~/components/github-stats';
import { SectionHeading } from '~/components/section-heading';
import { LinkButton } from '~/elements/simple/button';
import { Divider } from '~/elements/simple/divider';
import { Component } from '~/elements/base/fc';
import { MasonryGrid, MasonryBreakpoints } from '~/elements/complex/masonry-grid';
import { projects, mediaQueries, viewports } from '~/types';

export const ProjectsGrid = styled(MasonryGrid)`
  padding: 1.6rem 0 2.4rem;
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
  justify-content: center;
  flex-wrap: wrap;

  ${mediaQueries.tablet.sm} {
    margin-top: 0;
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
            icon={mdiFileCodeOutline}
            href={'/resume'}
            target={'_blank'}
          >
            View resume
          </LinkButton>
        </ProjectsHeaderLinksContainer>
      </ProjectsHeader>

      <ProjectsGrid breakpoints={masonryBreakpoints} gap={'1rem'}>
        {projects
          .filter((project) => !project.hide)
          .map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
      </ProjectsGrid>
    </section>
  );
};
