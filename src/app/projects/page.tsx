import { Projects } from '@/components/views/projects/projects';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

export const metadata = getStaticMetadata({
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
  image: buildOgImageUrl('projects'),
});

export default function ProjectsPage() {
  // @ts-expect-error Server Component
  return <Projects full />;
}
