import { Projects } from '@/components/views/projects/projects';
import projects from '@/data/projects.json';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

const sortedProjects = projects.sort((a, b) => a.order - b.order);

export const metadata = getStaticMetadata({
  title: 'Projects',
  description:
    // eslint-disable-next-line max-len
    "Projects by Jahir Fiquitiva. Get to know the projects I'm most proud of. Many of them are open-source.",
  exactUrl: 'https://jahir.dev/projects',
  keywords: [
    'tech',
    'software',
    'development',
    'project',
    'portfolio',
    'app',
    'programming',
    'open-source',
  ],
  image: buildOgImageUrl('projects', 'Projects'),
});

export default function Home() {
  return <Projects projects={sortedProjects} showFullList />;
}
