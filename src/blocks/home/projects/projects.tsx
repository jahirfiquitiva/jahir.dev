import styled from '@emotion/styled';
import { ProjectCard } from '~/components/cards';
import { projects } from '~/types/project';

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Projects = () => {
  return (
    <ProjectsGrid>
      {projects.map((project, i) => {
        return <ProjectCard key={i} {...project} />;
      })}
    </ProjectsGrid>
  );
};
