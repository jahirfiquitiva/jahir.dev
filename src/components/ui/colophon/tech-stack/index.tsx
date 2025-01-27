/* eslint-disable @stylistic/max-len */
import { Icon } from '@/components/atoms/icon';
import { Link } from '@/components/atoms/link';
import { Section } from '@/components/atoms/section';
import { github, nextJs, tailwind } from '@/components/icons';

import { IconContainer, IconLink, StackContainer } from './tech-stack.styles';

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
      <IconLink title={'Velite'} href={'https://velite.js.org/'}>
        <Icon
          path={
            'm16.9 6.2-6.7 6.3c-.2.2-.4.3-.6.5l-.8-2.2C7.2 6.5 4.9 4.9 2 4.9l2.6 7.4L7 19.2 22 5.1c-1.9-.6-3.6-.2-5.1 1.1z'
          }
          className={'size-12'}
        />
      </IconLink>
    </IconContainer>
    <IconContainer>
      <IconLink title={'Umami Analytics'} href={'/analytics'} openInNewTab>
        <Icon
          path={
            'M21.3 8.9h-1.1c-1-3.6-4.3-6.3-8.2-6.3-3.9 0-7.2 2.7-8.2 6.3H2.7c-.4 0-.7.4-.7.7v1.2c0 5.5 4.5 10 10 10 5.4 0 9.9-4.3 10-9.8V9.6c0-.3-.3-.7-.7-.7zM12 3.6c3.4 0 6.3 2.2 7.2 5.3H4.8c1-3 3.8-5.3 7.2-5.3z'
          }
          className={'size-12'}
        />
      </IconLink>
    </IconContainer>
    <IconContainer>
      <IconLink title={'Neon'} href={'https://neon.tech/'}>
        <Icon
          path={
            'M3 6.1C3 4.4 4.4 3 6.1 3h11.8C19.6 3 21 4.4 21 6.1v10c0 1.8-2.2 2.5-3.3 1.1l-3.4-4.4v5.3c0 1.5-1.3 2.8-2.8 2.8H6.1c-1.7.1-3.1-1.3-3.1-3V6.1zm3.1-.6c-.3 0-.6.3-.6.6v11.8c0 .3.3.6.6.6h5.5c.2 0 .2-.1.2-.3v-7.1c0-1.8 2.2-2.5 3.3-1.1l3.4 4.4V6.1c0-.3 0-.6-.3-.6H6.1z'
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
      <Link title={'Velite'} href={'https://velite.js.org/'}>
        Velite
      </Link>
      ,{' '}
      <Link
        title={'Umami Analytics'}
        href={'https://umami.jahir.dev/share/C1XABUPBfbHYjPrw/jahir.dev'}
      >
        Umami
      </Link>{' '}
      and{' '}
      <Link title={'Neon'} href={'https://neon.tech/'}>
        Neon
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
