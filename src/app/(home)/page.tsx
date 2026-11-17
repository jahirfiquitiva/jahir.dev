import { Experience } from '@/components/ui/about/experience';
import { Skills } from '@/components/ui/about/skills';
import { Intro } from '@/components/ui/home';
import { FeaturedProjects } from '@/components/ui/projects/featured';

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mani Ramezanpour',
  url: 'https://manirmp.tech',
  image: 'https://manirmp.tech/opengraph-image',
  jobTitle: 'Software Engineer',
  worksFor: { '@type': 'Organization', name: 'Sportmonks' },
  description:
    // eslint-disable-next-line max-len
    'A full-stack software engineer with 4+ years of hands-on experience in creating high-performance and scalable web applications.',
  sameAs: [
    'https://github.com/maniramezanpour',
    'https://linkedin.com/in/mani-ramezanpour',
    'https://twitter.com/manirmps',
    'https://instagram.com/manirmps',
  ],
});

export default function HomePage() {
  return (
    <>
      <Intro />
      <Experience featured />
      <FeaturedProjects />
      <Skills />
      <script type={'application/ld+json'} suppressHydrationWarning>
        {jsonLd}
      </script>
    </>
  );
}
