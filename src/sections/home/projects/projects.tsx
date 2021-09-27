import styled from '@emotion/styled';
import { ProjectCard } from '~/components/cards';
import { projects } from '~/types/project';
import { Divider } from '~/elements/divider';
import { SectionHeading } from '~/components/section-heading';
import { mediaQueries, viewports } from '~/types/viewports';
import { MasonryGrid, MasonryBreakpoints } from '~/elements/masonry-grid';
import { GitHubStats } from '~/components/github-stats';
import { LinkButton } from '~/elements/button';
import { mdiFileCodeOutline } from '@mdi/js';

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

    & *:first-child {
      flex: 1;
    }
  }
`;

const ProjectsHeaderLinksContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  ${mediaQueries.tablet.sm} {
    margin-top: 0;
    justify-content: space-between;
  }
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
