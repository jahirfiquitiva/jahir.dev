import { cx } from 'classix';
import { notFound } from 'next/navigation';

import { Heading } from '@/components/core/heading';
import { Link } from '@/components/core/link';
import { Section } from '@/components/core/section';
import { Mdx } from '@/components/views/mdx/mdx';
import { getBlog } from '@/utils/blogs';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

import ContactButtons from './contact-buttons';
import Doodle from './doodle';
import Photo from './photo';

const about = getBlog('about');

export default function AboutPage() {
  if (!about) return notFound();
  return (
    <>
      <Section id={'about'}>
        <Heading shadow={'blue'} from={'blue'} to={'green'}>
          About
        </Heading>
        <Photo />
        <Mdx code={about?.body?.code} />
      </Section>
      <Section id={'contact'}>
        <Heading $as={'h2'} shadow={'brand'} from={'brand'} to={'blue'}>
          Contact
        </Heading>
        <p>
          I&apos;m always open to chat, connect with new people and explore new
          opportunities.
        </p>
        <div
          className={cx(
            'flex flex-col-reverse gap-48',
            'tablet-sm:flex-row tablet-sm:items-start',
          )}
        >
          <Doodle />
          <div className={cx('flex flex-col gap-12')}>
            <p>
              If you have a project or idea in mind where I can contribute,
              don&apos;t hesitate contacting me!
              <br />
              But please{' '}
              <Link
                title={"Don't just say hello page"}
                href={'https://nohello.net/'}
              >
                don&apos;t just say hello
              </Link>
              .
            </p>
            <p>There&apos;s a few ways you can get it touch:</p>
            <ContactButtons />
          </div>
        </div>
      </Section>
    </>
  );
}

export const metadata = getStaticMetadata({
  title: 'About – Jahir Fiquitiva',
  description: 'Learn more about me (Jahir Fiquitiva), my career and more',
  exactUrl: 'https://jahir.dev/about',
  keywords: ['bio', 'biography', 'information', 'about', 'career'],
  image: buildOgImageUrl('about'),
});
