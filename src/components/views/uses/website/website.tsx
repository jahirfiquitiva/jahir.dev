import Icon from '@mdi/react';

import { Link } from '@/components/core/link';
import { Section } from '@/components/core/section';
import {
  contentlayer,
  mdiTailwind,
  mdiTriangle,
  mdx,
  nextJs,
  planetscale,
} from '@/components/icons';

import { DotsContainer, IconContainer, IconLink } from './website.styles';

const Colophon = () => {
  return (
    <DotsContainer className={'colophon'}>
      <IconContainer>
        <IconLink title={'Next.js'} href={'https://nextjs.org/'}>
          <Icon path={nextJs} size={3} />
        </IconLink>
      </IconContainer>
      <IconContainer>
        <IconLink title={'Tailwind CSS'} href={'https://tailwindcss.com/'}>
          <Icon path={mdiTailwind} size={3} />
        </IconLink>
      </IconContainer>
      <IconContainer>
        <IconLink title={'MDX'} href={'https://mdxjs.com/'}>
          <Icon path={mdx} size={3} />
        </IconLink>
      </IconContainer>
      <IconContainer>
        <IconLink title={'Contentlayer'} href={'http://contentlayer.dev/'}>
          <Icon path={contentlayer} size={3} />
        </IconLink>
      </IconContainer>
      <IconContainer>
        <IconLink title={'PlanetScale'} href={'https://planetscale.com/'}>
          <Icon path={planetscale} size={3} />
        </IconLink>
      </IconContainer>
      <IconContainer>
        <IconLink title={'Vercel'} href={'https://vercel.com/'}>
          <Icon path={mdiTriangle} size={3} />
        </IconLink>
      </IconContainer>
    </DotsContainer>
  );
};

export const Website = () => {
  return (
    <Section $as={'div'} className={'px-0 mobile-lg:px-0'}>
      <p>
        This website is built using{' '}
        <Link title={'Next.js'} href={'https://nextjs.org/'}>
          Next.js
        </Link>
        ,{' '}
        <Link title={'Tailwind CSS'} href={'https://tailwindcss.com/'}>
          Tailwind CSS
        </Link>
        ,{' '}
        <Link title={'MDX'} href={'https://mdxjs.com/'}>
          MDX
        </Link>
        ,{' '}
        <Link title={'Contentlayer'} href={'http://contentlayer.dev/'}>
          Contentlayer
        </Link>{' '}
        and{' '}
        <Link title={'PlanetScale'} href={'https://planetscale.com/'}>
          PlanetScale
        </Link>
        . It&apos;s all deployed on{' '}
        <Link title={'Vercel'} href={'https://vercel.com/'}>
          Vercel
        </Link>{' '}
        and you can check out the{' '}
        <Link
          title={'View source code on GitHub'}
          href={'https://github.com/jahirfiquitiva/jahir.dev'}
        >
          source code
        </Link>{' '}
        on GitHub.
      </p>
      <Colophon />
    </Section>
  );
};
