/* eslint-disable max-len */
import { Icon } from '@/components/atoms/icon';
import { Link } from '@/components/atoms/link';
import { github, nextJs, tailwind } from '@/components/icons';

import { StackContainer, IconContainer, IconLink } from './tech-stack.styles';
import { Section } from '@/components/atoms/section';

const StackIcons = () => (
  <StackContainer>
    <IconContainer>
      <IconLink title={'Next.js'} href={'https://nextjs.org/'}>
        <Icon path={nextJs} className={'size-12'} />
      </IconLink>
    </IconContainer>
    <IconContainer>
      <IconLink title={'Tailwind CSS'} href={'https://tailwindcss.com/'}>
        <Icon path={tailwind} className={'size-12'} />
      </IconLink>
    </IconContainer>
    <IconContainer>
      <IconLink title={'MDX'} href={'https://mdxjs.com/'}>
        <Icon
          path={
            'M20.95 7.68H3.05C2.47 7.68 2 8.16 2 8.74v6.53c0 .58.47 1.05 1.05 1.05h17.89c.58 0 1.05-.47 1.05-1.05V8.74c.01-.58-.46-1.06-1.04-1.06zm.21 7.58c0 .12-.09.21-.21.21H3.05c-.12 0-.21-.09-.21-.21V8.74c0-.12.09-.21.21-.21h17.89c.12 0 .21.09.21.21v6.52zM6.56 12l2.39-2.39v4.53h-.84v-2.49l-1.54 1.54-1.51-1.51v2.49h-.85V9.65L6.56 12zm7.25-.47.6.6-2.19 2.19-2.19-2.19.6-.6 1.18 1.18v-3.2h.84v3.19l1.16-1.17zm6.03-1.55-1.77 1.77 1.74 1.74-.6.6-1.74-1.74-1.74 1.74-.6-.6 1.74-1.74-1.77-1.77.6-.6 1.77 1.77 1.77-1.77.6.6z'
          }
          className={'size-12'}
        />
      </IconLink>
    </IconContainer>
    <IconContainer>
      <IconLink title={'Contentlayer'} href={'http://contentlayer.dev/'}>
        <Icon
          path={
            'M12.41 22c-.55 0-1.09-.18-1.46-.55L5.4 16.53a6.797 6.797 0 0 1-2.28-5.38c.18-2.09 1.28-3.91 3.01-5l5.01-3.74c.82-.55 1.91-.55 2.73 0l6.1 4.65c.55.46.91 1.09.91 1.73 0 .73-.36 1.37-.91 1.73l-1.73 1.37 1.82 1.46c.55.46.82 1.09.82 1.82s-.36 1.37-.91 1.73l-6.2 4.65c-.45.36-.9.45-1.36.45zm.19-17.77L7.4 7.97c-1.18.73-1.91 2-2 3.37-.09 1.37.46 2.64 1.46 3.55l.64.55 4.92 4.37 6.2-4.65-2.19-1.73-2.46 1.91c-.82.64-1.91.64-2.73 0l-2.1-1.64c-.55-.46-.91-1.09-.91-1.73 0-.73.36-1.37.91-1.73l2.1-1.64c.82-.64 2-.64 2.73 0l2.46 2 2.19-1.64-6.02-4.73zm0 6.02-2.1 1.64 2.1 1.64 2-1.55-2-1.73z'
          }
          className={'size-12'}
        />
      </IconLink>
    </IconContainer>
    <IconContainer>
      <IconLink
        title={'Umami Analytics'}
        href={'https://umami.jahir.dev/share/uEOUfeOMI5kda1wn/jahir.dev'}
      >
        <Icon
          path={
            'M21.3 8.9h-1.1c-1-3.6-4.3-6.3-8.2-6.3-3.9 0-7.2 2.7-8.2 6.3H2.7c-.4 0-.7.4-.7.7v1.2c0 5.5 4.5 10 10 10 5.4 0 9.9-4.3 10-9.8V9.6c0-.3-.3-.7-.7-.7zM12 3.6c3.4 0 6.3 2.2 7.2 5.3H4.8c1-3 3.8-5.3 7.2-5.3z'
          }
          className={'size-12'}
        />
      </IconLink>
    </IconContainer>
    <IconContainer>
      <IconLink title={'PlanetScale'} href={'https://planetscale.com/'}>
        <Icon
          path={
            'M1.9 12c0-5.5 4.5-10 10-10C16 2 19.5 4.4 21 7.9L7.8 21.1c-.6-.3-1.1-.6-1.6-.9l8.2-8.2h-2.5l-7.1 7.1C3 17.3 1.9 14.8 1.9 12zm20 0-10 10c5.5 0 10-4.5 10-10z'
          }
          className={'size-12'}
        />
      </IconLink>
    </IconContainer>
    <IconContainer>
      <IconLink title={'Vercel'} href={'https://vercel.com/'}>
        <Icon path={'M1,21H23L12,2'} className={'size-12'} />
      </IconLink>
    </IconContainer>
    <IconContainer>
      <IconLink
        title={'View source code on GitHub'}
        href={'https://github.com/jahirfiquitiva/jahir.dev'}
      >
        <Icon path={github} className={'size-12'} />
      </IconLink>
    </IconContainer>
  </StackContainer>
);

export const TechStack = () => (
  <Section id={'tech-stack'}>
    <h2 className={'text-lg'}>Tech Stack</h2>
    <p className={'max-w-nice'}>
      This website is created with{' '}
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
      </Link>
      ,{' '}
      <Link
        title={'Umami Analytics'}
        href={'https://umami.jahir.dev/share/uEOUfeOMI5kda1wn/jahir.dev'}
      >
        Umami
      </Link>{' '}
      and{' '}
      <Link title={'PlanetScale'} href={'https://planetscale.com/'}>
        PlanetScale
      </Link>
      . It&apos;s hosted on{' '}
      <Link title={'Vercel'} href={'https://vercel.com/'}>
        Vercel
      </Link>
      , and if you&apos;re curious, feel free to explore the source code{' '}
      <Link
        title={'View source code on GitHub'}
        href={'https://github.com/jahirfiquitiva/jahir.dev'}
      >
        on GitHub
      </Link>
      .
    </p>
    <StackIcons />
  </Section>
);
