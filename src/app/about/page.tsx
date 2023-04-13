import { cx } from 'classix';
import { notFound } from 'next/navigation';

import { Heading } from '@/components/core/heading';
import { Link } from '@/components/core/link';
import { Section } from '@/components/core/section';
import { Mdx } from '@/components/views/mdx/mdx';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';
import { allBlogs } from 'contentlayer/generated';

import Doodle from './doodle';
import Photo from './photo';
import ContactButtons from './contact-buttons';

const about = allBlogs.find((post) => post.slug === 'about');

export default async function AboutPage() {
  if (!about) return notFound();
  return (
    <>
      <Section id={'about'}>
        <Heading shadow={'blue'} from={'blue'} to={'green'}>
          About
        </Heading>
        {/* @ts-expect-error Server Component */}
        <Photo />
        <Mdx code={about?.body?.code} />
      </Section>
      <Section id={'contact'}>
        <Heading $as={'h2'} shadow={'brand'} from={'brand'} to={'blue'}>
          Contact
        </Heading>
        <div
          className={cx(
            'flex flex-col-reverse gap-48 my-16',
            'tablet-sm:flex-row tablet-sm:items-center',
          )}
        >
          {/* @ts-expect-error Server Component */}
          <Doodle />
          <div className={cx('flex flex-col gap-12')}>
            <p>
              I&apos;m always open to chat, so please don&apos;t hesitate
              contacting me! But please{' '}
              <Link
                title={"Don't just say hello page"}
                href={'https://nohello.net/'}
              >
                don&apos;t just say hello
              </Link>
              .
            </p>
            <p>There&apos;s a few ways you can get it touch:</p>
            {/* @ts-expect-error Server Component */}
            <ContactButtons />
          </div>
        </div>
      </Section>
    </>
  );
}

export const metadata = getStaticMetadata({
  title: 'About',
  description: 'Learn more about me (Jahir Fiquitiva), my career and more',
  exactUrl: 'https://jahir.dev/about',
  keywords: ['bio', 'biography', 'information', 'about', 'career'],
  image: buildOgImageUrl('about'),
});
