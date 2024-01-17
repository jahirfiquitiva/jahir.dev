import { ProjectsList } from '@/components/views/projects';
import { createMetadata } from '@/utils/metadata';

export const metadata = createMetadata({
  title: 'Projects – Jahir Fiquitiva',
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
});

export default function ProjectsPage() {
  return <ProjectsList title={'Projects'} />;
}
