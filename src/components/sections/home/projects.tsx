import styled from '@emotion/styled';
import { mdiEyeOutline, mdiFileCodeOutline, mdiMagnify } from '@mdi/js';
import { useState, useMemo } from 'react';

import { SectionHeading } from '~/components/atoms/complex';
import { Field, Divider, LinkButton } from '~/components/atoms/simple';
import {
  ProjectCard,
  Masonry,
  MasonryBreakpoints,
} from '~/components/elements';
import debounce from '~/lib/debounce';
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
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;

  ${mediaQueries.tablet.sm} {
    flex-direction: row;
    margin-top: 0;
    justify-content: flex-end;
  }
`;

const ProjectsMasonry = styled(Masonry)`
  padding: 1.2rem 0 2.4rem;
`;

const OutlinedButton = styled(LinkButton)`
  --divider-alpha: 0.24;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid rgba(var(--divider-opaque), var(--divider-alpha, 0.12));
  box-shadow: none;
  color: var(--text-secondary);

  &:hover,
  &:focus {
    background-color: rgba(45, 82, 171, 0.08);
    border-color: var(--accent-dark);
    box-shadow: var(--shadow-sm);
    color: var(--text-primary);
    .dark & {
      background-color: rgba(56, 103, 214, 0.16);
      color: var(--text-primary);
    }
  }
`;

const masonryBreakpoints: MasonryBreakpoints = {};
masonryBreakpoints['0'] = 1;
masonryBreakpoints[viewports.mobile.sm] = 1;
masonryBreakpoints[viewports.tablet.sm] = 2;

interface ProjectsProps extends ComponentProps {
  projects?: Array<ProjectProps>;
  showFullList?: boolean;
}

export const Projects: Component<ProjectsProps> = (props) => {
  const { projects, showFullList } = props;
  const [search, setSearch] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const filterProjects = debounce(() => {
    setFilteredProjects(
      projects?.filter(
        (project) =>
          project?.name.toLowerCase().includes(search.toLowerCase()) ||
          project?.description?.toLowerCase().includes(search.toLowerCase()) ||
          project?.stack?.some((skill) =>
            skill.toLowerCase().includes(search.toLowerCase()),
          ),
      ),
    );
  }, 100);

  useMemo(() => {
    filterProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const renderSearchComponents = () => {
    if (!showFullList) return null;
    return (
      <>
        <Field
          tag={'input'}
          iconPath={mdiMagnify}
          type={'text'}
          name={'search-input'}
          label={'Search projects'}
          placeholder={'Search projects...'}
          value={search}
          onChange={setSearch}
          hideLabel
        />

        {(filteredProjects?.length || 0) <= 0 ? (
          <p style={{ padding: '1.2rem 0 2.4rem' }}>No projects found.</p>
        ) : null}
      </>
    );
  };

  return (
    <section id={'projects'}>
      {!showFullList && <Divider gradientColor={'blue-to-green'} />}

      <ProjectsHeader>
        <SectionHeading
          size={'3'}
          shadowColor={'red'}
          gradientColor={'red-to-purple'}
          emoji={'👨‍💻'}
        >
          Projects
        </SectionHeading>

        <ProjectsHeaderLinksContainer>
          <OutlinedButton
            title={"Link to Jahir's resume pdf file"}
            href={'/resume'}
            icon={mdiFileCodeOutline}
          >
            Resume
          </OutlinedButton>
          {!showFullList ? (
            <LinkButton
              title={'Link to view all projects by Jahir'}
              href={'/projects'}
              icon={mdiEyeOutline}
            >
              View all
            </LinkButton>
          ) : null}
        </ProjectsHeaderLinksContainer>
      </ProjectsHeader>

      {renderSearchComponents()}

      <ProjectsMasonry breakpoints={masonryBreakpoints} gap={'1rem'}>
        {(filteredProjects || []).map((project, index) => {
          return (
            <ProjectCard
              key={
                project.slug ||
                `${project.name.toLowerCase().split(' ').join('-')}-${index}`
              }
              {...project}
              link={!showFullList ? project.link : `/projects/${project.slug}`}
            />
          );
        })}
      </ProjectsMasonry>
    </section>
  );
};
