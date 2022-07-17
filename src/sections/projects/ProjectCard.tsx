import { Img, Link } from '@/components/atoms';
import type { Project, FC } from '@/types';
import { styled } from '~/stitches';

const StyledProjectCard = styled(Link, {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
});

interface ProjectCardProps {
  project?: Project;
}

export const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { project } = props;
  if (!project) return null;
  return (
    <StyledProjectCard
      title={`Project: ${project?.name}`}
      href={
        project.inProgress
          ? project.link
            ? project.link
            : '#'
          : `/projects/${project.slug}`
      }
    >
      <Img
        src={`/static/images/projects/${project.icon}`}
        alt={`Icon for project "${project.name}"`}
        size={48}
      />
      <p>{project.name}</p>
      <p>{project.description}</p>
    </StyledProjectCard>
  );
};
