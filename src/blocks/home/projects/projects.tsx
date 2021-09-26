import styled from '@emotion/styled';
import { ProjectCard } from '~/components/cards';
import { Heading } from '~/elements/heading';
import { gradientToClassName } from '~/elements/props';
import { projects } from '~/types/project';
import { Divider } from '~/elements/divider';
import { SectionHeading } from '~/components/section-heading';
import { mediaQueries } from '~/types/viewports';

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
      <ProjectsGrid>
        {projects
          .filter((project) => !project.hide)
          .map((project, index) => {
            return (
              <li>
                <ProjectCard key={index} {...project} />
              </li>
            );
          })}
      </ProjectsGrid>
    </section>
  );
};
