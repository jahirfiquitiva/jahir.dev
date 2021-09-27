import styled from '@emotion/styled';
import { ProjectCard } from '~/components/cards';
import { projects } from '~/types/project';
import { Divider } from '~/elements/divider';
import { SectionHeading } from '~/components/section-heading';
import { viewports } from '~/types/viewports';
import { MasonryGrid, MasonryBreakpoints } from '~/elements/masonry-grid';

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
  padding: 1.6rem 0 2rem;
`;

const masonryBreakpoints: MasonryBreakpoints = {};
masonryBreakpoints[viewports.default] = 1;
masonryBreakpoints[viewports.mobile.sm] = 1;
masonryBreakpoints[viewports.tablet.sm] = 2;

export const Projects = () => {
  return (
    <section>
      <Divider gradientColor={'blue-to-green'} />
      <SectionHeading
        size={'3'}
        shadowColor={'green'}
        gradientColor={'green-to-yellow'}
        emoji="👨‍💻"
      >
        Projects
      </SectionHeading>

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
