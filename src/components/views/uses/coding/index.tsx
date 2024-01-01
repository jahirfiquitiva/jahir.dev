import { Link } from '@/components/atoms/link';
import { Section } from '@/components/atoms/section';

import { CodeImage } from './code.image';

export const Coding = () => {
  return (
    <Section>
      <p>
        I use{' '}
        <Link
          title={'Visual Studio Code'}
          href={'https://code.visualstudio.com/'}
        >
          Visual Studio Code
        </Link>{' '}
        as my primary editor, with a custom layout using the{' '}
        <Link
          title={'Apc Customize UI++ Extension'}
          href={'https://github.com/drcika/apc-extension'}
        >
          Apc Customize UI++
        </Link>{' '}
        extension. I also use the{' '}
        <Link
          title={'Pace Theme'}
          href={'https://github.com/fabian-hiller/vscode-pace-theme'}
        >
          Pace Theme
        </Link>{' '}
        with it and the{' '}
        <Link title={'MonoLisa'} href={'https://monolisa.dev/'}>
          MonoLisa
        </Link>{' '}
        font with ligatures and italics enabled.
      </p>
      <CodeImage />
    </Section>
  );
};
