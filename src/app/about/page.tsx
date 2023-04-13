import Icon from '@mdi/react';
import { cx } from 'classix';
import { notFound } from 'next/navigation';

import { Heading } from '@/components/core/heading';
import { ButtonLink, Link } from '@/components/core/link';
import { Section } from '@/components/core/section';
import { mdiEmail, telegram, twitterOutline } from '@/components/icons';
import { Mdx } from '@/components/views/mdx/mdx';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';
import { allBlogs } from 'contentlayer/generated';

import Doodle from './doodle';
import Photo from './photo';

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
            <div className={cx('flex flex-wrap items-center gap-16')}>
              <ButtonLink
                title={'Compose an email to Jahir'}
                href={'mailto:hola@jahir.dev?subject=Hi%20Jahir!'}
                outlined
                className={cx(
                  'hocus:bg-[rgba(211_60_48/0.08)] hocus:border-[rgba(211_60_48)]',
                  'dark:hocus:bg-[rgba(236_86_73/0.16)] dark:hocus:border-[rgba(236_86_73)]',
                )}
              >
                <Icon path={mdiEmail} size={0.95} />
                <span>Email</span>
              </ButtonLink>
              <ButtonLink
                title={'Compose a Twitter direct message for Jahir'}
                href={'https://jahir.xyz/twitterdm'}
                outlined
                className={cx(
                  'hocus:bg-[rgba(26_145_218/0.08)] hocus:border-[rgba(26_145_218)]',
                  'dark:hocus:bg-[rgba(29_161_242/0.16)] dark:hocus:border-[rgba(29_161_242)]',
                )}
              >
                <Icon path={twitterOutline} size={0.9} />
                <span>Twitter</span>
              </ButtonLink>
              <ButtonLink
                title={"Jahir's Telegram profile"}
                href={'https://jahir.xyz/tlgrm'}
                outlined
                className={cx(
                  'hocus:bg-[rgba(0_122_184/0.08)] hocus:border-[rgba(0_122_184)]',
                  'dark:hocus:bg-[rgba(51_160_214/0.16)] dark:hocus:border-[rgba(51_160_214)]',
                )}
              >
                <Icon path={telegram} size={0.85} />
                <span>Telegram</span>
              </ButtonLink>
            </div>
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
