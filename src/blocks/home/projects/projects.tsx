import styled from '@emotion/styled';
import { ProjectCard } from '~/components/cards';
import { projects } from '~/types/project';
import { Divider } from '~/elements/divider';
import { SectionHeading } from '~/components/section-heading';
import { viewports } from '~/types/viewports';
import { MasonryGrid, MasonryBreakpoints } from '~/elements/masonry-grid';
import { GitHubStats } from '~/components/github-stats';
import { LinkButton } from '~/elements/button';
import { mdiFileCodeOutline } from '@mdi/js';

/*
export const ProjectsGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  padding: 1.6rem 0 2rem;

  ${mediaQueries.tablet.sm} {
    grid-template-columns: 1fr 1fr;
  }

  li a {
    height: 100%;
  }
`;
*/

export const ProjectsGrid = styled(MasonryGrid)`
  padding: 1.6rem 0 2.4rem;
`;

const ProjectsHeader = styled.div`
  margin-top: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProjectsHeaderLinksContainer = styled(ProjectsHeader)`
  margin-top: 0;
  justify-content: center;
`;

const masonryBreakpoints: MasonryBreakpoints = {};
masonryBreakpoints[viewports.default] = 1;
masonryBreakpoints[viewports.mobile.sm] = 1;
masonryBreakpoints[viewports.tablet.sm] = 2;

export const Projects = () => {
  return (
    <section>
      <Divider gradientColor={'blue-to-green'} />

      <ProjectsHeader>
        <SectionHeading
          size={'3'}
          shadowColor={'green'}
          gradientColor={'green-to-yellow'}
          emoji="👨‍💻"
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
